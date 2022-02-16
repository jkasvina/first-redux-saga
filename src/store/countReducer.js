const defaultState = {
    cash: 0,
}

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// type - обязательное поле
// action = {type: '', payload: '?'}

export default function countReducer (state = defaultState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        // изначально состояние является неизменяемым,
        // поэтому новое состояние - всегда новый объект
        case 'DECREMENT':
            return {...state, count: state.count - 1}
        default:
            return state;
        // возвращаем неизменённое текущее состояние
    }
}


// такая ф-я называется action creator
// принимает данные и возвращает объект action
// нужна чтобы не писать объекты, а просто вызывать функцию по имени action-а
// type - обязательное поле
export const incrementActionCreator = () => ({type: INCREMENT});
export const decrementActionCreator = () => ({type: DECREMENT});