import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { FaSolarPanel, FaLeaf, FaBolt, FaCheck, FaTools, FaHeadset } from 'react-icons/fa';
import menImage from '../../assests/men.avif';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const imageAnimation = useSpring({
    from: { height: '0px', opacity: 0 },
    to: { height: imageInView ? '500px' : '0px', opacity: imageInView ? 1 : 0 },
    config: { tension: 200, friction: 30 },
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Animated Image */}
        <div className="flex-1 overflow-hidden rounded-xl" ref={imageRef}>
          <animated.div style={imageAnimation} className="w-full overflow-hidden rounded-xl">
            <img
              src={menImage}
              alt="Solar Panel Service"
              className="w-full h-full object-cover rounded-xl max-h-[500px]"
            />
          </animated.div>
        </div>

        {/* Content */}
        <div className="flex-1 py-4">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00c6ff] text-center mb-6"
            data-aos="fade-up"
          >
            35 Years Of Experience In Solar Panels Service
          </h1>
          <p
            className="text-base md:text-lg text-[#e2e8f0] mb-8 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We provide high-quality solar panel installation, maintenance, and energy solutions
            to help you save costs and protect the environment.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-between gap-5 mb-8">
            <div
              className="flex-1 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-xl p-5 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <FaSolarPanel className="text-3xl text-white mx-auto mb-3" />
              <h2 className="text-2xl font-bold text-[#00c6ff] mb-1">5000+</h2>
              <p className="text-sm text-[#94a3b8]">Installed Panels</p>
            </div>
            <div
              className="flex-1 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-xl p-5 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <FaLeaf className="text-3xl text-white mx-auto mb-3" />
              <h2 className="text-2xl font-bold text-[#00c6ff] mb-1">100% Eco-Friendly</h2>
              <p className="text-sm text-[#94a3b8]">Sustainable Solutions</p>
            </div>
            <div
              className="flex-1 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-xl p-5 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              <FaBolt className="text-3xl text-white mx-auto mb-3" />
              <h2 className="text-2xl font-bold text-[#00c6ff] mb-1">24/7</h2>
              <p className="text-sm text-[#94a3b8]">Energy Support</p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="rounded-xl p-5 bg-white/5" data-aos="fade-up" data-aos-delay="1000">
            <h3 className="text-[#00c6ff] text-xl font-semibold mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[#e2e8f0]">
                <FaCheck className="text-[#00c6ff] flex-shrink-0" />
                <span>Certified and experienced professionals.</span>
              </li>
              <li className="flex items-center gap-2 text-[#e2e8f0]">
                <FaTools className="text-[#00c6ff] flex-shrink-0" />
                <span>Cutting-edge solar technology.</span>
              </li>
              <li className="flex items-center gap-2 text-[#e2e8f0]">
                <FaLeaf className="text-[#00c6ff] flex-shrink-0" />
                <span>Cost-effective and energy-efficient solutions.</span>
              </li>
              <li className="flex items-center gap-2 text-[#e2e8f0]">
                <FaHeadset className="text-[#00c6ff] flex-shrink-0" />
                <span>24/7 customer support and maintenance.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
