"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUp, Brain, Shield, Code, X } from "lucide-react";
import Image from "next/image";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import Events from "./events/page";
import Collaborators from "./components/Collaborators";

// Animated counter hook
function useCountUp(target, duration = 2000, startOnView = false) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!startOnView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [startOnView, hasStarted]);

  useEffect(() => {
    if (!hasStarted && startOnView) return;
    if (!startOnView) setHasStarted(true);
    if (!hasStarted) return;

    let start = 0;
    const end = parseInt(target.replace(/[^0-9]/g, ""), 10);
    if (end === 0) return;

    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, target, duration, startOnView]);

  const suffix = target.replace(/[0-9]/g, "");
  return { ref, display: hasStarted ? `${count.toLocaleString()}${suffix}` : "0" };
}

// Single stat card with counter
function StatCard({ stat, index }) {
  const { ref, display } = useCountUp(stat.value, 1800, true);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.08, borderColor: "rgba(49,130,206,0.5)", boxShadow: "0 0 30px rgba(78,202,255,0.15)" }}
      className="group text-center p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors duration-300 relative overflow-hidden">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(78,202,255,0.08) 0%, transparent 70%)" }}
      />
      <div className="text-3xl sm:text-4xl font-black text-[#4ECAFF] mb-2 relative z-10">
        {display}
      </div>
      <div className="text-sm text-slate-400 font-medium relative z-10">{stat.label}</div>
    </motion.div>
  );
}

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedYear, setSelectedYear] = useState("ALL");
  const [selectedCard, setSelectedCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Parallax scroll
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 600], [0, -120]);
  const orbParallax1 = useTransform(scrollY, [0, 800], [0, -80]);
  const orbParallax2 = useTransform(scrollY, [0, 800], [0, -50]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cursor glow tracker
  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCard]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Real workshop/event cards from ACM Doc
  const workshopCards = [
    {
      id: 1,
      title: "Brainwave 2.0",
      year: "2026",
      desc: "A monumental 36-hour AI and tech-driven hackathon at Raj Soin Hall. 4,500+ registrations, 650+ on-ground participants across Hardware, Software, UI/UX, MLH, and GameJam tracks. Sponsored by AIREV, SCAILE, GitHub, and Major League Hacking.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
      details: {
        date: "16-17 January 2026",
        venue: "Raj Soin Hall, Delhi Technological University",
        type: "36-hour Hackathon",
        organizer: "AIMS-DTU in collaboration with ACM and DTU",
        highlights: [
          "4,500+ online registrations from across India",
          "650+ selected on-ground participants in 180+ teams",
          "Tracks: Hardware, Software, UI/UX Design, MLH, GameJam",
          "Sponsored by AIREV, SCAILE, GitHub, and Major League Hacking",
          "Over ₹50 lakhs in benefits including internship opportunities",
          "Eco-friendly initiative: seed paper ID cards, biodegradable notepads, rice husk cups",
          "Inaugurated by representatives from Ericsson and Major League Hacking",
        ],
      },
    },
    {
      id: 2,
      title: "Promptify",
      year: "2025",
      desc: "CSEdWeek prompt engineering competition. Students harnessed generative AI by writing creative text prompts to produce target images. 250 registrations, 100 selected participants. Prize pool of 1.5K + Gemini API keys.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      details: {
        date: "13 December 2025",
        venue: "AB-3 218, Delhi Technological University",
        type: "Generative AI Insights & Prompt Engineering Competition",
        organizer: "ACM Student Chapter at DTU",
        highlights: [
          "Part of ACM Computer Science Education Week (CSEdWeek) 2025",
          "250 registrations, 100 students selected for the showdown",
          "Participants wrote creative prompts to generate target images using AI",
          "Judged on accuracy, prompt creativity, and efficiency",
          "Prize pool of ₹1.5K + Gemini API keys",
          "Zero barrier to entry — no coding experience required",
          "Live showcase of top AI-generated images in real-time",
        ],
      },
    },
    {
      id: 3,
      title: "AI/ML Workshop",
      year: "2025",
      desc: "Technical workshop in collaboration with AIMS-DTU covering the complete ML lifecycle — from data preprocessing to building and evaluating models. 250 attendees across 3 phases: Foundations, Hands-On Model Building, and Beyond the Basics.",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
      details: {
        date: "29 October 2025",
        venue: "BR Auditorium, Delhi Technological University",
        type: "Technical Workshop & Coding Session",
        organizer: "ACM Student Chapter at DTU with AIMS-DTU",
        highlights: [
          "250 attendees, 100 selected for hands-on showdown",
          "Phase 1: Foundations of AI/ML — supervised vs unsupervised learning",
          "Phase 2: Hands-On Model Building with real-world datasets",
          "Phase 3: Beyond the Basics — neural networks, deep learning, NLP",
          "Cross-department reach: ECE, Mathematics, Mechanical Engineering students",
          "Curated resource kits with datasets, notebooks, and reading lists",
          "Organized without any monetary funding",
        ],
      },
    },
    {
      id: 4,
      title: "Cybersecurity Workshop",
      year: "2025",
      desc: "Introduction to reverse engineering, covering binaries, disassemblers/decompilers, malware analysis, game hacking, and anti-cheat systems. Designed to make low-level security concepts accessible to beginners.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      details: {
        date: "12 November 2025",
        venue: "AB3 218, Delhi Technological University",
        type: "Technical Workshop & Coding Session",
        organizer: "ACM Student Chapter at DTU",
        highlights: [
          "Fundamentals of reverse engineering and binary analysis",
          "Hands-on with disassemblers and decompilers",
          "Practical applications: malware analysis and game hacking",
          "Anti-cheat systems deep dive",
          "Beginner-friendly: strong conceptual foundation without prerequisites",
          "Understanding software analysis beyond source code",
        ],
      },
    },
    {
      id: 5,
      title: "AI Hack Days",
      year: "2025",
      desc: "A series of mini hackathons throughout the semester, bringing together students for quick-fire AI and coding challenges. Focused on rapid prototyping, creative problem-solving, and collaborative learning.",
      image:
        "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800",
      details: {
        date: "Throughout 2025",
        venue: "Academic Block 3, Delhi Technological University",
        type: "Mini Hackathon Series",
        organizer: "ACM Student Chapter at DTU",
        highlights: [
          "Multiple mini hackathons across the semester",
          "Quick-fire AI and coding challenges",
          "Rapid prototyping and creative problem-solving",
          "Collaborative team-based learning environment",
          "Open to all branches and skill levels",
          "Building a culture of continuous innovation",
        ],
      },
    },
  ];

  const filteredCards =
    selectedYear === "ALL"
      ? workshopCards
      : workshopCards.filter((card) => card.year === selectedYear);

  // Focus areas from PDF
  const focusAreas = [
    {
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      desc: "Exploration into deep learning, computer vision and data-driven problem-solving to equip students with the skills needed at the forefront of modern computing.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      desc: "Digital safety and defense by promoting awareness, ethical hacking practices, and a robust understanding of network security.",
    },
    {
      icon: Code,
      title: "Technical Aptitude",
      desc: "Cutting-edge software engineering practices, algorithmic thinking, and system architecture to build an unshakable foundation in core computer science principles.",
    },
  ];

  // Impact stats
  const stats = [
    { value: "5000+", label: "Students Impacted" },
    { value: "4+", label: "Major Events" },
    { value: "4500+", label: "Hackathon Registrations" },
    { value: "650+", label: "On-Ground Participants" },
  ];

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

      {/* CURSOR GLOW */}
      <div
        className="fixed pointer-events-none z-[1] transition-opacity duration-300"
        style={{
          left: mousePos.x - 150,
          top: mousePos.y - 150,
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(49,130,206,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
          opacity: mousePos.x === 0 ? 0 : 1,
        }}
      />

      {/* NAVBAR */}
      <Navbar />

      <main className="relative z-10 px-2 sm:px-8 md:px-16 pt-20 sm:pt-28">
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative flex min-h-fit sm:min-h-[85vh] items-center justify-center px-2 sm:px-6 py-12 sm:py-12 overflow-hidden">

          {/* Corner brackets — hidden on mobile */}
          <div className="absolute inset-0 pointer-events-none z-[2] hidden sm:block">
            {/* Top-left bracket */}
            <svg className="absolute top-4 left-4 sm:top-6 sm:left-6 w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 48 48" fill="none">
              <motion.path
                d="M0 16 L0 0 L16 0"
                stroke="rgba(78,202,255,0.4)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
              <motion.circle cx="0" cy="0" r="2" fill="#4ECAFF"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </svg>
            {/* Top-right bracket */}
            <svg className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 48 48" fill="none">
              <motion.path
                d="M48 16 L48 0 L32 0"
                stroke="rgba(78,202,255,0.4)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.circle cx="48" cy="0" r="2" fill="#4ECAFF"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </svg>
            {/* Bottom-left bracket */}
            <svg className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 48 48" fill="none">
              <motion.path
                d="M0 32 L0 48 L16 48"
                stroke="rgba(78,202,255,0.4)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
              <motion.circle cx="0" cy="48" r="2" fill="#4ECAFF"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              />
            </svg>
            {/* Bottom-right bracket */}
            <svg className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 48 48" fill="none">
              <motion.path
                d="M48 32 L48 48 L32 48"
                stroke="rgba(78,202,255,0.4)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
              <motion.circle cx="48" cy="48" r="2" fill="#4ECAFF"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: 3 }}
              />
            </svg>
          </div>

          {/* Floating tech labels in corners */}
          <div className="absolute inset-0 pointer-events-none z-[2] hidden sm:block">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute top-8 left-24 text-[9px] font-mono uppercase tracking-[0.3em] text-[#3182ce]/40">
              est. 2025
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              className="absolute top-8 right-24 text-[9px] font-mono uppercase tracking-[0.3em] text-[#3182ce]/40">
              delhi, india
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 0.8 }}
              className="absolute bottom-8 left-24 text-[9px] font-mono uppercase tracking-[0.3em] text-[#3182ce]/40">
              ai / ml / cyber
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.8 }}
              className="absolute bottom-8 right-24 text-[9px] font-mono uppercase tracking-[0.3em] text-[#3182ce]/40">
              5000+ impacted
            </motion.div>
          </div>

          {/* Horizontal scan line — hidden on mobile to prevent lag */}
          <motion.div
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-px pointer-events-none z-[1] hidden sm:block"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(78,202,255,0.08) 30%, rgba(78,202,255,0.15) 50%, rgba(78,202,255,0.08) 70%, transparent 100%)",
            }}
          />

          {/* Mobile: CSS-animated particles and glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden sm:hidden">
            {/* Floating orbs */}
            <div
              className="absolute top-[15%] left-[20%] w-[200px] h-[200px] rounded-full opacity-20 animate-[float1_8s_ease-in-out_infinite]"
              style={{
                background: "radial-gradient(circle, #3182ce 0%, transparent 70%)",
                filter: "blur(50px)",
              }}
            />
            <div
              className="absolute bottom-[20%] right-[10%] w-[180px] h-[180px] rounded-full opacity-15 animate-[float2_10s_ease-in-out_infinite]"
              style={{
                background: "radial-gradient(circle, #4ECAFF 0%, transparent 70%)",
                filter: "blur(50px)",
              }}
            />
            <div
              className="absolute top-[50%] left-[60%] w-[120px] h-[120px] rounded-full opacity-10 animate-[float3_12s_ease-in-out_infinite]"
              style={{
                background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
            {/* Tiny floating dots */}
            <div className="absolute top-[12%] left-[15%] w-1 h-1 rounded-full bg-[#4ECAFF] opacity-60 animate-[twinkle_3s_ease-in-out_infinite]" style={{ boxShadow: "0 0 6px rgba(78,202,255,0.6)" }} />
            <div className="absolute top-[30%] right-[20%] w-1.5 h-1.5 rounded-full bg-[#4ECAFF] opacity-40 animate-[twinkle_4s_ease-in-out_infinite_1s]" style={{ boxShadow: "0 0 8px rgba(78,202,255,0.5)" }} />
            <div className="absolute bottom-[35%] left-[25%] w-1 h-1 rounded-full bg-[#3182ce] opacity-50 animate-[twinkle_3.5s_ease-in-out_infinite_0.5s]" style={{ boxShadow: "0 0 6px rgba(49,130,206,0.5)" }} />
            <div className="absolute top-[60%] right-[30%] w-1 h-1 rounded-full bg-[#7c3aed] opacity-40 animate-[twinkle_5s_ease-in-out_infinite_2s]" style={{ boxShadow: "0 0 6px rgba(124,58,237,0.5)" }} />
            <div className="absolute bottom-[15%] left-[50%] w-1.5 h-1.5 rounded-full bg-[#4ECAFF] opacity-30 animate-[twinkle_4.5s_ease-in-out_infinite_1.5s]" style={{ boxShadow: "0 0 8px rgba(78,202,255,0.4)" }} />
            <div className="absolute top-[45%] left-[10%] w-1 h-1 rounded-full bg-[#4ECAFF] opacity-50 animate-[twinkle_3s_ease-in-out_infinite_2.5s]" style={{ boxShadow: "0 0 6px rgba(78,202,255,0.6)" }} />
          </div>

          {/* Animated gradient orbs with parallax — desktop only */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block">
            <motion.div
              animate={{
                x: [0, 30, -20, 0],
                y: [0, -40, 20, 0],
                scale: [1, 1.15, 0.95, 1],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              style={{ y: orbParallax1 }}
              className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-20"
            >
              <div className="w-full h-full rounded-full" style={{
                background: "radial-gradient(circle, #3182ce 0%, transparent 70%)",
                filter: "blur(80px)",
              }} />
            </motion.div>
            <motion.div
              animate={{
                x: [0, -25, 35, 0],
                y: [0, 30, -25, 0],
                scale: [1, 0.9, 1.1, 1],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              style={{ y: orbParallax2 }}
              className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full opacity-15"
            >
              <div className="w-full h-full rounded-full" style={{
                background: "radial-gradient(circle, #4ECAFF 0%, transparent 70%)",
                filter: "blur(80px)",
              }} />
            </motion.div>
            <motion.div
              animate={{
                x: [0, 20, -15, 0],
                y: [0, -20, 30, 0],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              style={{ y: orbParallax1 }}
              className="absolute top-1/2 right-1/3 w-[250px] h-[250px] rounded-full opacity-10"
            >
              <div className="w-full h-full rounded-full" style={{
                background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
                filter: "blur(60px)",
              }} />
            </motion.div>
          </div>

          {/* Grid lines background */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ y: heroParallax }}
            className="relative w-full max-w-4xl text-center mx-auto z-10">

            {/* Animated emblem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 150, damping: 12 }}
              className="flex justify-center mb-6 sm:mb-10">
              <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-68 md:h-68 flex items-center justify-center">

                {/* Outer orbital ring with dots — hidden on mobile */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 hidden sm:block">
                  <div className="w-full h-full rounded-full border border-[#3182ce]/15" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#4ECAFF] shadow-[0_0_10px_rgba(78,202,255,0.8)]" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#3182ce] shadow-[0_0_8px_rgba(49,130,206,0.6)]" />
                </motion.div>

                {/* Mobile: simple ring with subtle pulse */}
                <div className="absolute inset-0 sm:hidden rounded-full border border-[#3182ce]/25" />
                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-2 sm:hidden rounded-full"
                  style={{
                    background: "radial-gradient(circle, #3182ce 0%, transparent 60%)",
                    filter: "blur(20px)",
                  }}
                />

                {/* Second orbital — hidden on mobile */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 sm:inset-5 hidden sm:block">
                  <div className="w-full h-full rounded-full border border-dashed border-white/8" />
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#7c3aed] shadow-[0_0_8px_rgba(124,58,237,0.6)]" />
                </motion.div>

                {/* Pulsing glow layers */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.08, 0.15] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "radial-gradient(circle, #3182ce 0%, transparent 60%)",
                    filter: "blur(40px)",
                  }}
                />
                <motion.div
                  animate={{ scale: [1, 0.9, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute inset-8 rounded-full"
                  style={{
                    background: "radial-gradient(circle, #4ECAFF 0%, transparent 60%)",
                    filter: "blur(25px)",
                  }}
                />

                {/* Inner hexagonal border feel — hidden on mobile */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-10 sm:inset-12 rounded-full border border-[#4ECAFF]/10 hidden sm:block"
                  style={{
                    borderTopColor: "rgba(78,202,255,0.35)",
                    borderLeftColor: "rgba(49,130,206,0.25)",
                  }}
                />

                {/* Particle dots — hidden on mobile */}
                <div className="hidden sm:block">
                {[
                  { top: "15%", left: "10%", size: 3, delay: 0 },
                  { top: "75%", left: "85%", size: 2, delay: 1.5 },
                  { top: "25%", left: "80%", size: 2.5, delay: 0.8 },
                  { top: "80%", left: "15%", size: 2, delay: 2 },
                  { top: "50%", left: "5%", size: 1.5, delay: 0.5 },
                  { top: "10%", left: "60%", size: 2, delay: 1.2 },
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
                    className="absolute rounded-full bg-[#4ECAFF]"
                    style={{
                      top: p.top,
                      left: p.left,
                      width: p.size,
                      height: p.size,
                      boxShadow: `0 0 ${p.size * 3}px rgba(78,202,255,0.5)`,
                    }}
                  />
                ))}
                </div>

                {/* Center content */}
                <div className="relative z-10 flex flex-col items-center">
                  <motion.span
                    animate={{ textShadow: ["0 0 20px rgba(78,202,255,0.3)", "0 0 40px rgba(78,202,255,0.6)", "0 0 20px rgba(78,202,255,0.3)"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="text-4xl sm:text-5xl md:text-6xl font-black text-[#4ECAFF] tracking-tight">
                    ACM
                  </motion.span>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="h-px w-6 bg-gradient-to-r from-transparent to-[#3182ce]/50" />
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] text-slate-400">
                      DTU Chapter
                    </span>
                    <div className="h-px w-6 bg-gradient-to-l from-transparent to-[#3182ce]/50" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Title with staggered reveal */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[clamp(2.5rem,7vw,5rem)] font-extrabold leading-[1.05] tracking-tight mb-3 bg-linear-to-r from-[#e0f0fa] via-[#7ec8e3] to-[#2a88c8] bg-clip-text text-transparent">
              ACM Student Chapter
            </motion.h1>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mb-4 h-[2px] w-32 bg-gradient-to-r from-transparent via-[#3182ce] to-transparent"
            />

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-xl sm:text-2xl font-medium text-slate-300 mb-8 tracking-wide">
              Delhi Technological University
            </motion.h2>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-row justify-center gap-3 sm:gap-4">
              <a
                href="#about"
                className="group relative px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#3182ce] text-white font-bold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(49,130,206,0.4)]">
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#workshops"
                className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white/5 border border-white/15 text-white font-bold text-sm sm:text-base backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                Explore Events
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-8 sm:mt-16">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2 text-slate-500">
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll</span>
                <div className="w-5 h-8 rounded-full border border-slate-600 flex justify-center pt-1.5">
                  <motion.div
                    animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1 h-1.5 rounded-full bg-slate-400"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* OUR MISSION SECTION */}
        <section
          id="about"
          className="py-12 sm:py-18 px-2 sm:px-6 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-3xl sm:text-4xl font-black mb-6 bg-linear-to-r from-white to-[#7ec8e3] bg-clip-text text-transparent">
              Our Mission
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              The DTU ACM Student Chapter, established in 2025, is dedicated to
              advancing the application of computing within and beyond the
              horizons of Delhi Technological University. Driven by a firm desire
              to bridge the gap between theoretical academics and practical
              industry demands, the Chapter is committed to cultivating the next
              generation of technical leaders and providing an inclusive platform
              where students can build a better tomorrow.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Impacting{" "}
              <span className="font-bold text-[#7ec8e3]">5000+ students</span>{" "}
              through workshops, hackathons, and technical events across AI/ML,
              Cybersecurity, and Technical Aptitude.
            </motion.p>
          </div>
        </section>

        {/* IMPACT STATS SECTION — animated counters */}
        <section className="py-10 sm:py-14 px-2 sm:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </section>

        {/* FOCUS AREAS SECTION */}
        <section className="py-10 sm:py-16 px-2 sm:px-6 border-t border-white/5 relative overflow-hidden">
          {/* Background glow that fades in */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none hidden sm:block"
            style={{
              background: "radial-gradient(ellipse, rgba(49,130,206,0.06) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-3xl sm:text-4xl font-black mb-10 text-center bg-linear-to-r from-white to-[#7ec8e3] bg-clip-text text-transparent">
              Core Focus Areas
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {focusAreas.map((area, i) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    whileHover={{
                      scale: 1.03,
                      y: -4,
                      transition: { duration: 0.2 },
                    }}
                    className="group relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#3182ce]/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(49,130,206,0.12)] overflow-hidden">
                    {/* Hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: "radial-gradient(circle at 50% 0%, rgba(49,130,206,0.08) 0%, transparent 60%)",
                      }}
                    />
                    <Icon className="w-10 h-10 text-[#4ECAFF] mb-4 relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(78,202,255,0.4)] transition-all duration-300" />
                    <h3 className="text-lg font-bold text-white mb-3 relative z-10">
                      {area.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed relative z-10">
                      {area.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PAST EVENTS & WORKSHOPS SECTION */}
        <section
          id="workshops"
          className="py-14 sm:py-20 px-2 sm:px-6 border-t border-white/5 relative overflow-hidden">
          {/* Section background glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none hidden sm:block"
            style={{
              background: "radial-gradient(ellipse, rgba(49,130,206,0.05) 0%, transparent 60%)",
              filter: "blur(80px)",
            }}
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col items-center mb-8 gap-6 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-4xl sm:text-5xl font-black mb-2 italic tracking-tighter bg-linear-to-r from-white to-slate-500 bg-clip-text text-transparent">
                PAST EVENTS & WORKSHOPS
              </motion.h2>
              {/* Animated decorative line under heading */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mx-auto mb-6 h-[2px] w-24 sm:w-40 bg-gradient-to-r from-transparent via-[#3182ce] to-transparent origin-center"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {["ALL", "2025", "2026"].map((year) => (
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
              </motion.div>
            </div>
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredCards.map((card, index) => (
                  <motion.div
                    key={card.id}
                    layout
                    initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="group relative bg-[#1a1c20]/40 backdrop-blur-md border border-gray-800 rounded-lg overflow-hidden hover:border-[#3182ce] shadow-none">
                    {/* Card image area */}
                    <div className="relative h-64 sm:h-80">
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
                      {/* Desktop hover overlay */}
                      <div className="absolute inset-0 p-6 sm:p-8 bg-[#0a0a0b]/95 backdrop-blur-xl hidden sm:flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20 shadow-none">
                        <h3 className="text-xl font-bold text-[#3182ce] italic mb-3">
                          {card.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 grow">
                          {card.desc}
                        </p>
                        <button
                          onClick={() => setSelectedCard(card)}
                          className="bg-[#3182ce] text-white py-3 px-6 font-bold text-sm uppercase tracking-wide hover:bg-[#2b6cb0] transition-colors w-full text-center cursor-pointer">
                          Read More
                        </button>
                      </div>
                    </div>
                    {/* Mobile bottom section with description + button */}
                    <div className="sm:hidden p-4 flex flex-col gap-3">
                      <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                        {card.desc}
                      </p>
                      <button
                        onClick={() => setSelectedCard(card)}
                        className="bg-[#3182ce] text-white py-2.5 px-4 font-bold text-xs uppercase tracking-wide hover:bg-[#2b6cb0] transition-colors w-full text-center cursor-pointer rounded">
                        Read More
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* COLLABORATING SOCIETIES */}
        <Collaborators />

        {/* EVENTS SECTION */}
        <section id="events" className="py-10 sm:py-16 px-2 sm:px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50, scale: 0.9, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl sm:text-5xl font-black mb-2 italic tracking-tighter bg-linear-to-r from-white to-slate-500 bg-clip-text text-transparent text-center">
              UPCOMING EVENTS
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mx-auto mb-6 h-[2px] w-24 sm:w-40 bg-gradient-to-r from-transparent via-[#3182ce] to-transparent origin-center"
            />
          </div>
          <Events />
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="pt-10 sm:pt-14">
          <ContactUs />
        </section>
      </main>

      {/* READ MORE MODAL OVERLAY */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedCard(null)}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            {/* Modal Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                duration: 0.4,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0d1017] shadow-2xl">
              {/* Hero Image */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden rounded-t-2xl">
                <Image
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1017] via-[#0d1017]/40 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="text-[#4ECAFF] font-bold text-xs tracking-widest uppercase mb-1">
                    {selectedCard.year}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedCard.title}
                  </h2>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 border border-white/20 text-white hover:bg-white/20 transition-colors z-10 cursor-pointer">
                <X size={20} />
              </button>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {selectedCard.desc}
                </p>

                {selectedCard.details && (
                  <>
                    {/* Event Meta */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {[
                        { label: "Date", value: selectedCard.details.date },
                        { label: "Venue", value: selectedCard.details.venue },
                        { label: "Type", value: selectedCard.details.type },
                        {
                          label: "Organized by",
                          value: selectedCard.details.organizer,
                        },
                      ].map((meta) => (
                        <div
                          key={meta.label}
                          className="p-3 rounded-lg bg-white/5 border border-white/5">
                          <div className="text-[10px] text-[#4ECAFF] font-bold uppercase tracking-widest mb-1">
                            {meta.label}
                          </div>
                          <div className="text-sm text-slate-200">
                            {meta.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3">
                        Key Highlights
                      </h3>
                      <ul className="space-y-2">
                        {selectedCard.details.highlights.map(
                          (highlight, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: idx * 0.05,
                              }}
                              className="flex items-start gap-3 text-sm text-slate-300">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3182ce] shrink-0" />
                              {highlight}
                            </motion.li>
                          )
                        )}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
