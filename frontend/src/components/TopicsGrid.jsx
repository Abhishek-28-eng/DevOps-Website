import React from "react";
import { Link } from "react-router-dom";

const topics = [
  { title: "Cloud Computing", slug: "cloud-computing" },
  { title: "Networking", slug: "networking" },
  { title: "Linux", slug: "linux" },
  { title: "Docker", slug: "docker" },
];

export default function TopicsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {topics.map(t => (
        <Link
          key={t.slug}
          to={`/?category=${encodeURIComponent(t.title)}`}
          className="block bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <div className="font-semibold text-center">{t.title}</div>
          <div className="text-xs text-gray-500 mt-1 text-center">Tips & tutorials</div>
        </Link>
      ))}
    </div>
  );
}
