
import Navbar from "./Navbar";
import Footnote from "./Footnote";

 const TimeTable = () => {
    return(
        
        <div style = {{
            backgroundColor : '#ccc',
        }}>
            <Navbar></Navbar>
            <div >
                <h1 className="bg-black text-[white] text-center">Time Table</h1>
            </div>
            <img src="./timetable2.jpg" class="img-fluid" 
            style = {{
                marginBottom : '70%',
            }}
            alt="./timetable.jpg"/>
               <Footnote></Footnote>
        </div>
    );
 }
 export default TimeTable;