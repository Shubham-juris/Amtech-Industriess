import React from "react";
import warehouseImg from "../assets/warehouse/main.avif";

export default function Warehouse() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
<section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-semibold text-center mb-14">
      Our Services
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card */}
      {[
        {
          title: "Cross-docking",
          icon: "https://img.icons8.com/ios-glyphs/40/000000/truck.png",
          desc:
            "We facilitate direct transfer of goods from inbound to outbound transportation with minimal or no storage time, enhancing efficiency and reducing handling costs.",
        },
        {
          title: "Storage",
          icon: "https://img.icons8.com/ios-glyphs/40/000000/warehouse.png",
          desc:
            "We provide secure, non-hazardous storage solutions for both short and long-term needs. Our ambient temperature warehouse offers optimized racking and inventory management.",
        },
        {
          title: "Container De-Stuffing",
          icon: "https://img.icons8.com/ios-glyphs/40/000000/open-box.png",
          desc:
            "Our team efficiently de-stuffs and palletizes goods according to specifications, ensuring products are handled with care and precision.",
        },
        {
          title: "Order Fulfillment",
          icon: "https://img.icons8.com/ios-glyphs/40/000000/parcel.png",
          desc:
            "We offer comprehensive order fulfillment including picking, packing, labeling, and dispatch with compliance to regional and international standards.",
        },
        {
          title: "Reversed Logistics",
          icon: "https://img.icons8.com/ios-glyphs/40/000000/return-purchase.png",
          desc:
            "Understanding the need for efficient returns, we manage reverse logistics through inspection, processing, and redistribution workflows.",
        },
        {
          title: "Transportation",
          icon: "https://img.icons8.com/ios-glyphs/40/000000/airplane-take-off.png",
          desc:
            "We offer dedicated road, sea, and air freight services ensuring safe, reliable, and timely delivery across regions.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-gray-100 border border-gray-300 rounded-xl p-8 text-center"
        >
          <img
            src={item.icon}
            alt={item.title}
            className="mx-auto mb-4"
          />
          <h3 className="font-semibold text-base mb-3">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      
    </main>
  );
}
