import react, { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import ToDo from "../ToDo";
import { toDoListState } from "../../recoil/atoms";

const ToDoListBox = styled.ul`
  width: 350px;
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

function ToDoList() {
  const toDoLists = useRecoilValue(toDoListState);
  return (
    <ToDoListBox>
      {toDoLists.map((data) => (
        <ToDo key={data.id} {...data} />
      ))}
    </ToDoListBox>
  );
}

export default ToDoList;
