import React, { useState } from 'react';
import '../Styles/ImageSlider.css'

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
   
  
    const goToSlide = (index) => {
      setCurrentIndex(index);
    };
  
    return (
      <div className="slider">
        <div className="slider-inner" style={{ transform: `translateX(-${currentIndex * (360 + 30) * 3}px)` }}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        
        <div className="dots">
          {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    );
  };

export default ImageSlider;
