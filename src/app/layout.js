import { Space_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import GlobalParallax from "@/components/GlobalParallax";
import ScrollDepth from "@/components/ScrollDepth";
import NavTransition from "@/components/NavTransition";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: "Gayathri Kalthi Reddy | Software & ML Engineer",
  description:
    "Portfolio of Gayathri Kalthi Reddy — software and ML engineer building intelligent, scalable systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${fraunces.variable}`}>
        <GlobalParallax />
        <ScrollDepth />
        <NavTransition />
        <div className="noise" />
        <div className="grid" />
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <header className="nav">
          <div className="brand">GK<span>R</span></div>
          <nav>
            <a href="#top">Home</a>
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-actions">
            <ThemeToggle />
            <a className="cta" href="mailto:gayathrireddykalthireddy@gmail.com">
              Let’s build
            </a>
          </div>
        </header>
        {children}
        <div className="footer-sticky">
          <a
            className="footer-icon"
            href="https://github.com/gayathri0124"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <span aria-hidden="true" className="icon-github" />
          </a>
          <a
            className="footer-icon"
            href="https://www.linkedin.com/in/gayathrireddyk/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <span aria-hidden="true" className="icon-linkedin" />
          </a>
        </div>
      </body>
    </html>
  );
}
