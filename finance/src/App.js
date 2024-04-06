import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Survey from "./pages/Survey";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/resources" element={<Resources/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/survey" component={<Survey/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;