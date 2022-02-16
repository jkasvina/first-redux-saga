import React from "react";
import {Wrapper, CashOut, FlexContainer, UsersBox, UsersText} from "./AppStyles";
import {useDispatch, useSelector} from "react-redux";
import {incrementActionCreator, decrementActionCreator} from "./store/countReducer";
// npm i react-redux

// изучить styled-components
// default function в js - изучить
function App() {
  const count = useSelector((state) => state.countReducer.count);
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <CashOut >
        <div style={{ fontSize: '3rem' }}>Баланс: {count}</div>
        <FlexContainer>
          <button onClick={() => dispatch(incrementActionCreator())}>Пополнить счёт</button>
          <button onClick={() => dispatch(decrementActionCreator())}>Снять со счёта</button>
          <button>Получить юзеров</button>
        </FlexContainer>
      </CashOut>
      <UsersBox>
        {users.map((user) => (
            <UsersText key={user.id}>
              {user.name}
            </UsersText>
        ))}
      </UsersBox>
    </Wrapper>
  );
}

export default App;
