import styled from 'styled-components';
const PoetryDiv = styled.div`
  margin: 100px 0 100px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-flow: wrap;
  font-family: 'Cafe24SsurroundAir', cursive;
  font-size: 20px;
`;

const Column = styled.div`
width: 350px;
height : 20px;
`;

const Poetry = () => {

  return (
    <PoetryDiv>
      <Column>
        '우리'라는
      </Column>
      <Column>
      이름으로
      </Column>
      <Column>
      아름다운
      </Column>
      <Column>
      첫 '시작'을 하려 합니다.
      </Column>
      <Column>
      함께 축복해주세요.
      </Column>
      <br/>
      <br/>
      <br/>
      <Column>
      신랑 신부 올림🥀
      </Column>
    </PoetryDiv>
  )
}

export default Poetry;