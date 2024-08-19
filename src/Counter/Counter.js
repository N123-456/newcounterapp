import React, { useState } from 'react';
import './Counter.css';
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
const data = {
  USA: {
    California: ['Los Angeles', 'San Francisco'],
    Texas: ['Houston', 'Dallas'],
  },
  India: {
    Maharashtra: ['Mumbai', 'Pune'],
    Karnataka: ['Bangalore', 'Mysore'],
  },
};
const Counter = () => {
 



   
    
    const [count,setCount]=useState(0)
  return (
    <div className='counter'>
    <div className="heading"><h1>{count}</h1></div>
    <div className='btn-container'>
    <button className='btn' onClick={()=>setCount(count+1)}>Increment</button>
    <button className='btn' onClick={()=>setCount(count-1)} disabled={count==0}>Decrement</button>
    <button className='btn' onClick={()=>setCount(0)}>Reset</button>
    </div>
  </div>
  );
}

export default Counter;
