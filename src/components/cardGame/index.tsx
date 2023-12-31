import { truncarTexto } from "../../utils";
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

export interface IgameCard {
  id?: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
}

export const CardGame = ({
  title,
  thumbnail,
  short_description,
  genre,
  game_url,
}: IgameCard) => {
  return (
    <Card>
      <BannerGame>
        <Thumbnail src={thumbnail} alt={title} loading="lazy" />
      </BannerGame>
      <InfoCard>
        <Title>{title}</Title>
        <Description>{truncarTexto(short_description, 130)}</Description>
        <FooterCard>
          <LinkGame href={game_url}>compre o jogo</LinkGame>
          <Release>{genre}</Release>
        </FooterCard>
      </InfoCard>
    </Card>
  );
};
