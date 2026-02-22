import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type ProductCardProps = {
    title: string;
    price: number;
    image: string;
};

export default function ProductCard({ title, price, image }: ProductCardProps) {
    return (
        <div className="h-full flex flex-col">
            <div className="flex-1">
                <div className="min-w-42.75 md:min-w-79.5 rounded-3xl md:rounded-[28px] bg-white p-2 relative">
                    <div className="min-w-38.75 min-h-41 md:min-w-75.5 md:min-h-83.5 relative">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            sizes="(min-width: 1024px) 302px, 50vw"
                            loading="lazy"
                            unoptimized
                            className="object-cover rounded-2xl md:rounded-[24px]"
                        />
                    </div>
                    <div className="bg-[#4A69E2] w-10.5 h-5.5 md:w-14.5 md:h-9.5 text-[12px] text-white font-semibold flex items-center justify-center rounded-tl-2xl rounded-br-2xl md:rounded-tl-[24px] md:rounded-br-[24px] absolute top-2 left-2">
                        <h5>New</h5>
                    </div>
                </div>
                <div className="min-w-42.75 md:min-w-79.5">
                    <h1 className="text-[16px] md:text-[24px] font-semibold">
                        {title}
                    </h1>
                </div>
            </div>

            <Button className="text-[12px] font-medium md:text-[14px] h-10 md:h-12 w-full mt-auto">
                VIEW PRODUCT - <span className="text-[#FFA52F]">${price}</span>
            </Button>
        </div>
    );
}
