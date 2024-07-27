type Pizza = {
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

const menu: Array<Pizza> = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Cheese", price: 7 },
  { name: "Veggie", price: 8 },
];

let cashInRegister = 100;
let orderId = 1;
const orderQueue: Order[] = [];

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
  const newOrder: Order = {
    id: orderId++,
    pizza: orderedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number) {
  const order = orderQueue.find((pizza) => pizza.id === orderId);
  if (!order) return;
  order.status = "completed";
  return order;
}

// addNewPizza("Meat Lovers", 10);

placeOrder("Cheese");
completeOrder(1);
