
"use client";

import { useEffect, useState } from "react";

const titles = [
  "Full Stack Developer",
  "Software Engineer",
  "IT Undergraduate",
];

export default function TypingTitle() {
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    let speed = deleting ? 55 : 110;

    if (!deleting && text === currentTitle) {
      speed = 1800;
    }

    if (deleting && text === "") {
      speed = 350;
    }

    const timer = setTimeout(() => {
      if (!deleting && text === currentTitle) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setText(
          deleting
            ? currentTitle.slice(0, text.length - 1)
            : currentTitle.slice(0, text.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, titleIndex, deleting]);

  return (
    <span className="typing-title">
      {text}
      <span className="typing-cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}