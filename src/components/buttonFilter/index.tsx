import { X } from "phosphor-react";
import { ButtonFilter, Genre } from "./style";

interface buttonFilter {
  index: number;
  genre: string;
}

export const BtnFilter = ({ genre, index }: buttonFilter) => {
  
  const handleFilterButton = () => {
    console.log(genre)
  };

  return (
    <ButtonFilter isSelected={"#f6f6f6"} onClick={handleFilterButton}>
      <Genre>{genre}</Genre>
      <X size={12} color={"black"} />
    </ButtonFilter>
  );
};
