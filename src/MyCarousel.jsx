import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = () => {
  return (
    <div
      style={{
        padding: '4% 5%',
        width: '100%',
        marginBottom: '5%',
      }}
      className="bg-gray-100"
    >
      <Carousel
        style={{
          width: '90%',
          minHeight: '50%',
          margin: '0 auto',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        {/* First Slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./nature3.jpg"
            alt="Welcome Slide"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption className="bg-opacity-70 bg-black text-white py-3 rounded-lg">
            <h5 className="text-yellow-500 font-bold">Welcome to CSE-01@OFFICIAL</h5>
            <p>Our class offers a dynamic environment tailored to inspire and challenge you.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./moon4.jpg"
            alt="Learning Slide"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption className="bg-opacity-70 bg-black text-white py-3 rounded-lg">
            <h5 className="text-lime-400 font-bold">What You'll Learn</h5>
            <p>Explore diverse topics and gain practical skills for real-world challenges.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Third Slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./nature2.jpg"
            alt="Join Us Slide"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption className="bg-opacity-70 bg-black text-white py-3 rounded-lg">
            <h5 className="text-red-500 font-bold">Join Us Today!</h5>
            <p>
              Ready to embark on an educational journey that's both enriching and exciting?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
