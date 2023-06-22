import { ErrorMessageStyle } from "./styles";

interface errorMessageProps {
  msgError: string;
}

export const ErrorMessage = ({ msgError }: errorMessageProps) => {
  return <ErrorMessageStyle>{msgError}</ErrorMessageStyle>;
};
