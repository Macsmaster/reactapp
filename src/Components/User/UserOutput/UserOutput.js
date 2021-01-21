import React from "react";
import "./UserOutput.css";

const UserOutput = (props) => {
    const styleInput = {
        border: "0",        
        background: "transparent",
        width:"100%",
        padding:"8px 0 5px 0",
        color:"red"
      };
 
    return (
      <div>
          <hr/>
        <h1>User Output </h1>
        <div className="inputType">
            <h1>{props.title1}</h1>
            <h2>{props.username}</h2>
            <p>{props.text1}</p>

            <h1>{props.title2}</h1>
            <p style={styleInput}>{props.text2}</p>
        </div>
        <hr/>
      </div>
    );
  }


export default UserOutput;
