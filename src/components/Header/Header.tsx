'use client'

import { NavList } from "../NavList/NavList";
import { Logo } from "../Logo/Logo";
import { NavListMobile } from "../NavListMobile/NavListMobile";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full">
      <div className="flex justify-between gap-15">
        <Logo />

        <div className="hidden lg:block">
          <NavList />
        </div>

        <div className="lg:hidden">
        <button
            className="p-2 bg-gray-200 rounded"
            onClick={toggleMenu}
          >
            <span className="sr-only">Открыть меню</span>
            {/* Иконка бургера */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 6h18M3 12h18m-6 6h6"
              />
            </svg>
          </button>

          {/* Мобильное меню */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg">
              <NavListMobile />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
