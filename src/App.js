import { Counter } from "./components/Counter";
import { DoubleCounter } from "./components/DoubleCounter";
import { CounterProvider} from "./context/CounterContext";


function App() {

  return (
    <CounterProvider>
      <Counter />
      <DoubleCounter />
    </CounterProvider>
  );
}

export default App;
