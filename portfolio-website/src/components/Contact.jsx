import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-950 to-teal-900 text-white relative overflow-hidden"
    >
      {/* Subtle background animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)] animate-pulse opacity-30 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 drop-shadow-lg animate-fade-in">
          Contact Me
        </h2>

        <div className="max-w-3xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Email Section */}
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 transform hover:scale-105 border border-blue-500/20">
              <Mail className="w-12 h-12 text-blue-400 mb-4 transition-transform hover:rotate-12" />
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                Email
              </h3>
              <a
                href="mailto:Kvilleda10566@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                aria-label="Send email to Kvilleda10566@gmail.com"
              >
                Kvilleda10566@gmail.com
              </a>
            </div>

            {/* Phone Section */}
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 transform hover:scale-105 border border-blue-500/20">
              <Phone className="w-12 h-12 text-blue-400 mb-4 transition-transform hover:rotate-12" />
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                Phone
              </h3>
              <a
                href="tel:+19142080322"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                aria-label="Call +1 (914) 208-0322"
              >
                +1 (914) 208-0322
              </a>
            </div>

            {/* Location Section */}
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 transform hover:scale-105 border border-blue-500/20">
              <MapPin className="w-12 h-12 text-blue-400 mb-4 transition-transform hover:rotate-12" />
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                Location
              </h3>
              <p className="text-gray-300 text-center">
                Peekskill, NY
                <br />
                United States
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Kevinvilleda19"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full hover:bg-gradient-to-br hover:from-blue-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]"
              aria-label="Visit GitHub profile"
            >
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.74.5.5 5.74.5 12c0 5.07 3.29 9.37 7.85 10.88.57.11.77-.25.77-.55v-2.14c-3.19.69-3.86-1.49-3.86-1.49-.52-1.34-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.14.08 1.74 1.18 1.74 1.18 1.02 1.74 2.69 1.24 3.34.95.1-.73.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.73 0-1.27.45-2.31 1.18-3.12-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18A10.94 10.94 0 0112 5.56c.97.01 1.95.13 2.86.37 2.18-1.5 3.14-1.18 3.14-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.85 1.18 3.12 0 4.46-2.68 5.43-5.23 5.73.41.35.77 1.05.77 2.12v3.14c0 .31.2.67.78.55A10.49 10.49 0 0023.5 12C23.5 5.74 18.26.5 12 .5z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/kevin-villeda"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full hover:bg-gradient-to-br hover:from-blue-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]"
              aria-label="Visit LinkedIn profile"
            >
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-8 19H7v-8h4v8zm-2-9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm10 9h-4v-4c0-2.21-1.79-4-4-4s-4 1.79-4 4v4H5v-8h4v1.26c1.11-.84 2.59-1.26 4-1.26 3.31 0 6 2.69 6 6V19z" />
              </svg>
            </a>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xeoqzavv"
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg border border-blue-500/30 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg border border-blue-500/30 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg border border-blue-500/30 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;