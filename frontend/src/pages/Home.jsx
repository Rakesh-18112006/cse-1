

import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../componenets/Navbar';
import MyCarousel from '../componenets/MyCarousel';
import Footnote from '../componenets/Footnote';
// import { MdMargin } from "react-icons/md";


const Home = () => {
    return(
        <div>
            <Navbar></Navbar>
           <MyCarousel></MyCarousel> 
           <Footnote></Footnote>
        </div>
    );
}
export default Home;