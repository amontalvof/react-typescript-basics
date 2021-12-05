import useTodos from '../hooks/useTodos';
import TodoItem from './TodoItem';

const TodoList = () => {
    const { todos } = useTodos();
    return (
        <ul>
            {todos.map((item) => {
                return <TodoItem key={item.id} todo={item} />;
            })}
        </ul>
    );
};

export default TodoList;
