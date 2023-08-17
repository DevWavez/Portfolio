import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[50px] bg-[#0a192f] flex justify-center items-center p-4">
      <p className="text-gray-300">Created by </p>
      <span className="text-gray-300 mx-2 items-start">&#169;</span>
      <span className="mr-5 text-gray-300">Ramo D.</span>
      <div>
        <a
          id="openModal"
          className="text-gray-300  font-bold py-2 px-4"
          href="/"
        >
          Impressum
        </a>
      </div>
      <div>
        <a className="text-gray-300 font-bold py-2 px-4" href="">
          {" "}
          Datenschutz
        </a>
      </div>
    </div>
  );
};

export default Footer;
