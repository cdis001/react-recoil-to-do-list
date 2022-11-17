import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

import { ToDos } from "interfaces";

const { persistAtom } = recoilPersist();

export const toDoListState = atom<ToDos[]>({
  key: "toDoListState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
