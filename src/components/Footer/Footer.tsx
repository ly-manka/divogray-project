import { DowloadButton } from "../DowloadButton/DowloadButton"
import { Logo } from "../Logo/Logo"

export const Footer = () => {
  return (
<footer className="bg-[#f8f5f2] text-[#1f1b3a]">
      <div className="text-center pb-6 border-b border-[#1f1b3a]/20 flex items-center flex-col">
        <Logo />
        <p className="text-lg mt-2">Пориньте у світ захопливих ігор</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 px-8 md:px-16 py-10 text-sm">
        <div>
          <h3 className="font-bold mb-2">Контакти</h3>
          <p>Info@mysite.ua</p>
          <p>+38 044 123 45 67</p>
          <p>вул. Хрещатик, 22</p>
          <p>м. Київ, 01001, Україна</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Навігація</h3>
          <ul className="space-y-1">
            <li>Ігри</li>
            <li>Вакансії</li>
            <li>Про нас</li>
            <li>Контакти</li>
            <li>Політика конфіденційності</li>
            <li>Умови та положення</li>
            <li>Політика використання файлів cookie</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Соціальні мережі</h3>
          <ul className="space-y-1">
            <li>Discord</li>
            <li>Twitch</li>
            <li>Facebook</li>
            <li>Youtube</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Завантажити</h3>
          <div className="space-y-2">
            <DowloadButton marketplace="appstore"/>
            <DowloadButton marketplace="googleplay"/>
          </div>
        </div>
      </div>

      <div className="text-center text-xs py-4 border-t border-[#1f1b3a]/20">
        © 2035 Дивограй. Створено за допомогою <a href="https://wix.com" className="underline">Wix.com</a>
      </div>
    </footer>
  )
}