import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const loggedIn = !!localStorage.getItem("devops_token");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-5 py-3 flex items-center justify-between">
        {/* Brand Name */}
        <Link to="/" className="flex items-center gap-1">
          <h1 className="font-bold text-2xl tracking-tight">
            <span className="text-gray-900">Dev</span>
            <span className="text-sky-500">withabhi</span>
          </h1>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-sky-500 transition-colors">
            Home
          </Link>
          <Link to="/notes" className="hover:text-sky-500 transition-colors">
            Notes
          </Link>
          <Link to="/about" className="hover:text-sky-500 transition-colors">
            About
          </Link>
          <Link
            to="/admin/login"
            className="ml-2 text-sm px-4 py-2 rounded-full border border-sky-500 text-sky-500 hover:bg-sky-50 transition-all duration-200"
          >
            {loggedIn ? "Dashboard" : "Admin"}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-5 pb-4 flex flex-col gap-3 text-gray-700 font-medium">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-sky-500">
            Home
          </Link>
          <Link to="/notes" onClick={() => setIsOpen(false)} className="hover:text-sky-500">
            Notes
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-sky-500">
            About
          </Link>
          <Link
            to="/admin/login"
            onClick={() => setIsOpen(false)}
            className="mt-2 text-center text-sm px-4 py-2 rounded-full border border-sky-500 text-sky-500 hover:bg-sky-50 transition-all"
          >
            {loggedIn ? "Dashboard" : "Admin"}
          </Link>
        </nav>
      )}
    </header>
  );
}
