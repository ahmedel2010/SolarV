import React, { useEffect } from "react";
import { FaLeaf, FaBolt, FaHome, FaSeedling } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import workersImage from "../../assests/fault-detection.jpg";
import houseImage from "../../assests/energy-prediction.jpg";

const specialties = [
  { icon: <FaLeaf className="text-[#00c6ff] text-2xl" />, title: "Sustainable Freedom", desc: "Break free from the grid with clean, renewable solar energy." },
  { icon: <FaBolt className="text-[#00c6ff] text-2xl" />, title: "Reduce Power Bills", desc: "Significantly cut monthly electricity costs with solar power." },
  { icon: <FaHome className="text-[#00c6ff] text-2xl" />, title: "Property Value", desc: "Increase your property's market value with solar installations." },
  { icon: <FaSeedling className="text-[#00c6ff] text-2xl" />, title: "Green Energy", desc: "Contribute to a cleaner planet by reducing your carbon footprint." },
];

export default function SolarSolutions() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <div className="w-[90%] max-w-6xl mx-auto">

        {/* Section 1 — Intro */}
        <div className="flex items-center justify-between gap-12 flex-col md:flex-row md:text-left text-center">
          <motion.div
            className="max-w-lg w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#00c6ff] mb-4" data-aos="fade-up">
              Sun-Powered Solutions for Every Home
            </h1>
            <p
              className="text-base md:text-lg text-[#e2e8f0] leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Solar energy powers everything from lights to water heaters. Our solutions help
              every home harness clean, renewable energy to cut costs and reduce environmental impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={workersImage}
              alt="Solar Workers"
              className="w-full md:max-w-lg rounded-xl shadow-lg object-cover"
              data-aos="zoom-in"
            />
          </motion.div>
        </div>

        {/* Section 2 — Our Specialty */}
        <div className="flex items-center justify-between gap-12 mt-16 flex-col md:flex-row md:text-left text-center">
          <motion.div
            className="w-full md:max-w-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#00c6ff] mb-6" data-aos="fade-up">
              Our Specialty
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specialties.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 border-l-2 border-[#00c6ff] rounded-xl p-4 shadow-lg flex items-start gap-3 transition-all duration-300 hover:bg-white/20"
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                >
                  <div className="mt-1 flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-[#e2e8f0] font-semibold text-base">{item.title}</h3>
                    <p className="text-[#94a3b8] text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={houseImage}
              alt="Solar House"
              className="w-full md:max-w-lg rounded-xl shadow-lg object-cover"
              data-aos="zoom-in"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
