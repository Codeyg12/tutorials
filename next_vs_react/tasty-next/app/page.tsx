import BadgeFilter from "@/components/ui/badge-filter";
import RecipeList from "@/components/ui/recipe-list";

const getRecpies = async () => {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();
  return data.recipes;
};
export default async function HomePage() {
  const recipes = await getRecpies();

  return (
    <div className="xl:px-24 px-10">
      <div className="my-12">
        <BadgeFilter />

        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
}
