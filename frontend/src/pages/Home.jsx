// import React, { useEffect, useState } from "react";
// import axios from "../api/axios";
// import BlogCard from "../components/BlogCard";
// import SearchBar from "../components/SearchBar";

// export default function Home() {
//   const [blogs, setBlogs] = useState([]);
//   const [page, setPage] = useState(1);
//   const [meta, setMeta] = useState(null);
//   const [category, setCategory] = useState("");
//   const [query, setQuery] = useState("");

//   async function load() {
//     const qparams = new URLSearchParams();
//     qparams.set("page", page);
//     qparams.set("limit", 8);
//     if (category) qparams.set("category", category);
//     if (query) qparams.set("search", query);

//     const res = await axios.get(`/blogs?${qparams.toString()}`);
//     setBlogs(res.data.data);
//     setMeta(res.data.meta);
//   }

//   useEffect(() => { load(); }, [page, category, query]);

//   function handleSearch(q) {
//     setQuery(q);
//     setPage(1);
//   }

//   // Only the four categories
//   const categories = ["Cloud Computing", "Networking", "Linux", "Docker"];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid gap-8 lg:grid-cols-4">
//         {/* Left Sidebar: Categories */}
//         <aside className="space-y-6 lg:col-span-1">
//           <div className="bg-white p-4 rounded-md shadow-sm">
//             <h3 className="font-semibold mb-2">Categories</h3>
//             {categories.map(cat => (
//               <button
//                 key={cat}
//                 onClick={() => setCategory(cat === category ? "" : cat)}
//                 className={`block text-left w-full px-2 py-1 rounded mb-1 ${
//                   cat === category ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           <div className="bg-white p-4 rounded-md shadow-sm">
//             <h3 className="font-semibold mb-2">About DevOpsDaily</h3>
//             <p className="text-sm text-gray-600">Bite-sized tutorials and hands-on guides for DevOps engineers — updated daily.</p>
//           </div>

//           <div className="bg-white p-4 rounded-md shadow-sm">
//             <h3 className="font-semibold mb-2">Recent Posts</h3>
//             <RecentList />
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="space-y-6 lg:col-span-3">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//             <h1 className="text-2xl font-bold">Latest Tutorials</h1>
//             <div className="w-full sm:w-1/2">
//               <SearchBar onSearch={handleSearch} />
//             </div>
//           </div>

//           {blogs.length === 0 ? (
//             <div className="bg-white p-6 rounded-md shadow-sm">No posts found.</div>
//           ) : (
//             <div className="space-y-6">
//               {blogs.map(b => <BlogCard key={b.id} blog={b} />)}
//             </div>
//           )}

//           {/* Pagination */}
//           {meta && meta.totalPages > 1 && (
//             <div className="flex gap-2 items-center mt-6">
//               <button
//                 onClick={() => setPage(p => Math.max(1, p - 1))}
//                 className="px-3 py-1 border rounded"
//               >
//                 Prev
//               </button>
//               <div className="text-sm text-gray-600">Page {meta.page} of {meta.totalPages}</div>
//               <button
//                 onClick={() => setPage(p => Math.min(meta.totalPages, p + 1))}
//                 className="px-3 py-1 border rounded"
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }

// function RecentList() {
//   const [recent, setRecent] = React.useState([]);
//   React.useEffect(() => {
//     axios.get("/blogs?page=1&limit=5").then(r => setRecent(r.data.data)).catch(() => {});
//   }, []);
//   return (
//     <div className="space-y-2">
//       {recent.map(r => (
//         <a key={r.id} href={`/blog/${r.slug}`} className="block text-sm text-gray-700 hover:text-primary">
//           {r.title}
//         </a>
//       ))}
//     </div>
//   );
// }




// import React, { useEffect, useState } from "react";
// import axios from "../api/axios";
// import BlogCard from "../components/BlogCard";
// import SearchBar from "../components/SearchBar";

// export default function Home() {
//   const [blogs, setBlogs] = useState([]);
//   const [page, setPage] = useState(1);
//   const [meta, setMeta] = useState(null);
//   const [category, setCategory] = useState("");
//   const [query, setQuery] = useState("");

//   const categories = ["Cloud Computing", "Networking", "Linux", "Docker"];

//   async function load() {
//     const qparams = new URLSearchParams();
//     qparams.set("page", page);
//     qparams.set("limit", 8);
//     if (category) qparams.set("category", category);
//     if (query) qparams.set("search", query);

//     try {
//       const res = await axios.get(`/blogs?${qparams.toString()}`);
//       setBlogs(res.data.data);
//       setMeta(res.data.meta);
//     } catch (err) {
//       console.error("Failed to load blogs", err);
//     }
//   }

//   useEffect(() => { load(); }, [page, category, query]);

//   function handleSearch(q) {
//     setQuery(q.trim());
//     setPage(1);
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid gap-8 lg:grid-cols-4">
//         {/* Sidebar */}
//         <aside className="lg:col-span-1 space-y-6">
//           {/* Categories */}
//           <div className="bg-white p-5 rounded-xl shadow-lg">
//             <h3 className="font-semibold text-lg mb-3">Categories</h3>
//             {categories.map(cat => (
//               <button
//                 key={cat}
//                 onClick={() => setCategory(cat === category ? "" : cat)}
//                 className={`block w-full text-left px-3 py-2 mb-2 rounded-lg ${
//                   cat === category ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-50"
//                 } transition-colors`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* About */}
//           <div className="bg-white p-5 rounded-xl shadow-lg">
//             <h3 className="font-semibold text-lg mb-2">About Devwithabhi</h3>
//             <p className="text-sm text-gray-600">
//               Bite-sized tutorials and hands-on guides for DevOps students, updated daily.
//             </p>
//           </div>

//           {/* Recent Posts */}
//           <div className="bg-white p-5 rounded-xl shadow-lg">
//             <h3 className="font-semibold text-lg mb-3 text-gray-700">Recent Posts</h3>
//             <RecentMini />
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="lg:col-span-3 space-y-6">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
//             <h1 className="text-3xl font-bold text-gray-800">Explore Tutorials</h1>
//             <div className="w-full sm:w-1/2">
//               <SearchBar onSearch={handleSearch} placeholder="Search tutorials..." />
//             </div>
//           </div>

//           {blogs.length === 0 ? (
//             <div className="bg-white p-6 rounded-xl shadow-lg text-center text-gray-500">
//               No posts found.
//             </div>
//           ) : (
//             <div className="grid gap-6 md:grid-cols-2">
//               {blogs.map(b => (
//                 <BlogCard key={b.id} blog={b} slug={b.slug} />
//               ))}
//             </div>
//           )}

//           {/* Pagination */}
//           {meta && meta.totalPages > 1 && (
//             <div className="flex gap-3 items-center justify-center mt-8">
//               <button
//                 onClick={() => setPage(p => Math.max(1, p - 1))}
//                 className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
//               >
//                 Prev
//               </button>
//               <div className="text-gray-600">
//                 Page {meta.page} of {meta.totalPages}
//               </div>
//               <button
//                 onClick={() => setPage(p => Math.min(meta.totalPages, p + 1))}
//                 className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }

// // Updated Recent Posts Component
// function RecentMini() {
//   const [recent, setRecent] = useState([]);

//   useEffect(() => {
//     axios.get("/blogs?page=1&limit=5")
//       .then(r => setRecent(r.data.data))
//       .catch(() => {});
//   }, []);

//   return (
//     <div className="space-y-3 max-h-[300px] overflow-y-auto">
//       {recent.map(r => (
//         <a
//           key={r.id}
//           href={`/blog/${r.slug}`}
//           className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors"
//         >
//           {r.feature_image_url ? (
//             <img
//               src={r.feature_image_url}
//               alt={r.title}
//               className="w-12 h-12 object-cover rounded-lg"
//             />
//           ) : (
//             <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500">
//               No Img
//             </div>
//           )}
//           <div className="flex flex-col">
//             <span className="text-sm font-medium text-gray-800">{r.title}</span>
//             <span className="text-xs text-gray-500">{r.category}</span>
//           </div>
//         </a>
//       ))}
//     </div>
//   );
// }










import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import BlogCard from "../components/BlogCard";
import SearchBar from "../components/SearchBar";
// Optional: if you don't have lucide-react installed, remove this import + icons below
import { BookOpen, Code2, Filter } from "lucide-react";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState(null);
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");

  const categories = ["Cloud Computing", "Networking", "Linux", "Docker"];

  async function load() {
    const qparams = new URLSearchParams();
    qparams.set("page", page);
    qparams.set("limit", 8);
    if (category) qparams.set("category", category);
    if (query) qparams.set("search", query);

    try {
      const res = await axios.get(`/blogs?${qparams.toString()}`);
      setBlogs(res.data.data);
      setMeta(res.data.meta);
    } catch (err) {
      console.error("Failed to load blogs", err);
    }
  }

  useEffect(() => {
    load();
  }, [page, category, query]);

  function handleSearch(q) {
    setQuery(q.trim());
    setPage(1);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <header className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 px-4 mb-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            {/* Remove these icons if lucide-react is not installed */}
            <Code2 className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              DevWithAbhi
            </h1>
          </div>
          <p className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto">
            Bite-sized tutorials and hands-on guides for DevOps students.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-4 bg-gray-50 border-b">
                <Filter className="w-4 h-4 text-blue-600" />
                <h3 className="font-semibold text-gray-800">Categories</h3>
              </div>
              <div className="px-5 py-4 space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat === category ? "" : cat)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      cat === category
                        ? "bg-blue-600 text-white shadow"
                        : "text-gray-700 hover:bg-blue-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* About */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-4 bg-gray-50 border-b">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <h3 className="font-semibold text-gray-800">About Devwithabhi</h3>
              </div>
              <div className="px-5 py-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Bite-sized tutorials and hands-on guides for DevOps students,
                  updated daily. Learn Cloud Computing, Docker, Linux, and
                  Networking with practical examples.
                </p>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="px-5 py-4 bg-gray-50 border-b">
                <h3 className="font-semibold text-gray-800">Recent Posts</h3>
              </div>
              <div className="px-5 py-4">
                <RecentMini />
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {category ? `${category} Tutorials` : "Explore Tutorials"}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {blogs.length} {blogs.length === 1 ? "post" : "posts"} found
                </p>
              </div>
              <div className="w-full sm:w-80">
                <SearchBar
                  onSearch={handleSearch}
                  placeholder="Search tutorials..."
                />
              </div>
            </div>

            {blogs.length === 0 ? (
              <div className="bg-white p-10 rounded-2xl shadow-lg text-center text-gray-500">
                No posts found. Try changing search or filters.
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {blogs.map((b) => (
                  <BlogCard key={b.id} blog={b} slug={b.slug} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {meta && meta.totalPages > 1 && (
              <div className="flex gap-3 items-center justify-center mt-8 pb-10">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 rounded-lg border text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Prev
                </button>
                <div className="text-gray-600 text-sm font-medium">
                  Page {meta.page} of {meta.totalPages}
                </div>
                <button
                  onClick={() => setPage((p) => Math.min(meta.totalPages, p + 1))}
                  disabled={page === meta.totalPages}
                  className="px-4 py-2 rounded-lg border text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

// Updated Recent Posts Component
function RecentMini() {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    axios
      .get("/blogs?page=1&limit=5")
      .then((r) => setRecent(r.data.data))
      .catch(() => {});
  }, []);

  return (
    <div className="space-y-3 max-h-[300px] overflow-y-auto">
      {recent.map((r) => (
        <a
          key={r.id}
          href={`/blog/${r.slug}`}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors"
        >
          {r.feature_image_url ? (
            <img
              src={r.feature_image_url}
              alt={r.title}
              className="w-12 h-12 object-cover rounded-lg"
            />
          ) : (
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500">
              No Img
            </div>
          )}
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800 line-clamp-2">
              {r.title}
            </span>
            <span className="text-xs text-gray-500">{r.category}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
