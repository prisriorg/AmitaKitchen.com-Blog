"use client"
export default function Header() {
  return (
    <header className="flex justify-between p-4 md:px-[10%] border-b-2 sticky top-0 z-50 bg-white">
      <a href="/">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Amita Kitchen
        </h1>
      </a>
      <button
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <nav className="hidden w-full md:block md:w-auto">
        <ul className="flex gap-x-8 pt-2">
          <li>
            <a
              href="/"
              className="text-sm font-medium text-gray-500 hover:text-black dark:text-gray-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-sm font-medium text-gray-500 hover:text-black dark:text-gray-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-sm font-medium text-gray-500 hover:text-black dark:text-gray-400"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-black dark:text-gray-400"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-black dark:text-gray-400"
            >
              Register
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
