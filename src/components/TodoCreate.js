import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
// import TodoList from './TodoList';
import TodoItem from './TodoItem';

// Context를 사용하기 위해 선언
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

// '+' 버튼 CSS
const CreateIcon = styled.button`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #38d9a9;
    color: white;
    font-size: 50px;
    border: none;
    //중앙 정렬
    display: flex;
    align-items: center;
    justify-content: center;
    //위치 조정
    // 앱솔루트 쓰려면 부모요소에 position: relative; << 을 사용 한다.
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    &:hover{
        background-color: rgb(99 230 190);
    }
    //open이라는 props가 존재할 때(true) css로 정의된 스타일이 적용된다.
    ${props =>
        props.open &&
        css`
        background: #ff6b6b;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        z-index: 5;

        &:hover {
            background: #ff8787;
        }
        &:active {
            background: #fa5252;
        }
    `} 
`;

// 'X' 버튼에 대한 CSS
const CreateFormPositioner = styled.div`

`;
const CreateForm = styled.form`
    // 전체적인 CSS 틀
    flex: 1;
    background-color: #f8f9fa;
    position: absolute; 
    bottom: 0px;
    height: 20%;
    width: 100%;
    border-radius: 0 0 15px 15px;
    border-top: 1px solid rgb(233, 236, 239);
    
`;
const Input = styled.input`
    width: 85%;
    padding: 12px;
    font-size: 18px;
    border-radius: 4px;
    outline: none;
    border: 1px solid rgb(222 226 230);

    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// const TodoLists = styled.ul`

// `;

// const TodoItems = styled.li`

// `;


function TodoCreate (){
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(''); 
    // const [todos, setTodos] = useState([]); // 할 일 목록을 관리하는 상태 추가, 배열로 받아오기 때문에 초기값을 배열로 설정한다.

    //TodoContext.js에서 선언한 함수를 변수로 호출
    const dispatch = useTodoDispatch();
    const Id = useTodoNextId();
    
    const onToggle = () => setOpen(!open);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    // Context를 사용해서 가능한 문법...???? 
    const onSubmit = (e) => {
        e.preventDefault(); // 페이지 리로딩 방지
        dispatch({
            type: 'CREATE',
            todo: {
                // current: 할 일 항목을 추가, 삭제, 또는 토글할 때 해당 항목을 식별하는 데 사용함
                id: Id.current,
                text: value,
                done: false
            }
        });
        setValue('');
        setOpen(false);
        Id.current += 1;
    }

    return(
        <>
            {/* 입력창 */}
            {open && (
                <CreateFormPositioner>
                    <CreateForm onSubmit={onSubmit}>
                        <Input 
                            placeholder='할 일을 입력한 후, Enter를 누르세요' 
                            autoFocus
                            value={value} 
                            onChange={onChange} 
                        />
                    </CreateForm>
                </CreateFormPositioner>
            )}
            {/* + 버튼 */}
            <CreateIcon onClick={onToggle} open={open}>
                <MdAdd />
            </CreateIcon>
            
            {/* 입력받은 것을 출력하는 컴포넌트 */}
            {/* <div>
                {console.log(todos)}
                {todos.map((todo, id, done) => ( // 할 일 목록을 순회하며 각 할 일을 화면에 출력
                    <p key={id} done={false}>{todo}</p>
                ))}
            </div> */}
        </>
    );
    
};

export default TodoCreate;