import { useState } from "react";
import styled from "styled-components";

import ToDoList from "../ToDoList";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: xxx-large;
`;

const AddToDo = styled.div`
  width: 360px;
  height: 30px;
  box-sizing: border-box;
  margin: 0 40px 6px;
  padding-right: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;

  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background-color: #fafafa;

  & > input {
    padding: 4px 8px;
    width: 100%;

    border: none;
    background-color: transparent;
    font-size: 18px;
  }

  & > input:focus {
    border: none;
    outline: none !important;
  }
`;

function App() {
  return (
    <AppContainer>
      <h1>To Do List</h1>
      <AddToDo>
        <input />
        <button>⮐</button>
      </AddToDo>
      <ToDoList />
    </AppContainer>
  );
}

export default App;
