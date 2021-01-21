import React from "react";

const UserInput = (props) => {
  return (
    <div>
      <h1>User Input</h1>
      <div className="inputType">
        <label for="userInput_tag">User input</label>
        <div>
          <input
            type="text"
            id="userInput_tag"
            onChange={props.changed}
            value={props.username}
          />
          <p onClick={props.click}>click!</p>
        </div>
      </div>
    </div>
  );
};

export default UserInput;
