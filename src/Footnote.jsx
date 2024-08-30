import { Link } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
// import './Footnote.css'; // Import the CSS file

const Footnote = () => {
    return (
        <div className ="bg-[black] text-white">
            <footer className="bg-[black] text-white m-3 md:flex md:gap-20 ">
                <div className="pt-4">
                    <h2> # Computer Science Department</h2>
                    <p>© Rajiv Gandhi University of Knowledge Technologies, All Rights Reserved... @cse-01 CF-02</p>
                </div>
                <div className="flex gap-8">
                <div className="footnote-section">
                    <h2>Useful Links</h2>
                    <ul>
                        <li><Link to="/rows">RowRotation</Link></li>
                        <li><Link to="/faculty">Faculty</Link></li>
                        <li><a href="/sports">Sports</a></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </div>
                <div className="footnote-section">
                    <h2>Social Links</h2>
                    <ul>
                        <li className="relative"><a href="https://www.youtube.com"><IoLogoYoutube className="absolute end-3 mt-2 mr-1 text-red-600" />youtube</a></li>
                        <li className="relative"><a href="https://www.facebook.com"><FaFacebook className="absolute end-3 mt-1 " /> Facebook</a></li>
                        <li className="relative"><a href="https://www.twitter.com"><BsTwitterX className="absolute end-3 mt-1 mr-1"/> Twitter</a></li>
                        <li className="relative"><a href="https://www.instagram.com"><GrInstagram className="absolute end-3 mt-1 -mr-2 text-pink-600"/> Instagram</a></li>
                  
                    </ul>
                </div>
                </div>
                {/* <div>
                    <form className="flex flex-col gap-3">
                        <input type="text" name="FullName" placeholder="Full Name" className="p-2 text-[black] rounded-md"/>
                        <input type="email" placeholder="Enter Email Here..." />
                        <button type="submit" className="bg-blue-900 border-2 p-2">Submit</button>
                    </form>
                </div> */}
            </footer>
        </div>
    );
}

export default Footnote;
