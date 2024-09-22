import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full p-2 sm:p-10 border-t border-black">
      <div className="w-full flex items-center justify-between">
        <strong className="text-lg sm:text-xl text-green-500">
          Livinkumar S(Saala)
        </strong>

      </div>
      <hr />
      <div className="w-full mt-5 flex flex-row gap-7 items-center justify-center">
        <a className="cursor-pointer" href="https://github.com/LivinkumarS" target="_blank">
          <FaGithub className="w-6 h-6 sm:w-7 sm:h-7 "/>
        </a>
        <a
          className="cursor-pointer"
          href="https://www.linkedin.com/in/livinkumar-saravanan-666731255"
          target="_blank"
        >
          <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 "/>
        </a>
        <a
          className="cursor-pointer"
          href="https://https://wa.me/7904535371"
          target="_blank"
        >
          <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 "/>
        </a>
      </div>
    </div>
  );
}
