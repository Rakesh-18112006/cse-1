import React from "react";
// import { Navbar } from "react-bootstrap";
import Footnote from "./Footnote";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 md:p-12">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4 text-center">
          About Us
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Welcome to our classroom! We are committed to fostering an environment
          where learning thrives and creativity flourishes. Here's what makes
          us special:
        </p>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-shrink-0">
              <img
                src="https://via.placeholder.com/150"
                alt="Dedicated Faculty"
                className="rounded-full w-24 h-24 md:w-32 md:h-32"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-700">
                Dedicated Faculty
              </h3>
              <p className="text-gray-600">
                Our teachers are passionate about providing high-quality
                education, inspiring students to achieve their best.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-shrink-0">
              <img
                src="boys.jpg"
                alt="Innovative Learning"
                className="rounded-full w-24 h-24 md:w-32 md:h-32"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-700">
                Innovative Learning
              </h3>
              <p className="text-gray-600">
                We embrace modern teaching techniques, making learning engaging
                and fun for all our students.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-shrink-0">
              <img
                src="https://via.placeholder.com/150"
                alt="Supportive Community"
                className="rounded-full w-24 h-24 md:w-32 md:h-32"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-700">
                Supportive Community
              </h3>
              <p className="text-gray-600">
                Our classroom is a space where everyone feels valued and
                encouraged to grow.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Join us in this journey of growth and discovery. Together, we shape
            the future!
          </p>
        </div>
      </div>
    </div>
    <Footnote></Footnote>
    </>
  );
};

export default About;
