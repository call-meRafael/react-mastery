const pizzas = [
  {
    name: "Focaccia",
    ingredients: "Pão italiano com azeite de oliva e alecrim",
    price: 18,
    photoName: "src/assets/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margarita",
    ingredients: "Tomate e muçarela",
    price: 12,
    photoName: "src/assets/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza de Funghi",
    ingredients: "Tomate, muçarela, cogumelos e cebola",
    price: 15,
    photoName: "src/assets/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza de Salame",
    ingredients: "Tomate, muçarela e peperoni",
    price: 17,
    photoName: "src/assets/salamino.jpg",
    soldOut: true,
    soldOutText: "Este sabor está esgotado no momento!",
  },
  {
    name: "Pizza de Presunto Parma",
    ingredients: "Tomate, muçarela, rúcula e queijo burrata",
    price: 20,
    photoName: "src/assets/prosciutto.jpg",
    soldOut: false,
  },
  {
    name: "Pizza de Espinafre",
    ingredients: "Espinafre fresco, queijo, muçarela e molho de tomate",
    price: 25,
    photoName: "src/assets/spinaci.jpg",
    soldOut: false,
  }
];

export { pizzas };
