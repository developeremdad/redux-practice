const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');
const titleEl = document.getElementById('title');


// identifier 
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// action creation 
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value
    }
}

const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value
    }
}

// create initialize state object
let initialize = {
    value: 0,
    event: 'Simple Counter Application'
}

console.log(initialize);

// create reducer function 
function counterReducer(state = initialize, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload,
            event: 'Increment Counter Application'
        }
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload,
            event: 'Decrement Counter Application'
        }
    }
    else {
        return state;
    }
}

// create store 
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    if (state.value < 0) {
        state.value = 0;
    }
    counterEl.innerText = state.value;
    titleEl.innerText = state.event;
}
render();

store.subscribe(render)



// handle button click 
incrementEl.addEventListener('click', () => {
    store.dispatch(increment(6));
})

decrementEl.addEventListener('click', () => {
    store.dispatch(decrement(8));
})