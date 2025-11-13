import { Blog } from "../models/Blog.js";
import slugify from "slugify";
import cloudinary from "../utils/cloudinary.js";
import { Admin } from "../models/Admin.js";
import { Op } from "sequelize";

/**
 * GET /api/blogs
 * supports page, limit, category, search
 */
export async function listBlogs(req, res) {
  try {
    const page = parseInt(req.query.page || "1");
    const limit = parseInt(req.query.limit || "10");
    const offset = (page - 1) * limit;
    const where = { is_published: true };

    if (req.query.category) where.category = req.query.category;
    if (req.query.search) {
      const q = req.query.search;
      where[Op.or] = [
        { title: { [Op.like]: `%${q}%` } },
        { short_description: { [Op.like]: `%${q}%` } },
        { content: { [Op.like]: `%${q}%` } }
      ];
    }

    const { count, rows } = await Blog.findAndCountAll({
      where,
      order: [["published_at", "DESC"], ["created_at", "DESC"]],
      limit,
      offset,
      include: [{ model: Admin, as: "author", attributes: ["id", "name", "email"] }]
    });

    res.json({
      data: rows,
      meta: {
        page,
        limit,
        total: count,
        totalPages: Math.ceil(count / limit)
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

export async function getBlogBySlug(req, res) {
  try {
    const slug = req.params.slug;
    const blog = await Blog.findOne({ where: { slug }, include: [{ model: Admin, as: "author", attributes: ["id", "name"] }] });
    if (!blog) return res.status(404).json({ message: "Not found" });
    if (!blog.is_published) {
      // allow admin to fetch if token present
      if (!req.admin) return res.status(403).json({ message: "Forbidden" });
    }
    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

export async function createBlog(req, res) {
  try {
    const { title, slug, category, short_description, content, markdown, is_published } = req.body;
    if (!title || !content) return res.status(400).json({ message: "title and content required" });

    const finalSlug = slug ? slugify(slug, { lower: true, strict: true }) : slugify(title, { lower: true, strict: true });

    // handle image upload if present
    let feature_image_url = null;
    let cloudinary_public_id = null;

    if (req.file) {
      const stream = cloudinary.uploader.upload_stream({ folder: "devops-daily" }, async (err, result) => {
        if (err) return res.status(500).json({ message: "Cloudinary upload failed", err });
        feature_image_url = result.secure_url;
        cloudinary_public_id = result.public_id;

        const blog = await Blog.create({
          title,
          slug: finalSlug,
          category,
          short_description,
          content,
          markdown: markdown === "false" ? false : true,
          feature_image_url,
          cloudinary_public_id,
          author_id: req.admin?.id || null,
          is_published: is_published === "false" ? false : true,
          published_at: (is_published === "true" || is_published === true) ? new Date() : null
        });
        res.json(blog);
      });
      stream.end(req.file.buffer);
      return;
    }

    const blog = await Blog.create({
      title,
      slug: finalSlug,
      category,
      short_description,
      content,
      markdown: markdown === "false" ? false : true,
      feature_image_url: null,
      cloudinary_public_id: null,
      author_id: req.admin?.id || null,
      is_published: is_published === "false" ? false : true,
      published_at: (is_published === "true" || is_published === true) ? new Date() : null
    });

    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

export async function updateBlog(req, res) {
  try {
    const id = req.params.id;
    const blog = await Blog.findByPk(id);
    if (!blog) return res.status(404).json({ message: "Not found" });

    const { title, slug, category, short_description, content, markdown, is_published } = req.body;
    const finalSlug = slug ? slugify(slug, { lower: true, strict: true }) : (title ? slugify(title, { lower: true, strict: true }) : blog.slug);

    // If new file uploaded -> delete old and upload new
    if (req.file) {
      // delete old remote image if exists
      if (blog.cloudinary_public_id) {
        try { await cloudinary.uploader.destroy(blog.cloudinary_public_id); } catch(e){ console.warn("cloud destroy err", e); }
      }
      const stream = cloudinary.uploader.upload_stream({ folder: "devops-daily" }, async (err, result) => {
        if (err) return res.status(500).json({ message: "Cloudinary upload failed", err });
        blog.feature_image_url = result.secure_url;
        blog.cloudinary_public_id = result.public_id;

        blog.title = title ?? blog.title;
        blog.slug = finalSlug;
        blog.category = category ?? blog.category;
        blog.short_description = short_description ?? blog.short_description;
        blog.content = content ?? blog.content;
        blog.markdown = (markdown === "false") ? false : (markdown === "true") ? true : blog.markdown;
        blog.is_published = (is_published === "false") ? false : (is_published === "true") ? true : blog.is_published;
        if (blog.is_published && !blog.published_at) blog.published_at = new Date();
        await blog.save();
        res.json(blog);
      });
      stream.end(req.file.buffer);
      return;
    }

    // no image
    blog.title = title ?? blog.title;
    blog.slug = finalSlug;
    blog.category = category ?? blog.category;
    blog.short_description = short_description ?? blog.short_description;
    blog.content = content ?? blog.content;
    blog.markdown = (markdown === "false") ? false : (markdown === "true") ? true : blog.markdown;
    blog.is_published = (is_published === "false") ? false : (is_published === "true") ? true : blog.is_published;
    if (blog.is_published && !blog.published_at) blog.published_at = new Date();
    blog.updated_at = new Date();

    await blog.save();
    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

export async function deleteBlog(req, res) {
  try {
    const id = req.params.id;
    const blog = await Blog.findByPk(id);
    if (!blog) return res.status(404).json({ message: "Not found" });

    if (blog.cloudinary_public_id) {
      try { await cloudinary.uploader.destroy(blog.cloudinary_public_id); } catch (e) { console.warn(e); }
    }
    await blog.destroy();
    res.json({ message: "Deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

export async function stats(req, res) {
  const totalBlogs = await Blog.count();
  const published = await Blog.count({ where: { is_published: true } });
  const unpublished = totalBlogs - published;
  res.json({ totalBlogs, published, unpublished });
}
