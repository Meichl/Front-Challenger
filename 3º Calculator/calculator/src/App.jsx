import { useState } from 'react'
import './App.css'

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const opers = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    if (
      opers.includes(value) && calc === '' ||
      opers.includes(value) && opers.includes (calc.slice(-1))
    ) {
      return;
    }
    setCalc(calc + value);

    if(!opers.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }

  const createDigits = () => {
    const digits = [];

    for (let i =1; i < 10; i++){
      digits.push(
        <button 
        onClick={() => updateCalc(i.toString())}
         key = {i}>{i} 
        </button>
      )
    }
    return digits;
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const del = () => {
    if (calc == '') {
      return;
    }
    const value = calc.slice(0,-1);

    setCalc(value)
  }

  return (
      <div className="App">
        <div className="calculator">
          <div className="display">
              {result ? <span>({result})</span> : ''} &nbsp;
              {calc || "0"}
          </div>

          <div className="operators">
              <button onClick={() => updateCalc('/')}>/</button>
              <button onClick={() => updateCalc('*')}>*</button>
              <button onClick={() => updateCalc('+')}>+</button>
              <button onClick={() => updateCalc('-')}>-</button>

              <button onClick={del}>Del</button>
          </div>

          <div className="digits">
            { createDigits() }
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>
            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
  )
}

export default App
