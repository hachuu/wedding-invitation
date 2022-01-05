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
  margin: 40px 0 20px 0 ;
  width: 100%;
  font-size: 15px;
`;

const BoardDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px 0;
  width: 100%;
`;
const ListDiv = styled.div`
  text-align: left;
  margin: 0 10px 0 10px;
  padding: 2px;
  background-color: #FDFAF6;
  display: inline-block;
  color: $gray-text;
  vertical-align: middle;
  border: 0.5px solid #FAF1E6;
  border-radius: 5px;
`;

const writeDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const NameInput = styled.input`
border-top: 5px solid #FDFAF6;
 width: 15%;
 font-family: 'Cafe24SsurroundAir', cursive;
 border-radius: 5px;
`;

const InputStyle = styled.input`
  border-top: 5px solid #FDFAF6;
  width: 60%;
  font-family: 'Cafe24SsurroundAir', cursive;
  border-radius: 5px;
`;

const ButtonDiv = styled.div`
font-family: 'Cafe24SsurroundAir', cursive;
  font-size: 12px;
  width: 15%;
  background-color: #FDFAF6;
  padding: 5px;
  &:hover {
    cursor:pointer;
    box-shadow: 0 6px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.10);
  }
  border-radius: 5px;
`

const NameSpan = styled.span`
  font-weight: bold;
  font-size: 18px;
  font-family: 'KOTRAHOPE', cursive;
`

const CommentSpan = styled.span`
  padding: 0 10px;
  font-family: 'KyoboHand', cursive;
  font-size: 18px;
  display: inline-block;
`;

const Board = () => {

  const db = getFirestore();
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [list, setList] = useState<any[]>([]);

  const getCommetList = useCallback(() => {
    dbService.collection("comments").orderBy('dateTime', 'desc').get().then((querySnapshot) => {
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
        dateTime: new Date()
      })
      setName('');
      setContent('');
      const addData = {name: name, comment: content, dateTime: new Date()};
      const originList = [addData, ...list];
      setList(originList);
    } else {
      alert('신랑 신부에게 축하메세지를 남겨주세요💌');
    }
  }

  return (
    <>
    <BoardListDiv>
      {list.map((item, index) => 
      <ListDiv key={index}>
        <NameSpan>{item.name}</NameSpan>
         <CommentSpan>{item.comment}</CommentSpan>
         </ListDiv>
      )}
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