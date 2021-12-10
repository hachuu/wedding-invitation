import { collection, doc, onSnapshot, } from '@firebase/firestore';
// import {firebaseInstance} from '../../firebase/firebase';
import { getFirestore } from 'firebase/firestore';
import { SetStateAction, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import 'firebase/firestore';
import { dbService } from 'firebaseInit';

const BoardListDiv = styled.div`
  display: flex;
  flex-direction: column;
  // text-align: center;
  justify-content: center;
  margin: 10px 0;
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
  background-color: #f5f5f5;
  display: inline-block;
  color: $gray-text;
  vertical-align: middle;
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
  const [list, setList] = useState<any[]>([]);

  const getCommetList = useCallback(() => {
    dbService.collection("comments").get().then((querySnapshot) => {
      const datalist: SetStateAction<any[]> = [];
      querySnapshot.forEach((doc) => {
        datalist.push(doc.data());
      });
      setList(datalist);
    })
  }, []);


  useEffect(() => {
    getCommetList();
    // dbService.collection("comments").get().then((querySnapshot) => {
    //   const datalist: SetStateAction<any[]> = [];
    //   querySnapshot.forEach((doc) => {
    //     console.log(`${doc.id} => ${doc.data()}`);
    //     datalist.push(doc.data());
    //   });
    //   setList(datalist);
    // })
  }, [])

  const addComment = async () => {
    if (name !== '' && content !== '') {
      dbService.collection("comments").add({
        name: name,
        comment: content,
      })
      setName('');
      setContent('');
      getCommetList();
    }
  }

  return (
    <>
    <BoardListDiv>
      {list.map((item, index) => <ListDiv key={index}>{item.name} {item.comment}</ListDiv>)}
    </BoardListDiv>
    <BoardDiv>
      <NameInput placeholder='이름' value={name} onChange={(e) => setName(e.target.value)}></NameInput>
      <InputStyle placeholder='내용' value={content} onChange={(e) => setContent(e.target.value)}></InputStyle>
      <ButtonDiv onClick={(e) => addComment()}>댓글 달기</ButtonDiv>
    </BoardDiv>
    </>
  )
}

export default Board;