import { useState } from 'react';
import styled from 'styled-components';

const ImageDiv = () => {

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
    width: 50%;
    height:250px;
    object-fit: cover;
    margin: 10px 10px 0 0;
`;

const FirstImg = styled.img`
    border-radius: 5px;
    width: 100%;
    // height:100%;
    object-fit: cover;
    margin: 10px 0 0 0;
`;

const PopUpImg = styled.div`
    border-radius: 5px;
    // width: 100%;
    // height: 100%;
    // object-fit: cover;
    // margin: 10px 0 0 0;
    padding: 10px 0 50px;
    background-color: #FDFAF6;
    z-index: 2;
    align-items: center;
    position: fixed;
    top: 120px;
    // left: 5px;
    justify-content: center;
    flex-direction: column;
    display: ${(props: {layerActive: boolean}) => props.layerActive ? 'flex' : 'none'};
`

const CloseBtn = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px;
    font-weight: bold;
    color: #A1CAE2;
    cursor: pointer;
    margin: 0 0 10px 0;
    &:hover {
      text-shadow: 0 0 10px #A1CAE2;
    }
`

const LayerImg = styled.img`
    border-radius: 5px;
    width: 90%;
    height:80%;
    object-fit: cover;
    // margin: 10px 0 0 0;
`;

const [imageActive, setImageActive] = useState(false);
const [clickedIndex, setClickedIndex] = useState(0);

  return (
    <>
      <><ImageDefaultContainer active={imageActive}>
        <DefaultImg src="/images/couple/blue-shy.jpeg" onClick={()=>setClickedIndex(1)}/>
        <DefaultImg src="/images/couple/couple-shoes.jpeg" onClick={()=>setClickedIndex(2)}/>
        <DefaultImg src="/images/couple/next-line.jpeg" onClick={()=>setClickedIndex(3)}/>
        <DefaultImg src="/images/couple/kuho.jpeg" onClick={()=>setClickedIndex(4)}/>
        <DefaultImg src="/images/couple/Queen.jpeg" onClick={()=>setClickedIndex(5)}/>
        <DefaultImg src="/images/couple/shy.jpeg" onClick={()=>setClickedIndex(6)}/>
        <DefaultImg src="/images/couple/tiara.jpeg" onClick={()=>setClickedIndex(7)}/>
        <DefaultImg src="/images/couple/quokkaalone.jpeg" onClick={()=>setClickedIndex(8)}/>
        <DefaultImg src="/images/couple/one.jpeg" onClick={()=>setClickedIndex(9)}/>
        <DefaultImg src="/images/couple/sunnyalone.jpeg" onClick={()=>setClickedIndex(10)}/>
        <DefaultImg src="/images/couple/sunnyinfront.jpeg" onClick={()=>setClickedIndex(11)}/>
        <DefaultImg src="/images/couple/sunnytwo.jpeg" onClick={()=>setClickedIndex(12)}/>
        <DefaultImg src="/images/couple/yellow-shoes.jpeg" onClick={()=>setClickedIndex(13)}/>
        <DefaultImg src="/images/couple/frame.jpeg" onClick={()=>setClickedIndex(14)}/>
      </ImageDefaultContainer>
        <SpreadButton onClick={() => setImageActive(!imageActive)}>
          {!imageActive ? '사진 펼쳐서 크게 보기' : '사진 슬라이드로 보기'}
          <span>{!imageActive ? '🔼' : '🔽'}</span>
        </SpreadButton>
        <ImageContainer active={imageActive}>
          <FirstImg src="/images/couple/blue-shy.jpeg" />
          <FirstImg src="/images/couple/couple-shoes.jpeg" />
          <FirstImg src="/images/couple/next-line.jpeg" />
          <FirstImg src="/images/couple/kuho.jpeg" />
          <FirstImg src="/images/couple/Queen.jpeg" />
          <FirstImg src="/images/couple/shy.jpeg" />
          <FirstImg src="/images/couple/tiara.jpeg" />
          <FirstImg src="/images/couple/quokkaalone.jpeg" />
          <FirstImg src="/images/couple/one.jpeg" />
          <FirstImg src="/images/couple/sunnyalone.jpeg" />
          <FirstImg src="/images/couple/sunnyinfront.jpeg" />
          <FirstImg src="/images/couple/sunnytwo.jpeg" />
          <FirstImg src="/images/couple/yellow-shoes.jpeg" />
          <FirstImg src="/images/couple/frame.jpeg" />
        </ImageContainer></>

      <PopUpImg layerActive={clickedIndex !== 0}>
        <CloseBtn onClick={()=>setClickedIndex(0)}>❌</CloseBtn>
          {(clickedIndex === 1) && (<LayerImg src="/images/couple/blue-shy.jpeg" />) }
          {(clickedIndex === 2) && (<LayerImg src="/images/couple/couple-shoes.jpeg" />)}
          {(clickedIndex === 3) && (<LayerImg src="/images/couple/next-line.jpeg" />)}
          {(clickedIndex === 4) && (<LayerImg src="/images/couple/kuho.jpeg" />)}
          {(clickedIndex === 5) && (<LayerImg src="/images/couple/Queen.jpeg" />)}
          {(clickedIndex === 6) && (<LayerImg src="/images/couple/shy.jpeg" />)}
          {(clickedIndex === 7) && (<LayerImg src="/images/couple/tiara.jpeg" />)}
          {(clickedIndex === 8) && (<LayerImg src="/images/couple/quokkaalone.jpeg" />)}
          {(clickedIndex === 9) && (<LayerImg src="/images/couple/one.jpeg" />)}
          {(clickedIndex === 10) && (<LayerImg src="/images/couple/sunnyalone.jpeg" />)}
          {(clickedIndex === 11) && (<LayerImg src="/images/couple/sunnyinfront.jpeg" />)}
          {(clickedIndex === 12) && (<LayerImg src="/images/couple/sunnytwo.jpeg" />)}
          {(clickedIndex === 13) && (<LayerImg src="/images/couple/yellow-shoes.jpeg" />)}
          {(clickedIndex === 14) && (<LayerImg src="/images/couple/frame.jpeg" />)}
        {/* <FirstImg src="/images/couple/blue-shy.jpeg" /> */}
      </PopUpImg></>
  )
}

export default ImageDiv;