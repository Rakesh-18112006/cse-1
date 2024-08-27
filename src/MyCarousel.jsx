
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = () => {
   return (
     <div style={{
       paddingLeft : '5%', 
       paddingTop : '4%', 
       width : '100%',
       marginBottom : '90%',
     }}>
       <Carousel style = {{
           width : '90%',
           minHeight : '50%',


       }}>
           <Carousel.Item style = {{
                  width : '100%',
           }}>
               <img
                   className="d-block w-100"
                   src="./nature3.jpg"
                   alt="First slide"
               />
               <Carousel.Caption>
                   <h5 className='text-yellow-950'>Welcome to CSE-01@official</h5>
                   <p>Our class offers a dynamic environment tailored to inspire and challenge you</p>
               </Carousel.Caption>
           </Carousel.Item  >
           <Carousel.Item style = {{
                  width : '100%',
           }}>
               <img
                   className="d-block w-100"
                   src="./moon4.jpg"
                   alt="First slide"
               />
               <Carousel.Caption>
                   <h5 className='text-lime-500'>What you'll learn</h5>
                   <p>Some representative placeholder content for the first slide.</p>
               </Carousel.Caption>
           </Carousel.Item >
           <Carousel.Item style = {{
                  width : '100%',
           }} >
               <img
                   className="d-block w-100"
                   src="./nature2.jpg"
                   alt="First slide"
               />
               <Carousel.Caption>
                   <h5 className=" text-red-800 text-center">Join us Today!</h5>
                   <p className='mt-2'>Ready to embark on an educational journey that’s both enriching and exciting?</p>
               </Carousel.Caption>
           </Carousel.Item >
          
       </Carousel>
       </div>
   );
};

export default MyCarousel;
