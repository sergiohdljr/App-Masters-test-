import { X } from "phosphor-react";
import { ButtonFilter, Genre } from "./style";
import { useBuscaGenre } from "../../store";

interface buttonFilter {
  index: number;
  genre: string;
}

export const BtnFilter = ({ genre, index }: buttonFilter) => {
  const { setGenreBuscaValue  } = useBuscaGenre()

  const handleFilterButton = () => {
    setGenreBuscaValue(genre)
  };

  return (
    <ButtonFilter isSelected={"#f6f6f6"} onClick={handleFilterButton}>
      <Genre>{genre}</Genre>
      <X size={12} color={"black"} />
    </ButtonFilter>
  );
};
