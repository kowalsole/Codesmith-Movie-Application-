
import SearchForm from "./pages/SearchForm";

import "./App.css";
import Signup from "./components/Signup";

const App = () => {

  return (
    <div>
      <Signup></Signup>

      <div className="app">

        <SearchForm></SearchForm>
      </div>
    </div>
  );
};

export default App;