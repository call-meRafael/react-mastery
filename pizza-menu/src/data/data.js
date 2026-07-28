const pizzas = [
  {
    name: "Focaccia",
    ingredients: "Pão italiano com azeite de oliva e alecrim",
    price: 18,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margarita",
    ingredients: "Tomate e muçarela",
    price: 12,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza de Funghi",
    ingredients: "Tomate, muçarela, cogumelos e cebola",
    price: 15,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza de Salame",
    ingredients: "Tomate, muçarela e peperoni",
    price: 17,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
    soldOutText: "Este sabor está esgotado no momento!",
  },
  {
    name: "Pizza de Presunto Parma",
    ingredients: "Tomate, muçarela, rúcula e queijo burrata",
    price: 20,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export { pizzas };
