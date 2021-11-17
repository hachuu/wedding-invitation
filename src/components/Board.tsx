import { useState } from 'react';
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
  font-size: 12px;
  width: 20%;
  background-color: #907FA4;
  padding: 5px;
  &:hover {
    cursor:pointer;
  }
`

const Board = () => {

  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  return (
    <>
    <BoardDiv>
      <NameInput placeholder='이름' value={name} onChange={(e) => setName(e.target.value)}></NameInput>
      <InputStyle placeholder='내용' value={content} onChange={(e) => setContent(e.target.value)}></InputStyle>
      <ButtonDiv>댓글 달기</ButtonDiv>
    </BoardDiv>
    </>
  )
}

export default Board;