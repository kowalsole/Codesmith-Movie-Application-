
import SearchPage from "./pages/SearchPage";

import "./App.css";
import Signup from "./components/Signup";

const App = () => {

  return (
    <div>
      <Signup></Signup>

      <div className="app">

        <SearchPage></SearchPage>
      </div>
    </div>
  );
};

export default App;