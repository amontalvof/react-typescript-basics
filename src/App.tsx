import Counter from './components/Counter';
import User from './components/User';
import TimerParent from './components/TimerParent';

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
        </>
    );
}

export default App;
