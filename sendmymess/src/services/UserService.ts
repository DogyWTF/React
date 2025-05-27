import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../types/types";

export const userAPI = createApi({
  reducerPath: "userAPI",
  tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUser[], number>({
      query: (limit: number = 20) => ({
        url: "/users",
        params: {
          _limit: limit,
        },
      }),
      providesTags: () => ["Users"],
    }),
    getUser: build.query<IUser, number>({
      query: (id: number) => ({
        url: `/users/${id}`,
      }),
      providesTags: () => ["Users"],
    }),
  }),
});
