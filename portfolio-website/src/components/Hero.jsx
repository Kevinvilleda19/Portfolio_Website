import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const codeLines = [
    "const greet = () => 'Hello, World!';",
    "import React from 'react';",
    "const skills = ['React', 'Node.js', 'CSS'];",
    "console.log('Debugging...');",
    "function Hero() { return <div>Welcome</div>; }",
    "const projects = ['Portfolio', 'E-commerce', 'Blog'];",
    "let isLearning = true;",
    "const future = () => console.log('Building the future!');",
    "const technologies = ['React', 'Node.js', 'GraphQL'];",
    "function getInTouch() { return <div>Email me</div>; }",
    "console.log('Making the web beautiful!');",
    "const portfolio = { name: 'Kevin Villeda', role: 'Full-Stack Developer' };",
    "const email = 'contact@kevinvilleda.com';",
    "const experience = ['Frontend', 'Backend', 'Databases'];",
    "console.log('Love coding!');",
    "const certifications = ['JavaScript', 'Python', 'React'];",
    "const knowledge = ['API Design', 'Agile', 'Cloud Computing'];",
    "console.log('Continuous improvement!');",
    "function displaySkills() { return skills.join(', '); }",
    "console.log('Debugging skills in action!');",
    "let work = ['Freelancer', 'Full-Stack Developer'];",
    "const languages = ['JavaScript', 'Python', 'C++'];",
    "const community = ['Open Source', 'Mentorship', 'Collaboration'];",
    "console.log('Building real-world apps!');",
    "let passion = 'Web Development';",
    "const motivation = 'Learn, Build, Repeat';",
    "let dream = 'Tech Innovator';",
    "const education = 'Flatiron School';",
    "console.log('Ready to build the future!');",
    "const impact = 'Creating digital solutions that matter';",
    "let vision = 'Transforming ideas into reality';",
    "console.log('Code is art!');"
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden"
    >
      {/* Coding Animation Background */}
      <div className="code-background absolute inset-0 z-0">
        <div className="w-full h-full flex flex-col justify-start items-center space-y-4">
          {/* Repeat code lines to fill the background */}
          {Array.from({ length: 100 }).map((_, index) => (
            <div
              key={index}
              className="text-green-400 text-opacity-60 font-mono"
              style={{
                animationDelay: `${(index % 5) * 0.5}s`, // Stagger animation timing
                animationDuration: "5s",
              }}
            >
              {codeLines[index % codeLines.length]}
            </div>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-up">
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-4">
          Hi, I'm{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 animate-text">
            Kevin Villeda
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8">
          Full-Stack Developer | Crafting Exceptional Digital Solutions
        </p>

        {/* Profile Picture */}
        <div className="mb-12 flex justify-center items-center mt-12">
          <img
            src="https://i.postimg.cc/9f6SgB7X/IMG-2936.jpg"
            alt="Kevin Villeda"
            className="w-60 h-60 sm:w-80 sm:h-80 rounded-full border-4 border-blue-500 shadow-xl object-cover transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          />
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-16">
          {[{ href: "https://github.com/Kevinvilleda19", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com/in/kevin-villeda", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:Kvilleda10566@gmail.com", icon: Mail, label: "Email" }].map(({ href, icon: Icon, label }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 bg-gray-700 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-110"
              >
                <Icon className="w-8 h-8 text-white" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 opacity-0 hover:opacity-100">
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
