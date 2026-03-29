import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen text-slate-100" style={{ background: "#05080f" }}>
      {/* Fixed glow layer */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 50%, rgba(56, 139, 183, 0.25) 0%, rgba(30, 90, 140, 0.15) 30%, transparent 70%)`,
          zIndex: 0,
        }}
      />

      <div className="relative" style={{ zIndex: 1 }}>
        <div className="mx-auto w-full max-w-6xl px-6 pt-8">
          <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4">
            <Navbar />
          </div>
        </div>
        <main className="flex min-h-[calc(100vh-88px)] items-center justify-center px-6 py-16">
          <div className="w-full max-w-5xl text-left md:pl-35">
            <h1
              className="h-display text-[clamp(2.25rem,4vw+1rem,4.5rem)] font-semibold leading-[1.05]"
              style={{
                background: "linear-gradient(to right, #cce8f4 0%, #7ec8e3 40%, #2a88c8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Welcome to ACM DTU
              <br />
              Student Chapter
            </h1>
          </div>
        </main>
        <ContactUs />
      </div>
    </div>
  );
}
