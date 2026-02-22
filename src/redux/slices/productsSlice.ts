import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../api/productsApi";
import type { RootState } from "../store";

type ProductsState = {
    fallbackProducts: Product[];
};

const initialState: ProductsState = {
    fallbackProducts: [],
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setFallbackProducts: (state, action: PayloadAction<Product[]>) => {
            state.fallbackProducts = action.payload.slice(0, 4);
        },
        clearFallbackProducts: (state) => {
            state.fallbackProducts = [];
        },
    },
});

export const { setFallbackProducts, clearFallbackProducts } =
    productsSlice.actions;
export const selectFallbackProducts = (state: RootState) =>
    state.products.fallbackProducts;

export default productsSlice.reducer;
