import React from "react";
import Button from "./Button.js";
import Input from "./Input.js";
import ToDoList from "./ToDoList.js";
import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: ["buy milk", "eat dinner", "nail javasript", "give feedback"]
    };
    this.placeholder = "Add a new to-do";
  }

  inputHandler = event => {
    if (event.key !== "Enter" || event.target.value === "") return;
    this.addNewToDo(event.target.value);
    event.target.value = "";
  };

  buttonHandler = event => {
    const input = document.querySelector(".input-todo");
    if (input.value !== "") {
      this.addNewToDo(input.value);
      input.value = "";
    }
  };

  addNewToDo = newToDo => {
    this.setState(state => ({
      toDoList: state.toDoList.concat(newToDo)
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Input
          className="input-todo"
          placeholder={this.placeholder}
          handler={this.inputHandler}
        />
        <Button className="button-todo" handler={this.buttonHandler} />
        <ToDoList className="to-do_list" toDoList={this.state.toDoList} />
      </React.Fragment>
    );
  }
}

export default App;
