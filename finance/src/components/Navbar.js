import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
        
            <Link to="/"> Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/survey"> Survey</Link>
            <Link to="/resources"> Resources</Link>
        

    </div>
  );
}

export default Navbar