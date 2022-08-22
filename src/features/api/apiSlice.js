//create a method
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tumekenz.herokuapp.com",
  }),
  endpoints: (builder) => ({
    getTours: builder.query({
      query: () => "/tours",
    }),
  }),
});

//create a function called use + custom name 
export const { useGetToursQuery, useAddNewPostMutation } = apiSlice;
