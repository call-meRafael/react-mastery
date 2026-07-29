import { pizzas } from "./data/data.js";

// 1. O componente menor fica no topo para o JavaScript conhecê-lo primeiro
const PizzaMenu = () => {
  return (
    <div>
      <h2>Pizza Menu</h2>
      <div>
        {pizzas.map((pizza) => {
          return (
            <div key={pizza.name}>
              <h3>{pizza.name}</h3>
              <img src={pizza.photoName} alt={pizza.name} />
              <p>{pizza.ingredients}</p>
              <p>Price: ${pizza.price}</p>
              {pizza.soldOut ? (
                <p>{pizza.soldOutText}</p>
              ) : (
                <button>Buy</button>
              )}
            </div>
          );
        })}
      </div>
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
