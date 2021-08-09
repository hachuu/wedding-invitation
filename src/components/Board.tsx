import styled from 'styled-components';

const BoardDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  margin: 100px 0;
  width: 100%;
`;

const writeDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const NameInput = styled.input`
border-top: 5px solid #907FA4;
 width: 15%;
`;

const InputStyle = styled.input`
  border-top: 5px solid #907FA4;
  width: 40%
`;

const ButtonDiv = styled.div`
  font-size: 10px;
  width: 20%;
  background-color: #907FA4;
  &:hover {
    cursor:pointer;
  }
`

// find low index of arrays


const Board = () => {

  return (
    <>
    <BoardDiv>
    <NameInput placeholder='이름'></NameInput>
    <InputStyle placeholder='내용'></InputStyle>
    <ButtonDiv>Comment</ButtonDiv>


    </BoardDiv>
    </>
  )
}

export default Board;