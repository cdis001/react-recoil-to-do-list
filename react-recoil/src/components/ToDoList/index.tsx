import react, { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import styled from "styled-components";

import ToDo from "../ToDo";
import { toDoListSelector, todoListFilterState } from "../../recoil/atoms";

const ToDoListBox = styled.ul`
  width: 350px;
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

const SelectBox = styled.select``;

function ToDoList() {
  const [toDoListFilterValue, setToDoListFilterValue] =
    useRecoilState(todoListFilterState);
  const toDoLists = useRecoilValue(toDoListSelector);

  return (
    <ToDoListBox>
      <SelectBox onChange={(e) => setToDoListFilterValue(e.target.value)}>
        <option value={"ALL"}>All</option>
        <option value={"COMPLETED"}>Completed</option>
        <option value={"UNCOMPLETED"}>Uncompleted</option>
      </SelectBox>
      {toDoLists.map((data) => (
        <ToDo key={data.id} {...data} />
      ))}
    </ToDoListBox>
  );
}

export default ToDoList;
