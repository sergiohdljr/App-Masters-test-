import styled from "styled-components";

interface selected {
  isSelected: string;
}

export const ButtonFilter = styled.button<selected>`
  all: unset;
  width: 80%;
  max-width: 155px;
  height: auto;
  padding: 0.3rem;
  background-color: ${(props) => props.isSelected};
  border: 0.2px black solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.3rem;

  cursor: pointer;
`;
export const Genre = styled.p`
  font-size: 0.8rem;
  color: black;
  letter-spacing: 0.1rem;
`;

export const FiltersWrap = styled.div`
  width: 70%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  justify-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 900px) {
   grid-template-columns: repeat(4, 1fr);
}
`;
