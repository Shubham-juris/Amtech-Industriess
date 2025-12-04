import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/home/sport.jpg";
import img2 from "../../assets/home/eggshell.jpg";
import img3 from "../../assets/home/sporty1.jpg";
import img4 from "../../assets/home/sporty3.jpg";
import main from "../../assets/home/main2.jpg";

export default function Sporty() {
  const products = [
    { name: "Asymmetrical Sports Bra", image: img1 },
    { name: "Casual Eggshell Sports Bra", image: img2 },
    { name: "Attractive Barbie Pink Sports Bra", image: img3 },
    { name: "Black And Striped Alluring Sports Bra", image: img4 },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT - Bigger HD Banner */}
          <div className="flex justify-center items-center h-full">
            <div className="relative w-full h-[85vh] overflow-hidden rounded-xl shadow-2xl bg-gray-100">
              <img
                src={main}
                alt="Main Banner"
                className="w-full h-full object-cover"
                loading="lazy"
                srcSet={`${main} 1x, ${main} 2x`}
              />
            </div>
          </div>

          {/* RIGHT - Bigger HD Cards */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-2">TRENDING NOW</h2>
            <Link to="/" className="text-gray-500 hover:text-primary underline">
              Shop All
            </Link>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {products.map((product) => (
                <div key={product.name} className="group block text-center">

                  {/* BIGGER IMAGE BOX */}
                  <div className="overflow-hidden rounded-lg shadow-lg h-[340px] md:h-[500px] lg:h-[400px]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      srcSet={`${product.image} 1x, ${product.image} 2x`}
                    />
                  </div>

                  <p className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-primary">
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
