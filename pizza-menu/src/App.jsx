import { pizzas } from "./data/data.js";

// 1. O componente menor fica no topo para o JavaScript conhecê-lo primeiro
const PizzaMenu = () => {
  return (
    <div>
      <h2>Pizza Menu</h2>
      <ul>
        {pizzas.map((pizza) => {
          return <li key={pizza.name}>{pizza.name}</li>;
        })}
      </ul>
    </div>
  );
};

// 2. O componente principal fica embaixo renderizando o de cima
function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <PizzaMenu />
    </div>
  );
}

export default App;
