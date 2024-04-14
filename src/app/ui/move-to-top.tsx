"use client";
import { IconArrowUp } from "@tabler/icons-react";
import { useEffect, useRef } from "react";

export default function MoveToTop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      if (window.scrollY > 100) {
        ref.current.style.opacity = "100";
      } else {
        ref.current.style.opacity = "0";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="right-10 bottom-10 z-[100] fixed opacity-0 transition-opacity"
    >
      <button
        aria-label="Move to top"
        className="place-content-center grid bg-blue-500 p-2 rounded-full text-white"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <IconArrowUp />
      </button>
    </div>
  );
}
