import axios, { AxiosError } from "axios";
import { api } from "../../service/axiosConfig";
import { ErrorMessagesObj } from "../../utils";
import { serverErrosCode } from "../../utils/regexServerErros";

interface IgetGames {
  setErrorMessage: (message: string) => void;
}

export const getGames = async ({ setErrorMessage }: IgetGames) => {
  const time = 5000;
  return await api
    .get("data/", { timeout: time })
    .then((games) => games.data)
    .catch((Error) => {
      if (axios.isAxiosError(Error)) {
        const axiosError = Error as AxiosError;
        if (axiosError.code === "ECONNABORTED") {
          setErrorMessage(ErrorMessagesObj.timeout);
        } else {
          if (Error.response) {
            const codeErrorMatch = serverErrosCode.test(
              Error.response.status?.toString()
            );
            codeErrorMatch ? setErrorMessage(ErrorMessagesObj.serverError): setErrorMessage(ErrorMessagesObj.outros);
          }
        }
      }
    });
};
