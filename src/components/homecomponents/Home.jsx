import React, { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Example: navigate or handle search logic
      console.log("Searching for:", searchTerm);
    }
  };

  return (
    <div>
      {/* Hero Section with Video Background */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center text-center text-white bg-black overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Hero Text */}
        <div className="z-10 p-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
          >
            Welcome to Amtech Industries
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Discover the pinnacle of innovation and quality with Amtech
            Industries. Browse our catalog of cutting-edge products and
            solutions built for the future.
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 z-10 w-full max-w-md md:max-w-2xl px-4"
        >
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className=" bg-white w-full pl-12 pr-24 py-3 md:py-4 text-sm md:text-lg rounded-full shadow-lg text-black focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 hover:bg-blue-700 text-white py-2 md:py-3 px-4 md:px-6 text-sm md:text-base transition-colors"
            >
              Search
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
