import styled from 'styled-components';

export const Footer = () => {
 
  const FooterDiv = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
  `;

  const FooterA = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 25px;
  `;

  const LogoSpan = styled.span`
    height: 100px;
  `;

  const FirstImg = styled.img`
    width: 7%;
    height: 7%;
    object-fit: cover;
    margin: 10px 0 0 0;
`;

  return (
    <FooterDiv>
        <FooterA
          href="https://github.com/hachuu/wedding-invitation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Hachuu{' '}
          <LogoSpan>
            <FirstImg src={"quokka.jpg"} alt='quokka'></FirstImg>
          </LogoSpan>
        </FooterA>
      </FooterDiv>
  )
}