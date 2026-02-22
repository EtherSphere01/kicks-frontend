import Image from "next/image";
import { Button } from "../ui/button";

export default function HeroSection() {
    return (
        <div className="container mx-auto my-6">
            <h1 className="uppercase text-[60px] md:text-[80px] lg:text-[200px] 2xl:text-[223.5px] text-center font-bold text-[#232321]">
                do it <span className="text-[#4A69E2]">right</span>
            </h1>
            <div className="relative w-full aspect-4/5 lg:aspect-1320/750 rounded-[24px] lg:rounded-[64px] overflow-hidden">
                <Image
                    src="/images/HeroImage.jpg"
                    alt="Hero Image"
                    fill
                    sizes="(min-width: 1024px) 1320px, 100vw"
                    className="object-cover object-center"
                />

                <div className="absolute left-0 top-5.75 md:top-20 z-10 [writing-mode:vertical-rl] rotate-180">
                    <div className="bg-[#232321] text-white font-semibold p-2 md:p-4 rounded-l-lg md:rounded-l-2xl text-xs md:text-base whitespace-nowrap [word-spacing:4px]">
                        Nike product of the year
                    </div>
                </div>

                <div className="absolute right-3 bottom-4 flex flex-col gap-2.5 md:right-8 md:bottom-8 lg:bottom-12 md:gap-4 z-10">
                    <div className="w-16 h-16 md:w-40 md:h-40 rounded-lg md:rounded-4xl border border-[#E7E7E3] md:border-[3px] overflow-hidden">
                        <Image
                            src="/images/HeroImage3.jpg"
                            alt="Hero thumbnail 1"
                            width={160}
                            height={160}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-16 h-16 md:w-40 md:h-40 rounded-lg md:rounded-4xl border border-[#E7E7E3] md:border-[3px] overflow-hidden">
                        <Image
                            src="/images/HeroImage2.jpg"
                            alt="Hero thumbnail 2"
                            width={160}
                            height={160}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 md:h-56 bg-linear-to-t from-black/80 to-transparent" />

                <div className="absolute left-4 bottom-4 lg:left-12 lg:bottom-12 md:left-8 md:bottom-8">
                    <div className="w-52 md:w-100 lg:w-122.5">
                        <h3 className="text-[24px] md:text-[58px] lg:text-[74px] font-semibold text-white leading-tight">
                            NIKE AIR MAX
                        </h3>
                        <p className="md:w-90 lg:w-100 font-open-sans font-semibold text-[14px] md:text-[18px] lg:text-[20px] text-[#E7E7E3]">
                            Nike introducing the new air max for everyone&apos;s
                            comfort
                        </p>
                        <Button
                            className="mt-4 lg:mt-6 text-[14px] font-medium h-8 md:h-10 lg:h-12 w-28 lg:w-34.5"
                            variant="secondary"
                        >
                            SHOP NOW
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
