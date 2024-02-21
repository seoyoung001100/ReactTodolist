// 리듀서 만들기
import React, { useReducer, createContext, useContext, useRef } from 'react';

// 배열 선언
const contextItem = [
    // {
    //     id: 1,
    //     text: '프로젝트 생성하기',
    //     done: true
    // },
    // {
    //     id: 2,
    //     text: '컴포넌트 스타일링하기',
    //     done: true
    // },
    // {
    //     id: 3,
    //     text: 'context 만들기',
    //     done: false
    // },
    // {
    //     id: 4,
    //     text: '기능 구현하기',
    //     done: false
    // }
];

function todoReducer(state, action){
    switch (action.type){
        case 'CREATE' :
            return state.concat(action.todo);
        case 'TOGGLE' :
            return state.map(todo =>
                todo.id === action.id ? {...todo, done : !todo.done} : todo
            );
        case 'REMOVE' :
            return state.filter(todo => todo.id !== action.id);
        default :
            throw new Error('{action.type}');
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, contextItem);
  const nextId = useRef(5);
  // useRef : React Hook으로 해당 변수하는 참조(ref)를 생성하고, 초기 값을 5로 지정

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}


// TodoCreate.js에서 사용 (입력받은 데이터를 화면에 뿌리는 용도)
// 새로 선언한 함수에 위에서 사용했던 컴포넌트(변수)를 내보기는...?
export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
  return useContext(TodoNextIdContext);
}