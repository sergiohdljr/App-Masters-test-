import styled from "styled-components";

export const Form = styled.form`
  width: fit-content;
  height: auto;
  border: 0.1rem ${({theme})=>theme.textAlt} solid;
  border-radius: 0.3rem;
`;

export const Input = styled.input`
  width: 310px;
  height: 40px;
  padding: 0.2rem;
  font-size: 1rem;
  background-color: transparent;
  color: ${({theme})=>theme.textAlt};
  border: none;
`;
