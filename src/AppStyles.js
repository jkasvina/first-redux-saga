import styled from "styled-components";
// чтобы работало, библиотека добавлена в json dependencies

export const Wrapper = styled.div``;

export const FlexContainer = styled.div`
  display: flex;
`;

export const CashOut = styled(FlexContainer)`
  border: 1px solid black;
  justify-content: space-between;
`;

export const UsersBox = styled(FlexContainer)`
  margin-top: 10px;
  border: 1px solid black;
  flex-direction: column;
`;

export const UsersText = styled.h3`
  color: black;
  justify-content: center;
`;
