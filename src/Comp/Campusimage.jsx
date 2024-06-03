// src/ImageSlider.js
import React, { useState } from 'react';
import '../Styles/CampusSlider.css';

const images = [
  "/img/CampusImg/image.png",
  "/img/CampusImg/image1.png",
  "/img/CampusImg/image2.png",
  // Add more images as needed
];

const Campusimage = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`slider-1 ${props.className}`}>
      
      <img src={images[currentIndex]} alt="slider" className="slider-image-1" />
      
      <div className="dots-1">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot-1 ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Campusimage;
