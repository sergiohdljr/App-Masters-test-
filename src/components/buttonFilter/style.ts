import styled from "styled-components";


export const ButtonFilter = styled.button`
  all: unset;
  width: fit-content;
  max-width: 155px;
  height: auto;
  padding: 0.3rem;
  background-color: ${({ theme }) => theme.btn};
  border: 0.2px ${({ theme }) => theme.textAlt} solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.3rem;
  gap: 0.3rem;

  cursor: pointer;

  :hover{
    background-color: ${({theme})=>theme.btnHover};
  }
`;
export const Genre = styled.p`
  font-size: 0.8rem;
  color: ${({theme})=>theme.contentBackground};
  letter-spacing: 0.1rem;
`;

export const FiltersWrap = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 1rem;

 
@media screen and (max-width: 992px) {
  width: 75%;
}

@media screen and (max-width: 480px) {
  width: 95%;
}
`;
