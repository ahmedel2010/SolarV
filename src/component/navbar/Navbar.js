import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/guide', label: 'Guide' },
  { to: '/soltain', label: 'Soltain' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between w-full px-6 py-3.5 bg-[#0b1622] border-b border-white/5 shadow-lg z-50">
      {/* Logo */}
      <Link
        to="/"
        onClick={() => setIsOpen(false)}
        className="group flex items-center ml-4 md:ml-8 lg:ml-12 select-none py-1 transition-all duration-300 ease-out"
      >
        <span className="text-3xl md:text-[34px] font-black tracking-tight text-white transition-all duration-300 group-hover:tracking-normal group-hover:drop-shadow-[0_0_16px_rgba(0,198,255,0.45)]">
          Solar
          <span className="text-[#00c6ff] font-black ml-0.5 inline-block transition-colors duration-300 group-hover:text-[#38bdf8]">
            V
          </span>
        </span>
      </Link>

      {/* Desktop nav links */}
      <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
        {NAV_LINKS.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className="px-4 py-2 rounded-lg text-sm font-semibold text-[#e2e8f0] transition-colors duration-200 hover:text-[#00c6ff] hover:bg-white/5"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right side: Contact + Hamburger */}
      <div className="flex items-center gap-3">
        <Link to="/contact">
          <button className="px-5 py-2 bg-[#00c6ff] text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:bg-[#0099cc] hover:scale-105 active:scale-95">
            Contact Us
          </button>
        </Link>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden text-xl text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0f2027]/95 backdrop-blur-sm shadow-lg flex flex-col py-3 md:hidden z-40">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 text-sm font-semibold text-[#e2e8f0] hover:text-[#00c6ff] hover:bg-white/5 transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
