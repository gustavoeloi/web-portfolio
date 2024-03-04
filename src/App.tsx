import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SocialLinks from "./components/SocialLinks";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <SocialLinks />
    </BrowserRouter>
  );
}

export default App;
