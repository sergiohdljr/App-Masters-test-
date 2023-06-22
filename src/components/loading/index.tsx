import { ThreeDots } from "react-loader-spinner";
import { LoadingStyle } from "./styles";

export const Loading = () => {
  return (
    <LoadingStyle>
      <ThreeDots
        height="50"
        width="50"
        radius="9"
        color="#D7D7D7"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
      <p>carregando jogos...</p>
    </LoadingStyle>
  );
};
