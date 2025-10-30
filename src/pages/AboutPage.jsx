import React from "react";
import { motion } from "framer-motion";
import placeholderData from "@/assets/placeholderImages.json";
import hero from "../assets/about/hero.jpg"
import hero1 from "../assets/about/hero1.jpg"
import hero2 from "../assets/about/hero2.jpg"


const getLocalImage = (key) => {
  const images = {
    about_hero: {
      url: "/images/about/hero.jpg",
      hint: "Group of people in fitness wear",
    },
    about_workout: {
      url: "/images/about/workout.jpg",
      hint: "Woman doing crunches",
    },
    about_white_label: {
      url: "/images/about/white-label.jpg",
      hint: "Woman in a hat and coat",
    },
  };
  return images[key];
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function AboutPage() {
  const placeholderImages = placeholderData.placeholderImages;

  return (
    <div>
      {/* 🌟 Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-start text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="image"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="absolute inset-0 "
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 40%, 70% 100%, 0 100%)",
              backgroundColor: "rgba(0,0,0,0.2)",
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="text-5xl font-bold mb-2">About Us</h1>
            <p className="text-lg">Home / About Us</p>
            <p className="mt-4 max-w-lg">
              We are used to say that clothing are so beautiful when you wear
              them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🧵 Section 1 */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold text-primary tracking-tight">
                We Are The Leading Manufacturer And Supplier Of Top-Quality And
                Trendy Apparel
              </h2>
              <p className="text-muted-foreground">
                Amtech Industries has earned a name as a famed clothing
                manufacturer and boutique as we understand the needs of our
                global clients with complete acuity. Join hands with us if you
                want your business to perform well, do great and earn high
                revenues in return. We do our best to make your store's
                collection the most talked-about one. We are all ears to your
                bulk stocking needs — connect today with your custom
                requirements!
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative aspect-square"
            >
              <img
                src={hero1}
                alt="image"
                className="object-cover w-full h-full rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 👕 Section 2 */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <img
                src={hero2}
                alt="image"
                className="object-cover w-full h-full rounded-lg"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold text-primary tracking-tight">
                What We Can Do For White Label And Private Label Business Owners
              </h2>
              <p className="text-muted-foreground">
                For those in need of white label apparel, we offer premium
                products with top discounts, and for private label business
                owners, we provide A–Z customization as well as logo embossment
                services. We assure complete satisfaction to our bulk buyers.
                Our ultimate goal is to form an ever-lasting business
                relationship with you so that you come back for more and we help
                you grab awesome business deals that will be just wow for your
                business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-bold mb-6 text-primary">
          Sample JSON Images
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {placeholderImages.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={item.imageUrl}
                alt={item.imageHint}
                className="object-cover w-full h-64"
              />
              <p className="p-2 text-sm text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section> */}
    </div>
  );
}
