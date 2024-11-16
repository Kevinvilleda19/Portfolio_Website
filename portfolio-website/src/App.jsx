import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // Hero section (if not already added)
import About from "./components/About";
import Projects from "./components/Projects"; // Updated Projects section
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content sections */}
      <main>
        {/* Hero section (topmost section) */}
        <Hero />

        {/* About section */}
        <About />

        {/* Projects section */}
        <Projects />

        {/* Contact section */}
        <Contact />
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </>
  );
}

export default App;
