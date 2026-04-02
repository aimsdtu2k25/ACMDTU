import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "ACM Student Chapter | Delhi Technological University",
  description:
    "The DTU ACM Student Chapter is dedicated to advancing computing, bridging theory and industry, and cultivating the next generation of technical leaders at Delhi Technological University.",
  keywords: [
    "ACM",
    "DTU",
    "Delhi Technological University",
    "Student Chapter",
    "AI/ML",
    "Cybersecurity",
    "Hackathon",
    "Brainwave",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${poppins.variable} min-h-full flex flex-col bg-slate-950 text-slate-100 antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
