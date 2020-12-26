import './App.css';
import {useState} from "react";

function App() {
    const [emotion, setEmotion] = useState('happy');
    return (
        <>
        <h1>Hello</h1>
        <p>Current emotion is {emotion}</p>
        <button onClick={() => setEmotion('happy')}>
            Happy
        </button>
        <button onClick={() => setEmotion('frustrated')}>
            Frustrate
        </button>
        <button onClick={() => setEmotion('enthusiastic')}>
            Enthuse
        </button>
        </>
    );
}

export default App;
