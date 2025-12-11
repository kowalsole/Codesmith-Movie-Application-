import React, { useState } from "react";
import "./ImageSlider.css";

export default function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  const tableData = [
    { column1: "Title", column2: "Row 1, Col 2" },
    { column1: "Genre", column2: "Row 2, Col 2" },
    { column1: "Year", column2: "Row 3, Col 2" },
    { column1: "Run Time", column2: "Row 4, Col 2" },
    { column1: "Actors", column2: "Row 5, Col 2" },
    { column1: "MPAA", column2: "Row 6, Col 2" },
    { column1: "Row 7, Col 1", column2: "Row 7, Col 2" },
  ];

  return (
    <div className="image-slider-container">
      <div className="display">
        <div className="slider-section">
          <div className="slider">
            <div className="arrow arrow-left" onClick={goToPrevious}>
              ❰
            </div>
            <div className="arrow arrow-right" onClick={goToNext}>
              ❱
            </div>
            
            <div className="slide-container">
              <img 
                src={slides[currentIndex].url} 
                alt={slides[currentIndex].title}
                className="slide-image"
              />
            </div>
          </div>

          {/* Text box to the right of the image */}
          <div className="text-box">
            <h2 className="slide-title">{slides[currentIndex].title}</h2>
            <div className="slide-description">
              <p>This is a description for {slides[currentIndex].title}
              Current slide: {currentIndex + 1} of {slides.length}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>

        {/* Table below the image and arrows */}
        <div className="table-section">
          <table className="info-table">
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.column1}</td>
                  <td>{row.column2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}