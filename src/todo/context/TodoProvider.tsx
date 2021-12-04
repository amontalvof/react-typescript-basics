import React from 'react';
import { TodoContext } from './TodoContext';

const INITIAL_STATE = {
    todoCount: 2,
    todos: [],
    completed: 0,
    pending: 2,
};

interface props {
    children: JSX.Element | JSX.Element[];
}

const TodoProvider = ({ children }: props) => {
    return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
