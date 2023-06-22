import { useQuery } from "react-query";
import { Wrapper } from "../../styles/wrapper";
import { Form, Header, InputBusca } from "./style";
import { CardGame, ErrorMessage } from "../../components";
import { useHandleErrorMessage } from "../../store/handleErrors";
import { IgameCard } from "../../components/cardGame";
import { Loading } from "../../components/loading";
import { getGames } from "./data";

export const Home = () => {
  const { errorMessage, setErrorMessage } = useHandleErrorMessage();

  const { data, isLoading } = useQuery<IgameCard[]>(
    "games",
    async () => await getGames({ setErrorMessage })
  );

  return (
    <div>
      <Header>
        APP-MASTERS-GAMES
        <Form action="">
          <InputBusca type="text" placeholder="Busca" />
        </Form>
      </Header>
      <Wrapper>
        {isLoading ? (
          <Loading />
        ) : errorMessage ? (
          <ErrorMessage msgError={errorMessage} />
        ) : (
          data &&
          data.map((game) => {
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
