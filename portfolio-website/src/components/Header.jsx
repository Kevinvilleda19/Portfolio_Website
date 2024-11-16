function Header() {
    return (
      <header className="bg-secondary-light text-white py-4 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold gradient-text">My Portfolio</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

  export default Header;
