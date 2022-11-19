import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

import { ToDos } from "interfaces";

const { persistAtom } = recoilPersist();

export const toDoListState = atom<ToDos[]>({
  key: "toDoListState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "ALL",
});

export const toDoListSelector = selector<ToDos[]>({
  key: "toDoListSelector",
  get: ({ get }) => {
    const toDoLists = get(toDoListState);
    const filter = get(todoListFilterState);

    switch (filter) {
      case "ALL":
        return toDoLists;
      case "COMPLETED":
        return toDoLists.filter((data) => data.completed);
      case "UNCOMPLETED":
        return toDoLists.filter((data) => !data.completed);

      default:
        return toDoLists;
    }

    return toDoLists;
  },
  set: ({ set }, newToDo) => {
    set(toDoListState, newToDo);
  },
});
