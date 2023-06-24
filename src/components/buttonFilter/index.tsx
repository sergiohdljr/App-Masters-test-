import { X } from "phosphor-react";
import { ButtonFilter, Genre } from "./style";
import { useBuscaGenre } from "../../store";

interface buttonFilter {
  index: number;
  genre: string;
}

export const BtnFilter = ({ genre }: buttonFilter) => {
  const { setGenreBuscaValue  } = useBuscaGenre()

  const handleFilterButton = () => {
    setGenreBuscaValue(genre)
  };

  return (
    <ButtonFilter onClick={handleFilterButton}>
      <Genre>{genre}</Genre>
    </ButtonFilter>
  );
};
