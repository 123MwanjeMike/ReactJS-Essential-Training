import { useState } from 'react';
import './App.css';

function App() {
    const [ checked, setChecked ] = useState(false);

    // the use reducer
    function toggle() {
        setChecked(checked => !checked)
    }

    return (
        <>
        <input type="checkbox" value={checked} onChange={toggle} />
        <p>{checked ? "checked" : "not checked"}</p>
        </>
    );
}

export default App;
