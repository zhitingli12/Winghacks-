<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Survey</title>
  <style>
    .title {
      text-align: center
    }
    .question {
      display: inline-block;
      margin: 50px;
        font-size: 21px;
    }

  </style>
</head>
<h1 class="title">Survey</h1>
<body>

<div>
<p class="question">What is your name?</p>
<input type="text" id="name" placeholder="Enter your name"/>
</div>
<%
String name = name;
System.out.println("Hello, " + name + "!");
%>
<div>
    <p class="question">What is your email?</p>
    <input type="email" id="email" placeholder="Enter your email"/>
</div>

<div>
<p class="question">Q1: What is your income bracket?</p>
    <input type="radio" id="high" name="high">High</input>
    <input type="radio" id="medium" name="medium">Medium</input>
    <input type="radio" id="low" name="low">Low</input>
    <input type="radio" id="noAnswer" name="noAnswer">Prefer not to answer</input>
</div>


</body>
</html>