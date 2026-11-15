import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Link } from "react-router";

import faultDetectionImage from '../../assests/solar1.webp';
import energyPredictionImage from '../../assests/solar2.webp';
import dataAnalysisImage from '../../assests/solar3.avif';
import predictiveMaintenanceImage from '../../assests/predictive-maintenance.jpg';

const serviceIcons = ["⚡", "🔋", "📊", "🖼️", "🔧"];

const services = [
  { title: "Fault Detection", link: "/fault-detection", desc: "Automatically identify and diagnose faults in your solar system before they escalate." },
  { title: "Energy Prediction", link: "/energy-predection", desc: "Forecast energy generation with AI-driven models to optimize consumption." },
  { title: "Data Analysis Dashboard", link: "/data-analysis-dashpoard", desc: "Visualize real-time and historical solar data through intuitive dashboards." },
  { title: "Image Classification", link: "/classification", desc: "Use computer vision to classify solar panel conditions and performance." },
  { title: "Predictive Maintenance", link: "/predictive-mentance", desc: "Bringing efficiency to energy management with proactive maintenance alerts." },
];

export default function Services() {
  const [activeImage, setActiveImage] = useState(0);
  const images = [predictiveMaintenanceImage, dataAnalysisImage, energyPredictionImage, faultDetectionImage];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-[#e2e8f0] py-16 px-5 text-center">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#00c6ff] mb-4"
          data-aos="fade-up"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We Find High &amp; Best Use For All Resources
        </motion.h2>

        <p
          className="text-base md:text-lg mb-10 text-[#94a3b8]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Discover innovative solutions for energy efficiency and sustainability.
        </p>

        <div className="flex justify-between items-center flex-wrap md:flex-row flex-col gap-8">

          {/* Left column – first 3 services */}
          <div className="w-full md:w-[30%]">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/10 border-l-2 border-[#00c6ff] p-4 mb-5 rounded-xl shadow-lg transition-all duration-300 hover:bg-white/20 text-left"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                <div className="text-2xl mb-1">{serviceIcons[index]}</div>
                <h3 className="text-[#00c6ff] font-semibold text-lg mb-1">{service.title}</h3>
                <p className="text-[#94a3b8] text-sm mb-2">{service.desc}</p>
                <Link to={service.link} className="text-[#00c6ff] font-bold hover:underline text-sm">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Center – image carousel */}
          <div data-aos="zoom-in" className="flex-shrink-0">
            <motion.img
              key={activeImage}
              src={images[activeImage]}
              alt="Solar Service"
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-xl shadow-lg object-cover transition-all duration-500 ease-in-out"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>

          {/* Right column – last 2 services */}
          <div className="w-full md:w-[30%]">
            {services.slice(3, 5).map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/10 border-l-2 border-[#00c6ff] p-4 mb-5 rounded-xl shadow-lg transition-all duration-300 hover:bg-white/20 text-left"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                data-aos="fade-left"
                data-aos-delay={index * 100}
              >
                <div className="text-2xl mb-1">{serviceIcons[index + 3]}</div>
                <h3 className="text-[#00c6ff] font-semibold text-lg mb-1">{service.title}</h3>
                <p className="text-[#94a3b8] text-sm mb-2">{service.desc}</p>
                <Link to={service.link} className="text-[#00c6ff] font-bold hover:underline text-sm">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Contact Us button */}
        <Link to="/contact">
          <motion.button
            className="bg-[#00c6ff] border-none py-3 px-7 text-base sm:text-lg mt-8 text-white rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#0086b3] font-semibold shadow-lg"
            data-aos="fade-up"
            data-aos-delay="300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Contact Us
          </motion.button>
        </Link>

      </div>
    </section>
  );
}
