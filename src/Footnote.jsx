import { Link } from "react-router-dom";
import React from "react";

const Footnote = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">
              Classroom Connect
            </h3>
            <p className="text-gray-400 mt-2">
              Building a brighter future, one student at a time.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f text-white"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-white"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-white"></i>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Classroom Connect. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:underline text-gray-400 hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:underline text-gray-400 hover:text-white"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:underline text-gray-400 hover:text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footnote;
