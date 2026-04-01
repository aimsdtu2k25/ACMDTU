"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import Events from "./events/page";

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedYear, setSelectedYear] = useState("ALL");
  // Workshop cards data
  const workshopCards = [
    {
      id: 1,
      title: "ACM Research Symposium",
      year: "2023",
      desc: "Annual showcase of student research in AI, ML, and Cybersecurity. Keynotes by alumni and industry experts.",
      image:
        "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "HackDTU 2022",
      year: "2022",
      desc: "48-hour hackathon with 300+ participants, 40+ projects, and mentorship from Google, Microsoft, and ACM India.",
      image:
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Women in Computing Summit",
      year: "2021",
      desc: "Panel discussions, workshops, and networking for women in tech. Supported by ACM-W and DTU faculty.",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      title: "Quantum Computing Bootcamp",
      year: "2021",
      desc: "Hands-on sessions on quantum algorithms, Qiskit, and IBM Q Experience. Open to all branches.",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      title: "Open Source Week",
      year: "2022",
      desc: "Contribute to real-world projects, daily workshops on Git, GitHub, and open source best practices.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      title: "ACM Coding League",
      year: "2020",
      desc: "Semester-long competitive programming league with weekly contests and prizes for top performers.",
      image:
        "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const filteredCards =
    selectedYear === "ALL"
      ? workshopCards
      : workshopCards.filter((card) => card.year === selectedYear);
  return (
    <div
      className="min-h-screen text-slate-100 selection:bg-[#3182ce]/30 px-2 sm:px-4 md:px-8"
      style={{ background: "#05080f" }}>
      {/* PERSISTENT BACKGROUND */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 50%, rgba(56, 139, 183, 0.15) 0%, rgba(30, 90, 140, 0.05) 30%, transparent 70%)`,
        }}
      />

      {/* FLOATING NAVBAR (STAYING AS SPECIFIED BY SUPERIOR) */}
      <div className="fixed top-8 left-0 right-0 z-50 px-2 sm:px-6">
        <motion.div
          layout // Adds smooth layout transitions
          initial={{ maxWidth: "1152px" }} // Explicitly start at full width
          animate={{
            maxWidth: isScrolled ? "800px" : "1152px",
          }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier for a more "premium" feel
          }}
          className="mx-auto rounded-full border border-white/10 bg-black/40 backdrop-blur-xl px-8 py-3 shadow-2xl">
          <Navbar isScrolled={isScrolled} />
        </motion.div>
      </div>

      <main className="relative z-10 px-2 sm:px-8 md:px-16 pt-32">
        {/* HERO SECTION */}
        <section
          id="home"
          className="flex min-h-[70vh] items-center justify-center px-2 sm:px-6 py-8 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-4xl text-center mx-auto">
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-tight tracking-tight mb-4 bg-linear-to-r from-[#cce8f4] to-[#2a88c8] bg-clip-text text-transparent drop-shadow-lg">
              ACM Student Chapter, DTU
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-200 mb-4">
              Empowering Innovators Since 2009
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-6">
              India’s leading ACM student chapter for research, coding, and tech
              events.
              <br className="hidden sm:inline" />
              Join{" "}
              <span className="font-bold text-[#7ec8e3]">500+ members</span> in
              workshops, hackathons, and global competitions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a
                href="#workshops"
                className="px-6 py-2 rounded-full bg-[#3182ce] text-white font-bold text-base shadow hover:bg-[#2366a2] transition">
                Explore Events
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-base shadow hover:bg-white/20 transition">
                Contact Us
              </a>
            </div>
          </motion.div>
        </section>

        {/* WORKSHOPS SECTION (ID matches Navbar) */}
        <section
          id="workshops"
          className="py-24 sm:py-32 px-2 sm:px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-10 gap-8 text-center">
              <h2 className="text-4xl sm:text-5xl font-black mb-10 italic tracking-tighter bg-linear-to-r from-white to-slate-500 bg-clip-text text-transparent">
                PAST EVENTS & WORKSHOPS
              </h2>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {["ALL", "2020", "2021", "2022"].map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-8 py-2.5 rounded-full border text-xs font-bold tracking-widest transition-all duration-300 ${
                      selectedYear === year
                        ? "bg-[#3182ce] border-[#3182ce] text-white"
                        : "border-white/10 text-gray-400 hover:border-[#3182ce]/50 hover:text-white"
                    }`}>
                    {year}
                  </button>
                ))}
              </div>
            </div>
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredCards.map((card) => (
                  <motion.div
                    key={card.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className="group relative h-80 bg-[#1a1c20]/40 backdrop-blur-md border border-gray-800 rounded-lg overflow-hidden hover:border-[#3182ce] shadow-none">
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 opacity-40 group-hover:opacity-60"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#05080f] via-[#05080f]/40 to-transparent" />
                    </div>
                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-center transition-all duration-300 z-10">
                      <div className="text-[#3182ce] font-bold text-sm mb-4 tracking-widest uppercase group-hover:text-blue-400">
                        {card.year}
                      </div>
                      <h3 className="text-3xl font-extrabold bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent italic leading-tight group-hover:from-white group-hover:to-blue-200">
                        {card.title}
                      </h3>
                    </div>
                    <div className="absolute inset-0 p-6 sm:p-8 bg-[#0a0a0b]/1 backdrop-blur-xl flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20 shadow-none">
                      <h3 className="text-xl font-bold text-[#3182ce] italic mb-3">
                        {card.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-6 grow">
                        {card.desc}
                      </p>
                      <button className="bg-[#3182ce] text-white py-3 px-6 font-bold text-sm uppercase tracking-wide hover:bg-[#2b6cb0] transition-colors w-full text-center">
                        Read More
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* EVENTS SECTION (ID matches Navbar) */}
        <section id="events" className="py-16 sm:py-24 px-2 sm:px-8">
          <Events />
        </section>

        {/* CONTACT SECTION (ID matches Navbar) */}
        <section id="contact" className="pt-16 sm:pt-20">
          <ContactUs />
        </section>
      </main>

      {/* SCROLL TO TOP */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-white text-black p-4 rounded-full shadow-2xl z-50 hover:bg-gray-200 transition-colors">
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
