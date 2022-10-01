import React, { useCallback } from 'react';
import { memo, useEffect, useState } from 'react';
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
    font-family: 'KOTRAHOPE', cursive;
`

const LayerImg = styled.img`
    border-radius: 5px;
    width: 90%;
    height:80%;
    object-fit: cover;
    // margin: 10px 0 0 0;
`;

const [imageActive, setImageActive] = useState(Boolean);
const [clickedIndex, setClickedIndex] = useState(Number);

useEffect(() => {
  console.log('useeffect')
  setImageActive(false);
  setClickedIndex(0);
 }, []);

 const clickImageIndex = useCallback((index: React.SetStateAction<number>) => {
  setClickedIndex(index);
  if (index) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = 'auto';
 }, []);

//  const DefaultImgMemo = React.memo(() => {
//    return (
//     <>
//       <DefaultImg src="/images/couple/blue-shy.jpeg" onClick={()=>clickImageIndex(1)}/>
//       <DefaultImg src="/images/couple/couple-shoes.jpeg" onClick={()=>clickImageIndex(2)}/>
//       <DefaultImg src="/images/couple/next-line.jpeg" onClick={()=>clickImageIndex(3)}/>
//       <DefaultImg src="/images/couple/kuho.jpeg" onClick={()=>clickImageIndex(4)}/>
//       <DefaultImg src="/images/couple/Queen.jpeg" onClick={()=>clickImageIndex(5)}/>
//       <DefaultImg src="/images/couple/shy.jpeg" onClick={()=>clickImageIndex(6)}/>
//       <DefaultImg src="/images/couple/tiara.jpeg" onClick={()=>clickImageIndex(7)}/>
//       <DefaultImg src="/images/couple/quokkaalone.jpeg" onClick={()=>clickImageIndex(8)}/>
//       <DefaultImg src="/images/couple/one.jpeg" onClick={()=>clickImageIndex(9)}/>
//       <DefaultImg src="/images/couple/sunnyalone.jpeg" onClick={()=>setClickedIndex(10)}/>
//       <DefaultImg src="/images/couple/sunnyinfront.jpeg" onClick={()=>setClickedIndex(11)}/>
//       <DefaultImg src="/images/couple/sunnytwo.jpeg" onClick={()=>setClickedIndex(12)}/>
//       <DefaultImg src="/images/couple/yellow-shoes.jpeg" onClick={()=>setClickedIndex(13)}/>
//       <DefaultImg src="/images/couple/frame.jpeg" onClick={()=>setClickedIndex(14)}/>
//     </>
//    )
//  })

  return (
    <>
      <><ImageDefaultContainer active={imageActive}>
          <DefaultImg src="/images/couple/blue-shy.jpeg" onClick={()=>clickImageIndex(1)}/>
          <DefaultImg src="/images/couple/couple-shoes.jpeg" onClick={()=>clickImageIndex(2)}/>
          <DefaultImg src="/images/couple/next-line.jpeg" onClick={()=>clickImageIndex(3)}/>
          <DefaultImg src="/images/couple/kuho.jpeg" onClick={()=>clickImageIndex(4)}/>
          <DefaultImg src="/images/couple/Queen.jpeg" onClick={()=>clickImageIndex(5)}/>
          <DefaultImg src="/images/couple/shy.jpeg" onClick={()=>clickImageIndex(6)}/>
          <DefaultImg src="/images/couple/tiara.jpeg" onClick={()=>clickImageIndex(7)}/>
          <DefaultImg src="/images/couple/quokkaalone.jpeg" onClick={()=>clickImageIndex(8)}/>
          <DefaultImg src="/images/couple/one.jpeg" onClick={()=>clickImageIndex(9)}/>
          <DefaultImg src="/images/couple/sunnyalone.jpeg" onClick={()=>clickImageIndex(10)}/>
          <DefaultImg src="/images/couple/sunnyinfront.jpeg" onClick={()=>clickImageIndex(11)}/>
          <DefaultImg src="/images/couple/sunnytwo.jpeg" onClick={()=>clickImageIndex(12)}/>
          <DefaultImg src="/images/couple/yellow-shoes.jpeg" onClick={()=>clickImageIndex(13)}/>
          <DefaultImg src="/images/couple/frame.jpeg" onClick={()=>clickImageIndex(14)}/>
          <DefaultImg src="/images/couple/IMG_4733.jpeg" onClick={()=>clickImageIndex(15)}/>
          <DefaultImg src="/images/couple/IMG_4789.jpeg" onClick={()=>clickImageIndex(16)}/>
          <DefaultImg src="/images/couple/IMG_3295.jpeg" onClick={()=>clickImageIndex(17)}/>
          <DefaultImg src="/images/couple/IMG_3253.jpeg" onClick={()=>clickImageIndex(18)}/>
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
          <FirstImg src="/images/couple/IMG_4733.jpeg" />
          <FirstImg src="/images/couple/IMG_4789.jpeg" />
          <FirstImg src="/images/couple/IMG_3295.jpeg" />
          <FirstImg src="/images/couple/IMG_3253.jpeg" />
        </ImageContainer></>

      <PopUpImg layerActive={clickedIndex !== 0}>
        <CloseBtn onClick={()=>clickImageIndex(0)}>X</CloseBtn>
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
          {(clickedIndex === 15) && (<LayerImg src="/images/couple/IMG_4733.jpeg" />)}
          {(clickedIndex === 16) && (<LayerImg src="/images/couple/IMG_4789.jpeg" />)}
          {(clickedIndex === 17) && (<LayerImg src="/images/couple/IMG_3295.jpeg" />)}
          {(clickedIndex === 18) && (<LayerImg src="/images/couple/IMG_3253.jpeg" />)}
      </PopUpImg></>
  )
}

export default React.memo(ImageDiv);