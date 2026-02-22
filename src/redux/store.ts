import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import productsReducer from "./slices/productsSlice";

const rootReducer = combineReducers({
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = (preloadedState?: Partial<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(productsApi.middleware),
        preloadedState,
    });
};

export const store = setupStore;

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
