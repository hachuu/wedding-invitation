import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    /* 레이아웃 */
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100%;
    top: 0px;
    z-index: 5;

    /* 색상 */
    background: #EDD0CC;
    color: white;
    border-bottom: 1px solid #D8D5ED;
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20);

    /* 폰트 */
    font-size: 2.5rem;
    text-align: center;
    font-size: 50px;  //폰트 사이즈 키웠습니다.
    font-family: header-font;
`;


const Header = () => {
    return (
    <Wrapper>
        Wedding card
    </Wrapper>
)};

export default Header;