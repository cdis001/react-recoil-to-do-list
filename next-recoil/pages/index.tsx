import { useState } from "react";
import styled from "styled-components";

import ToDoList from "../components/ToDoList";
import AddToDo from "../components/AddToDo";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: xxx-large;
`;

function App() {
  return (
    <AppContainer>
      <h1>To Do List</h1>
      <AddToDo />
      <ToDoList />
    </AppContainer>
  );
}

export default App;
