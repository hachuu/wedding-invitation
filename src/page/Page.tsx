import Headers from "../components/Header";
import Maps from "../components/Maps";
import styled from 'styled-components';
import { css } from 'styled-components';

const Context = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100%;
    margin: 100px 0;
    top: 0px;
    z-index: 5;
    font-size: 20px;
    font-family: 'Helvetica Neue', cursive;
`;
const BoxContainer = styled.div`
    margin: 300px 0 0 0;
    display: flex;
`;
const Box = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid #AEB7E6;
    transition: ;
    :hover {
        transform: scale(2);
    };
`;
    // ${props => props.image && 
    //     css `
    //     background-image: url(`../images/img${props.image}.jpeg`);
    //     `
    // };
    // background: rgba(174, 183, 230, 0.7);
    
const Page = () => {
    return (
        <div>
            <Headers></Headers>
            <Context>
                <div>
                    김태희 그리고 정지훈
                </div>
            </Context>
            <BoxContainer>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
            </BoxContainer>
            maps 나와야 하는디
            <Maps></Maps>
        </div>
    )
}


export default Page;