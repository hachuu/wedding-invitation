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
margin: 5px;
`;

const Poetry = () => {

  return (
    <PoetryDiv>
      <Column>
        서로의 이름을 부르는 것만으로도
      </Column>
      <Column>
        사랑의 깊이를 확인할 수 있는 두 사람이
      </Column>
      <Column>
        꽃과 나무처럼 걸어와서
      </Column>
      <Column>
        서로의 모든 것이 되기 위해
      </Column>
      <Column>
        오랜 기다림 끝에 혼례식을 치르는 날
      </Column>
      <Column>
        세상은 더욱 아름다워라
      </Column>
      <br/>
      <br/>
      <br/>
      <Column>
      이해인 '사랑의 사람들이여'🥀
      </Column>
    </PoetryDiv>
  )
}

export default Poetry;