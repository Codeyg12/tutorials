export const getRecpies = async () => {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();
  return data.recipes;
};
