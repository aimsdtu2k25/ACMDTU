import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "ACM DTU | Product Design for Teams",
  description:
    "ACM DTU helps student teams plan, design, and ship products with clarity and speed.",
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
