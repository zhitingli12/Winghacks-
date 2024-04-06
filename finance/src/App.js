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
          <Route path="/" exact component={Home} />
          <Route path="/resources" exact component={Resources} />
          <Route path="/about" exact component={About} />
          <Route path="/survey" exact component={Survey} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;