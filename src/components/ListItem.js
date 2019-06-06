import React from "react";
const md5 = require("md5");

function ListItem(props) {
  return props.toDoList.map(todo => (
    <li className={props.className} key={md5(todo)}>
      {todo}
    </li>
  ));
}

export default ListItem;
