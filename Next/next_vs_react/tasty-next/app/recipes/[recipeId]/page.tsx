import { getRecpies } from "@/lib/recipe";
import { RecipeType } from "@/types/RecipeType";
import Link from "next/link";
import React from "react";

export async function generateStaticParams() {
  const recipes = await getRecpies();

  return recipes.map((recipe: RecipeType) => ({
    recipeId: recipe.id.toString(),
  }));
}

export default async function Page({
  params,
}: {
  params: { recipeId: string };
}) {
  const { recipeId } = params;

  const res = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
  const recipe = await res.json();

  if (!recipe) {
    return <h1>No recipe found!</h1>;
  }

  return (
    <div className="xl:px-48 px-10 pb-12 fancyGradient">
      <div className="grid xl:grid-cols-2 pb-10 xl:pb-20">
        <div className="pt-12 xl:px-12">
          <Link className="text-2xl" href={'/'}>
            <p>&larr; Back to all recipes</p>
          </Link>
          <h1 className="text-4xl lg:text-6xl my-8 uppercase">{recipe.name}</h1>
          <div className="grid grid-cols-3 gap-12">
            <div className="flex flex-col">
              <p className="text-xl lg:text-3xl uppercase">Serves</p>
              <p className="text-gray-800 text-2xl lg:text-3xl font-bold">
                {recipe.servings}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-xl lg:text-3xl uppercase">Prep Time</p>
              <p className="text-gray-800 text-2xl lg:text-3xl font-bold">
                {recipe.prepTimeMinutes} MIN
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-xl lg:text-3xl uppercase">Cook Time</p>
              <p className="text-gray-800 text-2xl lg:text-3xl font-bold">
                {recipe.cookTimeMinutes} MIN
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-xl lg:text-3xl uppercase">Cuisine</p>
              <p className="text-gray-800 text-2xl lg:text-3xl font-bold">
                {recipe.cuisine}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-xl lg:text-3xl uppercase">Difficulty</p>
              <p className="text-gray-800 text-2xl lg:text-3xl font-bold">
                {recipe.difficulty}
              </p>
            </div>
          </div>
        </div>
        <div className="py-4 mx-auto">
          <img
            src={recipe.image}
            width={400}
            height={400}
            className="w-96 h-96 lg:h-[600px] lg:w-[600px]"
          />
        </div>
      </div>
      <div className="grid xl:grid-cols-2">
        <div className="xl:px-12">
          <h2 className="uppercase text-5xl my-12">Ingredients</h2>
          <div className="flex flex-col divide-y divide-orange-800">
            {recipe.ingredients.map((ingredient: string, idx: number) => (
              <div className="py-2" key={`${ingredient}-${idx}`}>
                <p className="text-2xl">{ingredient}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="xl:px-12">
          <h2 className="uppercase text-5xl my-12">Instructions</h2>
          <div className="flex flex-col">
            {recipe.instructions.map((instuction: string, idx: number) => (
              <ul className="py-2 list-disc" key={`${instuction}-${idx}`}>
                <li className="text-2xl">{instuction}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
