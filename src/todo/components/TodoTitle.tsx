import useTodos from '../hooks/useTodos';

const TodoTitle = () => {
    const { pendingTodos } = useTodos();
    return <h3>Pending Todos: {pendingTodos}</h3>;
};

export default TodoTitle;
