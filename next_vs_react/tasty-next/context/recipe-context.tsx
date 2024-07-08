"use client";

import { createContext, useReducer } from "react";

type State = {
  selectedCuisine?: string;
};

const initialState: State = {
  selectedCuisine: "",
};

type ActionType = {
  type: string;
  payload: any;
};

const recipeReducer = (state = initialState, { type, payload }: ActionType) => {
  switch (type) {
    case "SELECTED_CUISINE":
      return { ...state, selectedCuisine: payload.selectedCuisine };

    default:
      return state;
  }
};

export const RecipeContext = createContext(initialState);

export default function RecipeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(recipeReducer, initialState);
  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
}
