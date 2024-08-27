import Footnote from "./Footnote"
import Navbar from "./Navbar"
import { MdAddIcCall } from "react-icons/md"; 
import { SiGmail } from "react-icons/si";

const ContactUS = () => {
    return(
        <div style = {{
            backgroundColor : '#ddd',
        }}>
            <Navbar></Navbar>
            <h2 className="pl-16 pt-14">Class Representatives....</h2>
            <div className="pl-16">
   
            <h2 style = {{
                color : 'brown',
            }}>Mr. Mithilesh Kumar</h2>
          
            <h4 className="flex"> <MdAddIcCall />: 9398384684 </h4>
            <h4 className="flex"> <SiGmail /> : mithilesh@gmail.com </h4>
    
            <h2 style={ {
                color : 'brown',
            }} >Mrs. Mohitha</h2>
            <h4 className="flex"> <MdAddIcCall /> : 9381453687 </h4>
            <h4 className="mb-[70%] flex"> <SiGmail /> : mohitha@gmail.com </h4>
            </div>
            <Footnote></Footnote>
        </div>
    );
}
export default ContactUS;