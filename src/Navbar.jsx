import { Link } from 'react-router-dom';
import { MdVerified } from "react-icons/md";

const Navbar = () => {
  return (
    <div> 
      <nav className="   bg-[#5ebe86]  md:flex ">
        <div className=" flex ">
          <img
            src="./logo2.jpg" // Ensure the path is correct
            
            alt="F2 Logo"
            className=" m-3 rounded-full md:w-[7%]  w-12 h-12 "
          />
          <h1 className=" flex my-6 md:text-4xl   text-[24px]  ">CSE-01@OFFICIAL <MdVerified className = "text-blue-900 my-1" /></h1>
        </div>
        <ul className=" flex md:gap-10  md:mt-14 md:text-[28px] md:mr-14 gap-3 text-[13px] ">
          <li>
            <Link className="mr-[2px]  no-underline text-white hover:text-[orange] " to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="mr-[2px] no-underline text-white hover:text-[orange]" to="/rows">Row_Rotation</Link>
          </li>
          <li className="nav-item">
            <Link className="mr-[2px] no-underline text-white hover:text-[orange]" to="/timetable">TimeTable</Link>
          </li>
          <li className="nav-item">
            <Link className="mr-[2px] no-underline text-white hover:text-[orange] " to="/faculty">Faculty</Link>
          </li>
          <li >
            <Link className="mr-[2px] no-underline text-white hover:text-[orange]" to="/contactus">ContactUs</Link>
          </li>
          <li>
            <Link className="mr-[2px] no-underline text-white hover:text-[orange]" to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
