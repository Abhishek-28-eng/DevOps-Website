import React, { useState } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

export default function NewNote() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [pdfLink, setPdfLink] = useState("");
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post(
        "https://devwithabhi.de/api/notes/create",
        {
          title,
          category,
          pdf_link: pdfLink
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("devops_token")}`
          }
        }
      );
      alert("Note created!");
      nav("/notes");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed");
    }
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-8 mt-10 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-sky-700">Create New Note</h2>

      <form onSubmit={submit} className="space-y-4">
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-3 border rounded-lg"
        />

        <input
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          className="w-full p-3 border rounded-lg"
        />

        <input
          required
          value={pdfLink}
          onChange={(e) => setPdfLink(e.target.value)}
          placeholder="PDF Link (Google Drive / Website)"
          className="w-full p-3 border rounded-lg"
        />

        <button className="w-full bg-sky-600 text-white p-3 rounded-lg hover:bg-sky-700 transition">
          Create Note
        </button>
      </form>
    </div>
  );
}
