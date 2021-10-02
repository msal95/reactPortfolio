import React, { useState } from "react";

import { Topbar } from "./components/Topbar/Topbar";
import { Intro } from "./components/Intro/Intro";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { Works } from "./components/Works/Works";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Contact } from "./components/Contact/Contact";
import { Menu } from "./components/Menu/Menu";

import "./app.scss";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={isMenuOpen} setMenuOpen={setIsMenuOpen} />
      <Menu menuOpen={isMenuOpen} setMenuOpen={setIsMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
