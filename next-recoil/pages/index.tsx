import { useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

// import ToDoList from "../components/ToDoList";
import AddToDo from "../components/AddToDo";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: xxx-large;
`;

const DynamicToDoList = dynamic(() => import("../components/ToDoList"), {
  ssr: false,
});

function App() {
  return (
    <AppContainer>
      <h1>To Do List</h1>
      <AddToDo />
      <DynamicToDoList />
    </AppContainer>
  );
}

export default App;
