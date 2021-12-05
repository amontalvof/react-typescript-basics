import TodoList from './components/TodoList';
import TodoTitle from './components/TodoTitle';
import TodoProvider from './context/TodoProvider';

const Todo = () => {
    return (
        <TodoProvider>
            <TodoTitle />
            <TodoList />
        </TodoProvider>
    );
};

export default Todo;
