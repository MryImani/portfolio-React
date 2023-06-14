import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";
import About from "./scenes/about/About";
import Contact from "./scenes/contact/Contact";
import Portfolio from "./scenes/portfolio/Portfolio";
import Resume from "./scenes/resume/Resume";



function App() {
    const ScrollToTop = () => {
      const { pathname } = useLocation();
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
      return null;
    };
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
