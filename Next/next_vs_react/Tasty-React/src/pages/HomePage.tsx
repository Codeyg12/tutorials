import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RecipeType } from "@/types";
import React, { useEffect, useState } from "react";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [filterRecipes, setFilterRecipes] = useState([]);
  const [badge, setBadge] = useState("");

  const getAllRecipes = async () => {
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
    return data.recipes;
  };

  useEffect(() => {
    const getRecpies = async () => {
      const recipes = await getAllRecipes();
      if (recipes) {
        setRecipes(recipes);
      }
    };
    getRecpies();
  }, []);

  useEffect(() => {
    const getFilteredRecipes = async () => {
      const recipes = await getAllRecipes();
      const filteredRecipesByCuisine = recipes.filter(
        (recipe: RecipeType) => recipe.cuisine === badge
      );
      setFilterRecipes(filteredRecipesByCuisine);
    };
    if (badge) {
      getFilteredRecipes();
    }
  }, [badge]);

  const handleClick = (e: React.MouseEvent, cuisine: string) => {
    e.preventDefault();
    setBadge(cuisine);
  };

  const cuisines: Array<string> = [
    "All",
    "Asian",
    "American",
    "Greek",
    "Italian",
    "Indian",
    "Japanese",
    "Mediterranean",
    "Mexican",
    "Pakistani",
  ];
  return (
    <div className="xl:px-24 px-10">
      <div className="my-12">
        {cuisines.map((cuisine, idx) => (
          <Badge
            key={`${cuisine}-${idx}`}
            variant={"outline"}
            className="border-orange-800 text-gray-900 text-lg mx-2 my-1 hover:cursor-pointer bg-orange-50 hover:scale-110 ease-in duration-200"
            onClick={(e) => handleClick(e, cuisine)}
          >
            {cuisine}
          </Badge>
        ))}

        <div className="grid grid-cols- md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-x-10 gap-y-20 xl:gap-y-32 xl:pt-32 pt-12 pb-40">
          {(filterRecipes.length > 0 ? filterRecipes : recipes).map(
            (recipe: RecipeType, idx: number) => (
              <a href={`/recipes/${recipe.id}`}>
                <Card
                  key={`${recipe.name}-${idx}`}
                  className="flex flex-col bg-orange-50 hover:scale-105 ease-in duration-200 xl:min-h-[600px] fancyGradient"
                >
                  <CardHeader>
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      width={500}
                      height={500}
                      className="bg-cover rounded-md shadow-xl"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="uppercase lg:text-3xl relative font-bold line-clamp-2">
                      {recipe.name}
                    </CardTitle>
                  </CardContent>
                  <CardFooter className="flex items-start gap-2 lg:gap-12 lg:flex-row flex-col">
                    <div className="flex flex-col">
                      <p className="text-lg">Serves</p>
                      <p className="text-gray-800">{recipe.servings}</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg">Serves</p>
                      <p className="text-gray-800">
                        {recipe.prepTimeMinutes} MIN
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg">Cook Time</p>
                      <p className="text-gray-800">
                        {recipe.cookTimeMinutes} MIN
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
}
