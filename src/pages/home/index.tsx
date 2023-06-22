import { useQuery } from "react-query";
import { Wrapper } from "../../styles/wrapper";
import { Form, Header, InputBusca } from "./style";
import { getGames } from "../../utils/getGames";
import { CardGame } from "../../components";
import { IgameCard } from "../../components/cardGame";
import { useState } from "react";

export const Home = () => {
  const [error500, setError500] = useState();
  const { data, isLoading } = useQuery(
    "games",
    async () =>
      await getGames().catch((error) => {
        if (error.response) {
          // A requisição foi feita e o servidor respondeu com um código de status
          // que sai do alcance de 2xx
          setError500(error.response.status);
        }
      })
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
        ) : (
          error500 && (
            <p>O servidor fahou em responder, tente recarregar a página</p>
          )
        )}

        {data &&
          data.map((games: IgameCard) => {
            return (
              <CardGame
                id={games.id}
                game_url={games.game_url}
                thumbnail={games.thumbnail}
                title={games.title}
                short_description={games.short_description}
                genre={games.genre}
              />
            );
          })}
      </Wrapper>
    </div>
  );
};
