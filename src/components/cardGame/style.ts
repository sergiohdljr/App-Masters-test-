import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({theme})=>theme.contentBackground};
  width: 310px;
  height: 350px;
  border: 0.1rem ${({theme})=>theme.contentBackground} solid;
  display: flex;
  flex-direction: column;
  padding: 0.7rem;
  gap: 0.5rem;
  box-shadow: ${({theme})=>theme.shadow};
  border-radius: 0.5rem;

  :hover {
    opacity: 60%;
  }
`;

export const BannerGame = styled.figure`
  width: 100%;
  height: 60%;
  background-color: ${({theme})=>theme.background};
  border-radius: 1.8rem;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

export const InfoCard = styled.article`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  text-align: left;
  color: ${({theme})=>theme.textAlt}
`;

export const Description = styled.p`
  font-size: 0.8rem;
  text-align: left;
  flex-grow: 1;
  color: ${({theme})=>theme.textAlt}
`;

export const FooterCard = styled.footer`
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LinkGame = styled.a`
font-size: 0.9rem;
`
export const Release = styled.p`
font-size:0.9rem;
`
