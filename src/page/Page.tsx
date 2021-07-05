import Headers from "../components/Header";
import Maps from "../components/Maps";
import Board from "../components/Board";
import styled from 'styled-components';
import { css } from 'styled-components';
import Poetry from '../components/Poetry';

const PageContainer = styled.div`
height:1200px;
`;
// overflow:scroll

const Context = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 100%;
    margin: 100px 0;
    top: 0px;
    z-index: 5;
    font-size: 20px;
    font-family: 'Helvetica Neue', cursive;
    flex-direction: column;
    background-color: #fefbd8;
    `;
    // position: fixed;
    // opacity: 0.5;
const BoxContainer = styled.div`
    margin: 100px 0 0 0;
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
    };
`;
    // ${props => props.image && 
    //     css `
    //     background-image: url(`../images/img${props.image}.jpeg`);
    //     `
    // };
    // background: rgba(174, 183, 230, 0.7);
const FirstImg = styled.img`
    width: 100%;
    height:100%;
`;

const Lettering = styled.div`
    font-family: 'Nanum Pen Script', cursive;
    font-weight: normal;
    font-style: normal;
    font-size:30px;
`;

    const Date = styled.div`
    font-family: 'Nanum Pen Script', cursive;
    font-weight: normal;
    font-style: normal;
    font-size:20px;
`;
    // src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff') format('woff');


    
const Page = () => {
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
                    05/28
                </Date>
                <Lettering>
                    정성원 그리고 송하영
                </Lettering>
                <Lettering>
                    결혼합니다 
                </Lettering>
            </Context>
            <BoxContainer>
                <Box><FirstImg src="/images/couple/laos.jpg"/></Box>
                <Box><FirstImg src="/images/couple/v.jpg"/></Box>
                <Box><FirstImg src="/images/couple/ring.jpg"/></Box>
                <Box><FirstImg src="/images/couple/night.jpg"/></Box>
                <Box><FirstImg src="/images/couple/thailand.jpg"/></Box>
            </BoxContainer>
            <script type="text/javascript" id="kakaoMapScript" src={'//dapi.kakao.com/v2/maps/sdk.js?appkey='+process.env.REACT_APP_KAKAO_API_KEY}></script>
            <Poetry></Poetry>
            <Maps></Maps>
            <Board></Board>
        </PageContainer>
    )
}


export default Page;