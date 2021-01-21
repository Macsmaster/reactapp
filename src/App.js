import "./App.css";
import { Component } from "react";
import Person from "./Components/Person/Person";
import UserOutput from "./Components/User/UserOutput/UserOutput";
import UserInput from "./Components/User/UserInput/UserInput";
import Curriculum from "./Components/Curriculum/Curriculum";
import Validations from "./Components/Validations/Validations.js";
import Char from "./Components/Char/Char";


/* const StyledButton = styled.button`
    {     
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
    
      &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
      },`; */


class App extends Component {
  state = {
    userInput: "",
    showCurriculum: false,
    showPersons: false,

    curriculums: [
      {
        id: 1,
        name: "Miguel",
        lastname: "Coy",
        age: 30,
        location: "Cájica, Colombia",
        imgProfile: "./profile.jpeg",
      },
    ],
    persons: [
      { id: 1, name: "Miguel", age: 30 },
      { id: 2, name: "Angel", age: 28 },
      { id: 3, name: "Razor", age: 52 },
    ],
    texts: [
      {
        title: "New text",
        content: "New content",
        username: "Miguel",
      },
      {
        title: "New text 2",
        content: "New content 2",
        username: "Angel",
      },
    ],
  };

  inputChangedHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  toggleCurriculumHandler = () => {
    const show = this.state.showCurriculum;
    this.setState({ showCurriculum: !show });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  switchUsernameHandler = (newUsername) => {
    this.setState({
      texts: [
        {
          title: "New text",
          content: "New content",
          username: newUsername,
        },
        {
          title: "New text 2",
          content: "New content 2",
          username: "Angel",
        },
      ],
    });
  };
  usernameChangedHandler = (event) => {
    this.setState({
      texts: [
        {
          title: "New text!!!!!!!!!!",
          content: "New content!!!!!!!!",
          username: event.target.value,
        },
        {
          title: "New text 2",
          content: "New content 2",
          username: "Angel Coy T.",
        },
      ],
    });
  };

  deleteCharHandler = (index) => {
    const chars = [...this.state.userInput];
    chars.splice(index, 1);
    const updatedChars = chars.join("");
    this.setState({ userInput: updatedChars });
  };

  deletePersonHandler = (personIndex) => {
    /*  const persons = this.state.persons.slice() */
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    /*     const person = Object.assign({}, this.state.persons[personIndex]) */
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };
  render() {
    const charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });

    let curriculums = null;
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
   /*    style.backgroundColor = "red";
      style["hover"] = {
        backgroundColor: "lightgreen",
        color: "black",
      }; */
    }

    if (this.state.showCurriculum) {
      curriculums = (
        <div>
          {this.state.curriculums.map((curriculums) => {
            return (
              <Curriculum
                imgProfile={curriculums.imgProfile}
                name={curriculums.name}
                lastname={curriculums.lastname}
                phoneNumber={curriculums.phoneNumber}
                location={curriculums.location}
              />
            );
          })}
        </div>
      );
    }
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1 className={classes.join(" ")}>I am a React App</h1>
        <p>Hello</p>
        <button  onClick={this.togglePersonsHandler}>
          Switch name
        </button>
        <button className="ms-2" onClick={this.toggleCurriculumHandler}>
          Show Curriculum
        </button>
        <UserOutput
          title1={this.state.texts[0].title}
          text1={this.state.texts[0].content}
          username={this.state.texts[0].username}
          title2={this.state.texts[1].title}
          text2={this.state.texts[1].content}
        >
          {" "}
        </UserOutput>{" "}
        <button onClick={() => this.switchUsernameHandler("Macrazor")}>
          Change username
        </button>
        <UserInput
          username={this.state.texts[0].username}
          click={this.switchUsernameHandler.bind(this, "Mac")}
          changed={this.usernameChangedHandler}
        />
        {persons}
        {curriculums}
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validations inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
