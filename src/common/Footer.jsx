import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";
import logo from "../assets/navbar/logo.png"


export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* Logo + Description */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Amtech Logo"
                width={42}
                height={42}
                className="rounded"
              />
              <span className="text-2xl font-bold">Amtech Industries</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Leading the way in innovative industrial solutions and
              high-quality products for a global market.
            </p>
          </div>

          {/* Sitemap */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Sitemap</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/wholesale/construction"
                  className="text-muted-foreground hover:text-primary-foreground transition-colors"
                >
                  Wholesale
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span className="text-muted-foreground">
                  info@amtech-industries.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span className="text-muted-foreground">+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span className="text-muted-foreground">
                  1750 Brittania Rd East, Mississauga
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
             
              <a
                href="#"
                className="text-muted-foreground hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
             
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/20 py-6">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            © {new Date().getFullYear()} Amtech Industries. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
