'use client'

import { li } from "framer-motion/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: '/', label: 'Головна' },
  { href: '/games', label: 'Ігри' },
  { href: '/career', label: 'Вакансії' },
  { href: '/about', label: 'Про нас' },
  { href: '/contacts', label: 'Контакти' },
]

export const NavList = () => {
  const pathname = usePathname();

  return (
    <nav className="rounded-b-lg overflow-clip shadow-xl">
      <ul className="flex">
        {navLinks.map((link) => {
          const isActive = pathname === link.href

          return (
            <li key={link.href} className="h-[60px]">
              <Link
                href={link.href}
                className={`px-8 h-full flex items-center transition-colors duration-300 whitespace-nowrap ${isActive
                    ? 'bg-red-accent text-white'
                    : 'bg-light text-dark hover:bg-red-accent hover:text-white'
                  }`}
              >
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}