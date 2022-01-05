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

const [imageActive, setImageActive] = useState(false);

  return (
    <><ImageDefaultContainer active={imageActive}>
      <DefaultImg src="/images/couple/blue-shy.jpeg" />
      <DefaultImg src="/images/couple/couple-shoes.jpeg" />
      <DefaultImg src="/images/couple/next-line.jpeg" />
      <DefaultImg src="/images/couple/kuho.jpeg" />
      <DefaultImg src="/images/couple/Queen.jpeg" />
      <DefaultImg src="/images/couple/shy.jpeg" />
      <DefaultImg src="/images/couple/tiara.jpeg" />
      <DefaultImg src="/images/couple/quokkaalone.jpeg" />
      <DefaultImg src="/images/couple/one.jpeg" />
      <DefaultImg src="/images/couple/sunnyalone.jpeg" />
      <DefaultImg src="/images/couple/sunnyinfront.jpeg" />
      <DefaultImg src="/images/couple/sunnytwo.jpeg" />
      <DefaultImg src="/images/couple/yellow-shoes.jpeg" />
      <DefaultImg src="/images/couple/frame.jpeg" />
    </ImageDefaultContainer><SpreadButton onClick={() => setImageActive(!imageActive)}>
        {!imageActive ? '사진 펼쳐서 크게 보기' : '사진 슬라이드로 보기'}
        <span>{!imageActive ? '🔼' : '🔽'}</span>
      </SpreadButton><ImageContainer active={imageActive}>
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
  )
}

export default ImageDiv;