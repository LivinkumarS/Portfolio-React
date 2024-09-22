import { Navbar } from "flowbite-react";
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Nav() {
  const [showLinks, setshowLinks] = useState(false);
  const [curNav, setCurNav] = useState("about");

  function handleNavClick() {
    setshowLinks((prev) => {
      return !prev;
    });
  }

  function handleNavChange(e) {
    setCurNav(e.target.id);
    if (showLinks) {
      setshowLinks(false);
    }
  }

  return (
    <div className="z-10 sticky w-full top-0">
      <Navbar className="z-10 sticky top-0 w-full p-5 flex flex-row items-center justify-between shadow-lg">
        <a href="#" className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-green-500">
            Livinkumar S
          </h1>
        </a>


        <div className="nav-links flex-1 hidden sm:flex flex-row items-center justify-between md:justify-around text-lg">
          <Link
            id="about"
            className={`${
              curNav === "about" ? "navDec" : ""
            } hover:text-green-500  text-center cursor-pointer`}
            activeClass="active"
            to="_about"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={handleNavChange}
          >
            About
          </Link>
          <Link
            id="qual"
            className={`${
              curNav === "qual" ? "navDec" : ""
            } hover:text-green-500  text-center cursor-pointer`}
            activeClass="active"
            to="_qual"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={handleNavChange}
          >
            Qualification
          </Link>
          <Link
            id="skill"
            className={`${
              curNav === "skill" ? "navDec" : ""
            } hover:text-green-500  text-center cursor-pointer`}
            activeClass="active"
            to="_skill"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={handleNavChange}
          >
            Skills
          </Link>
          <Link
            id="contact"
            className={`${
              curNav === "contact" ? "navDec" : ""
            } hover:text-green-500  text-center cursor-pointer`}
            activeClass="active"
            to="_contact"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={handleNavChange}
          >
            Contact
          </Link>
        </div>
        <div className="sm:hidden flex items-center justify-center">
          <Navbar.Toggle onClick={handleNavClick} />
        </div>
      </Navbar>
      <div
        className={`navStyle ${
          showLinks ? "open" : ""
        } sm:hidden toggleLink w-full  text-md font-thin flex flex-col gap-2 text-center bg-white `}
      >
        <Link
          id="about"
          className={`${curNav === "about" ? "text-green-500" : ""} cursor-pointer mt-4`}
          activeClass="active"
          to="_about"
          spy={true}
          smooth={true}
          duration={2000}
          onClick={handleNavChange}
        >
          About
        </Link>
        <hr />
        <Link
          id="qual"
          className={`${curNav === "qual" ? "text-green-500" : ""} cursor-pointer`}
          activeClass="active"
          to="_qual"
          spy={true}
          smooth={true}
          duration={2000}
          onClick={handleNavChange}
        >
          Qualification
        </Link>
        <hr />
        <Link
          id="skill"
          className={`${curNav === "skill" ? "text-green-500" : ""} cursor-pointer`}
          activeClass="active"
          to="_skill"
          spy={true}
          smooth={true}
          duration={2000}
          onClick={handleNavChange}
        >
          Skills
        </Link>
        <hr />
        <Link
          id="contact"
          className={`${curNav === "contact" ? "text-green-500" : ""} cursor-pointer`}
          activeClass="active"
          to="_contact"
          spy={true}
          smooth={true}
          duration={2000}
          onClick={handleNavChange}
        >
          Contact
        </Link>
        <hr />
      </div>
    </div>
  );
}
