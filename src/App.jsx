import React from "react";
import {
  Wrapper,
  CashOut,
  FlexContainer,
  UsersBox,
  UsersText,
} from "./AppStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncIncrementActionCreator,
  asyncDecrementActionCreator,
} from "./store/countReducer";
import { fetchUsersCustomerAction } from "./store/userReducer";
// npm i react-redux

// Отформатировать все файлы
// npx prettier --write .

// Отладка, reactdevtools расширение chrome
// https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=en

// изучить styled-components
// default function в js - изучить
// repeat learn promises
// fetch()
// Saga Middleware, applyMiddleware in store/index.js
// redux compose
// applyMiddleware
function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);
  const users = useSelector((state) => state.userReducer.users);

  return (
    <Wrapper>
      <CashOut>
        <div style={{ fontSize: "3rem" }}>Баланс: {count}</div>
        <FlexContainer>
          <button onClick={() => dispatch(asyncIncrementActionCreator())}>
            ИНКРЕМЕНТ++
          </button>
          <button onClick={() => dispatch(asyncDecrementActionCreator())}>
            ДЕКРЕМЕНТ--
          </button>
        </FlexContainer>
      </CashOut>
      <UsersBox>
        <button onClick={() => dispatch(fetchUsersCustomerAction())}>
          Получить юзеров
        </button>
        <div>
          {users.map((user) =>
            <UsersText key={user.id}>{user.username}</UsersText>
          )}
          {/*<div style={{ fontSize: "3rem" }}>{users[0].id}</div>*/}
        </div>
      </UsersBox>
    </Wrapper>
  );
}

export default App;
