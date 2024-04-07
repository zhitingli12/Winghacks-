import React from 'react';
import { Link } from 'react-router-dom';
import resourcesImage from "../picture/resourceImage.webp";
import "../styles/Resources.css";

function Resources() {
  return (
    <div className="resources" style={{backgroundImage: `url(${resourcesImage})` }}>
        <div style={{opacity: 0.81, backgroundColor: `rgb(75,143,186)`}}>
          <h1 style={{fontSize: "50px",textAlign: 'center'}}> Resources</h1> 
          <div style={{fontSize: "20px", margin: "20px"}}>
            <p>
            We understand that finding reputable financial resources can sometimes be a daunting process, so
            we have developed a running list of resources that you may want to consult throughout your
            financial journey. The following are some relevant resources and entities that might prove helpful
            as you navigate your financial journey:
            </p>
            <ul>
            <li>
            Capital One is a notable financial services company that was established nearly 30 years ago. It
            intends to make the financial system more accessible to and inclusive of a broad range of individuals,
            including those who might not have had access to certain financial services otherwise. Additionally,
            Capital One is committed to creating positive change within communities and places particular emphasis
            on environmental sustainability, community, and DEI efforts. Evidently, Capital One prioritizes not
            also the provision of financial services, but also philanthropic efforts. Captial
            One's <Link to="https://www.capitalone.com/bank/money-management/">Money Management page</Link> provides
            several articles pertaining to the maintenance of personal finance.
          </li>
          <br/>
          <li>
          Khan Academy and Capital One established a partnership in order to provide a
          self-paced <Link to="https://www.khanacademy.org/college-careers-more/financial-literacy">financial literacy course</Link>, 
          which is housed on Khan Academy’s website. The course serves to improve individuals’
          understanding of several financial concepts. Throughout the course, there are a variety of useful videos,
          articles, and practice activities.
          </li>
          <br/>
          <li>
          For individuals interested in cultivating investments, J.P Morgan provides partnerships with
          their <Link to="https://www.chase.com/personal/investments/advisor">Private Client Advisors</Link>.
          Private Client Advisors work alongside individuals in order to assess their current financial situation,
          investment goals, and personal values as well as provide individuals with personalized advice.
          Individuals who are interested in the aforementioned financial advising services can visit J.P. Morgan’s
          website to find instructions for setting up a complementary (free) investment consultation.
          </li>
          <br/>
          <li>
          The Federal Trade Commission website provides great financial advice on
          their <Link to="https://consumer.ftc.gov/">Consumer Advice</Link> and <Link to="https://consumer.ftc.gov/features/money-matters-how-spot-avoid-and-report-scams">Money Matters</Link> websites.
          The information on the website covers a wide variety of topics related to personal finance, including
          financial literacy, identifying and avoiding scams, and planning for important life changes (such as
          buying a car or home).
          </li>
          <br/>
          <li>
          For individuals who are concerned about getting out of debt, the Federal Trade Commission
          provides <Link to="https://consumer.ftc.gov/articles/how-get-out-debt">potential action steps and relevant information</Link>.
          </li>
          </ul>
          <br/>
          We plan to include additional resources over time. If there are any particular resources or topics that
          you are interested in, feel free to contact us and share your thoughts.
         </div> 
        </div>
      </div>
  );
}

export default Resources;