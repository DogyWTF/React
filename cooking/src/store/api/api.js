import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:4200";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Recipe"],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: (searchTerm) => ({
        url: "/recipes",
        params: {
          _sort: "id",
          _order: "desc",
          q: searchTerm,
        },
      }),
      providesTags: (result, error, searchTerm) => [
        {
          type: "Recipe",
          id: searchTerm,
        },
      ],
    }),
  }),
});
