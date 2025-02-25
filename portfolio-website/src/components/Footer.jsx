function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-950 to-teal-900 text-gray-300 py-6 border-t border-blue-500/20 shadow-[0_-4px_20px_rgba(59,130,246,0.2)]">
      <div className="container mx-auto text-center">
        <p className="text-base font-semibold tracking-wider animate-fade-in">
          © {new Date().getFullYear()}{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 font-extrabold hover:scale-105 transition-transform duration-300">
            Kevin Villeda
          </span>
          . All Rights Reserved.
        </p>
        <p className="text-sm mt-2 text-gray-400 animate-fade-in delay-200">
          Crafted with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600 font-medium hover:scale-105 transition-transform duration-300">
            React
          </span>{" "}
          &{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600 font-medium hover:scale-105 transition-transform duration-300">
            Tailwind CSS
          </span>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;