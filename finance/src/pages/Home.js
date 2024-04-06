import React from 'react'
import {Link} from "react-router-dom";
import homeImage from "../picture/homeImage.jpg";

function Home() {
  return (
    <div className="home">
      <div className="header"style={{backgroundImage: 'url(${homeImage})'}}>
        <h1>Name of Company</h1>
      </div>
    </div>
  )
}

export default Home