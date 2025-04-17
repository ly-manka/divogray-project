export const NavListMobile = () => {
  return (
    <nav className="rounded-b-lg overflow-clip shadow-xl">
      <ul className="flex flex-col">
        <li className="block py-4 px-8 transition-colors duration-300 whitespace-nowrap bg-red-accent text-white">
          Головна
        </li>
        <li className="block py-4 px-8 transition-colors duration-300 whitespace-nowrap bg-gray-200 text-gray-800 hover:bg-red-accent hover:text-white">
          Ігри
        </li>
        <li className="block py-4 px-8 transition-colors duration-300 whitespace-nowrap bg-gray-200 text-gray-800 hover:bg-red-accent hover:text-white">
          Вакансії
        </li>
        <li className="block py-4 px-8 transition-colors duration-300 whitespace-nowrap bg-gray-200 text-gray-800 hover:bg-red-accent hover:text-white">
          Про нас
        </li>
        <li className="block py-4 px-8 transition-colors duration-300 whitespace-nowrap bg-gray-200 text-gray-800 hover:bg-red-accent hover:text-white">
          Контакти
        </li>
      </ul>
    </nav>
  )
}
