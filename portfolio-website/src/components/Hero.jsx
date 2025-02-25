import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const codeLines = [
    "const greet = () => 'Hello, World!';",
    "import React from 'react';",
    "const skills = ['React', 'Python', 'Flask'];",
    "console.log('Building cool stuff...');",
    "function Hero() { return <div>Kevin Villeda</div>; }",
    "const projects = ['AlgoAura', 'Vista Mart', 'LaneMastery.gg'];",
    "let isCoding = true;",
    "const future = () => console.log('Next-level tech!');",
    "const stack = ['JavaScript', 'C++', 'Tailwind'];",
    "function getInTouch() { return <div>Let’s collab!</div>; }",
    "console.log('Making the web awesome!');",
    "const dev = { name: 'Kevin Villeda', role: 'Full-Stack Dev' };",
    "const email = 'Kvilleda10566@gmail.com';",
    "const expertise = ['Frontend', 'Backend', 'AI'];",
    "console.log('Code is my superpower!');",
    "const certs = ['Flatiron School', 'React Mastery'];",
    "const tools = ['Git', 'Vite', 'Ollama'];",
    "console.log('Always leveling up!');",
    "function showStack() { return stack.join(', '); }",
    "console.log('Debugging like a pro!');",
    "let gigs = ['Freelance', 'Full-Stack'];",
    "const langs = ['Python', 'JS', 'C++'];",
    "const vibe = ['Open Source', 'Teamwork'];",
    "console.log('Real-world impact!');",
    "let passion = 'Tech Innovation';",
    "const motto = 'Code, Create, Conquer';",
    "let goal = 'Game-Changing Apps';",
    "const edu = 'Flatiron School';",
    "console.log('Ready to rock your project!');",
    "const mission = 'Building solutions that pop';",
    "let vision = 'Ideas to reality, fast';",
    "console.log('Code with a purpose!');",
  ];

  return (
    <section
      id="home"
      className="h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-teal-900 text-white relative overflow-hidden"
    >
      {/* Coding Animation Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)] animate-pulse opacity-30">
        <div className="w-full h-[200%] flex flex-col justify-start items-center px-4 sm:px-6 lg:px-8 space-y-2 opacity-60 animate-code-loop">
          {/* Duplicate code lines for seamless looping, centered */}
          {[...codeLines, ...codeLines].map((line, index) => (
            <div
              key={index}
              className="text-green-400 font-mono text-sm tracking-wide text-center w-full"
              style={{ whiteSpace: "nowrap" }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 drop-shadow-lg">
          Hey, I’m Kevin Villeda
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-6 font-mono tracking-wide animate-fade-in delay-200">
         Software Engineer| Turning Ideas into Next-Gen Apps
        </p>

        {/* Profile Picture */}
        <div className="mb-8 flex justify-center items-center">
          <img
            src="https://i.postimg.cc/9f6SgB7X/IMG-2936.jpg"
            alt="Kevin Villeda"
            className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.5)] object-cover transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] animate-pulse-slow"
          />
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {[
            { href: "https://github.com/Kevinvilleda19", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com/in/kevin-villeda", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:Kvilleda10566@gmail.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full hover:bg-gradient-to-br hover:from-blue-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.7)] hover:scale-110"
            >
              <Icon className="w-6 h-6 text-white" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-300 opacity-0 hover:opacity-100 transition-opacity duration-200">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;