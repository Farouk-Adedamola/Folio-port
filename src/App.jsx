import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

function App() {
  const location = useLocation();

  return (
    <div className="w-full bg-background">
      <div className="max-w-fullscreen mx-auto px-4 md:px-8 lg:px-16 min-h-screen">
        <Navbar />
        <div className="h-[90vh] md:h-[85vh] rounded-2xl my-shadow overflow-hidden">
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
