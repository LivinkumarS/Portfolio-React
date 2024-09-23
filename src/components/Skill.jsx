import React from "react";
import {
  DiCss3,
  DiJavascript,
  DiMongodb,
  DiNodejs,
  DiPostgresql,
  DiPython,
  DiReact,
} from "react-icons/di";
import { FaHtml5 } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";

export default function Skill() {
  return (
    <div className="mx-auto p-4 flex-wrap sm:p-5 w-full max-w-4xl flex flex-row gap-7 items-center justify-around content-center shadow-lg">
      <div className="ani relative cursor-pointer group w-[200px] h-[200px] shadow-lg rounded-full flex flex-col items-center justify-center gap-3">
        <FaHtml5 color="green" className="w-[100px] rounded-full h-[100px]" />
        <strong className="mx-auto text-lg">HTML</strong>
        <div className=" hidden w-full absolute top-0 left-0 rounded-full h-full bg-green-500 text-white group-hover:flex items-center justify-center">
          <p className="skill text-2xl font-bold">Advanced!</p>
        </div>
      </div>
      <div className="ani  cursor-pointer group relative  w-[200px] h-[200px] shadow-lg rounded-full flex flex-col items-center justify-center gap-3">
        <DiCss3 color="blue" className="w-[100px] rounded-full h-auto" />
        <strong className="mx-auto text-lg">CSS</strong>
        <div className="hidden w-full absolute top-0 left-0 rounded-full h-full bg-blue-600 text-white group-hover:flex items-center justify-center">
          <p className="skill text-2xl font-bold">Advanced!</p>
        </div>
      </div>
      <div className="ani  cursor-pointer group relative w-[200px] h-[200px] shadow-lg rounded-full flex flex-col items-center justify-center gap-3">
        <DiJavascript
          color="yellow"
          className="w-[100px] rounded-full h-auto"
        />
        <strong className="mx-auto text-lg">JavaScript</strong>
        <div className="hidden w-full absolute top-0 left-0 rounded-full h-full bg-yellow-200 text-white group-hover:flex items-center justify-center">
          <p className="skill text-2xl font-bold">Intermediate!</p>
        </div>
      </div>
      <div className="ani  cursor-pointer group relative w-[200px] h-[200px] shadow-lg rounded-full flex flex-col items-center justify-center gap-3">
        <DiReact color="blue" className="w-[100px] rounded-full h-auto" />
        <strong className="mx-auto text-lg">React</strong>
        <div className="hidden w-full absolute top-0 left-0 rounded-full h-full bg-blue-600 text-white group-hover:flex items-center justify-center">
          <p className="skill text-2xl font-bold">Intermediate!</p>
        </div>
      </div>
      <div className=" ani cursor-pointer group relative w-[200px] h-[200px] shadow-lg rounded-full flex flex-col items-center justify-center gap-3">
        <DiNodejs color="maroon" className="w-[100px] rounded-full h-auto" />
        <strong className="mx-auto text-lg">Node</strong>
        <div className="hidden w-full absolute top-0 left-0 rounded-full h-full bg-red-950 text-white group-hover:flex items-center justify-center">
          <p className="skill text-2xl font-bold">Intermediate!</p>
        </div>
      </div>
      <div className=" ani cursor-pointer group relative w-[200px] h-[200px] shadow-lg rounded-full flex flex-col items-center justify-center gap-3">
        <SiExpress color="black" className="w-[100px] rounded-full h-auto" />
        <strong className="mx-auto text-lg">ExpressJS</strong>
        <div className="hidden w-full absolute top-0 left-0 rounded-full h-full bg-black text-white group-hover:flex items-center justify-center">
          <p className="skill text-2xl font-bold">Intermediate!</p>
        </div>
      </div>
      <div className=" ani cursor-pointer group relative w-[200px] h-[200px] shadow-lg rounded-full flex flex-col items-center justify-center gap-3">
        <DiMongodb color="green" className="w-[100px] rounded-full h-auto" />
        <strong className="mx-auto text-lg">MongoDB</strong>
        <div className="hidden w-full absolute top-0 left-0 rounded-full h-full bg-green-800 text-white group-hover:flex items-center justify-center">
          <p className="skill text-2xl font-bold">Intermediate!</p>
        </div>
      </div>
      <div className="ani  cursor-pointer group relative w-[200px] h-[200px] shadow-lg rounded-full flex flex-col items-center justify-center gap-3">
        <DiPostgresql color="blue" className="w-[100px] rounded-full h-auto" />
        <strong className="mx-auto text-lg">PostgreSQL</strong>
        <div className="hidden w-full absolute top-0 left-0 rounded-full h-full bg-blue-700 text-white group-hover:flex items-center justify-center">
          <p className="skill text-2xl font-bold">Intermediate!</p>
        </div>
      </div>
      <div className="ani  cursor-pointer group relative w-[200px] h-[200px] shadow-lg rounded-full flex flex-col items-center justify-center gap-3">
        <DiPython color="blue" className="w-[100px] rounded-full h-auto" />
        <strong className="mx-auto text-lg">Python</strong>
        <div className="hidden w-full absolute top-0 left-0 rounded-full h-full bg-blue-950 text-white group-hover:flex items-center justify-center">
          <p className="skill text-2xl font-bold">Intermediate!</p>
        </div>
      </div>
    </div>
  );
}
