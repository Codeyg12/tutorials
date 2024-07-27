type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

const menu: Array<Pizza> = [
  { id: 1, name: "Margherita", price: 8 },
  { id: 2, name: "Pepperoni", price: 10 },
  { id: 3, name: "Cheese", price: 7 },
  { id: 4, name: "Veggie", price: 8 },
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

function getPizzaDetail(identifier: string | number) {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else {
    return menu.find((pizza) => pizza.id === identifier);
  }
}

// addNewPizza("Meat Lovers", 10);

placeOrder("Cheese");
completeOrder(1);
