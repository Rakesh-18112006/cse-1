
import Footnote from "./Footnote";
import Navbar from "./Navbar";
import MyCarousel from "./MyCarousel";
import 'bootstrap/dist/css/bootstrap.css'
// import { MdMargin } from "react-icons/md";


const Home = () => {
    return(
        <div>
            <Navbar></Navbar>
            <MyCarousel></MyCarousel> 
            <Footnote ></Footnote>
        </div>
    );
}
export default Home;