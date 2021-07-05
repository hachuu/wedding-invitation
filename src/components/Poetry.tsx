import styled from 'styled-components';
const PoetryDiv = styled.div`
  margin: 100px 0 0 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-flow: wrap;
  font-family: 'Gamja Flower', cursive;
`;

const Column = styled.div`
width: 350px;
height : 20px;
`;

const Poetry = () => {

  return (
    <PoetryDiv>
      <Column>
        자세히 보아야
      </Column>
      <Column>
        예쁘다
      </Column>
      <Column>
      오래 보아야
      </Column>
      <Column>
      사랑스럽다
      </Column>

      <Column>
      너도 그렇다.
      </Column>
    </PoetryDiv>
  )
}

export default Poetry;