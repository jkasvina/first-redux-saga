// здесь будут асинхронные экшены работы со счётчиком
// аналогично countReducer
import {
  ASYNC_DECREMENT,
  ASYNC_INCREMENT,
  decrementActionCreator,
  incrementActionCreator,
} from "../store/countReducer";
import { put, takeEvery } from "redux-saga/effects";
// npm i redux-saga
// put это своего рода dispatch, предназначенный для асинхронных экшонов

// искусственная задержка
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// worker (понятие redux-saga), на основе ф-ии генератора
function* incrementWorker() {
  yield delay(1000);
  // put(actionCreator) ф-я вызывает синхронные actions
  yield put(incrementActionCreator());
}

// worker (понятие redux-saga), на основе ф-ии генератора
function* decrementWorker() {
  yield delay(1000);
  yield put(decrementActionCreator());
}

// для всех actions, которые связаны со счётчиком, создаёт watcher
// отрабатывает тогда, когда action с таким типом будет задиспатчен
// (передан диспетчеру)
// watcher может отслеживать неограниченное кол-во actions
export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT, incrementWorker);
  yield takeEvery(ASYNC_DECREMENT, decrementWorker);
}
