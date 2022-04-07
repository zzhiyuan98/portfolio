import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./Home";

function App() {
  document.title = "Zhiyuan Zhang";
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
