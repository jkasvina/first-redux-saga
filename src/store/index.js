import { createStore, combineReducers, applyMiddleware } from "redux";
// npm i redux
import countReducer from "./countReducer";
import userReducer from "./userReducer";
// import { composeWithDevTools} from "redux-devtools-extension";
// npm i redux-devtools-extension
// для работы middleware с инструментами разработчика redux-devtools

// import thunk from "redux-thunk";
// npm i redux-thunk - библиотека для работы с асинхронным кодом
// саша сказал, пока не нужно

import createSagaMiddleware from 'redux-saga';
import {rootWatcher} from "../saga";
import { composeWithDevTools} from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware()

// корневой редьюсер - объект, содержащий все редьюсеры
const rootReducer = combineReducers({
  // можно записать с именем
  // cash: cashReducer,
  // customers: customerReducer

  countReducer,
  userReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

// создаём Middleware, запускаем его, передаём в него watcher
// Watcher следит за конкретным action,
// а action вызываем при нажатии на кнопку
sagaMiddleware.run(rootWatcher)