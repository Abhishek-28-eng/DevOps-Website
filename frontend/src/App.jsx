// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import BlogView from "./pages/BlogView";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import AdminLogin from "./pages/Admin/Login";   // 👈 Add this
// import NewPost from "./pages/Admin/NewPost";    // 👈 Optional, if you have it

// function App() {
//   return (
//     <>
//       {/* Navbar stays always visible */}
//       <Navbar />

//       {/* Page routing */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/blog/:id" element={<BlogView />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/admin/login" element={<AdminLogin />} /> {/* 👈 Add this */}
//         <Route path="/admin/newpost" element={<NewPost />} />   {/* Optional */}
//       </Routes>

//       {/* Footer stays always visible */}
//       <Footer />
//     </>
//   );
// }

// export default App;


import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BlogView from "./pages/BlogView";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/Admin/Login";
import NewPost from "./pages/Admin/NewPost";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogView />} /> {/* Use slug */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/newpost" element={<NewPost />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
