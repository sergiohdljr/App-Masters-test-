import { SubmitHandler, useForm } from "react-hook-form";
import { BuscaButton, Form, FormContainer, GenreOfBusca, Input, ResetBusca } from "./styles";
import { useBusca, useBuscaGenre } from "../../store";
import { MagnifyingGlass } from "phosphor-react";

interface busca {
  busca: string;
}

export const InputBusca = () => {
  const { register, handleSubmit, reset } = useForm<busca>();
  const { setBuscaValue, buscaValue } = useBusca();
  const { genreBuscaValue } = useBuscaGenre();

  const onSubmit: SubmitHandler<busca> = ({ busca }) => {
    setBuscaValue('')
    setBuscaValue(busca);
  };

  const resetBusca = () => {
    setBuscaValue("");
    reset();
  };

  return (
    <FormContainer>
      <GenreOfBusca>buscas feitas para o gênero: {genreBuscaValue}</GenreOfBusca>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="Busca" {...register("busca")} />
        {buscaValue ? (
        <ResetBusca onClick={resetBusca}>
          <p>resetar busca</p>
        </ResetBusca>
      ) : <BuscaButton type="submit"><MagnifyingGlass size={16}/></BuscaButton>}
      </Form>
    </FormContainer>
  );
};
