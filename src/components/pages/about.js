import React from "react";
const divStyle = {
  color: 'Red'
};
const pStyle = {
  textAlign: 'center'
};
const pStyle1 = {
  fontSize: '15px',
};

function About() {
  
  return (
    <header>
      <h2>
        <br/><br/>
        <div style={divStyle}>
          <p style={pStyle}>Group Biography:</p>
          <p style={pStyle1}>We all are in enrolled in Computer Programmer. <br/>
            Tejas is from Vadodara,India He completed his Computer engineering from GTU.<br/>
            Priyank is also from Vadodara,India. He completed his 10+2 before come to canada.<br/>
            Samarth is from Vadodara,India too. and also completed his 10+2.<br/>
            Meghna is from Punjab,India and She completed her Bachelors in computer science.
          </p>
        </div>
      </h2> 
    </header>
  );
}

export default About;
