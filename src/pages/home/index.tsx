import { useQuery } from "react-query";
import { Wrapper } from "../../styles/wrapper";
import { Header } from "./style";
import { CardGame, ErrorMessage } from "../../components";
import { useHandleErrorMessage } from "../../store/handleErrors";
import { IgameCard } from "../../components/cardGame";
import { Loading } from "../../components/loading";
import { getGames } from "./data";
import { InputBusca } from "../../components/inputBusca";
import { useBusca } from "../../store";
import { useState } from "react";

export const Home = () => {
  const { errorMessage, setErrorMessage } = useHandleErrorMessage();
  const [gameGenre, setGenres] = useState<string[]>();
  const { buscaValue } = useBusca();
  const { data, isLoading } = useQuery<IgameCard[]>(
    "games",
    async () => await getGames({ setErrorMessage })
  );

  const genres = data?.map((game) => game.genre);
  const listGenres = [...new Set(genres)];

  return (
    <div>
      <Header>
        APP-MASTERS-GAMES
        <InputBusca   />
      </Header>

      <Wrapper>
        {isLoading ? (
          <Loading />
        ) : errorMessage ? (
          <ErrorMessage msgError={errorMessage} />
        ) : (
          data &&
          data
            .filter(({ title }) => {
              if (buscaValue) {
                const buscaGame = buscaValue.toLowerCase();
                const filtro = title.toLowerCase();

                return filtro.includes(buscaGame);
              }
              return data;
            })

            .map((game) => {
              return (
                <CardGame
                  key={game.id}
                  genre={game.genre}
                  title={game.title}
                  game_url={game.game_url}
                  thumbnail={game.thumbnail}
                  short_description={game.short_description}
                />
              );
            })
        )}
      </Wrapper>
    </div>
  );
};
