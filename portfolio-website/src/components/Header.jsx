function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-blue-950 to-teal-900 text-white py-4 shadow-[0_4px_20px_rgba(59,130,246,0.3)] fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 tracking-tight hover:scale-105 transition-transform duration-300">
          Kevin Villeda
        </h1>
        <ul className="flex space-x-8">
          <li>
            <a
              href="#home"
              className="text-gray-300 font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600 hover:text-white px-3 py-1 rounded-full transition-all duration-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-300 font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600 hover:text-white px-3 py-1 rounded-full transition-all duration-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-300 font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600 hover:text-white px-3 py-1 rounded-full transition-all duration-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-300 font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600 hover:text-white px-3 py-1 rounded-full transition-all duration-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;