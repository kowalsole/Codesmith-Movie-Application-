import ImageSlider from "../Movie-Tracker/src/ImageSlider";
import SearchForm from "../Movie-Tracker/src/pages/SearchForm";
import "./App.css";
import Signup from "../Movie-Tracker/src/components/Signup";

const App = () => {
  const slides = [
    { url: "http://localhost:3000/image2.png", title: "Toy Story 5" },
  ];

  return (
    <div>
      <div>
        <Signup />
      </div>

      <div className="app">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;
