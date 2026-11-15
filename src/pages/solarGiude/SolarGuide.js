import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "How does solar energy work?",
    answer:
      "Solar energy is harnessed through photovoltaic (PV) cells, typically made of silicon. When sunlight strikes these cells, it excites electrons and generates a direct current (DC). This DC electricity is then converted to alternating current (AC) by an inverter, making it usable for homes and businesses. The electricity produced can power appliances or be fed back into the grid, and excess energy can be stored in batteries for later use.",
  },
  {
    question: "How much does a solar energy system cost?",
    answer:
      "The cost of a solar energy system varies based on factors such as system size, location, type of panels, and installation complexity. As of late 2023, the average cost for a residential solar panel installation in the U.S. ranges from $15,000 to $30,000 before tax credits and incentives, which can significantly reduce the overall cost.",
  },
  {
    question: "What maintenance is required for solar panels?",
    answer:
      "Solar panels require minimal maintenance. Periodic cleaning to remove dust, debris, and bird droppings is recommended — typically once or twice a year. It's also advisable to have a professional inspect the system every few years to check wiring, inverters, and mounting hardware for optimal performance.",
  },
  {
    question: "What is net metering, and how does it work?",
    answer:
      "Net metering is a billing arrangement that allows residential and commercial customers who generate their own electricity to receive credit for the excess electricity they produce and feed back into the grid. Your utility meter tracks the net difference — when you export more than you consume, credits offset future bills.",
  },
  {
    question: "What are the benefits of installing solar panels?",
    answer:
      "Solar panels can significantly lower your electricity costs by generating your own power. Additional benefits include reduced carbon footprint, increased property value, energy independence, and eligibility for government tax credits and rebates.",
  },
  {
    question: "How long do solar panels last?",
    answer:
      "Solar panels typically have a lifespan of 25 to 30 years or more. Most manufacturers provide warranties that guarantee performance for at least 25 years; however, many panels continue to produce electricity beyond this period at reduced efficiency levels (often around 80% of their original capacity).",
  },
  {
    question: "Can I completely go off-grid with solar energy?",
    answer:
      "Yes, it is possible to go completely off-grid with solar energy. You'll need an appropriately sized solar array, a battery storage system to cover nighttime and cloudy days, and a backup generator for extended low-sunlight periods. Careful planning around your energy usage is key.",
  },
  {
    question: "Do I need a solar battery storage system?",
    answer:
      "Battery storage is optional but highly useful for backup power and off-grid setups. Without storage, your system feeds excess power to the grid (net metering). With storage, you can use that energy during outages or at night, increasing your energy independence.",
  },
];

const SolarGuide = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-[#0b1626] via-[#102d42] to-[#0a1523] text-white overflow-hidden">
      {/* Background radial gradient glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-gradient-to-r from-[#00c6ff]/20 via-[#0072ff]/15 to-transparent blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#00c6ff]/10 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        className="relative max-w-4xl mx-auto z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[#38bdf8] via-[#00c6ff] to-[#60a5fa] bg-clip-text text-transparent mb-4">
            Your Guide to Solar Solutions
          </h2>
          <p className="text-base md:text-lg text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
            Explore everything you need to know about solar energy, from installation to savings.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 backdrop-blur-md ${
                  isOpen
                    ? "bg-gradient-to-r from-white/[0.12] to-white/[0.06] border-[#00c6ff]/60 shadow-[0_4px_25px_rgba(0,198,255,0.18)]"
                    : "bg-white/[0.05] border-white/10 hover:bg-white/[0.08] hover:border-white/25"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className={`text-base md:text-lg font-semibold pr-4 transition-colors duration-200 ${isOpen ? "text-[#00c6ff]" : "text-[#e2e8f0]"}`}>
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen ? "bg-[#00c6ff] text-[#0a1628] rotate-180" : "bg-white/10 text-[#00c6ff]"
                  }`}>
                    <FaChevronDown className="text-xs transition-transform duration-300" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 md:px-6 pb-6 text-sm md:text-base text-[#cbd5e1] leading-relaxed border-t border-white/10 pt-4">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default SolarGuide;
