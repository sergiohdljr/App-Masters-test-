import { SubmitHandler, useForm } from "react-hook-form";
import { Form, Input } from "./styles";
import { useBusca } from "../../store";

interface busca {
  busca: string;
}

export const InputBusca = () => {
  const { register, handleSubmit } = useForm<busca>();
  const { setBuscaValue } = useBusca();

  const onSubmit: SubmitHandler<busca> = ({ busca }) => {
    setBuscaValue(busca);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input type="text" placeholder="Busca" {...register("busca")} />
    </Form>
  );
};
