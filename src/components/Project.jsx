import React, { useRef } from "react";

export default function Project({ head, date, content, image, link }) {
  const linkRef = useRef();
  return (
    <div
      className="ani cursor-pointer mb-10 mx-auto w-full max-w-[300px] sm:max-w-3xl flex flex-col gap-4 sm:gap-8 sm:flex-row rounded-lg shadow-lg items-stretch hover:shadow-green-300"
      onClick={() => {
        linkRef.current.click();
      }}
    >
      <a href={link} target="_blank" className="hidden" ref={linkRef}></a>
      <img
        className="w-full h-auto sm:w-[280px] rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
        src={image}
        alt=""
      />
      <p className="flex-1 p-3 sm:p-5 text-start">
        <strong>{head}</strong>
        <p className="text-gray-600">{date}</p>
        <p>{content}</p>
      </p>
    </div>
  );
}
