import { Footer } from "components/pc/Footer";
import { Header } from "components/pc/Header";
import { NavBar } from "components/pc/NavBar";
import styled from "styled-components";
import Mobile from "./Mobile";

const ContainerDiv = styled.div`
  padding: 0 10px;
  font-family: "UhBeemysen", sans-serif;
`;

const PageDiv = styled.div`
  min-height: 1000px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 25% 10px 25%;
`;

const FirstImg = styled.img`
  width: 100%;
  height:100%;
  object-fit: cover;
  margin: 50px 0 0 0;
`;

const PC = () => {
  // Greeting
  // Photo
  // Place
  // Contact
  // Board
  return (
   <>
      <ContainerDiv>
      <Header></Header>
        {/* <NavBar></NavBar> */}
      <PageDiv>
        <FirstImg src="/images/couple/blue-shy.jpeg"/>
        <FirstImg src="/images/couple/couple-shoes.jpeg"/>
        <FirstImg src="/images/couple/next-line.jpeg"/>
        <FirstImg src="/images/couple/구호시그니처.jpeg"/>
        <FirstImg src="/images/couple/베일.jpeg"/>
        <FirstImg src="/images/couple/위엄.jpeg"/>
        <FirstImg src="/images/couple/쿼카위엄.jpeg"/>
        <FirstImg src="/images/couple/one.jpeg"/>
        <FirstImg src="/images/couple/햇살단독.jpeg"/>
        <FirstImg src="/images/couple/햇살정면.jpeg"/>
        <FirstImg src="/images/couple/햇살투샷.jpeg"/>
        <FirstImg src="/images/couple/yellow-shoes.jpeg"/>
        <FirstImg src="/images/couple/액자.jpeg"/>
      </PageDiv>
      <Footer></Footer>
      </ContainerDiv>
   </>
  );
};

export default PC;
