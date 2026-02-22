"use client";
import { useMemo } from "react";
import { Provider } from "react-redux";
import { store, type RootState } from "../redux/store";

export default function StoreProvider({
    children,
    preloadedState,
}: {
    children: React.ReactNode;
    preloadedState?: Partial<RootState>;
}) {
    const appStore = useMemo(() => store(preloadedState), [preloadedState]);

    return <Provider store={appStore}>{children}</Provider>;
}
