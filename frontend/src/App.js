// import logo from './logo.svg';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import RowRotation from './RowRoatation/RowRotation';
import Faculty from './Faculty/Faculty';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import TimeTable from './TimeTable/TimeTable';
import Home from './pages/Home';
import PostUploader from './componenets/PostUploader';




function App() {
 
  return (
    <div >
        <BrowserRouter basename='cse-1'>
        <Routes>
         <Route path='/'  element= {<Home></Home>}/>
          <Route path='/rows'  element= {<RowRotation></RowRotation>}/>
          <Route path='/faculty'  element= {<Faculty></Faculty>}/>
          <Route path='/contactus'  element= {<ContactUs></ContactUs>}/>
          <Route path='/about'  element= {<About></About>}/>
          <Route path='/timetable' element={<TimeTable></TimeTable>} />
          <Route path='/post-uploader'  element= {<PostUploader></PostUploader>}/>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
