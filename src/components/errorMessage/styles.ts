import styled from "styled-components";

export const ErrorMessageStyle = styled.p`
  font-size: 0.9rem;
  height: auto;
  background-color: #F6F6F6;
  color: ${({theme})=>theme.error};
  text-align: center;
  line-height: 1.5rem;
  border-radius: 0.3rem;
  padding: 0.2rem;
`;
