function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-400 py-6 border-t border-gray-700">
        <div className="container mx-auto text-center">
          <p className="text-base font-semibold tracking-wider">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-blue-500 font-extrabold">
              Kevin Villeda
            </span>
            . All Rights Reserved.
          </p>
          <p className="text-sm mt-2 text-gray-500">
            Built with <span className="text-blue-500">React</span> &{" "}
            <span className="text-blue-500">Tailwind CSS</span>.
          </p>
        </div>
      </footer>
    );
  }

  export default Footer;
