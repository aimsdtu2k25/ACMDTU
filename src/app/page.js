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

  useEffect(() => {
    const handleScroll = () => {
      // Shrink after 50px of scrolling
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- DATA FROM YOUR WORKSHOP PAGE ---
  const workshopCards = [
    {
      id: 1,
      title: "COMPUTATIONAL INTELLIGENCE",
      year: "2020",
      desc: "8th Summer Internship Cum Workshop on Computational Intelligence and system architectures.",
      image:
        "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "NEXT WORD PREDICTION",
      year: "2022",
      desc: "Project on Next Word Prediction in Song Lyrics using advanced Machine Learning models.",
      image:
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "FAKE NEWS DETECTION",
      year: "2021",
      desc: "Studying formality style transfer using Seq2Seq model and neural networks for data analysis.",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      title: "IMAGE CAPTION GENERATION",
      year: "2021",
      desc: "Detailed analysis of Indian Unicorns, top companies, and generating captions dynamically.",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      title: "MULTIPLE DISEASE PREDICTION",
      year: "2022",
      desc: "Use of passive voice in reporting and building a multiple disease prediction system.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      title: "SIGN LANGUAGE DETECTION",
      year: "2020",
      desc: "Sign language character recognition and speech emotion detection using computer vision.",
      image:
        "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div
      className="min-h-screen text-slate-100 selection:bg-[#3182ce]/30"
      style={{ background: "#05080f" }}
    >
      {/* PERSISTENT BACKGROUND */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 50%, rgba(56, 139, 183, 0.15) 0%, rgba(30, 90, 140, 0.05) 30%, transparent 70%)`,
        }}
      />

      {/* FLOATING NAVBAR (STAYING AS SPECIFIED BY SUPERIOR) */}
      <div className="fixed top-8 left-0 right-0 z-50 px-6">
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
          className="mx-auto rounded-full border border-white/10 bg-black/40 backdrop-blur-xl px-8 py-3 shadow-2xl"
        >
          <Navbar isScrolled={isScrolled} />
        </motion.div>
      </div>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section
          id="home"
          className="flex min-h-screen items-center justify-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-5xl text-left md:pl-20"
          >
            <h1
              className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight"
              style={{
                background:
                  "linear-gradient(to right, #cce8f4, #7ec8e3, #2a88c8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Welcome to ACM DTU
              <br />
              Student Chapter
            </h1>
          </motion.div>
        </section>

        {/* WORKSHOPS SECTION (ID matches Navbar) */}
        <section id="workshops" className="py-32 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-black mb-16 italic tracking-tighter bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
              PAST WORKSHOPS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workshopCards.map((card) => (
                <div
                  key={card.id}
                  className="group relative h-80 bg-[#1a1c20]/40 backdrop-blur-md border border-gray-800 transition-all duration-300 rounded-sm overflow-hidden shadow-none ring-0 outline-none hover:border-[#3182ce] hover:shadow-none hover:ring-0 hover:outline-none"
                >
                  {/* Main Card Content (Pops with color on hover) */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 opacity-40 group-hover:opacity-60"
                    />
                    {/* Dark gradient to ensure text remains readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-[#05080f]/40 to-transparent" />
                  </div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-center transition-all duration-300 z-10">
                    <div className="text-[#3182ce] font-bold text-sm mb-4 tracking-widest uppercase transition-colors group-hover:text-blue-400">
                      {card.year}
                    </div>
                    <h3 className="text-3xl font-extrabold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent italic leading-tight transition-all duration-300 group-hover:from-white group-hover:to-blue-200">
                      {card.title}
                    </h3>
                  </div>

                  {/* Hover Overlay (Revealing Details) */}
                  <div className="absolute inset-0 p-8 bg-[#0a0a0b]/1 backdrop-blur-xl flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20 shadow-none ring-0 outline-none">
                    <h3 className="text-xl font-bold text-[#3182ce] italic mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 grow">
                      {card.desc}
                    </p>
                    <button className="bg-[#3182ce] text-white py-3 px-6 font-bold text-sm uppercase tracking-wide hover:bg-[#2b6cb0] transition-colors w-full text-center ">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EVENTS SECTION (ID matches Navbar) */}
        <section id="events">
          <Events />
        </section>

        {/* CONTACT SECTION (ID matches Navbar) */}
        <section id="contact" className="pt-20">
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
            className="fixed bottom-8 right-8 bg-white text-black p-4 rounded-full shadow-2xl z-50 hover:bg-gray-200 transition-colors"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
