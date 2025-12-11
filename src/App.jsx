import ImageSlider from "../Movie-Tracker/src/ImageSlider";
import SearchForm from "../Movie-Tracker/src/pages/SearchForm";

import "./App.css";

const App = () => {
  const slides = [
    { url: "http://localhost:5500/image2.png", title: "Toy Story 5" },
  ];

  return (
    <div className="app">
      {/* <Navigation></Navigation> */}
      {/* <ImageSlider slides={slides} /> */}
      <SearchForm></SearchForm>
    </div>
  );
};

export default App;
