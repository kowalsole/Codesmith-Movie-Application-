import ImageSlider from "./ImageSlider";
import "./App.css";

const App = () => {
  const slides = [
    
    { url: "http://localhost:3000/image2.png", title: "Toy Story 5" },
  ];

  return (
    <div className="app">
      <ImageSlider slides={slides} />
    </div>
  );
};

export default App;