import styled from 'styled-components';

const BringDownDiv = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid;
  width: 50px;
  height: 50px;
  bottom: 65px;
  left: 50%;
`;

const BringDown = () => {
  return (
    <BringDownDiv>뉴후</BringDownDiv>
  )
}

export default BringDown;