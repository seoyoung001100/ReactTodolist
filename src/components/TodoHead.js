import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const Head = styled.div`
    width: 80%;
    height: 20%;
    border-radius: 15px 15px 0 0;
    padding: 50px 40px 0 40px;
    margin: auto;

    /* background-color: blue; */
`;
const HeadH1 = styled.h1`
    margin: 0;
`;
const HeadH6 = styled.h6`
    margin: 0;
    color: #7c858d;
    font-size: 20px;
    font-weight: 500;
`;
const HeadP = styled.p`
    padding-top: 20px;
    color: #38d9a9;
    font-weight: 900;
`;


const HeatDate = () => {
    const today = new Date(); // 현재 날짜를 가져온다.
    // 탭틱을 이용하여 문자열 안에 변수를 편하게 쓰기 위함
    const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    // getDay()는 0~6까지의 숫자만 나오기 때문에 배열을 선언해서 한다.
    const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const formattedDay = week[today.getDay()];

    const todos = useTodoState();
    console.log(todos);
    const undoneTasks = todos.filter(todo => !todo.done);
    return(
        <div>
            <HeadH1>{formattedDate}</HeadH1>
            <HeadH6>{formattedDay}</HeadH6>
            <HeadP>할 일 {undoneTasks.length}개 남음</HeadP> {/* 나중에 함수 선언해서 conut 할 수 있게 만들어야 함 */}
        </div>
        
    );
}

function TodoHead({children}){
    return (
        <Head>
            <HeatDate/>
            {children}
        </Head>
    );
}

export default TodoHead;