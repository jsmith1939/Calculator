// Code Reference Digital Solution Master

import React, {useState}from 'react'
import './App.css';

function App() {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }

    const clear = () => {
        setResult("")
    }

    const backspace = () => {
        setResult(result.slice(0, result.length - 1))
    }

    const evaluate = () => {
        try {
            setResult(eval(result).toString())
        } catch(err) {
            setResult("Error")
        }
    }
    
    return (
        <div className="calculator">

            <div className="keypad">
                <form className="output">
                    <input type="text" value={result} />
                </form>
                <button className="span-two" onClick={clear} id="clear">AC</button>
                <button className="delete" onClick={backspace} id="backspace">DEL</button>
                <button name="/" className="operations" onClick={handleClick}>&divide;</button>
                <button name="7" className="number" onClick={handleClick}>7</button>
                <button name="8" className="number" onClick={handleClick}>8</button>
                <button name="9" className="number" onClick={handleClick}>9</button>
                <button name="*" className="operations" onClick={handleClick}>*</button>
                <button name="4" className="number" onClick={handleClick}>4</button>
                <button name="5" className="number" onClick={handleClick}>5</button>
                <button name="6" className="number" onClick={handleClick}>6</button>
                <button name="-" className="operations" onClick={handleClick}>-</button>
                <button name="1" className="number" onClick={handleClick}>1</button>
                <button name="2" className="number" onClick={handleClick}>2</button>
                <button name="3" className="number" onClick={handleClick}>3</button>
                <button name="+" className="operations" onClick={handleClick}>+</button>
                <button name="." className="number" onClick={handleClick}>.</button>
                <button name="0" className="number" onClick={handleClick}>0</button>
                <button name="=" className="equals" onClick={evaluate}>=</button>
            </div>
        </div>
    )
}

export default App
