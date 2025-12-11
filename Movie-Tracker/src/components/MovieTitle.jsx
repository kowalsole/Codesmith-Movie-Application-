import React from "react";
import "./ImageSlider.css";

export default function MovieTitle({ currentSlide, currentIndex, totalSlides }) {
  return (
    <div className="text-content">
      <h2 className="slide-title">{currentSlide.title}</h2>
      <p className="slide-description">
        {currentSlide.description || 
          `This is a detailed description of ${currentSlide.title}. 
          You can add more information about the movie, its plot, 
          director, cast, or any other relevant details here.`}
        <br /><br />
        Slide {currentIndex + 1} of {totalSlides}
      </p>
    </div>
  );
}