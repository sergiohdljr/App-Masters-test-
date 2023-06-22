import { useQuery } from "react-query";
import { Wrapper } from "../../styles/wrapper";
import { Form, Header, InputBusca } from "./style";
import { getGames } from "../../utils/getGames";
import { CardGame } from "../../components";
import { IgameCard } from "../../components/cardGame";
import { useState } from "react";
import { serverErrosCode } from "../../utils/regexServerErros";

export const Home = () => {
  const [serverError, setServerError] = useState<string>();
  const { data, isLoading } = useQuery<IgameCard[]>(
    "games",
    async () =>
      await getGames().catch((error) => {
        if (error.response) {
          const match = serverErrosCode.test(error.response.status?.toString());
          match
            ? setServerError(
                "O servidor fahou em responder, tente recarregar a página."
              )
            : setServerError(
                "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde."
              );
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
        ) : serverError ? (
          <p>{serverError}</p>
        ) : (
          data &&
          data.map((games) => {
            return (
              <CardGame
                key={games.id}
                game_url={games.game_url}
                thumbnail={games.thumbnail}
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
