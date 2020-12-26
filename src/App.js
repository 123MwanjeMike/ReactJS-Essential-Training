import './App.css';
import {useState, useEffect } from "react";

function App() {
    const [emotion, setEmotion] = useState('happy');
    const [secondary, setSecondary ] = useState('tired');
    
    useEffect(() => {
        console.log(`It's ${emotion} around here`)
    }, [emotion]);
    useEffect(() => {
        console.log(`It's ${secondary} around here`)
    }, [secondary]);

    return (
        <>
        <h1>Hello</h1>
        <p>Current emotion is {emotion} and {secondary}</p>
        <button onClick={() => setEmotion('happy')}>
        Make Happy
        </button>
        <button onClick={() => setSecondary('crabby')}>
            Make Crabby
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
