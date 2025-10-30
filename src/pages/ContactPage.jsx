import React, { useState } from "react";
import hero from "../assets/contact/hero.jpg";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    country: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const officeLocations = [
    {
      name: "5017 50 Street",
      address: "1750 Brittania Rd East, Mississauga",
      phone: "+1 (234) 567-890",
      email: "info@amtech-industries.com",
      mapSrc:
        "https://www.google.com/maps?q=1750+Brittania+Rd+East,+Mississauga,+ON,+Canada&output=embed",
    },
  ];

  const validateForm = () => {
    const newErrors = {};
    if (formData.name.trim().length < 2) newErrors.name = "Name must be at least 2 characters.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email.";
    if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Contact form submitted:", formData);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-20 flex items-center justify-center">
        <div className="max-w-lg w-full text-center shadow-lg p-10 border rounded-2xl">
          <div className="flex flex-col items-center">
            <div className="text-green-500 text-6xl mb-4">✔</div>
            <h2 className="text-3xl font-bold mb-2">Message Sent!</h2>
            <p className="text-gray-500 mb-2">Thank you for contacting us.</p>
            <p className="text-gray-500">
              We have received your message and will get back to you shortly.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-start text-white"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 z-10">
          <h1 className="text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg">Home / Contact Us</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Office Info */}
          <aside>
            {officeLocations.map((location) => (
              <div key={location.name} className="border-b pb-8 mb-8">
                <h3 className="text-xl font-semibold mb-3">{location.name}</h3>
                <p className="flex items-start gap-3 text-gray-600 mb-2">
                  📍 <span>{location.address}</span>
                </p>
                <p className="flex items-center gap-3 text-gray-600 mb-2">
                  ☎️ <span>{location.phone}</span>
                </p>
                <p className="flex items-center gap-3 text-gray-600 mb-4">
                  📧 <span>{location.email}</span>
                </p>

                {/* Embedded Google Map */}
                <div className="w-full h-[250px] rounded-lg overflow-hidden shadow">
                  <iframe
                    title="Office Location Map"
                    src={location.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            ))}
          </aside>

          {/* Form Section */}
          <main>
            <h2 className="text-2xl font-bold mb-4">
              We Will Get Back to You Within One Business Day.
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />

                <input
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>

              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 min-h-[120px]"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800 py-3 rounded-lg text-lg font-semibold"
              >
                Submit
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}
