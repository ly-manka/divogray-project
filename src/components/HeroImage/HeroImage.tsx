"use client";
import { useEffect, useState } from "react";

export const HeroImage = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden bg-gray-100">
      <div
        className="top-0 left-0 h-full object-cover bg-[url(/bg-hero.avif)] bg-bottom bg-no-repeat bg-cover"
        style={{
          transform: `translateX(-${offsetY * 0.3}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
      <div className="relative z-10 h-full flex items-center justify-center text-4xl font-bold text-white">
        Горизонтальний паралакс 😎
      </div>
    </div>
  );
};
