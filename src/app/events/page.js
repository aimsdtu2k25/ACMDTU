"use client";

import Image from "next/image";

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: "UP-01",
      title: "Game Dev Workshop",
      date: "COMING SOON",
      category: "WORKSHOP",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
      description:
        "An immersive game development jam where participants design, build, and showcase original games. Learn game mechanics, pixel art, and rapid prototyping.",
      actionLabel: "COMING SOON",
    },
    {
      id: "UP-02",
      title: "Generative AI Workshop",
      date: "COMING SOON",
      category: "WORKSHOP",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      description:
        "Hands-on workshop exploring generative AI — from LLMs and diffusion models to prompt engineering and real-world applications. Open to all branches.",
      actionLabel: "COMING SOON",
    },
  ];

  const pastEvents = [
    {
      id: "PA-01",
      title: "Brainwave 2.0",
      date: "JAN 2026",
      category: "HACKATHON",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
      description:
        "36-hour hackathon at Raj Soin Hall with 4,500+ registrations and 650+ on-ground participants. Tracks: Hardware, Software, UI/UX, MLH, GameJam.",
    },
    {
      id: "PA-02",
      title: "Promptify — CSEdWeek",
      date: "DEC 2025",
      category: "COMPETITION",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
      description:
        "Generative AI prompt engineering competition with 250 registrations. Part of ACM Computer Science Education Week 2025.",
    },
    {
      id: "PA-03",
      title: "Cybersecurity Workshop",
      date: "NOV 2025",
      category: "WORKSHOP",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      description:
        "Reverse engineering, malware analysis, and anti-cheat systems. Making low-level security accessible to beginners.",
    },
    {
      id: "PA-04",
      title: "AI/ML Workshop",
      date: "OCT 2025",
      category: "WORKSHOP",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
      description:
        "Technical workshop with AIMS-DTU covering the full ML lifecycle. 250 attendees across foundations, model building, and deep learning.",
    },
  ];

  return (
    <div className="w-full bg-transparent text-slate-100 px-0 sm:px-4 md:px-8">
      <div className="max-w-7xl mx-auto py-4 sm:py-8 px-2 sm:px-8 space-y-10 sm:space-y-14">
        {/* SECTION: UPCOMING */}
        <section>
          <div className="mb-6 sm:mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="group relative flex flex-col border-2 border-blue-900/50 bg-[#0a0a0a] transition-all duration-300 hover:border-[#3182ce] shadow-[6px_6px_0px_0px_rgba(30,58,138,0.15)] hover:shadow-[8px_8px_0px_0px_rgba(49,130,206,0.18)] rounded-xl">
                {/* Frame */}
                <div className="relative h-52 w-full overflow-hidden border-b border-blue-900/50">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#3182ce] text-white px-3 py-1 text-xs font-black tracking-widest uppercase shadow-lg z-10 rounded">
                    {event.category}
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-mono text-xs text-[#4ECAFF] font-bold">
                      {event.date}
                    </span>
                    <span className="text-[10px] text-zinc-700 font-bold tracking-widest uppercase">
                      ID: {event.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight mb-2 uppercase group-hover:text-white transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <button
                    className={`w-full py-2 text-xs font-black uppercase tracking-widest transition-all rounded ${
                      event.actionLabel === "COMING SOON"
                        ? "bg-white/10 text-[#4ECAFF] border border-[#3182ce]/30 cursor-default"
                        : "bg-[#3182ce] text-white hover:bg-white hover:text-black"
                    }`}
                    disabled={event.actionLabel === "COMING SOON"}>
                    {event.actionLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
