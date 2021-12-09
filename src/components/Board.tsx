import { doc, onSnapshot } from '@firebase/firestore';
// import {firebaseInstance} from '../../firebase/firebase';
import { getFirestore } from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';



const BoardListDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  margin: 100px 0;
  width: 100%;
`;

const BoardDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  margin: 100px 0;
  width: 100%;
`;
const ListDiv = styled.div`
  display: flex;
  background-color: #f5f5f5;
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

  const db = getFirestore();
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [list, setList] = useState([]);

  const fetchData = useCallback(() => {
    // const unsub = onSnapshot(doc(db, "comments", "01097520005"), (doc) => {
    //   console.log("Current data: ", doc.data());
    // });
  }, []);


  useEffect(() => {
    const unsub = onSnapshot(doc(db, "comments", "01097520005"), (doc) => {
      console.log("Current data: ", doc.data());
      const data = doc.data();
      const datalist = [];
      datalist.push(data);
      console.log(datalist)
      // setList(datalist);
    });
  }, [fetchData])
  

  return (
    <>
    <BoardListDiv>
      {list.map((item, index) => <ListDiv key={index}></ListDiv>)}
    </BoardListDiv>
    <BoardDiv>
      <NameInput placeholder='이름' value={name} onChange={(e) => setName(e.target.value)}></NameInput>
      <InputStyle placeholder='내용' value={content} onChange={(e) => setContent(e.target.value)}></InputStyle>
      <ButtonDiv>댓글 달기</ButtonDiv>
    </BoardDiv>
    </>
  )
}

export default Board;