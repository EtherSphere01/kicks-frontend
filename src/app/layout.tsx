import type { Metadata } from "next";
import { Open_Sans, Rubik } from "next/font/google";
import "./globals.css";
import StoreProvider from "./storeProvider";
import Header from "@/components/layouts/Header";

const rubik = Rubik({
    variable: "--font-rubik",
    subsets: ["latin"],
});

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Kicks",
    description: "A sneaker marketplace built with Next.js and Redux Toolkit.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${rubik.variable} ${openSans.variable} antialiased bg-[#E7E7E3] px-4 md:px-0`}
            >
                <StoreProvider>
                    <Header />
                    {children}
                </StoreProvider>
            </body>
        </html>
    );
}
