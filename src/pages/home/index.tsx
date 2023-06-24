import { useQuery } from "react-query";
import { Wrapper } from "../../styles/wrapper";
import { Header } from "./style";
import { BtnFilter, CardGame, ErrorMessage } from "../../components";
import { useHandleErrorMessage } from "../../store/handleErrors";
import { IgameCard } from "../../components/cardGame";
import { Loading } from "../../components/loading";
import { getGames } from "./data";
import { InputBusca } from "../../components/inputBusca";
import { useBusca, useBuscaGenre } from "../../store";
import { FiltersWrap } from "../../components/buttonFilter/style";

export const Home = () => {
  const { data, isLoading } = useQuery<IgameCard[]>(
    "games",
    async () => await getGames({ setErrorMessage })
  );
  const { errorMessage, setErrorMessage } = useHandleErrorMessage();
  const { genreBuscaValue } = useBuscaGenre();
  const { buscaValue } = useBusca();

  const genres = data?.map((game) => game.genre);
  const listGenres = [...new Set(genres)];

  return (
    <>
      <Header>
        APP-MASTERS-GAMES
        <InputBusca />
      </Header>
      <FiltersWrap>
        {listGenres.map((genre, i) => (
          <BtnFilter genre={genre} index={i} key={genre.toUpperCase()} />
        ))}
      </FiltersWrap>
      <Wrapper>
        {isLoading ? (
          <Loading />
        ) : errorMessage ? (
          <ErrorMessage msgError={errorMessage} />
        ) : (
          data &&
          data
            .filter(({ genre }) => {
              if (genreBuscaValue) {
                const buscaGenre = genreBuscaValue.toLowerCase();
                const filtro = genre.toLowerCase();
                return filtro === buscaGenre;
              }
              return data;
            })
            .filter(({ title }) => {
              if (buscaValue) {
                const buscaGame = buscaValue.toLowerCase();
                const filtro = title.toLowerCase();
                return filtro.startsWith(buscaGame);
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
    </>
  );
};
