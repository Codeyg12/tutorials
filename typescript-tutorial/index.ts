type Pizza = {
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: string;
};

const menu: Array<Pizza> = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Cheese", price: 7 },
  { name: "Veggie", price: 8 },
];

let cashInRegister = 100;
let orderId = 1;
const orderQueue: Array<Order> = [];

function addNewPizza(newPizza: Pizza) {
  menu.push(newPizza);
}

function placeOrder(pizzaName: string) {
  const orderedPizza = menu.find((pizza) => pizza.name === pizzaName);
  if (!orderedPizza) {
    console.error(`${pizzaName} does not exist in the menu`);
    return;
  }
  cashInRegister += orderedPizza.price;
  const newOrder = { pizza: orderedPizza, status: "ordered", id: orderId++ };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number) {
  const finishedPizza = orderQueue.find((pizza) => pizza.id === orderId);
  finishedPizza.status = "completed";
  return finishedPizza;
}

addNewPizza("Meat Lovers", 10);

placeOrder("Cheese");
completeOrder(1);
