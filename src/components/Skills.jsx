import React from "react";
import Project from "./Project";
import Skill from "./Skill";

export default function Skills() {
  return (
    <div id="_skill" className="w-full p-3 sm:p-5">
      <h1 className="ani text-xl sm:text-2xl font-bold mx-auto text-center my-3">
        SKILLS
      </h1>
      <h1 className="ani underline underline-offset-8 text-center text-lg sm:text-xl text-green-500 font-bold mb-5">
        PROJECTS
      </h1>
      <Project
        head="Saala's Blog – MERN Stack Blogging Platform"
        link="https://saalagram.netlify.app/"
        image={`https://firebasestorage.googleapis.com/v0/b/portfolio-react-29350.appspot.com/o/saalagram.png?alt=media&token=46ef3b48-5d43-4667-a2e3-d419b2a772a5`}
        content="Developed a fully functional blog website using MongoDB, Express, React, and Node.js (MERN). Showcased web development skills by creating an engaging, responsive platform for posting articles and tutorials."
        date={"Sept 15th 2024"}
      />
      <Project
        head="Simon Game web application"
        link="https://livinkumars.github.io/Simon-Game/"
        image={`https://firebasestorage.googleapis.com/v0/b/portfolio-react-29350.appspot.com/o/simon.png?alt=media&token=2abf796d-d5a5-42cf-b418-ed78c6cbbdb0`}
        content="Developed a Simon Game web application using HTML, CSS, and JavaScript. The project simulates a memory challenge with interactive gameplay and responsive design, enhancing user experience. Demonstrated proficiency in front-end web development and DOM manipulation."
        da
        te={"March 7th 2024"}
      />
      <Project
        head="Students Entry Using React"
        link="https://livinkumars.github.io/React-Project-StudentsEntry/"
        image={`https://firebasestorage.googleapis.com/v0/b/portfolio-react-29350.appspot.com/o/entry.png?alt=media&token=cbb6b570-c70c-4b84-8921-5b0dc2b3d058`}
        content="Developed a form-based web application using React to capture and store student information locally. The project features a user-friendly interface, allowing users to add, edit, and view student details efficiently. Data is saved securely in local storage for easy access."
        date={"July 24th 2024"}
      />
      <Project
        head="Day Calculator – Web Application"
        link="https://livinkumars.github.io/Day_Calculator/"
        image={`https://firebasestorage.googleapis.com/v0/b/portfolio-react-29350.appspot.com/o/day.png?alt=media&token=c967596b-b4ff-46fb-844c-29e239fae5be`}
        content="Developed a responsive web application to calculate the day of the week for any given date using HTML, CSS, and JavaScript. The project demonstrates proficiency in date handling, user interaction, and front-end web development with a simple, intuitive interface."
        date={"Oct 11th 2023"}
      />
      <Project
        head="Terrestrial Planets – Orbital Simulation"
        link="https://livinkumars.github.io/Terrestrial-Planets-Solar-System/"
        image={`https://firebasestorage.googleapis.com/v0/b/portfolio-react-29350.appspot.com/o/ter.png?alt=media&token=e1b18d9e-6420-4a98-884f-ca1c632a9cd5`}
        content="Created an interactive web application visualizing the orbits of terrestrial planets. The project demonstrates planetary motion with accurate representations of orbits, designed with a focus on user engagement and educational value. Built using HTML, CSS, and JavaScript for an immersive experience."
        date={"Oct 3rd 2023"}
      />


      <h1 className="mt-4 underline underline-offset-8 text-center text-lg sm:text-xl text-green-500 font-bold mb-5">
        SKILLS
      </h1>
      <Skill/>
    </div>
  );
}
