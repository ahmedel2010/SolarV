import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

import solarImage from "../../assests/men.avif";

const CARDS = [
  {
    title: "Energy Dependence",
    body: "Reducing reliance on non-renewable resources to create a more sustainable energy future.",
    aos: "fade-right",
  },
  {
    title: "Eco Impact",
    body: "Minimizing environmental impact by leveraging sustainable and eco-friendly energy solutions.",
    aos: "fade-left",
  },
  {
    title: "Clean Energy",
    body: "Capturing the power of renewable resources to create sustainable and eco-friendly energy solutions.",
    aos: "fade-right",
  },
  {
    title: "Preserve Nature",
    body: "Protecting natural ecosystems through sustainable practices and responsible energy solutions.",
    aos: "fade-left",
  },
];

export default function DrivingChange() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.3 }
    );

    const ref = imageRef.current;
    if (ref) observer.observe(ref);
    return () => { if (ref) observer.unobserve(ref); };
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] py-16 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#00c6ff]" data-aos="fade-up">
            Driving Change with Renewable Energy
          </h1>
          <p
            className="text-lg text-[#e2e8f0] mt-4 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Empowering a sustainable future through innovative renewable energy
            solutions. Together, we can make a difference — transforming the way
            we power our world with clean, green, and efficient energy solutions.
          </p>
        </motion.div>

        {/* Content row */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Image — fades in on scroll */}
          <motion.div
            ref={imageRef}
            className="w-full md:w-1/2 overflow-hidden rounded-xl"
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={solarImage}
              className="w-full h-auto object-cover rounded-xl shadow-lg"
              alt="Solar worker in the field"
            />
          </motion.div>

          {/* Cards grid */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-5">
            {CARDS.map(({ title, body, aos }) => (
              <motion.div
                key={title}
                className="p-5 rounded-xl text-left bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm"
                data-aos={aos}
              >
                <h3 className="text-base font-semibold text-[#00c6ff] mb-2">{title}</h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
