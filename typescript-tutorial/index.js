const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Cheese", price: 7 },
  { name: "Veggie", price: 8 },
];

let cashInRegister = 100;
let orderId = 1;
const orderQueue = [];

function addNewPizza(newPizza) {
  menu.push(newPizza);
}

function placeOrder(pizzaName) {
  const orderedPizza = menu.find((pizza) => pizza.name === pizzaName);

  cashInRegister += orderedPizza.price;
  const newOrder = { pizza: orderedPizza, status: "ordered", id: orderId };
  orderId++;
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId) {
  const finishedPizza = orderQueue.find((pizza) => pizza.id === orderId);
  console.log(finishedPizza);
  //   finishedPizza.status = "completed";
  return finishedPizza;
}

placeOrder("Cheese");
completeOrder(1);
