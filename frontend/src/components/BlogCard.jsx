import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

export default function BlogCard({ blog }) {
  return (
    <article className="bg-white rounded-md shadow-sm overflow-hidden flex gap-4">
      {blog.feature_image_url && <img src={blog.feature_image_url} alt={blog.title} className="w-40 h-32 object-cover hidden sm:block" />}
      <div className="p-4 flex-1">
        <Link to={`/blog/${blog.slug}`} className="text-lg font-semibold hover:text-primary">{blog.title}</Link>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{blog.short_description}</p>
        <div className="flex items-center justify-between text-xs text-gray-500 mt-3">
          <div>{blog.category}</div>
          <div>{blog.published_at ? dayjs(blog.published_at).format("MMM D, YYYY") : dayjs(blog.created_at).format("MMM D, YYYY")}</div>
        </div>
      </div>
    </article>
  );
}
