import Counter from './components/Counter';
import User from './components/User';
import TimerParent from './components/TimerParent';
import CounterReducer from './components/CounterReducer';

function App() {
    return (
        <>
            <h1>React + TypeScript</h1>
            <hr />
            <h2>useState</h2>
            <Counter />
            <User />
            <hr />
            <h2>useEffect</h2>
            <TimerParent />
            <hr />
            <h2>useReducer</h2>
            <CounterReducer />
        </>
    );
}

export default App;
