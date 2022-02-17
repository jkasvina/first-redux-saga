// аналогично userReducer
import {put, takeEvery, call} from "redux-saga/effects";
import {FETCH_USERS, setUsersCustomerAction} from "../store/userReducer";

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
// fetch возвращает промисы

// worker (понятие redux-saga), на основе ф-ии генератора
function* fetchUserWorker() {
    // call возвращает данные из promise
    const data = yield call(fetchUsersFromApi);
    // resolve(data.json()) - преобразование исходных данных к формату json
    const json = yield call(() => new Promise(resolve => resolve(data.json())) );
    console.log(json[0].id)
    yield put(setUsersCustomerAction(json));
}

// для всех actions, которые связаны со счётчиком создаёт watcher
// отрабатывает тогда, когда action с таким типом будет задиспатчен
// (передан диспетчеру)
// watcher может отслеживать неограниченное кол-во actions
export function* userWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserWorker);
}