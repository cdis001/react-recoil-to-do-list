import react, { useState } from "react";
import styled from "styled-components";

import ToDo from "../ToDo";

const ToDoListBox = styled.ul`
  width: 350px;
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

function ToDoList() {
  const toDos = [{ id: 1, contents: "hello", completed: false }];
  return (
    <ToDoListBox>
      {toDos.map((data) => (
        <ToDo key={data.id} {...data} />
      ))}
    </ToDoListBox>
  );
}

export default ToDoList;
