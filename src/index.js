import {createStore} from 'redux';

const reducer = (state = 23, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RESET':
            return state = 0;
        default:
            return state;
    }
};

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const reset = () => ({type: 'RESET'});

const store = createStore(reducer);

document.getElementById('increase').addEventListener('click', () => {
    store.dispatch(inc());
});

document.getElementById('decrease').addEventListener('click', () => {
    store.dispatch(dec());
});

document.getElementById('reset').addEventListener('click', () => {
    store.dispatch(reset());
});

const update = () => {
    document.getElementById('counter').textContent = store.getState();
};

console.log(update());

store.subscribe(update);