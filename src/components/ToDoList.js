import React from "react";
import "../styles/ToDoList.css";
const md5 = require("md5");

class ToDoList extends React.Component {
  toggleHandler = event => {
    event.target.classList.toggle("done");
  };

  mouseOverHandler = event => {
    if (event.target.nodeName !== "UL")
      event.target.classList.add("todo-in-focus");
  };

  mouseOutHandler = event => {
    event.target.classList.remove("todo-in-focus");
  };

  render() {
    const toDoListArray = this.props.toDoList;
    const JSXToDoList = toDoListArray.map(todo => (
      <li className={this.props.className} key={md5(todo)}>
        {todo}
      </li>
    ));

    return (
      <ul
        onClick={this.toggleHandler}
        onMouseOver={this.mouseOverHandler}
        onMouseOut={this.mouseOutHandler}
      >
        {JSXToDoList}
      </ul>
    );
  }
}

export default ToDoList;
