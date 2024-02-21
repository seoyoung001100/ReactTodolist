import React from 'react';
// import './App.css';
import { createGlobalStyle } from 'styled-components'; //styled-component를 사용하기 위하여 선언

// 컴포넌트 연결 선언
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
// import TodoItem from './components/TodoItem';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';



// 글로벌 스타일 선언
const GlobalStyle = createGlobalStyle`
  body{
    background: #e7e9ed;
    /* margin: 0; */
  }
  hr{
    background: #c9cfd6;
    /* width: 110%; */
    height:1px;
    border:0;
  }
`;



function App() {
  return(
    <>
    <TodoProvider> {/* context를 사용하기 위해 감싸주는 컴포넌트 */}
      <GlobalStyle/> {/* styled-components을 사용하기 위해 위쪽에 선언 */}
      <TodoTemplate> {/* Todolist의 틀을 잡아 둔 컴포넌트 */}
        <TodoHead></TodoHead> {/* 날짜, 요일, 남은 할 일 갯수 출력 */}
        <hr/>
        <TodoList></TodoList> {/* TodoItem 컴포넌트를 포함하여 최종적으로 리스트를 뽑은 형태 */}
        <TodoCreate></TodoCreate> {/* 새 항목을 추가하는 버튼 및 입력란 컴포넌트 */}
      </TodoTemplate>
    </TodoProvider>  
    </>

  );
}

export default App;
