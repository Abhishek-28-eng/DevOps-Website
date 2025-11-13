import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState("");
  function submit(e) {
    e.preventDefault();
    onSearch(q);
  }
  return (
    <form onSubmit={submit} className="flex items-center gap-2">
      <input
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Search tutorials, e.g., terraform"
        className="w-full p-2 border rounded-md text-sm"
      />
      <button type="submit" className="px-3 py-2 bg-primary text-white rounded-md text-sm">Search</button>
    </form>
  );
}
