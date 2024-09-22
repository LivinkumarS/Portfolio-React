import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Nav/>
      <About/>
      <Qualification/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}
