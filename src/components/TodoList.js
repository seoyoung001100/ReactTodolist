import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
// import TodoCreate from './TodoCreate';
import { useTodoState } from '../TodoContext';

const List = styled.div`
    /* background-color: grey; */
    flex: 1;
    overflow-y: auto; //List란이 길어지면 전체를 늘리는 것이 아니라 스크롤을 내릴 수 있게 함
    padding: 20px 40px 43px 40px;
`;

function TodoList (){
    // context에 넣어둔 데이터를 todos라는 변수에 담아 꺼내어옴 
    const todos = useTodoState();

    // key값을 id로 지정
    return (
        <List>
            {/* TodoList.js에서 컴포넌트를 가져옴 */}
            {todos.map(todo => (
                <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                done={todo.done}
                />
            ))}
        </List>
    );
};

export default TodoList;