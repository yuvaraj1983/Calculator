import { getByDisplayValue } from '@testing-library/react'
import React, { useState } from 'react'
import Buttons from "./Components/Buttons";
import math from 'mathjs'


const Calculator = () => {
    const [input,setInput] = useState('');
    const [result,setResult] = useState('');

    const handleClick = (e) => {
        setInput((prevValue)=>prevValue + e.target.value)
    }

    const handleResult = () => {
      if(!input){
        setResult("Error");
        return;
      }
       
      const expressionResult = eval(input);
        setResult(expressionResult);
      }

      const handleClear = () => {
        setInput('');
      }
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:"center", alignItems:'center'}}>
        <h1>React Calculator</h1>
        <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
        <div>{result}</div>
        <div  style={{width:"250px", display:'flex', justifyContent:"center", flexWrap:'wrap'}}>
        <Buttons label="7" handleClick={handleClick} />
        <Buttons label="8" handleClick={handleClick} />
        <Buttons label="9" handleClick={handleClick} />
        <Buttons label="+" handleClick={handleClick} />
        <Buttons label="4" handleClick={handleClick} />
        <Buttons label="5" handleClick={handleClick} />
        <Buttons label="6" handleClick={handleClick} />
        <Buttons label="-" handleClick={handleClick} />
        <Buttons label="1" handleClick={handleClick} />
        <Buttons label="2" handleClick={handleClick} />
        <Buttons label="3" handleClick={handleClick} />
        <Buttons label="*" handleClick={handleClick} />
        <Buttons label="C" handleClick={handleClear} />
        <Buttons label="0" handleClick={handleClick} />
        <Buttons label="=" handleClick={handleResult} />
        <Buttons label="/" handleClick={handleClick} />
        </div>
    </div>
  )
}

export default Calculator