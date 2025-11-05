import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import logo from "../assets/navbar/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuItems = {
    Accessories: ["Bags", "Cap", "Scarf"],
    Men: ["Hoodies", "Jackets", "Pants"],
    Women: ["Dresses", "Coats", "Tops"],
    Construction: ["Wooden Doors", "Windows", "Flooring"],
  };

  const navLinkClass = ({ isActive }) =>
    `font-medium transition-colors ${
      isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Amtech Logo" className="h-14 w-14 rounded" />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center relative">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/warehouse" className={navLinkClass}>
            Warehouse
          </NavLink>

          {/* 🔽 Wholesale Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Wholesale
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {/* Dropdown */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 mt-3 bg-white border shadow-xl rounded-xl w-96 py-5 transition-all duration-200 ${
                dropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-3"
              }`}
            >
              <ul className="grid grid-cols-2 gap-x-8 gap-y-3 px-8">
                {Object.keys(menuItems).map((category) => (
                  <li key={category}>
                    <h4 className="font-semibold text-gray-800 mb-2 border-b pb-1 text-sm">
                      {category}
                    </h4>
                    <ul className="space-y-2">
                      {menuItems[category].map((item) => (
                        <li key={item}>
                          <NavLink
                            to="/wholesale/construction"
                            className="block text-sm text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all"
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
              to="/warehouse"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Warehouse
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
