import { pizzas } from "./data/data.js";
import "./styles/index.css";

const formatPrice = (price) => {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
};

const timeToOpen = () => {
  const now = new Date().getHours();
  const openHour = 17;
  const closeHour = 23;

  if (now >= openHour && now <= closeHour) {
    return "Já estamos funcionando!";
  }
  

  return `No momento estamos fechados! Horário de funcionamento é de ${openHour}h até ${closeHour}h.`;
}


const PizzaMenu = () => {
  return (
    <main className="menu">
      <h2>Nossas massas</h2>

      <ul className="pizzas">
        {pizzas.map((pizza) => {
          return (
            /* Lógica condicional: adiciona "sold-out" se a pizza estiver esgotada */
            <li
              className={`pizza ${pizza.soldOut ? "sold-out" : ""} pizza-box`}
              key={pizza.name}
            >
              <img src={pizza.photoName} alt={pizza.name} />

              
              <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>

                
                <span>Preço: {formatPrice(pizza.price)}</span>

                {pizza.soldOut ? (
                  <span>{pizza.soldOutText}</span>
                ) : (
                  <button className="btn">Pedir</button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};


// Componente responsável pelo cabeçalho da página, exibindo o título da aplicação.
const MainHeader = () => {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  ); 

}

// Componente responsável pelo rodapé da página, exibindo o horário de funcionamento.
const MainFooter = () => {
  return (
    <footer className="footer">{timeToOpen()}</footer>
  );
}

// 2. O componente principal fica embaixo renderizando o de cima
function App() {
  return (
    <div className="container">
      <MainHeader />
      <PizzaMenu />
      <MainFooter />
    </div>
  );
}

export default App;
