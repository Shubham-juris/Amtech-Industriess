import React from "react";
import warehouseImg from "../assets/warehouse/main.avif";

export default function Warehouse() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-sky-700 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Reliable & Affordable Warehousing by Amtech-Industry
            </h1>
            <p className="mt-5 text-lg text-white/90">
              Get{" "}
              <span className="font-semibold">$99 Cross-Job Fulfillment</span>{" "}
              and the most affordable, fully managed warehouses.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="bg-white text-sky-700 px-6 py-3 rounded-md font-semibold shadow-md hover:shadow-lg"
              >
                View Pricing
              </a>
              <a
                href="#contact"
                className="border border-white px-6 py-3 rounded-md hover:bg-white/10"
              >
                Contact Sales
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src={warehouseImg}
              alt="Warehouse Facility"
              className="rounded-xl shadow-lg border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="container mx-auto px-6 lg:px-20 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose Amtech Warehouses?
          </h2>
          <p className="mt-4 text-gray-600">
            We deliver scalable and cost-efficient warehousing solutions to suit
            every business — from startups to heavy industries.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-sky-700">
              $99 Cross-Job Fulfillment
            </h3>
            <p className="mt-3 text-gray-600">
              Handle multiple storage or dispatch tasks with a single low-cost
              plan. Save logistics cost and boost operational efficiency.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-sky-700">
              Cheaper Warehouses
            </h3>
            <p className="mt-3 text-gray-600">
              Cost-effective shared warehouses with full security and flexible
              leasing for small businesses or temporary storage needs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-sky-700">
              Heavy-Duty Storage
            </h3>
            <p className="mt-3 text-gray-600">
              High-capacity units designed for heavy materials, cold storage,
              and long-term inventory with 24/7 security and CCTV.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Pricing & Plans
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-sky-700">
                Cross-Job Starter
              </h3>
              <p className="text-3xl font-extrabold mt-2">$99</p>
              <p className="text-sm text-gray-500 mb-4">
                one-time / per cross-job
              </p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Cross-job posting</li>
                <li>• Pick-pack support</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-sky-700">
                Cheaper Warehouses
              </h3>
              <p className="text-2xl font-extrabold mt-2">Custom</p>
              <p className="text-sm text-gray-500 mb-4">monthly / flexible</p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Shared low-cost units</li>
                <li>• Managed logistics</li>
                <li>• Flexible duration</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-sky-700">
                Industrial Heavy Duty
              </h3>
              <p className="text-2xl font-extrabold mt-2">Custom</p>
              <p className="text-sm text-gray-500 mb-4">based on size</p>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• High-load floors</li>
                <li>• Dock access</li>
                <li>• Climate-controlled</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 container mx-auto px-6 lg:px-20">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-sky-700 text-center">
            Get in Touch
          </h2>
          <p className="text-center text-gray-600 mt-2 mb-8">
            Contact our team for quotes, availability, or bulk plans.
          </p>

          <form className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Your Name / Company"
              className="border p-3 rounded-md"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border p-3 rounded-md"
            />
            <textarea
              rows="4"
              placeholder="Tell us your requirement..."
              className="border p-3 rounded-md"
            ></textarea>
            <button
              onClick={() => alert("✅ Message Sent Successfully!")}
              className="bg-sky-700 text-white py-3 px-6 rounded-md font-semibold hover:bg-sky-800 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      
    </main>
  );
}
