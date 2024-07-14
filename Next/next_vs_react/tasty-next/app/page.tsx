import BadgeFilter from "@/components/ui/badge-filter";
import RecipeList from "@/components/ui/recipe-list";
import { getRecpies } from "@/lib/recipe";

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
