import React, { useState } from "react";
import styled from "styled-components";

const AddToDoBox = styled.div`
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

function AddToDo() {
  const [contents, setContents] = useState("");

  const addTodoToState = (e) => {
    setContents("");
  };

  return (
    <AddToDoBox>
      <input
        value={contents}
        onChange={(e) => setContents(e.target.value)}
        onKeyUp={(e) => {
          if (window.event.keyCode === 13) addTodoToState(e);
        }}
      />
      <button onClick={addTodoToState}>⮐</button>
    </AddToDoBox>
  );
}

export default AddToDo;
