import { useQuery } from "react-query";
import { Wrapper } from "../../styles/wrapper";
import { Form, Header, InputBusca } from "./style";
import { getGames } from "../../utils/getGames";
import { CardGame } from "../../components";
import { useHandleErrorMessage } from "../../store/handleErrors";
import { IgameCard } from "../../components/cardGame";

export const Home = () => {
  const { errorMessage, setErrorMessage } = useHandleErrorMessage();

  const { data, isLoading } = useQuery<IgameCard[]>(
    "games",
    async () => await getGames({ setErrorMessage })
  );

  return (
    <div>
      <Header>
        APP-MASTRES-GAMES
        <Form action="">
          <InputBusca type="text" placeholder="Busca" />
        </Form>
      </Header>
      <Wrapper>
        {isLoading ? (
          <p>carregando...</p>
        ) : errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          data &&
          data.map((games) => {
            const imagem = games.thumbnail;
            return (
              <CardGame
                key={games.id}
                game_url={games.game_url}
                thumbnail={imagem}
                title={games.title}
                short_description={games.short_description}
                genre={games.genre}
              />
            );
          })
        )}
      </Wrapper>
    </div>
  );
};
