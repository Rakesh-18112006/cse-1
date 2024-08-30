// import logo from './logo.svg';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DisplayAssignment from './DisplayAssignment';
import ContactUS from './ContactUs';
import Faculty from './Faculty';
import About from './About';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.css'
import TimeTable from './TimeTable';



function App() {
 
  return (
    <div >
        <BrowserRouter basename='cse-1'>
        <Routes>
         <Route path='/'  element= {<Home></Home>}/>
          <Route path='/rows'  element= {<DisplayAssignment> </DisplayAssignment>}/>
          <Route path='/faculty'  element= {<Faculty></Faculty>}/>
          <Route path='/contactus'  element= {<ContactUS></ContactUS>}/>
          <Route path='/about'  element= {<About></About>}/>
          <Route path='/timetable'  element= {<TimeTable></TimeTable>}/>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
