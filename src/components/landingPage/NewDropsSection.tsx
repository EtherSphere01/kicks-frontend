import React from "react";
import { Button } from "../ui/button";
import ProductList from "../common/products/ProductList";
import { productsApi } from "@/redux/api/productsApi";
import { store } from "@/redux/store";

export default async function NewDropsSection() {
    const serverStore = store();

    serverStore.dispatch(productsApi.endpoints.getProducts.initiate(4));
    await Promise.all(
        serverStore.dispatch(productsApi.util.getRunningQueriesThunk()),
    );

    const prefetchedProducts =
        productsApi.endpoints.getProducts.select(4)(serverStore.getState())
            .data ?? [];

    return (
        <div className="container mx-auto mt-6 md:mt-22.5">
            <div className="flex items-center md:items-end justify-between">
                <h1 className="md:uppercase w-50.5 md:w-120 lg:w-147.25 text-[24px] md:text-[54px] lg:text-[74px] font-semibold leading-[100%] md:leading-[95%]">
                    Don&apos;t miss out new drops
                </h1>
                <Button
                    variant={"secondary"}
                    className="h-10 w-39.25 md:h-12 md:w-47.25"
                >
                    SHOP NEW DROPS
                </Button>
            </div>
            <div className="mt-6 md:mt-8">
                <ProductList initialProducts={prefetchedProducts.slice(0, 4)} />
            </div>
        </div>
    );
}
