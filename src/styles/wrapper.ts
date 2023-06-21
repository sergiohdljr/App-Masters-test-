import styled from "styled-components";

export const Wrapper = styled.div`
  width: 70%;
  height: auto;
  display: grid;
  margin: 0 auto;
  margin-top: 50px;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  grid-template-rows: auto;
  justify-items: center;
  justify-content: center;
  gap: 1rem;
`;
