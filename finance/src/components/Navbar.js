import React, from 'react';
import {Link} from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
        <div className="left"></div>
        <div className="right">
            <Link to="/"> Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/survey"> Servey</Link>
            <Link to="/resoures"> Resources</Link>
        </div>
    </div>
  );
}

export default Navbar