import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Services from "./pages/Services";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main";
function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
    {/* <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="#about" element={<About />} />
    <Route exact path="#services" element={<Services />} />
    <Route exact path="#project" element={<Project />} />
    <Route exact path="#contact" element={<Contact />} />
    </Routes> */}
    <Main />
    <Footer />
    </BrowserRouter>
<>

</>
</div>
  );
}

export default App;
