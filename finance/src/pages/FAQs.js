import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/FAQs.css";

function FAQs() {
  return (
      <div className="faqs">
        <h1> FAQs</h1>
        <div style={{textAlign: 'left', marginRight: "50px", marginLeft: "50px", fontSize: "20px"}}>
        <p>
        <b>What does financial literacy even mean?</b>
<br/>
<br/>
According 
to <Link to="https://dictionary.cambridge.org/us/dictionary/english/financial-literacy">Cambridge Dictionary</Link>, 
financial literacy can be defined as “the ability to understand basic 
principles of business and finance.” According to an article on the <Link to="https://online.hbs.edu/blog/post/finance-principles">Harvard Business School</Link> website, some 
basic principles of business and finance might include the following: cash flow (the general movement of 
money, whether into or out of an account), time value of money (principle that suggests the current value 
of a given sum money now will be lower in the future), and risk and return (concept that establishes a 
relationship between a particular financial risk and its associated level of return). Additionally, the 
Federal Student Aid website suggests that financial literacy concerns an individual’s understanding 
regarding earning, managing, and investing money. Evidently, financial literacy is a determining factor 
in the types of financial choices that an individual makes.
        </p>
        <p>
        <b>What is the current state of financial literacy in the United States?</b>
<br/>
<br/>
According to <Link to="https://gitnux.org/financial-literacy-in-america-statistics/">statistics</Link> obtained
 via “Financial Literacy In America Statistics: Market Report & Data” as found on Gitnux, the following
  information provides some insight into the current state of financial literacy the United States:
<ul>
<li>Over 70% of American adults are considered to be financially illiterate</li>
<li>Over 50% of Americans experience feelings of anxiety when they think about personal finances</li>
<li>Less than 30% of Americans have established financial plans that take savings and investment goals 
    into account</li>
<li>Less than 20% of students in the United States must take required personal finance classes in schools</li>
</ul>
        </p>
        <p>
        <b>Why are those statistics cause for concern? Why should individuals care about their level of 
            financial literacy?</b>
<br/>
<br/>
An individual’s level of financial literacy can greatly influence their financial decision-making logic and
 processes. According to 
 a <Link to="https://www.finra.org/investors/insights/finra-foundation-national-financial-capability-study">2021 national study</Link> conducted 
 by the FINRA Foundation, when compared to 
 individuals with lower financial literacy, individuals with higher financial literacy were more likely to 
 make ends meet. Those with higher financial literacy spent less than they made in income, were more likely 
 to designate at least three month’s worth of emergency funds, and were more likely to make long-term 
 financial plans. In other words, an individual’s level of financial literacy played a significant role in 
 the manner in which individuals managed and maintained their money. Because financial literacy is such an 
 instrumental factor in one’s financial journey, it is important to ensure that one’s knowledge is thorough 
 and accurate.
        </p>
        <p>
        <b>What are some ways to improve one’s level of financial literacy?</b>
<br/>
<br/>
The following are some steps that an individual can take in order to improve their level of financial literacy:
<ul>
<li>Create a clear plan for maintaining a budget, tracking current expenses, and anticipating future expenses</li>
<ul>
    <li>The manner in which this task is undertaken is completely dependent upon an individual’s personal 
        preferences. For those who prefer to physically write and take notes, it may be beneficial to 
        create a written expense tracking and budget outline in a physical journal. For those who prefer to 
        incorporate technology into their daily lives, it may be beneficial to download budgeting and expense 
        tracking software.</li>
</ul>
<li>Make careful efforts to ensure that expenses do not exceed income</li>
<ul>
    <li>This task can be accomplished through carefully making monthly budgets. If you have no prior 
        experience with creating monthly budgets, it may be helpful to first start by tracking your 
        expenses for a month. This will help you to establish a baseline and better anticipate expenses 
        that you may incur during the following month. Once you’ve tracked your expenses for a month, you 
        can create a budget for the upcoming month. Although it is understandable that unexpected changes 
        or expenses may arise throughout the month, a budget is most effective when individuals follow it 
        as closely as possible.</li>
</ul>
<li>Enroll in and take a financial literacy course</li>
<ul>
    <li>Some institutions and companies offer financial literacy courses. It is important to note that some 
        of these courses are free, while others are paid. An example of a free financial literacy course can 
        be found on Khan Academy. It was created in partnership with Capital One and covers a variety of 
        important financial concepts and topics.</li>
</ul>
<li>Request professional advice</li>
<ul>
    <li>Conduct a web search or consult our running list of provided resources in order to identify 
        individuals or entities that can provide reliable financial advice. A benefit of seeking 
        professional advice is that the provided information is typically tailored specifically to your 
        individual needs. While web pages or websites may provide general rules of thumb for developing 
        financial literacy, trained financial advisors can offer personalized advice. When seeking out 
        financial advisors, conduct additional research in order to ensure that they are truly as credible 
        and experienced as they claim to be.</li>
</ul>
</ul>
        </p>
        </div>
      </div>
  );
}

export default FAQs;