import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import women from "../../assets/home/women.jpg";
import lingerie from "../../assets/home/lingerie.jpg";
import womenDress from "../../assets/home/multimaxi.jpg";
import bag from "../../assets/home/bag.jpg";
import towel from "../../assets/home/towel.jpg";
import shoes from "../../assets/home/shoes.jpg";
import kids from "../../assets/home/kids.jpg";
import menCasual from "../../assets/home/mencasual.jpg";
import smart from "../../assets/home/fannel.jpg";
// import activewear from "../../assets/home/activewear.jpg";
import sport from "../../assets/home/sport.jpg";
import dance from "../../assets/home/2.jpg";
import tennis from "../../assets/home/tennis.jpg";
import bearJacket from "../../assets/home/bearjacket.jpg";

const categories = [
  { name: 'Lingerie', href: '/wholesale/women/women-lingerie', image: lingerie },
  { name: 'Women Dress', href: '/wholesale/women/women-dress', image: womenDress },
  { name: 'Bags', href: '/wholesale/accessories/bags', image: bag },
  { name: 'Towels', href: '/wholesale/accessories/towels', image: towel },
  { name: 'Formal Shoes', href: '/wholesale/footwear/formal-shoes', image: shoes },
  { name: 'Kids', href: '/wholesale/kids/little-4-7-yrs', image: kids },
  { name: 'Men', href: '/wholesale/men/men-shirts', image: menCasual },
  { name: 'Mens Shirts', href: '/wholesale/men/men-shirts', image: smart },
  { name: 'Activewear', href: '/wholesale/running-fitness/activewear', image: "activewear" },
  { name: 'Sports', href: '/wholesale/sports/athletics', image: sport },
  { name: 'Dance Wear', href: '/wholesale/sports/dance-wear', image: dance },
  { name: 'Tennis', href: '/wholesale/sports/tennis', image: tennis },
  { name: 'Women Fashion', href: '/wholesale/women/women-dress', image: women },
  { name: 'Men Hoody', href: '/wholesale/men/men-hoody', image: bearJacket },
  { name: 'Compression', href: '/wholesale/running-fitness/compression', image: smart },
];

// ✅ Carousel Config
const TICKER_INTERVAL = 3000;
const ITEMS_TO_SHOW = 4;

const FeaturedCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Extend array for seamless infinite scroll
  const extendedCategories = [...categories, ...categories.slice(0, ITEMS_TO_SHOW)];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % categories.length);
    }, TICKER_INTERVAL);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const Wave = () => (
    <svg
      className="absolute top-0 left-0 w-full h-auto"
      viewBox="0 0 1440 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 24C240 40 480 8 720 24S1200 8 1440 24V0H0V24Z" fill="white" />
    </svg>
  );

  return (
    <section
      className="relative grid grid-cols-1 lg:grid-cols-5 bg-[#FEEA9F] text-black overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Wave />

      {/* ✅ Left - Carousel Section */}
      <div className="lg:col-span-3 py-20 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / ITEMS_TO_SHOW)}%)`,
          }}
        >
          {extendedCategories.map((category, index) => (
            <div
              key={index}
              className="px-4 shrink-0 text-center"
              style={{ flexBasis: `${100 / ITEMS_TO_SHOW}%` }}
            >
              <Link to={category.href} className="group block relative">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl shadow-md">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay effect */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <span className="inline-block bg-white px-6 py-2 text-md font-semibold shadow-lg rounded-full group-hover:bg-yellow-300 transition-colors">
                  {category.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Right - Text & Arrows */}
      <div className="lg:col-span-2 bg-black text-white flex flex-col justify-center items-center text-center p-8 lg:p-16">
        <h2 className="font-serif text-4xl font-bold mb-4 leading-tight">
          FEATURED <br /> CATEGORIES
        </h2>
        <p className="text-xl text-neutral-300 mb-8 max-w-xs">
          Discover the most trending products in Amtech.
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="border border-white/50 rounded-full p-2 hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="border border-white/50 rounded-full p-2 hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
