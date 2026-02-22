import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Product = {
    id: number;
    title: string;
    price: number;
    images: string[];
};

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.escuelajs.co/api/v1",
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], number | void>({
            query: (limit = 4) => `/products?offset=0&limit=${limit}`,
        }),
    }),
});

export const { useGetProductsQuery } = productsApi;
