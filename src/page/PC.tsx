
import styled from 'styled-components';

const NavLi = styled.li`
   position: relative;
   display: inline-block;
   vertical-align: middle;
`;


const NavUL = styled.ul`
position: relative;
padding-left: 20px;
display: table-cell;
vertical-align: middle;
text-align: right;
`;

const NavTableDiv = styled.div`
font-weight: 400;
`;

const ContainerDiv = styled.div`
margin-left: auto;
margin-right: auto;
padding-right: 15px;
padding-left: 15px;
`;


const HeaderDiv = styled.div`
   background-color: transparent;
   position: fix;
   top: 0;
   left: 0;
   right: 0;
   transition: transform .2s,visibility .2s,background-color .3s;
   will-change: transform,visibility,background-color;
`;

const NavDiv = styled.div`
   padding: 33px 0;
   font-size: .96rem;
   z-index: 1000;
   transition: background-color .3s;
   will-change: background-color;
   position: relative;
`;

const PC = () => {
   // Greeting
   // Photo
   // Place
   // Contact
   // Board
   {/* <img src="assets/images/logo.svg" alt="logo-dark-svg" width="85"> */}
 return (
    <>
    <div>
      <HeaderDiv>
         <NavDiv>
            <ContainerDiv></ContainerDiv>
            <NavTableDiv>
               <a href="index.html">
                  <img src="/logo192.png" alt="logo-light" width="85"/>
               </a>
               <NavUL>
                  <NavLi><a>test</a></NavLi>
                  <NavLi><a>test</a></NavLi>
                  <NavLi><a>test</a></NavLi>
                  <NavLi><a>test</a></NavLi>
                  <NavLi><a>test</a></NavLi>
               </NavUL>
            </NavTableDiv>
         </NavDiv>
      </HeaderDiv>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
   </div>
    </>
 );
}

export default PC;