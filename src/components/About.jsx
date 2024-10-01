import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Button } from "flowbite-react";
import { Link } from "react-scroll";
import cv from '../assets/LivinkumarCV.pdf'

export default function About() {
  const [age, setAge] = useState({});

  setInterval(() => {
    const birthDate = new Date("May 28, 2003 19:00");
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    let hours = today.getHours() - birthDate.getHours();
    let minutes = today.getMinutes() - birthDate.getMinutes();
    let seconds = today.getSeconds() - birthDate.getSeconds();

    // Adjust days, months, and years if necessary
    if (seconds < 0) {
      minutes--;
      seconds += 60;
    }

    if (minutes < 0) {
      hours--;
      minutes += 60;
    }

    if (hours < 0) {
      days--;
      hours += 24;
    }

    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate(); // Add the number of days in the previous month
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days, hours, minutes, seconds });
  }, 1000);

  return (
    <div id="_about" className="w-full p-5 sm:p-10 mb-10">
      <h1 className="ani text-xl sm:text-2xl font-bold mx-auto text-center my-3">
        ABOUT
      </h1>
      <div className="ani flex flex-col max-w-3xl mx-auto sm:flex-row p-3 items-center rounded-tl-lg rounded-br-lg shadow-lg gap-9">
        <img
          className="rounded-tl-lg rounded-br-lg h-[300px] w-auto sm:w-[350px] sm:max-h-[350px] sm:flex-1"
          src={`https://firebasestorage.googleapis.com/v0/b/portfolio-react-29350.appspot.com/o/Livin.jpg?alt=media&token=de15e18f-d9de-4759-8537-8b36a188c6ee`}
          alt=""
        />
        <p className="w-full text-md sm:text-lg italic font-medium text-center">
          A passionate web developer with a strong foundation in web
          technologies like HTML, CSS, JavaScript, React, and Node.js. Completed
          a BE in Electronics and Communication Engineering and built various
          projects, including responsive web applications and full-stack blogs.
          Currently seeking a role in a company where I can apply and expand my
          skills while contributing to innovative projects.
        </p>
      </div>

      <div className="my-9 p-5 flex flex-wrap gap-4 flex-row items-center justify-center shadow-green-500 hover:shadow-md">
        <Button gradientDuoTone={"greenToBlue"}>
          <a href={cv} download="Resume-Saala">
            Download CV
          </a>
        </Button>
        <Button gradientDuoTone={"greenToBlue"} outline>
          <Link
            id="contact"
            activeClass="active"
            to="_contact"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Contact Me!
          </Link>
        </Button>
      </div>

      <div className="p-5 w-full max-w-[1200px]  shadow-lg mx-auto rounded-tl-lg rounded-br-lg mt-6">
        <h1 className="ani underline underline-offset-8 text-center text-lg sm:text-xl text-green-500 font-bold mb-5">
          PERSONAL DETAILS
        </h1>

        <div className="">
          <div className="ani flex flex-col sm:flex-row rounded-md p-3 items-start justify-center">
            <p className=" flex-1 text-center text-green-500 font-semibold text-xl">
              Personal Info
            </p>
            <p className="flex-1 sm:flex-2 text-md sm:text-lg">
              <strong>Father: </strong>Saravanan P <br />
              <strong>Mother: </strong>Annakkili S <br />
              <strong>Date Of Birth: </strong>28th May 2003 <br />
              <strong>Age: </strong> <b>{age.years}</b> Years,{" "}
              <b>{age.months}</b> {age.months > 1 ? "Months" : "Month"},{" "}
              <b>{age.days}</b> {age.days > 1 ? "Days...!" : "Day"},<br />{" "}
              <b>{age.hours}</b> {age.hours > 1 ? "Hours...!" : "Hour"},{" "}
              <b>{age.minutes}</b> {age.minutes > 1 ? "Minutes...!" : "Minute"},{" "}
              <b>{age.seconds}</b> {age.seconds > 1 ? "Seconds...!" : "Second"}
              <br />
              <strong>Languages Known: </strong>Tamil, English <br />
            </p>
          </div>{" "}
          <hr />
          <div className="ani flex flex-col sm:flex-row rounded-md p-3 items-start sm:items-center justify-center">
            <p className=" flex-1 text-center text-green-500 font-semibold text-xl">
              Address
            </p>
            <p className="flex-1 sm:flex-2 text-md sm:text-lg">
              <strong>Door No: </strong>310,
              <br />
              Salem main road, Vangamedu <br />
              <strong>City: </strong>Karur
              <br />
              <strong>District: </strong>Karur
              <br />
              <strong>State: </strong>Tamilnadu, India
              <br />
              <strong>Pin Code: </strong>639006
            </p>
          </div>
          <hr />
          <div className="ani flex flex-col sm:flex-row rounded-md p-3 items-start justify-center">
            <p className=" flex-1 text-center text-green-500 font-semibold text-xl">
              Contact
            </p>
            <p className="flex-1 sm:flex-2 text-md sm:text-lg">
              <strong>Mobile Number: </strong>7904535371 <br />
              <strong>Email ID: </strong>slivinkumarkrr@gmail.com <br />
              <a
                className="flex flex-nowrap w-full items-center justify-start gap-1
               font-bold text-green-500 hover:underline"
                target="_blank"
                href="https://www.linkedin.com/in/livinkumar-saravanan-666731255"
              >
                LinkedIn
                <FaLinkedin className="w-5 h-5 rounded-full self-center" />
              </a>
              <a
                className="flex flex-nowrap w-full items-center justify-start gap-1
               font-bold text-green-500 hover:underline"
                target="_blank"
                href="https://github.com/LivinkumarS"
              >
                GitHub
                <FaGithub className="w-5 h-5 rounded-full self-center" />
              </a>
              <strong>Email ID: </strong>slivinkumarkrr@gmail.com
            </p>
          </div>{" "}
          <hr />
          <div className="ani flex flex-col sm:flex-row rounded-md p-3 items-start justify-center">
            <p className=" flex-1 text-center text-green-500 font-semibold text-xl">
              Others
            </p>
            <p className="flex-1 sm:flex-2 text-md sm:text-lg">
              <strong>Area Of Interestt: </strong>Fullstack Web Development{" "}
              <br />
              <strong>Hobbies: </strong>Cricket, Listening Podcosts <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
