import React from "react";
const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};
const pStyle = {
  fontSize: '15px',
  textAlign: 'center'
};
function Contact() {
  return (
    <header>
      <h2>
        <br/><br/>
        
        <div style={divStyle}>
          <p style={pStyle}>Contact Cards:</p>
        </div>
        <div style={divStyle}>
          <p style={pStyle}>
            Tejaskumar Patel<br/>
            M.No.: 123456789<br/>
            Email: xyz@gmail.com
            </p>
        </div>
        <div style={divStyle}>
          <p style={pStyle}>
            Priyank Patel<br/>
            M.No.: 123456789<br/>
            Email: xyz@gmail.com
          </p>
        </div>
        <div style={divStyle}>
          <p style={pStyle}>
            Samarth Patel<br/>
            M.No.: 123456789<br/>
            Email: xyz@gmail.com
            </p>
        </div>
        <div style={divStyle}>
          <p style={pStyle}>
            Meghna Meghna<br/>
            M.No.: 123456789<br/>
            Email: xyz@gmail.com
            </p>
        </div>
      </h2>
    </header>
  );
}

export default Contact;
