import Image from "next/image"
import Link from "next/link"
import appStoreIcon from '@/assets/icons/apple-icon.svg'
import googlePlayIcon from '@/assets/icons/playmarket-icon.svg'

type DownloadButtonProps = {
  marketplace: "appstore" | "googleplay" 
}

const markets = {
  appstore: {
    link: appStoreIcon,
    text: 'Download on the',
    store: 'App Store',
  },
  googleplay: {
    link: googlePlayIcon,
    text: 'GET IT ON',
    store: 'Google Play',
  }
};

export const DowloadButton = ({ marketplace }: DownloadButtonProps) => {
  const { link, text, store } = markets[marketplace];

  return (
    <Link href={link} className="rounded-md bg-black p-1 lg:py-1.5 lg:px-2 flex min-w-max gap-1 items-center">
      <Image src={link} alt="store" width="24" height="24" className="h-full flex"/>
      
      <p className="flex flex-col text-white leading-none lg:gap-0.5">
        <span className="text-[9px] text-gray-300 tracking-wide">{text}</span>
        <span className="text-sm lg:text-l tracking-wide lg:tracking-wider">
          {store}
        </span>
      </p>
    </Link>
  )
}