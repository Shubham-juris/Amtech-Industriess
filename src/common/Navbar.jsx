import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import logo from "../assets/navbar/logo.png"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Example categories (you can expand these as needed)
  const menuItems = {
    Accessories: ["Bags", "Cap", "Scarf"],
    Men: ["Hoodies", "Jackets", "Pants"],
    Women: ["Dresses", "Coats", "Tops"],
  };

  const toSlug = (text) => text.toLowerCase().replace(/\s+/g, "-");

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Amtech Logo"
            className="h-14 w-14 rounded"
          />
         
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-primary font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-primary font-medium transition-colors"
          >
            About
          </Link>

          {/* Wholesale Dropdown */}
          <div className="relative group">
            <button className="flex items-center text-gray-600 hover:text-primary font-medium transition-colors">
              Wholesale
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg border mt-2 rounded-md w-48">
              <ul className="py-2">
                {Object.keys(menuItems).map((category) => (
                  <li key={category} className="border-b last:border-none">
                    <p className="px-4 py-2 font-semibold text-gray-700">
                      {category}
                    </p>
                    <ul className="pl-4 pb-2">
                      {menuItems[category].map((item) => (
                        <li key={item}>
                          <Link
                            to={`/wholesale/${toSlug(category)}/${toSlug(item)}`}
                            className="block px-4 py-1 text-sm text-gray-600 hover:text-primary"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            to="/contact"
            className="text-gray-600 hover:text-primary font-medium transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <nav className="flex flex-col space-y-2 p-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary font-medium"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-primary font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
