import styled from "styled-components";

export const Form = styled.form`
  width: 310px;
  height: 40px;
  border: 0.1rem ${({ theme }) => theme.textAlt} solid;
  border-radius: 0.3rem;
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.2rem;
  font-size: 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.textAlt};
  border: none;
`;

export const ResetBusca = styled.button`
  all: unset;
  width: fit-content;
  padding: 0.3rem;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.contentBackground};
  background-color: ${({ theme }) => theme.error};
  cursor: pointer;

  :hover {
    opacity: 70%;
  }
`;

export const BuscaButton = styled(ResetBusca)`
background-color: ${({theme})=>theme.btn};
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.3rem;
`;
export const GenreOfBusca = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text};
`;
