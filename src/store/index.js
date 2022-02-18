import {createStore, combineReducers, applyMiddleware, compose} from "redux";
// npm i redux
import countReducer from "./countReducer";
import userReducer from "./userReducer";
// import { composeWithDevTools} from "redux-devtools-extension";
// npm i redux-devtools-extension
// для работы middleware с инструментами разработчика redux-devtools

// import thunk from "redux-thunk";
// npm i redux-thunk - библиотека для работы с асинхронным кодом
// саша сказал, пока не нужно

import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../saga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

// корневой редьюсер - объект, содержащий все редьюсеры
const rootReducer = combineReducers({
  // можно записать с именем
  // cash: cashReducer,
  // customers: customerReducer

  countReducer,
  userReducer
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// composeEnhancerscompose то же самое, что и WithDevTools
// composeEnhancerscompose(applyMiddleware(sagaMiddleware))

// У тебя есть мидлвара и девтулз 2 энхенсера - Нужно их объеденить
// compose нужен для этого

// Enhancer - компонент высшего порядка , абстракция вокруг обычного Store,
// делающая его более мощным
// как middleware — это не что иное, как плагин или деталь приложения,
// которую можно поместить «внутрь» цепочки потока данных Redux.

export const store = createStore(
  rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// создаём Middleware, запускаем его, передаём в него watcher
// Watcher следит за конкретным action,
// а action вызываем при нажатии на кнопку
sagaMiddleware.run(rootWatcher);
