import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/home/sport.jpg";
import img2 from "../../assets/home/eggshell.jpg";
import img3 from "../../assets/home/sporty1.jpg";
import img4 from "../../assets/home/sporty2.jpg";
import main from "../../assets/home/main.jpg";

export default function Sporty() {
  const products = [
    { name: "Asymmetrical Sports Bra", image: img1 },
    { name: "Casual Eggshell Sports Bra", image: img2 },
    { name: "Attractive Barbie Pink Sports Bra", image: img3 },
    { name: "Baby Pink And Striped Alluring Sports Bra", image: img4 },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto">
        {/* ✅ Proper layout: image on left, products on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* LEFT SIDE - Big Image */}
          <div className="flex justify-center items-center h-full">
            <div className="relative w-[90%] h-[75vh] overflow-hidden rounded-lg shadow-xl bg-gray-100">
              <img
                src={main}
                alt="Main Banner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE - Product Grid */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-2">TRENDING NOW</h2>
            <Link to="/" className="text-gray-500 hover:text-primary underline">
              Shop All
            </Link>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {products.map((product) => (
                <div key={product.name} className="group block text-center">
                  <div className="overflow-hidden rounded-md shadow-md">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-80 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-base font-medium text-gray-700 group-hover:text-primary">
                    {product.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
