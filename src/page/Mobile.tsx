import Headers from "../components/Header";
import Maps from "../components/Maps";
import Board from "../components/Board";
import styled from 'styled-components';
import { css } from 'styled-components';
import Poetry from '../components/Poetry';
import BringDown from '../components/BringDown';
import { useState } from 'react';

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

const ImageContainer = styled.div`
    @media ( max-width: 568px ) {
        body { color: red; }
    }
    margin: 10px 0 0 0;
    padding 0 10px 0 10px;
    opacity: ${(props: {active: boolean}) => props.active ? 1 : 0};
    transition: opacity 1s ease;
    display: ${(props: {active: boolean}) => props.active ? 'block' : 'none'};
    // transition: display .1s ease;
    
`;

const ImageDefaultContainer = styled.div`
    @media ( max-width: 568px ) {
        body { color: red; }
    }
    margin: 10px 0 0 0;
    padding 0 10px 0 10px;
    opacity: ${(props: {active: boolean}) => !props.active ? 1 : 0};
    transition: ${(props: {active: boolean}) => !props.active ? 'opacity 1s ease;' : 'opacity 0.1 ease'};
    position: ${(props: {active: boolean}) => !props.active ? null : 'fixed'};
    top: ${(props: {active: boolean}) => !props.active ? null : '0px'};
    // display: ${(props: {active: boolean}) => !props.active ? 'flex' : 'none'};
    // transition: display .1s ease;
    flex: row;
    max-width: 100%;
    white-space:nowrap;
    overflow-x:scroll;
`;

const DefaultImg = styled.img`
    border-radius: 5px;
    width: 30%;
    height:150px;
    object-fit: cover;
    margin: 10px 10px 0 0;
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

const FirstImg = styled.img`
    border-radius: 5px;
    width: 100%;
    // height:100%;
    object-fit: cover;
    margin: 10px 0 0 0;
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

const SpreadButton = styled.div`
    margin: 10px 0 0 0;
    font-family: 'KOTRAHOPE', cursive;
    font-weight: normal;
    font-style: normal;
    font-size:23px;
    &:hover {
        cursor:pointer;
    }
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
    const [imageActive, setImageActive] = useState(false);
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
                    2022년 5월 28일 12시
                </Date>
                <Lettering>
                    정성원 그리고 송하영
                </Lettering>
                <Lettering>
                    결혼합니다 
                </Lettering>
            </Context>
            <ImageDefaultContainer active={imageActive}>
                <DefaultImg src="/images/couple/blue-shy.jpeg"/>
                <DefaultImg src="/images/couple/couple-shoes.jpeg"/>
                <DefaultImg src="/images/couple/next-line.jpeg"/>
                <DefaultImg src="/images/couple/kuho.jpeg"/>
                <DefaultImg src="/images/couple/Queen.jpeg"/>
                <DefaultImg src="/images/couple/shy.jpeg"/>
                <DefaultImg src="/images/couple/tiara.jpeg"/>
                <DefaultImg src="/images/couple/quokkaalone.jpeg"/>
                <DefaultImg src="/images/couple/one.jpeg"/>
                <DefaultImg src="/images/couple/sunnyalone.jpeg"/>
                <DefaultImg src="/images/couple/sunnyinfront.jpeg"/>
                <DefaultImg src="/images/couple/sunnytwo.jpeg"/>
                <DefaultImg src="/images/couple/yellow-shoes.jpeg"/>
                <DefaultImg src="/images/couple/frame.jpeg"/>
            </ImageDefaultContainer>
            <SpreadButton onClick={()=>setImageActive(!imageActive)}>
            {!imageActive ? '사진 펼쳐서 크게 보기' : '사진 슬라이드로 보기'}
            <span>{!imageActive ? '🔼' : '🔽'}</span>
            </SpreadButton>
            <ImageContainer active={imageActive}>
                <FirstImg src="/images/couple/blue-shy.jpeg"/>
                <FirstImg src="/images/couple/couple-shoes.jpeg"/>
                <FirstImg src="/images/couple/next-line.jpeg"/>
                <FirstImg src="/images/couple/kuho.jpeg"/>
                <FirstImg src="/images/couple/Queen.jpeg"/>
                <FirstImg src="/images/couple/shy.jpeg"/>
                <FirstImg src="/images/couple/tiara.jpeg"/>
                <FirstImg src="/images/couple/quokkaalone.jpeg"/>
                <FirstImg src="/images/couple/one.jpeg"/>
                <FirstImg src="/images/couple/sunnyalone.jpeg"/>
                <FirstImg src="/images/couple/sunnyinfront.jpeg"/>
                <FirstImg src="/images/couple/sunnytwo.jpeg"/>
                <FirstImg src="/images/couple/yellow-shoes.jpeg"/>
                <FirstImg src="/images/couple/frame.jpeg"/>
            </ImageContainer>
            <script type="text/javascript" id="kakaoMapScript" src={'//dapi.kakao.com/v2/maps/sdk.js?appkey='+process.env.REACT_APP_KAKAO_API_KEY}></script>
            <Poetry></Poetry>
            <Maps></Maps>
            <Board></Board>
            <CopyRightDiv>Copyright. 2021 <a href="https://github.com/hachuu/wedding-invitation" target="_blank">송하영</a></CopyRightDiv>
        </PageContainer>
    )
}

export default Mobile;