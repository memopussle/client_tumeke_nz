//create a method
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tumekenz.herokuapp.com",
  }),
  tagTypes: ["Tours"],
  endpoints: (builder) => ({
    getTours: builder.query({
      query: () => "/tours",
      providesTags: ["Tours"],
    }),
    addTours: builder.mutation({
      query: (tour) => ({
        url: "/tours",
        method: "POST",
        body: tour,
      }),
      invalidatesTags: ["Tours"],
    }),
    getATour: builder.query({
      query: (id) => `/tours/${id}`,
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/tours/${id}`,
        method: "DELETE",
       body:id
      }),
      invalidatesTags: ["Tours"],
    }),
  }),
});

//create a function called use + custom name
export const {
  useGetToursQuery,
  useAddToursMutation,
  useGetATourQuery,
  useDeletePostMutation
} = apiSlice;
