import Headers from "../components/Header";
import Maps from "../components/Maps";
import Board from "../components/Board";
import styled from 'styled-components';
import { css } from 'styled-components';
import Poetry from '../components/Poetry';
import BringDown from '../components/BringDown';
import { useState } from 'react';
import ImageDiv from 'images/Image';

const PageContainer = styled.div`
    // height:1500px;
    overflow-x:hidden;
    overflow-y:hidden;
`;

const Context = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    margin: 130px 10px 0 10px;
    border-radius: 5px;
    top: 0px;
    z-index: 5;
    font-size: 20px;
    font-family: 'Helvetica Neue', cursive;
    flex-direction: column;
    background-color: #FDFAF6;
    `;
    // position: fixed;
    // opacity: 0.5;
const BoxContainer = styled.div`
    @media ( max-width: 568px ) {
        body { color: red; }
    }
    margin: 10px 0 0 0;
    display: flex;
`;



// width: 100px;
const Box = styled.div`
    width: 100%;
    height: 150px;
    border: 1px solid white;
    transition:  all 0.3s linear;
    &:hover {
        transform: scale(2);
        cursor:pointer;
    };
`;

const LastBox = styled.div`
    width: 100%;
    height: 150px;
    border: 1px solid white;
    transition:  all 0.3s linear;
    &:hover {
        transform: scale(2);
    };
`;


const Lettering = styled.div`
    font-family: 'KOTRAHOPE', cursive;
    font-weight: normal;
    font-style: normal;
    font-size:30px;
`;

const Date = styled.div`
    font-family: 'KOTRAHOPE', cursive;
    font-weight: normal;
    font-style: normal;
    font-size:23px;
`;



const CopyRightDiv = styled.div`
    font-family: 'KOTRAHOPE', cursive;
    font-size:14px;
    text-align: center;
    a {
        text-decoration: none;
        color: #907FA4;
    }
    margin: 0 0 15px 0;
`;
    // src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff') format('woff');


    
const Mobile = () => {
    
    return (
        <PageContainer>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');
            </style>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap');
            </style>
            <Headers></Headers>
            <Context>
                <Date>
                    2022??? 5??? 28??? 12???
                </Date>
                <Lettering>
                    ????????? ????????? ?????????
                </Lettering>
                <Lettering>
                    ??????????????? 
                </Lettering>
            </Context>
            <ImageDiv></ImageDiv>
            <script type="text/javascript" id="kakaoMapScript" src={'//dapi.kakao.com/v2/maps/sdk.js?appkey='+process.env.REACT_APP_KAKAO_API_KEY}></script>
            <Poetry></Poetry>
            <Maps></Maps>
            <Board></Board>
            <CopyRightDiv>Copyright. 2021 <a href="https://github.com/hachuu/wedding-invitation" target="_blank">?????????</a></CopyRightDiv>
        </PageContainer>
    )
}

export default Mobile;