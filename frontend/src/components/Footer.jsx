import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-3">DevOpsDaily</h3>
          <p className="text-sm leading-relaxed">Daily tutorials and practical DevOps guides covering Kubernetes, AWS, Docker, CI/CD, and Cloud tools — helping you master automation step by step.</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/admin/login" className="hover:text-white">Admin</Link></li>
            <li><a href="mailto:abhishektalole47@gmail.com" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Popular Topics</h3>
          <ul className="space-y-2 text-sm">
            {["Kubernetes", "AWS", "CI/CD", "Docker", "Linux"].map(topic => (
              <li key={topic}><Link to="/" className="hover:text-white">{topic}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <a href="https://github.com/Abhishek-28-eng" target="_blank" rel="noreferrer" className="hover:text-white"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/abhishek-talole-29a843233" target="_blank" rel="noreferrer" className="hover:text-white"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DevOpsDaily — Built by <span className="text-gray-300">Abhishek Talole</span>. All rights reserved.
      </div>
    </footer>
  );
}
