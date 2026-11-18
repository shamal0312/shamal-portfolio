
import Link from "next/link";
import TypingTitle from "./TypingTitle";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";

export default function Home() {
  return (
    <main>
      <section id="home" className="hero-section">

        {/* LEFT SIDE - INTRODUCTION */}
        <div className="hero-content">

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>Shamal Kawya</h1>

          <h2 className="hero-typing-heading">
              <TypingTitle />
          </h2>

          <p className="hero-description">
            IT undergraduate passionate about
            building modern, scalable and
            user-friendly web applications.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">

            <Link href="/projects">
              View My Work
            </Link>

            <Link href="/contact">
              Contact Me
            </Link>

          </div>

          {/* SOCIAL LINKS */}
          <div className="hero-socials">

            <a
              href="https://github.com/shamal0312"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>

            <span>
              Based in Sri Lanka
            </span>

          </div>

        </div>

        {/* RIGHT SIDE - ANIMATION */}
        <div className="hero-visual">

          {/* PURPLE BACKGROUND GLOW */}
          <div className="hero-glow" />

          {/* ROTATING TECHNOLOGY ORBIT */}
          <div className="orbit-container">

            {/* ORBIT CIRCLES */}
            <div className="orbit-ring orbit-one" />
            <div className="orbit-ring orbit-two" />

            {/* CENTER ICON */}
            <div className="orbit-center">
              <span>{"</>"}</span>
            </div>

            {/* REACT */}
            <div className="orbit-icon orbit-react">
              <FaReact />
            </div>

            {/* NEXT.JS */}
            <div className="orbit-icon orbit-next">
              <SiNextdotjs />
            </div>

            {/* NODE.JS */}
            <div className="orbit-icon orbit-node">
              <FaNodeJs />
            </div>

            {/* TYPESCRIPT */}
            <div className="orbit-icon orbit-ts">
              <SiTypescript />
            </div>

            {/* MONGODB */}
            <div className="orbit-icon orbit-db">
              <SiMongodb />
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}
