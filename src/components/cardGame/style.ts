import styled from "styled-components";

export const Card = styled.div`
  width: 310px;
  height: 350px;
  border: 0.1rem black solid;
  display: flex;
  flex-direction: column;

  :hover {
    opacity: 60%;
  }
`;

export const BannerGame = styled.figure`
  width: 100%;
  height: 60%;
  background-color: red;
  border-radius: 1.8rem;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

export const InfoCard = styled.article`
  width: 100%;
  height: 40%;
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  text-align: left;
`;

export const Description = styled.p`
  font-size: 0.8rem;
  text-align: left;
  flex-grow: 1;
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
