import { createContext, useContext, useEffect, useState } from "react";

const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [ counter, setCounter ] = useState(0);
  const [ doubleCounter, setDoubleCounter ] = useState(0);


  function HandleSumCounter() {
    setCounter(counter + 1);
  }

  function HandleSubCounter() {
    setCounter(counter - 1);
  }

  useEffect(() => {
    setDoubleCounter(counter * 2);
  }, [counter]);

  return(
    <CounterContext.Provider 
      value={{
        counter,
        doubleCounter,
        HandleSumCounter,
        HandleSubCounter,
      }}
    >
      {children}
    </CounterContext.Provider>
  )
}

export function useCounterContext() {
  const context = useContext(CounterContext);
  const { counter, doubleCounter, HandleSumCounter, HandleSubCounter } = context;

  return{ counter, doubleCounter, HandleSumCounter, HandleSubCounter};
}