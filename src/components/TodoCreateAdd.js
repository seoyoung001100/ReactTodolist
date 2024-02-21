import React, { useState } from 'react';
import styled, { css } from 'styled-components';


const TodoList = styled.ul`

`;

const TodoItem = styled.li`

`;


function TodoCreateAdd (){
    const [value, setValue] = useState(''); 
    const [todos, setTodos] = useState([]); // 할 일 목록을 관리하는 상태 추가

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault(); // 페이지 리로딩 방지
        if(value) {
            setTodos([...todos, value]); // 입력된 값이 있을 때만 할 일 목록에 추가
            setValue(''); // 입력 필드 초기화
        }
    }

    return(
        <TodoList>
            {todos.map((todo, index) => ( // 할 일 목록을 순회하며 각 할 일을 화면에 출력
                <TodoItem key={index}>{todo}</TodoItem>
            ))}
        </TodoList>
    );
};

export default TodoCreateAdd;
