import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function ContactUs() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 sm:px-6 pb-16">
      <div className="border-t border-white/30 pt-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center gap-3 shrink-0">
            <div className="h-48 w-48 sm:h-56 sm:w-56 overflow-hidden rounded-2xl border border-white/20 bg-[#222222]">
              <Image
                src="/icon-dark.svg"
                alt="ACM DTU Logo"
                width={224}
                height={224}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-base font-semibold tracking-widest text-white mt-2">
              ACM Student Chapter, DTU
            </span>
            <span className="text-xs text-white/60 text-center">
              Empowering students in computing, research, and innovation since
              2025.
            </span>
          </div>

          <div className="flex flex-col gap-5 w-full max-w-xl">
            <h3 className="text-lg font-bold text-white">Contact Us</h3>

            <div className="flex items-center gap-3 text-base text-white/80">
              <Mail size={18} className="shrink-0 text-white/60" />
              <a
                href="mailto:acm@dtu.ac.in"
                className="hover:text-white transition-colors">
                acm@dtu.ac.in
              </a>
            </div>

            <div className="flex items-start gap-3 text-base text-white/80">
              <MapPin size={18} className="shrink-0 text-white/60 mt-0.5" />
              <span>
                <strong className="text-white font-semibold">
                  Delhi Technological University,
                </strong>{" "}
                Shahbad Daulatpur, Rohini, Delhi 110042
              </span>
            </div>

            <div className="border-t border-white/15 pt-2" />

            <div className="flex gap-3 flex-wrap">
              {[
                {
                  label: "Instagram",
                  Icon: InstagramIcon,
                  href: "https://www.instagram.com/dtuacm/",
                },
                {
                  label: "LinkedIn",
                  Icon: LinkedInIcon,
                  href: "https://www.linkedin.com/company/acmdtu/posts/?feedView=all",
                },
              ].map(({ label, Icon, href }) => (
                <a
                  key={label}
                  aria-label={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-[10px] border border-white/25 text-white transition hover:bg-white/10 hover:border-white/50">
                  <Icon />
                </a>
              ))}
            </div>
            <div className="mt-4 text-xs text-white/60">
              <div>
                <span className="font-semibold">Chairperson:</span> Ishan Chugh
              </div>
              <div>
                <span className="font-semibold">Faculty Advisor:</span> Prof
                Dinesh Kumar Vishwakarma
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/15 pt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © 2026 ACM Student Chapter, DTU. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
