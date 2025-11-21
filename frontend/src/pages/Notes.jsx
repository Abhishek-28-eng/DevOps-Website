import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { FileText } from "lucide-react";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadNotes() {
    try {
      const res = await axios.get("/notes");
      setNotes(res.data);
    } catch (err) {
      console.error("Failed to load notes", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadNotes();
  }, []);

  const categories = [...new Set(notes.map(n => n.category))];

  const filtered = filter ? notes.filter(n => n.category === filter) : notes;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Notes Library</h1>
          <p className="text-gray-600">Download DevOps, Cloud, Linux & Docker notes.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <button
            onClick={() => setFilter("")}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              filter === ""
                ? "bg-sky-600 text-white border-sky-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            All
          </button>

          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border ${
                filter === cat
                  ? "bg-sky-600 text-white border-sky-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notes Grid */}
        {loading ? (
          <p className="text-center text-gray-500">Loading notes...</p>
        ) : filtered.length === 0 ? (
          <p className="text-center text-gray-500">No notes found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(note => (
              <a
                key={note.id}
                href={note.pdf_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 
                           hover:shadow-lg hover:border-sky-400 transition-all
                           cursor-pointer flex flex-col gap-3"
              >
                <FileText className="w-10 h-10 text-sky-600" />
                <h3 className="text-lg font-semibold text-gray-900">{note.title}</h3>
                <p className="text-sm text-gray-500">{note.category}</p>
                <div className="text-xs text-gray-400 mt-auto">
                  {new Date(note.created_at).toLocaleDateString()}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
