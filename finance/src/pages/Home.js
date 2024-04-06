import React from 'react'
import {Link} from "react-router-dom";
import homeImage from "../picture/homeImage.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{backgroundImage: 'url(${homeImage})'}}>
      <div className="headerContainer">
        <h1>Name of Company</h1>
      </div>
    </div>
  );
}

export default Home