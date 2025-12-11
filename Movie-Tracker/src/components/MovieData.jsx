import React from "react";
import "../ImageSlider.css";

export default function MovieData({ currentSlide, currentIndex }) {
  const movieDetails = [
    { category: "Director", value: "Christopher Nolan" },
    { category: "Release Year", value: "2023" },
    { category: "Genre", value: "Sci-Fi/Thriller" },
    { category: "Duration", value: "2h 49m" },
    { category: "IMDb Rating", value: "8.5/10" },
    { category: "Starring", value: "Cillian Murphy, Emily Blunt" },
    { category: "Box Office", value: "$950 million" },
  ];

  return (
    <div className="table-section">
      <table className="info-table">
        <thead>
          <tr>
            <th>Movie Information</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {movieDetails.map((detail, index) => (
            <tr key={index}>
              <td>{detail.category}</td>
              <td>{detail.value}</td>
            </tr>
          ))}
         
          <tr className="current-movie-row">
            <td>Current Movie</td>
            <td>
              {currentSlide.title} (Slide {currentIndex + 1})
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}