'use client'
import { useRouter, usePathname } from 'next/navigation';
import Link from "next/link";

export const Logo = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {

    if (pathname === '/') {

      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  return (
    <Link
      href={"/"}
      scroll={true} 
      className="
      h-[50px] rounded-b-lg overflow-clip font-lobster text-[22px] flex pt-1 justify-center
      md:h-[60px] md:text-[26px] md:pt-2
      px-8 text-white bg-red-accent 
      " 
      onClick={handleClick}
    >
      <span>Дивограй</span>
    </Link>
  )
}