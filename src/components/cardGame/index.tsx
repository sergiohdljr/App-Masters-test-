import {
  BannerGame,
  Card,
  Description,
  FooterCard,
  InfoCard,
  LinkGame,
  Release,
  Thumbnail,
  Title,
} from "./style";

export const CardGame = () => {
  return (
    <Card>
      <BannerGame>
        <Thumbnail
          src="https://www.freetogame.com/g/540/thumbnail.jpg"
          alt=""
        />
      </BannerGame>
      <InfoCard>
        <Title>Overwatch 2</Title>
        <Description>
          A hero-focused first-person team shooter from Blizzard Entertainment.
        </Description>
        <FooterCard>
          <LinkGame href="">Link Game</LinkGame>
          <Release>2022-10-04</Release>
        </FooterCard>
      </InfoCard>
    </Card>
  );
};
