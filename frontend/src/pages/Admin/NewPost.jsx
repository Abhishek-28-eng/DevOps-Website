import React, { useState } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [short_description, setShortDescription] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [isPublished, setIsPublished] = useState(true);
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", title);
    fd.append("category", category);
    fd.append("short_description", short_description);
    fd.append("content", content);
    fd.append("markdown", "true");
    fd.append("is_published", isPublished ? "true" : "false");
    if (file) fd.append("feature_image", file);

    try {
      const res = await axios.post("/blogs", fd, { headers: { "Content-Type": "multipart/form-data" } });
      alert("Created");
      nav(`/blog/${res.data.slug}`);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed");
    }
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-sm">
      <h2 className="text-xl font-semibold mb-4">New Post</h2>
      <form onSubmit={submit} className="space-y-3">
        <input required value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="w-full p-2 border rounded" />
        <input value={category} onChange={e=>setCategory(e.target.value)} placeholder="Category" className="w-full p-2 border rounded" />
        <input value={short_description} onChange={e=>setShortDescription(e.target.value)} placeholder="Short description" className="w-full p-2 border rounded" />
        <div>
          <label className="block mb-1">Feature image</label>
          <input type="file" accept="image/*" onChange={e=>setFile(e.target.files[0])} />
        </div>
        <textarea value={content} onChange={e=>setContent(e.target.value)} rows={12} placeholder="Markdown content" className="w-full p-2 border rounded" />
        <div className="flex items-center gap-3">
          <label>
            <input type="checkbox" checked={isPublished} onChange={e=>setIsPublished(e.target.checked)} /> Publish now
          </label>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Create</button>
        </div>
      </form>
    </div>
  );
}
