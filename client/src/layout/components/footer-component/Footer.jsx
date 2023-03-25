import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gray-800 h-20 flex flex-row justify-center px-10 items-center text-white">
      © {currentYear} All rights reserved Buduna Ionut-Adrian
    </div>
  );
};

export default Footer;
