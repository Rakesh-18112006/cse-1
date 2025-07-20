import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-[#5ebe86] shadow-md z-1010">
      <nav className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="./logo2.jpg"
            alt="CSE-01 Logo"
            className="rounded-full w-12 h-12"
          />
          <h1 className="ml-3 text-white font-bold text-lg md:text-2xl flex items-center">
            CSE-01@OFFICIAL <MdVerified className="text-blue-900 ml-1" />
          </h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <AiOutlineClose className="text-white text-2xl" />
            ) : (
              <AiOutlineMenu className="text-white text-2xl" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li>
            <Link className="hover:text-orange-400" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-400" to="/rows">
              Row Rotation
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-400" to="/timetable">
              TimeTable
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-400" to="/faculty">
              Faculty
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-400" to="/contactus">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-400" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/3 h-full bg-gray-800 text-white z-20 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
          <h2 className="text-white font-bold text-lg">Menu</h2>
          <button onClick={toggleSidebar}>
            <AiOutlineClose className="text-white text-2xl" />
          </button>
        </div>
        <ul className="mt-4 space-y-4 px-4 text-white font-medium">
          <li>
            <Link
              className="hover:text-orange-400"
              to="/"
              onClick={toggleSidebar}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-orange-400"
              to="/rows"
              onClick={toggleSidebar}
            >
              Row Rotation
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-orange-400"
              to="/timetable"
              onClick={toggleSidebar}
            >
              TimeTable
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-orange-400"
              to="/faculty"
              onClick={toggleSidebar}
            >
              Faculty
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-orange-400"
              to="/contactus"
              onClick={toggleSidebar}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-orange-400"
              to="/about"
              onClick={toggleSidebar}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
