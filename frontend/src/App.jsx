
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/ContactUs/Contact";
import "./App.css";

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contactUs" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </>;
}

export default App;
