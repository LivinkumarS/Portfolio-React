import React from "react";
import Certificate from "./Certificate";

export default function Qualification() {
  return (
    <div id="_qual" className="w-full p-5 sm:p-10 ">
      <h1 className="ani text-xl sm:text-2xl font-bold mx-auto text-center mb-2">
        Qualifications
      </h1>

      <div className="w-full max-w-[1200px] mx-auto shadow-lg p-3">
        <h1 className="ani underline underline-offset-8 text-center text-lg sm:text-xl text-green-500 font-bold mb-5">
          EDUCATION
        </h1>
        <div className="">
        <div className=" ani items-center w-full p-3 flex flex-col sm:flex-row gap-4">
          <p className=" flex-1 text-center text-green-500 font-semibold text-xl">
            SSLC
          </p>
          <p className="flex-1 sm:flex-2 text-md sm:text-lg">
            <strong>Institution: </strong>Kongu Higher Secondary School
            <br />
            <strong>Passing Out Year: </strong>2018
            <br />
            <strong>Percentage: </strong>91.2%
          </p>
        </div>
        <hr />
        <div className=" ani max-w-[1200px] items-center w-full p-3 flex flex-col sm:flex-row gap-4">
          <p className=" flex-1 text-center text-green-500 font-semibold text-xl">
            HSC (Bio-Maths)
          </p>
          <p className="flex-1 sm:flex-2 text-md sm:text-lg">
            <strong>Institution: </strong>Kongu Higher Secondary School
            <br />
            <strong>Passing Out Year: </strong>2020
            <br />
            <strong>Percentage: </strong>69.66%
          </p>
        </div>
        <hr />
        <div className=" ani max-w-[1200px] items-center w-full p-3 flex flex-col sm:flex-row gap-4">
          <p className=" flex-1 text-center text-green-500 font-semibold text-xl">
            B.E.-Electronics and Communication Engineering
          </p>
          <p className="flex-1 sm:flex-2 text-md sm:text-lg">
            <strong>Institution: </strong>Paavai Engineering College
            <br />
            <strong>Passing Out Year: </strong>2024
            <br />
            <strong>CGPA: </strong>8.15
          </p>
        </div>
        </div>
      </div>

      <div className="mt-12 mx-auto w-full max-w-[1000px]">
        <h1 className="ani underline underline-offset-8 text-center text-lg sm:text-xl text-green-500 font-bold mb-5">
          CERTIFICATIONS
        </h1>
        <div className="w-full p-4 flex flex-wrap gap-4 items-center justify-around content-center">
          <Certificate
            image={`https://firebasestorage.googleapis.com/v0/b/portfolio-react-29350.appspot.com/o/udemy.jpg?alt=media&token=fe9ef583-7ce7-4483-96a7-7e487a91aa73`}
            desc="August 22, 2023"
            name="The Complete 2024 Web Development Bootcamp"
            institute="By Angela Yu -Udemy"
            link=" https://www.udemy.com/certificate/UC-03215e9d-991c-4174-88c5-868390fdeb5c/"
          />
          <Certificate
            image={'https://firebasestorage.googleapis.com/v0/b/portfolio-react-29350.appspot.com/o/googlepython.png?alt=media&token=0ccd315d-b3ae-477c-9a1b-988831ace823'}
            desc="June 11, 2024"
            name="Crash Course on Python"
            institute="Google-Coursera"
            link="https://coursera.org/share/27f4c9ecd78a626186b5b2b05a9fecbf"
          />
          <Certificate
            image={`https://firebasestorage.googleapis.com/v0/b/portfolio-react-29350.appspot.com/o/JH.png?alt=media&token=3ee1aef1-821b-4076-9021-3f6eb48df32e`}
            desc="August 22, 2023"
            name="HTML, CSS, and Javascript for Web Developers"
            institute="Johns Hopkins University"
            link="https://coursera.org/share/4955d8b32130427289c1359fbaba97b9"
          />
        </div>
      </div>
    </div>
  );
}
