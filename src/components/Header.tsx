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
    background: #A1CAE2;
    color: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20);

    /* 폰트 */
    text-align: center;
    font-size: 30px;  //폰트 사이즈 키웠습니다.
    font-family: header-font;
    border-top: 10px double white;
    border-bottom: 10px double white;
`;
// const Location = styled.div`
//     font-size: 13px;
// `

const Header = () => {
    return (
        <>
        <Wrapper>
            Wedding Invitation
        </Wrapper>
        {/* <Location>The-K호텔서울</Location> */}

        </>
)};

export default Header;