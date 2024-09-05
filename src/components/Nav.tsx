import React from "react";

const Nav: React.FC = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white ">
        <div className="flex items-center">
          <span className="text-xl font-bold">Charanraj.</span>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-400">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-blue-400">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
