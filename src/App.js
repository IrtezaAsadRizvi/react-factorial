import React, { useState } from 'react';
import './App.css';

function App() {
    const [number, setNumber] = useState("");

    const calculateFactorial = (num) => {
        var rval=1;
        for (var i = 2; i <= num; i++)
            rval = rval * i;
        return rval;
    };

    const calculateAndDisplayFactorial = () => {
        document.getElementById('result').innerHTML =  calculateFactorial(number);
    };

    return (
        <div>
            <h1>Factorial Calculator</h1>
            <form>
                <input type="number"
                       value={number}
                       onChange={e => setNumber(e.target.value)}
                       placeholder="Enter a number..." />
                <br />
                <button type={"button"} onClick={calculateAndDisplayFactorial}>Calculate Factorial</button>
            </form>
            <h2>Factorial: <span id={"result"}/></h2>
        </div>
    );
}

export default App;
