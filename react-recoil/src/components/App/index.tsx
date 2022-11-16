import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RecoilRoot, useSetRecoilState } from "recoil";

import ToDoList from "../ToDoList";
import AddToDoComponent from "../AddToDo";
import { toDoListState } from "../../recoil/atoms";

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
    <RecoilRoot>
      <AppContainer>
        <h1>To Do List</h1>
        <AddToDoComponent />
        <ToDoList />
      </AppContainer>
    </RecoilRoot>
  );
}

export default App;
