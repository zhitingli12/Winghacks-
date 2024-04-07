import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage from "../picture/aboutImage.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about" style={{backgroundImage: `url(${aboutImage})`}}>
      <div style={{opacity: 0.81, backgroundColor: `rgb(75,143,186)`}}>
      <h1 style={{fontSize: "50px",textAlign: 'center'}}> About Us</h1> 
        <div style={{fontSize: "20px", margin: "20px"}}>
            <p>
              At Financial Arsenal, we understand that identifying and accomplishing certain financial goals,
              especially those related to life planning and independent living, can initially seem incredibly
              overwhelming. However, we also recognize that consulting reliable resources, stopping to assess
              one’s current financial situation, and breaking down goals into manageable pieces can help
              individuals to develop an effective plan for approaching and accomplishing said goals.
            <br/>
            <br/>
              We hope that Financial Arsenal makes the provided financial information and resources more
              accessible and easy to understand. Because we attempt to limit the technical jargon to
              professionals, we suggest that you utilize this resource as a starting point rather than an
              end-all-be-all. In other words, consider Financial Arsenal to be a supplement to additional
              financial services and resources, not a substitute.

            </p>
          </div>
          </div>
        </div>
  );
}

export default About;