"use client";

import Image from "next/image";

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: "UP-01",
      title: "ACM Coding Marathon 2026",
      date: "APR 20, 2026",
      category: "CONTEST",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      description:
        "24-hour coding contest for all DTU students. Prizes, certificates, and ACM India recognition.",
      actionLabel: "REGISTER NOW",
    },
    {
      id: "UP-02",
      title: "ACM Distinguished Speaker Talk",
      date: "MAY 05, 2026",
      category: "TALK",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      description:
        "Invited talk by Dr. Anjali Mehta on 'AI for Social Good'. Open Q&A and networking session.",
      actionLabel: "GET TICKETS",
    },
  ];

  const pastEvents = [
    {
      id: "PA-01",
      title: "ACM Research Symposium 2025",
      date: "NOV 2025",
      category: "SYMPOSIUM",
      image:
        "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800",
      description:
        "Student paper presentations, poster sessions, and keynote by ACM India Council member.",
    },
    {
      id: "PA-02",
      title: "Women in Tech Panel",
      date: "SEP 2025",
      category: "PANEL",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
      description:
        "Panel discussion with women leaders from Google, Microsoft, and ACM-W.",
    },
    {
      id: "PA-03",
      title: "Open Source Sprint",
      date: "AUG 2025",
      category: "WORKSHOP",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
      description:
        "Hands-on open source contributions, GitHub best practices, and project showcases.",
    },
  ];

  return (
    <div className="w-full bg-transparent text-slate-100 px-2 sm:px-4 md:px-8">
      {/* Archive Header */}
      <header className="border-b-4 border-zinc-900 py-12 sm:py-16 px-2 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="section-header mb-2">Events</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-10 sm:py-16 px-2 sm:px-8 space-y-16 sm:space-y-24">
        {/* SECTION: UPCOMING */}
        <section>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            <h2 className="section-header mb-0">Upcoming Events</h2>
            <div className="h-0.5 flex-1 bg-[#3182ce]/30"></div>
          </div>

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
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#3182ce] text-white px-3 py-1 text-xs font-black tracking-widest uppercase shadow-lg z-10 rounded">
                    {event.category}
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-mono text-xs text-[#3182ce] font-bold">
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
                  <button className="w-full bg-[#3182ce] py-2 text-white text-xs font-black uppercase tracking-widest transition-all hover:bg-white hover:text-black rounded">
                    {event.actionLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: PAST ARCHIVE */}
        <section>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            <h2 className="section-header mb-0 text-zinc-400">
              Previous Highlights
            </h2>
            <div className="h-0.5 flex-1 bg-zinc-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 opacity-80 hover:opacity-100 transition-opacity">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="group relative flex flex-col border border-zinc-800 bg-[#0a0a0a] transition-all duration-300 hover:border-zinc-500 shadow-[4px_4px_0px_0px_rgba(24,24,27,0.8)] hover:shadow-[6px_6px_0px_0px_rgba(49,130,206,0.15)] rounded-xl">
                {/* Frame */}
                <div className="relative h-36 w-full overflow-hidden border-b border-zinc-800">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>

                <div className="p-3 sm:p-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-mono text-[10px] text-zinc-500 uppercase">
                      {event.date}
                    </span>
                    <span className="text-[9px] text-zinc-800 font-bold tracking-widest uppercase">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold leading-tight mb-2 uppercase group-hover:text-[#3182ce] transition-colors">
                    {event.title}
                  </h3>
                  <button className="text-[10px] font-black uppercase tracking-tighter text-zinc-600 hover:text-[#3182ce] transition-colors">
                    → VIEW RECAP
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
