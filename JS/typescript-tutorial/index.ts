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

let pizzaItemId = 1;
let cashInRegister = 100;
const orderQueue: Order[] = [];
let orderId = 1;

const menu: Array<Pizza> = [
  { id: pizzaItemId++, name: "Margherita", price: 8 },
  { id: pizzaItemId++, name: "Pepperoni", price: 10 },
  { id: pizzaItemId++, name: "Cheese", price: 7 },
  { id: pizzaItemId++, name: "Veggie", price: 8 },
];

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
  const newPizza: Pizza = {
    id: pizzaItemId++,
    ...pizzaObj,
  };
  menu.push(newPizza);
  return newPizza;
}

function placeOrder(pizzaName: string): Order | undefined {
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

function completeOrder(orderId: number): Order | undefined {
  const order = orderQueue.find((pizza) => pizza.id === orderId);
  if (!order) return;
  order.status = "completed";
  return order;
}

function getPizzaDetail(identifier: string | number): Pizza | undefined {
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

addNewPizza({ name: "Chicken Bacon Ranch", price: 20 });
