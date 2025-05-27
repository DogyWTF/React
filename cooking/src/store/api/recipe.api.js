import { api } from "./api";

export const recipeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createRecipes: builder.mutation({
      query: (recipe) => ({
        url: "/recipes",
        body: recipe,
        method: "POST",
      }),
      invalidatesTags: () => [{
        type: 'Recipe'
      }]
    }),
  }),
});

export const { useCreateRecipesMutation } = recipeApi