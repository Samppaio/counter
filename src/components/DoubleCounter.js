import React from "react";
import { useCounterContext } from "../context/CounterContext";


export function DoubleCounter() {
  const { doubleCounter } = useCounterContext();

  return <h1>Ao dobro: {doubleCounter}</h1>
}