import Footnote from "./Footnote";
import Frame from "./Frame";
import Navbar from "./Navbar";
const faculty = [
    { 
        img : './hod.jpg',
       name : 'Ms.Nagarjuna Devi' ,
       qual : 'M.Tech  Phd' ,
       description : " Head Of The Department @Computer Science Department in Rgukt Nuzvid",
       url : 'https://rguktn.ac.in/profile/RN051116003',
    },
    { 
        img : './jk.jpg',
        name : "Mr.G. Jaya Krishna" ,
        qual : " M.Tech  SET" ,
        description : " Assistant Professor (PSTC) @Computer Science Department in Rgukt Nuzvid",
        url : 'https://rguktn.ac.in/profile/210508N',
    },
    { 
        img  : './divya.jpg',
        name : "Ms.Divya Sri" ,
        qual : " MA  SET" ,
        description : " Lecture (English) @Computer Science Department in Rgukt  Nuzvid",
         url : 'https://rguktn.ac.in/profile/120803N'
        },
    { 
        img : './bapi raju.jpg',
        name : "Mr.Bapi Raju" ,
        qual : " M.Sc  SLET" ,
        description : " Assistant Professor (MATHS) @Computer Science Department in Rgukt Nuzvid",
        url : 'https://rguktn.ac.in/profile/131305N'
     },
    { 
         img  : './satya.jpg',
         name : "Mr. Satya Dev",
         qual : " MA  SET",
         description : " Assistant Professor (EGCD) @Mechanical Engineer in Rgukt  Nuzvid",
         url : 'https://rguktn.ac.in/profile/RN141116004'
        },
    { 
        img  : './swathi.jpg',
        name : "Ms.P Swathi" ,
        qual : " MBA NET" ,
        description : " Lecturer (IC) @Computer Science Department in Rgukt  Nuzvid",
        url  : 'https://rguktn.ac.in/profile/110901N' 
    },
    { 
        img  : './gopi.jpg',
        name : "Mr.Gopi Krishna" ,
        qual : " Electronics" ,
        description : " Lecturer (BEEE) @Computer Science Department in Rgukt  Nuzvid",
        url  : 'https://rguktn.ac.in/profile/110901N' 
    },
]
const Faculty = () => {

    return (
        <div style = {{
            // backgroundColor: 'rgba(180, 184, 183,0.5)'
            // ,overflowY: 'scroll',
            backgroundColor : '#ddd',
            
           
        }}>
            
            <Navbar></Navbar>
            <h1 className="bg-slate-900 text-center text-white">Faculty</h1>
            <div style = {{
                width : '80%',
                margin : '0 auto',
                display : 'flex',
                gap : 16,
                flexWrap :  'wrap',
            }}>
           {faculty.map((item,index) => (<Frame
             key = {index}
             name = {item.name}
             qual = {item.qual}
             img  = {item.img}
             url  = {item.url}
             description = {item.description}

           ></Frame>))} </div>
            <Footnote></Footnote>
        </div>
    );
}
export default Faculty;