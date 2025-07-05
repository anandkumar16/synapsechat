"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[1000]">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-75"
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
  );
}
