import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Survey() {

  const [name, setName] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");
  const [savingsGoal, setSavingsGoal] = useState("");
  const [income, setIncome] = useState("");

  const navigate = useNavigate();

  const submit = (e) => { 
    e.preventDefault(); 
    if (!name || !currentSavings || !savingsGoal || !income) { 
      // Alert if any field is missing 
      alert("All fields necessary!"); 
    } else { 
      const myData = { 
        name: name,
        currentSavings: currentSavings,
        savingsGoal: savingsGoal
      };
      navigate('/');
    } 
  }

  const handleIncome = (e) => {
    setIncome(e.target.value)
  }

  return ( 
    <div>
    <h1>Survey</h1>
      <div style={{textAlign: 'left', marginLeft: "50px", marginRight: "50px", fontSize: "20px"}}>
        <form onSubmit={submit}>
        <div>
        <br /> 
        <b>1.</b> Name:
        <br/>
        <input 
          type="text"
          name="name"
          value={name} 
          onChange={(e) => { setName(e.target.value) }}
          placeholder='Enter your Name'
          autoComplete='off'
        />
        </div>

      <div onChange={handleIncome}>
      <br /> 
      <b>2.</b> What is your income level?
      <br /> 
                  <input 
                    type="radio"
                    name="Income"
                    id="high"
                    autoComplete="off"
                    value="high"
                  /> 
                  <label htmlFor="high"> High</label> 
                  <br /> 
                  <input 
                    type="radio"
                    name="Income"
                    id="medium"
                    autoComplete="off"
                    value="medium"
                  /> 
                  <label htmlFor="medium"> Medium</label> 
                  <br /> 
                  <input 
                    type="radio"
                    name="Income"
                    id="low"
                    autoComplete="off"
                    value="low"
                  /> 
                  <label htmlFor="low"> Low</label> 
                  <br /> 
                  <input 
                    type="radio"
                    name="Income"
                    id="noAnswer"
                    autoComplete="off"
                    value="noAnswer"
                  />
                  <label htmlFor="noAnswer"> Prefer not to answer</label>
      <div>
      <br />
      <b>3.</b> How much do you already have saved?
      <br/>
        <input 
          type="text"
          name="currentSavings"
          value={currentSavings} 
          onChange={(e) => { setCurrentSavings(e.target.value) }}
          placeholder='Enter your current savings '
          autoComplete='off'
        />
      </div>

      <div>
      <br />
      <b>4.</b> What is your savings goal?
      <br/>
        <input 
          type="text"
          name="savingsGoal"
          value={savingsGoal} 
          onChange={(e) => { setSavingsGoal(e.target.value) }}
          placeholder='Enter your savings goal'
          autoComplete='off'
        />
      </div>

      <div>
      <br /> 
      <b>5.</b> What is your motivation?
      <br /> 
                  <input 
                    type="radio"
                    name="Motivation"
                    id="getOutDebt"
                    autoComplete="off"
                    value="getOutDebt"
                  /> 
                  <label htmlFor="getOutDebt"> Get out of debt</label> 
                  <br /> 
                  <input 
                    type="radio"
                    name="Motivation"
                    id="avoidDebt"
                    autoComplete="off"
                    value="avoidDebt"
                  /> 
                  <label htmlFor="avoidDebt"> Avoid debt</label> 
                  <br /> 
                  <input 
                    type="radio"
                    name="Motivation"
                    id="retirement"
                    autoComplete="off"
                    value="retirement"
                  /> 
                  <label htmlFor="retirement"> Retirement</label> 
                  <br /> 
                  <input 
                    type="radio"
                    name="Motivation"
                    id="buyHouse"
                    autoComplete="off"
                    value="buyHouse"
                  />
                  <label htmlFor="buyHouse"> Buy a house</label>
                  <br /> 
                  <input 
                    type="radio"
                    name="Motivation"
                    id="collegeFund"
                    autoComplete="off"
                    value="collegeFund"
                  />
                  <label htmlFor="collegeFund"> College fund</label>
                  <br /> 
                  <input 
                    type="radio"
                    name="Motivation"
                    id="other"
                    autoComplete="off"
                    value="other"
                  />
                  <label htmlFor="other"> Other</label>

      </div>

      </div>
      

        <br />
        <button type='submit'>Submit</button>
        </form>
      </div>
      </div>
  );
}

export default Survey;