import React from "react";
import "./ImageSlider.css";

export default function MoviePoster({ currentSlide, onPrevious, onNext }) {
  return (
    <div className="slider-section">
      <div className="slider">
        <div className="arrow arrow-left" onClick={onPrevious}>
          ❰
        </div>
        <div className="arrow arrow-right" onClick={onNext}>
          ❱
        </div>
        
        <div className="slide-container">
          <img 
            src={currentSlide.url} 
            alt={currentSlide.title}
            className="slide-image"
          />
        </div>
      </div>
    </div>
  );
}