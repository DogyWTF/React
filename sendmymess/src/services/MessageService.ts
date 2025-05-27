import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMessages, IUserMessage } from "../types/types";

interface ICreateMessage {
  params: string;
  message: IUserMessage;
}

export const messageAPI = createApi({
  reducerPath: "messageAPI",
  tagTypes: ["Messages"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (build) => ({
    getUserMessage: build.query<IMessages, string>({
      query: (id: string) => ({
        url: `/messages/${id}`,
      }),
      providesTags: ["Messages"],
    }),
    createMessage: build.mutation<IMessages, ICreateMessage>({
      query: ({ params, message }) => ({
        url: `/api/messages/${params}/allMessages`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: message,
      }),
      invalidatesTags: ["Messages"],
    }),
  }),
});
