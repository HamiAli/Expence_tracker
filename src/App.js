import "./App.css";
import Child from "./Child";
import { TransactionProvider } from "./transiction-conyext";

function App() {
  return (
    <TransactionProvider>
      <Child />
    </TransactionProvider>
  );
}

export default App;
