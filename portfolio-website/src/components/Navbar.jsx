import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-900 via-blue-950 to-teal-900 backdrop-blur-md z-50 border-b border-blue-500/20 text-white shadow-[0_4px_20px_rgba(59,130,246,0.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 tracking-tight hover:scale-105 transition-transform duration-300">
              Kevin Villeda
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600 hover:text-white px-3 py-1 rounded-full transition-all duration-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-blue-400 focus:outline-none p-2 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600 transition-all duration-300"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gradient-to-b from-gray-900 via-blue-950 to-teal-900 border-t border-blue-500/20 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-2 text-gray-300 font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-600 hover:text-white rounded-lg transition-all duration-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;