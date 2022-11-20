# nextjs-recoil-to-do-list

- 공식 홈페이지

> https://recoiljs.org/ko/

## Initialize Project

1. add recoil

```bash
yarn add recoil
```

2. App

   - RecoilRoot component를 사용하기 위해 루트 컴포넌트인 App 컴포넌트에 추가

3. recoil/atoms.ts

   - atom을 이용해서 ToDos 타입의 toDoListState를 생성
   - default에는 빈 배열

4. ToDoList.ts

   - useRecoilValue hook을 이용해 toDoListState의 값 가져옴

5. ToDo.ts & AddToDo.ts
   - toggleCompletedToDo, deleteToDo, addTodoToState 함수 구현 후 useRecoilState를 이용해 toDoListstate의 값을 수정

### 새로고침 후에도 toDoListState 값이 사라지지 않게 추가 구현

## Log

- atom만 사용해서 구현했는데 이게 맞나..? 싶음
- Selector를 사용해서 add, update, delete 하는 로직을 새로 만들어봐야 할 듯(selector는 뭐 하는 애지?)

- 확실히 persist의 설정은 recoil이 더 간단하다. react를 위한 상태 관리 라이브러리라서 store를 재정의 한 뒤 PersistGate를 사용해 react의 랜더링을 지연시켜 store 값과 동기화 하고 어쩌고 하는 과정이 없어지는듯
