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
           <NavLink to="/wholesale" className={navLinkClass}>
            Wholesale
          </NavLink>

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
              to="/wholesale"
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
