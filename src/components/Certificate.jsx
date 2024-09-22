import React, { useRef } from "react";
import { CgAwards } from "react-icons/cg";

export default function Certificate({ image, name, institute, desc, link }) {
  const linkRef = useRef();
  return (
    <div
      className="ani relative w-[250px] overflow-hidden h-[330px] rounded-lg rounded-tl-none group shadow-lg cursor-pointer hover:shadow-green-300"
      onClick={() => {
        linkRef.current.click();
      }}
    >
      <a href={link} target="_blank" className="hidden" ref={linkRef}></a>
      <img
        className="w-full h-[230px] group-hover:h-[220px] bg-cover"
        src={image}
        alt=""
      />
      <div className="w-full p-2">
        <strong className="font-bold">{name}</strong>
        <p>{institute}</p>
        <p className="text-sm hidden group-hover:block text-gray-600">{desc}</p>
      </div>

      <CgAwards
        color="green"
        className="bg-green-300 shadow-lg w-10 h-10 rounded-full absolute top-2 right-2"
      />
    </div>
  );
}
