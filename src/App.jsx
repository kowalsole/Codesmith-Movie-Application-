import ImageSlider from "../Movie-Tracker/src/ImageSlider";
import SearchForm from "../Movie-Tracker/src/pages/SearchForm";

import "./App.css";
import Signup from "../Movie-Tracker/src/components/Signup";

const App = () => {
  const slides = [
    { url: "http://localhost:5500/image2.png", title: "Toy Story 5" },
  ];

  return (
    <div>
      <Signup></Signup>

      <div className="app">
        {/* <Navigation></Navigation> */}
        {/* <ImageSlider slides={slides} /> */}
        <SearchForm></SearchForm>
      </div>
    </div>
  );
};

export default App;
