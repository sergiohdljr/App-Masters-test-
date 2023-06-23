import styled from "styled-components";

interface selected {
  isSelected: string;
}

export const ButtonFilter = styled.button<selected>`
  all: unset;
  width: fit-content;
  height: auto;
  padding: 0.3rem;
  background-color: ${(props) => (props.isSelected)};
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0 auto;
`;
