import React from 'react';
import homeImage from "../picture/homeImage.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{backgroundImage:`url(${homeImage})`}}>
      <div className="headerContainer" style={{opacity: 0.81, backgroundColor: `rgb(75,143,186)`}}>
        <h1 style={{fontSize: "60px"}}>Financial Arsenal</h1>
        <h2 style={{margin: "80px"}}>We serves to positively contribute to users' understanding of their personal finances and financial goals. 
          In other words, our goal is to assist you in building your personal financial arsenal, much like you would a 
          toolkit or skillset. We accomplish this through issuing a survey intended to assess an individual's financial 
          goals, suggesting actionable steps for addressing their personal needs based upon their survey responses, and 
          providing relevant resources and information.</h2>
      </div>
    </div>

  );
}

export default Home;