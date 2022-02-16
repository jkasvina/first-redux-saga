import {createStore, combineReducers, applyMiddleware} from "redux";
// npm i redux
import countReducer from "./countReducer";
import userReducer from "./userReducer";
// import { composeWithDevTools} from "redux-devtools-extension";
// import thunk from "redux-thunk";

// npm i redux-devtools-extension
// для работы middleware с инструментами разработчика redux-devtools

// npm i redux-thunk - библиотека для работы с асинхронным кодом

// корневой редьюсер - объект, содержащий все редьюсеры
const rootReducer = combineReducers( {
    // можно записать с именем
    // cash: cashReducer,
    // customers: customerReducer

    countReducer,
    userReducer
})

export const store = createStore(rootReducer)