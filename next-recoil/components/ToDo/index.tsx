import react, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import { toDoListState } from "../../recoil/atoms";

const ToDoEl = styled.li`
  display: flex;
  align-items: center;
  width: 350px;
  border-bottom: 1px solid #dbdbdb;
  padding: 10px 0;
  & > label {
    margin-left: 8px;
    width: 300px;
    padding-top: 5px;
  }
  &.completed > label {
    text-decoration: line-through;
    color: #aaa;
  }
`;
const ToggleCompletedBtn = styled.button`
  width: 25px;
  height: 25px;
  border: 1px solid #464646;
  border-radius: 50%;
  position: relative;
  &.completed {
    border: 2px solid #464646;
  }
  & > span {
    position: absolute;
    visibility: hidden;
  }
  &.completed > span {
    visibility: inherit;
    top: 0px;
    right: 2px;
    font-size: 12px;
  }
`;
const DeleteToDoBtn = styled.button``;

function ToDo({ id, contents, completed }) {
  const [isCompleted, setIsCompleted] = useState(completed);
  const [todoList, setTodoList] = useRecoilState(toDoListState);

  const toggleCompletedToDo = () => {
    const newToDoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodoList(newToDoList);
    setIsCompleted(!isCompleted);
  };

  const deleteToDo = () => {
    const newToDoList = todoList.filter((todo) => todo.id !== id);

    setTodoList(newToDoList);
  };

  return (
    <ToDoEl className={`${isCompleted ? "completed" : null}`}>
      <ToggleCompletedBtn
        className={`${isCompleted ? "completed" : null}`}
        onClick={toggleCompletedToDo}
      >
        <span>✔️</span>
      </ToggleCompletedBtn>
      <label>{contents}</label>
      <DeleteToDoBtn onClick={deleteToDo}>✕</DeleteToDoBtn>
    </ToDoEl>
  );
}

export default ToDo;
