import React from "react";
import "../styles/ToDoList.css";
import ListItem from "./ListItem.js";

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
    return (
      <ul
        onClick={this.toggleHandler}
        onMouseOver={this.mouseOverHandler}
        onMouseOut={this.mouseOutHandler}
      >
        <ListItem
          toDoList={this.props.toDoList}
          className={this.props.className}
        />
      </ul>
    );
  }
}

export default ToDoList;
