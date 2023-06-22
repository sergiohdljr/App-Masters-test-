import { api } from "../service/axiosConfig";

export const getGames = async () => {
  return api
    .get("data/")
    .then((games) => games.data)
};
