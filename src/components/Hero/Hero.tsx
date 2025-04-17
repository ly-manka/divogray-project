"use client";

import { useEffect, useState } from "react";
import { CardList } from "../CardList/CardList"
import { DowloadButton } from "../DowloadButton/DowloadButton"
import Image from "next/image";
import bgHero from "@/assets/images/bg/bg-hero.jpg";

export const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="overflow-clip">
      <div className="relative">
        <Image
          src={bgHero}
          alt=""
          fill
          placeholder="blur"
          className="absolute -z-10 max-w-full h-full object-cover object-bottom"
          style={{
            transform: `translateX(-${offsetY * 0.2}px)`,
            transition: "transform 0.1s",
          }}
        />
        <div className="lg:min-h-180 content-limit py-18 lg:py-45">
            <div className="">
              <h1 className="font-oswald text-4xl lg:text-[80px]/24 font-bold">Грати – світ пізнавати</h1>
              <p className="text-lg mt-2 lg:mt-0 lg:text-2xl">Найкращі мобільні ігри</p>
            </div>

            <div className="mt-5 lg:mt-10 flex gap-5">
              <DowloadButton marketplace="appstore" />
              <DowloadButton marketplace="googleplay" />
            </div>
        </div>
      </div>

      {/* <div
        className="absolute -left-10 top-0 -z-10 min-h-80 lg:min-h-200 w-[120%]"
        style={{
          transform: `translateX(-${offsetY * 0.2}px)`,
          transition: "transform 0.1s",
        }}
      >
        <Image
          src={bgHero}
          alt=""
          fill
          placeholder="blur"
          className="max-w-full h-full object-cover object-bottom"
        />
      </div> */}
    </section>
  )
}