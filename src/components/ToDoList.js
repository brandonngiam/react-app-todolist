import React from "react";
import "../styles/ToDoList.css";
const md5 = require("md5");

function ToDoList(props) {
  const toDoListArray = props.toDoList;
  const JSXToDoList = toDoListArray.map(todo => (
    <li className={props.className} key={md5(todo)}>
      {todo}
    </li>
  ));

  return <ul>{JSXToDoList}</ul>;
}

export default ToDoList;
