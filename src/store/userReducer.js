const defaultState = {
    customers: [],
}

export const SET_USERS = 'SET_USERS'

export default function userReducer (state = defaultState, action) {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...state.users, action.payload]}
        // изначально состояние является неизменяемым,
        // поэтому новое состояние - всегда новый объект
        default:
            return state;
        // возвращаем неизменённое текущее состояние
    }
}

// такая ф-я называется action creator
// принимает данные и возвращает объект action
// нужна чтобы не писать объекты, а просто вызывать функцию по имени action-а
// type - обязательное поле
export const setUsersCustomerAction = (payload) => ({type: SET_USERS, payload});