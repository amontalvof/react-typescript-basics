import { useReducer } from 'react';
import { TodoContext } from './TodoContext';
import { TodoState } from '../interfaces';
import todoReducer from './todoReducer';

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Collect the infinity stones',
            completed: false,
        },
        {
            id: '2',
            desc: 'Soul stone',
            completed: false,
        },
    ],
    completed: 0,
    pending: 2,
};

interface props {
    children: JSX.Element | JSX.Element[];
}

const TodoProvider = ({ children }: props) => {
    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

    const toggleTodo = (id: string) => {
        dispatch({ type: 'toggleTodo', payload: { id } });
    };

    return (
        <TodoContext.Provider value={{ todoState, toggleTodo: toggleTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
