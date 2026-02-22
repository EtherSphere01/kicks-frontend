"use client";

import React, { useEffect, useMemo } from "react";
import ProductCard from "./ProductCard";
import { Product, useGetProductsQuery } from "@/redux/api/productsApi";
import {
    selectFallbackProducts,
    setFallbackProducts,
} from "@/redux/slices/productsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

function ProductCardSkeleton() {
    return (
        <div className="h-full flex flex-col">
            <div>
                <div className="min-w-42.75 md:min-w-79.5 rounded-3xl md:rounded-[28px] bg-white p-2 relative">
                    <div className="min-w-38.75 min-h-41 md:min-w-75.5 md:min-h-83.5 rounded-2xl md:rounded-[24px] animate-pulse bg-gray-200" />
                </div>
                <div className="min-w-42.75 md:min-w-79.5 mt-2">
                    <div className="h-5 md:h-7 animate-pulse bg-gray-200 rounded" />
                </div>
            </div>
            <div className="text-[12px] font-medium md:text-[14px] h-10 md:h-12 w-full mt-auto animate-pulse bg-gray-200 rounded-md" />
        </div>
    );
}

type ProductListProps = {
    initialProducts?: Product[];
};

export default function ProductList({
    initialProducts = [],
}: ProductListProps) {
    const dispatch = useAppDispatch();
    const fallbackProducts = useAppSelector(selectFallbackProducts);
    const { data, isLoading, isFetching } = useGetProductsQuery(4);
    const normalizedInitialProducts = useMemo(
        () => initialProducts.slice(0, 4),
        [initialProducts],
    );

    useEffect(() => {
        if (normalizedInitialProducts.length > 0) {
            dispatch(setFallbackProducts(normalizedInitialProducts));
        }
    }, [dispatch, normalizedInitialProducts]);

    if ((isLoading || (isFetching && !data)) && fallbackProducts.length === 0) {
        return (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
                {Array.from({ length: 4 }).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                ))}
            </div>
        );
    }

    const products = (data && data.length > 0 ? data : fallbackProducts).slice(
        0,
        4,
    );

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.images?.[0] || "/images/HeroImage3.jpg"}
                />
            ))}
        </div>
    );
}
