import { useReducer } from 'react';

const initialState = {
    counter: 0,
};

type ActionType =
    | { type: 'increment' }
    | { type: 'decrement' }
    | { type: 'custom'; payload: number };

const reducer = (state: typeof initialState, action: ActionType) => {
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + 1 };
        case 'decrement':
            return { ...state, counter: state.counter - 1 };
        case 'custom':
            return { ...state, counter: action.payload };
        default:
            return state;
    }
};

const CounterReducer = () => {
    const [counterState, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <h6>Counter: {counterState.counter}</h6>
            <button
                className="btn btn-outline-primary"
                onClick={() => dispatch({ type: 'increment' })}
            >
                +1
            </button>
            <button
                className="btn btn-outline-primary"
                onClick={() => dispatch({ type: 'decrement' })}
            >
                -1
            </button>
            <button
                className="btn btn-outline-danger"
                onClick={() => dispatch({ type: 'custom', payload: 100 })}
            >
                100
            </button>
        </>
    );
};

export default CounterReducer;
