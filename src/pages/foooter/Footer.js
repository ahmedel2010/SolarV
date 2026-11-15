import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <footer className="bg-[#08121e] border-t border-white/5 text-[#e2e8f0] pt-12 pb-6 px-4 md:px-8">
      {/* Main grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2" data-aos="fade-up">
            <Link to="/" className="inline-block group mb-2">
              <span className="text-3xl font-extrabold tracking-wide text-white transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(0,198,255,0.6)]">
                Solar
                <span className="text-[#00c6ff] inline-block transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:text-[#38bdf8]">
                  V
                </span>
              </span>
            </Link>
            <p className="text-sm text-[#94a3b8] leading-relaxed max-w-xs">
              Innovating the future of solar energy through intelligent, sustainable solutions in 6th of October City and nationwide.
            </p>
          </div>

          {/* Get Started */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xs font-semibold text-[#00c6ff] uppercase tracking-widest mb-3">
              Get Started
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Start", path: "/" },
                { label: "Services", path: "/services" },
                { label: "Guide", path: "/guide" },
              ].map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-[#94a3b8] hover:text-[#00c6ff] transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div data-aos="fade-up" data-aos-delay="150">
            <h3 className="text-xs font-semibold text-[#00c6ff] uppercase tracking-widest mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
                { label: "Solutions", path: "/soltain" },
              ].map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-[#94a3b8] hover:text-[#00c6ff] transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xs font-semibold text-[#00c6ff] uppercase tracking-widest mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {["Support Center", "Service Status", "Security"].map((link) => (
                <li key={link}>
                  <a
                    href="#support"
                    className="text-[#94a3b8] hover:text-[#00c6ff] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Let's Chat */}
          <div data-aos="fade-up" data-aos-delay="250">
            <h3 className="text-xs font-semibold text-[#00c6ff] uppercase tracking-widest mb-3">
              Contact Us
            </h3>
            <p className="text-sm text-[#e2e8f0] font-medium mb-1">
              <a href="mailto:info@solarv.com" className="hover:text-[#00c6ff] transition-colors">
                info@solarv.com
              </a>
            </p>
            <p className="text-xs text-[#94a3b8] mb-1">
              <a href="tel:+20238350000" className="hover:text-[#00c6ff] transition-colors">
                +20 (2) 3835-0000
              </a>
            </p>
            <p className="text-xs text-[#64748b] mb-3">6th of October City, Egypt</p>
            <Link to="/contact">
              <button className="py-2 px-4 rounded-lg bg-[#00c6ff] text-white text-sm font-semibold cursor-pointer transition-colors duration-300 hover:bg-[#0086b3] w-full">
                GET IN TOUCH
              </button>
            </Link>
          </div>
        </div>

        {/* Social + Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-4">
            {[
              { Icon: FaLinkedin, label: "LinkedIn" },
              { Icon: FaTwitter, label: "Twitter" },
              { Icon: FaYoutube, label: "YouTube" },
              { Icon: FaGithub, label: "GitHub" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                aria-label={label}
                className="text-[#94a3b8] text-xl transition-colors duration-300 hover:text-[#00c6ff]"
              >
                <Icon />
              </a>
            ))}
          </div>
          <p className="text-xs text-[#94a3b8]">
            © 2025 SolarV. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
