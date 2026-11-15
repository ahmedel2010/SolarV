import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaComment } from "react-icons/fa";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-[#00c6ff] min-h-screen flex flex-col items-center justify-center px-4 py-12 md:px-12">

      {/* Heading */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold mb-8 text-center text-[#00c6ff]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h1>

      {/* Contact Info Cards */}
      <div className="flex flex-col sm:flex-row justify-center gap-5 mb-8 w-full max-w-3xl">
        <motion.div
          className="flex items-center gap-3 bg-white/10 py-4 px-5 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
          data-aos="fade-up"
        >
          <FaPhoneAlt className="text-2xl text-[#00c6ff] flex-shrink-0" />
          <a href="tel:+20238350000" className="text-[#e2e8f0] hover:text-[#00c6ff] transition-colors">
            +20 (2) 3835-0000
          </a>
        </motion.div>
        <motion.div
          className="flex items-center gap-3 bg-white/10 py-4 px-5 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
          data-aos="fade-up"
        >
          <FaEnvelope className="text-2xl text-[#00c6ff] flex-shrink-0" />
          <a href="mailto:info@solarv.com" className="text-[#e2e8f0] hover:text-[#00c6ff] transition-colors">
            info@solarv.com
          </a>
        </motion.div>
        <motion.div
          className="flex items-center gap-3 bg-white/10 py-4 px-5 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
          data-aos="fade-up"
        >
          <FaMapMarkerAlt className="text-2xl text-[#00c6ff] flex-shrink-0" />
          <p className="text-[#e2e8f0]">6th of October City, Giza</p>
        </motion.div>
      </div>

      {/* Glass Card: Form + Map */}
      <div className="flex flex-col md:flex-row max-w-4xl w-full bg-white/10 p-6 md:p-10 shadow-lg rounded-xl gap-8 overflow-hidden">

        {/* Contact Form */}
        <motion.form className="w-full md:w-1/2 flex flex-col gap-4" data-aos="fade-left">
          <div className="relative">
            <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-white" />
            <input
              className="w-full py-3 pl-10 pr-3 border-none rounded-lg bg-white/20 text-white placeholder-[#94a3b8] text-base transition-all duration-300 ease-in-out focus:bg-white/30 focus:outline-none"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-white" />
            <input
              className="w-full py-3 pl-10 pr-3 border-none rounded-lg bg-white/20 text-white placeholder-[#94a3b8] text-base transition-all duration-300 ease-in-out focus:bg-white/30 focus:outline-none"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="relative">
            <FaPhoneAlt className="absolute top-1/2 left-3 -translate-y-1/2 text-white" />
            <input
              className="w-full py-3 pl-10 pr-3 border-none rounded-lg bg-white/20 text-white placeholder-[#94a3b8] text-base transition-all duration-300 ease-in-out focus:bg-white/30 focus:outline-none"
              type="tel"
              placeholder="Your Phone"
              required
            />
          </div>
          <div className="relative">
            <FaComment className="absolute top-4 left-3 text-white" />
            <textarea
              className="w-full py-3 pl-10 pr-3 border-none rounded-lg bg-white/20 text-white placeholder-[#94a3b8] text-base transition-all duration-300 ease-in-out focus:bg-white/30 focus:outline-none resize-none min-h-[120px]"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <motion.button
            className="w-full bg-[#00c6ff] text-white text-base font-semibold py-3 px-6 border-none cursor-pointer rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-[#00a4e0]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
          >
            Submit
          </motion.button>
        </motion.form>

        {/* Map */}
        <motion.div className="w-full md:w-1/2" data-aos="fade-right">
          <iframe
            className="w-full h-64 md:h-80 rounded-xl shadow-lg border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110582.88039755106!2d30.852445100000004!3d29.9804049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145855e11f99c279%3A0x6b772483d6a2f4c9!2s6th%20of%20October%20City%2C%20Giza%20Governorate!5e0!3m2!1sen!2seg!4v1715000000000!5m2!1sen!2seg"
            allowFullScreen=""
            loading="lazy"
            title="6th of October City Map"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
