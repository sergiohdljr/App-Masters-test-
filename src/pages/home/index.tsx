import { Wrapper } from "../../styles/wrapper";
import { Form, Header, InputBusca } from "./style";

export const Home = () => {
  return (
    <div>
      <Header>
        APP-MASTRES-GAMES
        <Form action="">
          <InputBusca type="text" placeholder="Busca" />
        </Form>
      </Header>
      <Wrapper></Wrapper>
    </div>
  );
};
