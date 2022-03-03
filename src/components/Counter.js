import React from "react";
import { useCounterContext } from "../context/CounterContext";


export function Counter() {
  const { counter, HandleSumCounter, HandleSubCounter } = useCounterContext();

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={HandleSumCounter}>Aumentar valor</button> 
      <button onClick={HandleSubCounter}>Diminuir valor</button>
    </>
  )
}