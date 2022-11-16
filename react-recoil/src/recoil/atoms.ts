import { atom } from "recoil";

import { ToDos } from "interfaces";

export const toDoListState = atom<ToDos[]>({
  key: "toDoListState",
  default: [],
});
