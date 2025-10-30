import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import logo from "../assets/navbar/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Example categories (for dropdown display only)
  const menuItems = {
    Accessories: ["Bags", "Cap", "Scarf"],
    Men: ["Hoodies", "Jackets", "Pants"],
    Women: ["Dresses", "Coats", "Tops"],
    Construction: ["Wooden Doors", "Windows", "Flooring"],
  };

  // ✅ Style for active NavLink
  const navLinkClass = ({ isActive }) =>
    `font-medium transition-colors ${
      isActive ? "text-primary" : "text-gray-600 hover:text-primary"
    }`;

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Amtech Logo" className="h-14 w-14 rounded" />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          {/* Wholesale Dropdown */}
          <div className="relative group">
            <NavLink
              to="/wholesale/construction"
              className={({ isActive }) =>
                `flex items-center font-medium transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`
              }
            >
              Wholesale
              <ChevronDown className="ml-1 h-4 w-4" />
            </NavLink>

            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg border mt-2 rounded-md w-52">
              <ul className="py-2">
                {Object.keys(menuItems).map((category) => (
                  <li key={category} className="border-b last:border-none">
                    <p className="px-4 py-2 font-semibold text-gray-700">
                      {category}
                    </p>
                    <ul className="pl-4 pb-2">
                      {menuItems[category].map((item) => (
                        <li key={item}>
                          <NavLink
                            to="/wholesale/construction"
                            className="block px-4 py-1 text-sm text-gray-600 hover:text-primary"
                          >
                            {item}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
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
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/wholesale/construction"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Wholesale
            </NavLink>
            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
