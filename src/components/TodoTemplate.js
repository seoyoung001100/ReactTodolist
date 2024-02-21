import React from 'react';
import styled from 'styled-components';

// styled-components를 사용하여 div에 스타일을 넣음
const Template = styled.div`
    width : 500px;
    height : 750px;
    background: white;
    border-radius: 15px;

    position: relative;

    margin: 100px auto;
    /* padding: 50px 20px; */

    box-shadow: 0 0 8px #c9cfd6;
`;

// 내부의 내용이 보여지게 하기 위해서 children props를 렌더링
function TodoTemplate({children}){
    return <Template>{children}</Template>;
}

export default TodoTemplate;