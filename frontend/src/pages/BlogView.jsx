// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "../api/axios";
// import ReactMarkdown from "react-markdown";
// import rehypeSanitize from "rehype-sanitize";
// import remarkGfm from "remark-gfm";
// import { extractHeadings } from "../utils/toc";

// export default function BlogView() {
//   const { slug } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [toc, setToc] = useState([]);

//   useEffect(() => {
//     axios.get(`/blogs/${slug}`).then(r => {
//       setBlog(r.data);
//       const headings = extractHeadings(r.data.content || "");
//       setToc(headings);
//     }).catch(() => setBlog(null));
//   }, [slug]);

//   if (!blog) return <div className="container mx-auto px-4 py-8">Loading...</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid gap-8 layout-grid lg:grid-cols-2">
//         <article className="bg-white p-6 rounded-md shadow-sm article-content">
//           <div className="mb-4">
//             <div className="text-xs text-gray-500 mb-1">{blog.category}</div>
//             <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
//             <div className="text-sm text-gray-500">By {blog.author?.name || "Admin"} • {new Date(blog.published_at || blog.created_at).toLocaleDateString()}</div>
//           </div>

//           {blog.feature_image_url && <img src={blog.feature_image_url} alt={blog.title} className="w-full h-72 object-cover rounded-md mb-6" />}

//           <div className="prose max-w-none">
//             {blog.markdown ? (
//               <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
//                 {blog.content || ""}
//               </ReactMarkdown>
//             ) : (
//               <div dangerouslySetInnerHTML={{ __html: blog.content }} />
//             )}
//           </div>
//         </article>

//         <aside className="space-y-6">
//           <div className="bg-white p-4 rounded-md shadow-sm sticky top-24">
//             <h4 className="font-semibold mb-3">On this page</h4>
//             {toc.length === 0 ? <div className="text-sm text-gray-500">No sections</div> :
//               <ol className="text-sm list-decimal list-inside space-y-2">
//                 {toc.map(h => (
//                   <li key={h.id}><a className="text-gray-700 hover:text-primary" href={`#${h.id}`}>{h.text}</a></li>
//                 ))}
//               </ol>
//             }
//           </div>

//           <div className="bg-white p-4 rounded-md shadow-sm">
//             <h4 className="font-semibold mb-2">Recent posts</h4>
//             <RecentMini />
//           </div>

//           <div className="bg-white p-4 rounded-md shadow-sm">
//             <h4 className="font-semibold mb-2">Share</h4>
//             <div className="flex gap-2">
//               <a className="px-3 py-1 border rounded text-sm">Twitter</a>
//               <a className="px-3 py-1 border rounded text-sm">LinkedIn</a>
//             </div>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }

// function RecentMini() {
//   const [recent, setRecent] = React.useState([]);
//   React.useEffect(() => {
//     axios.get("/blogs?page=1&limit=5").then(r => setRecent(r.data.data)).catch(() => {});
//   }, []);
//   return (
//     <div className="space-y-2 text-sm">
//       {recent.map(r => <Link key={r.id} to={`/blog/${r.slug}`} className="block text-gray-700 hover:text-primary">{r.title}</Link>)}
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../api/axios";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { extractHeadings } from "../utils/toc";

export default function BlogView() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [toc, setToc] = useState([]);

  useEffect(() => {
    axios.get(`/blogs/${slug}`)
      .then(r => {
        setBlog(r.data);
        const headings = extractHeadings(r.data.content || "");
        setToc(headings);
      })
      .catch(() => setBlog(null));
  }, [slug]);

  if (!blog) return <div className="container mx-auto px-4 py-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-4">
        {/* Left Sidebar: Recent Posts */}
        <aside className="lg:col-span-1 space-y-6">
          <div className="bg-white p-4 rounded-md shadow-sm">
            <h4 className="font-semibold mb-3 text-gray-700">Recent Posts</h4>
            <RecentMini />
          </div>
        </aside>

        {/* Main Article */}
        <main className="lg:col-span-3 space-y-6">
          <article className="bg-white p-6 rounded-md shadow-sm article-content">
            <div className="mb-4">
              <div className="text-xs text-gray-500 mb-1">{blog.category}</div>
              <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
              <div className="text-sm text-gray-500">
                By {blog.author?.name || "Admin"} • {new Date(blog.published_at || blog.created_at).toLocaleDateString()}
              </div>
            </div>

            {blog.feature_image_url && (
              <img
                src={blog.feature_image_url}
                alt={blog.title}
                className="w-full h-72 object-cover rounded-md mb-6"
              />
            )}

            <div className="prose max-w-none">
              {blog.markdown ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
                  {blog.content || ""}
                </ReactMarkdown>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              )}
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}

// Updated Recent Posts component
function RecentMini() {
  const [recent, setRecent] = React.useState([]);
  React.useEffect(() => {
    axios.get("/blogs?page=1&limit=5")
      .then(r => setRecent(r.data.data))
      .catch(() => {});
  }, []);

  return (
    <div className="space-y-3 max-h-[300px] overflow-y-auto">
      {recent.map(r => (
        <Link
          key={r.id}
          to={`/blog/${r.slug}`}
          className="flex items-center gap-3 p-2 rounded-md hover:bg-blue-50 transition-colors"
        >
          {r.feature_image_url ? (
            <img
              src={r.feature_image_url}
              alt={r.title}
              className="w-12 h-12 object-cover rounded-md"
            />
          ) : (
            <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center text-xs text-gray-500">
              No Img
            </div>
          )}

          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800">{r.title}</span>
            <span className="text-xs text-gray-500">{r.category}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
