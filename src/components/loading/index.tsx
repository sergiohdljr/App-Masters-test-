import { ThreeDots } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div>
      <ThreeDots
        height="50"
        width="50"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
};
