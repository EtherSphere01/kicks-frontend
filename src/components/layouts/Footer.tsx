import React from "react";
import { Button } from "../ui/button";
import { Logo } from "@/svg/logo/logo";
import { CirclePlusIcon } from "@/svg/footer/CirclePlusIcon";
import Link from "next/link";
import {
    CategoryItems,
    CompanyItems,
    FollowUsItems,
} from "@/utils/FooterItems";

export default function Footer() {
    return (
        <div className="container mx-auto relative">
            <div className=" bg-[#4A69E2] rounded-[24px] md:rounded-[48px]">
                <div className="w-full p-4 md:px-18 md:pt-16 text-white lg:flex justify-between ">
                    <div>
                        <h1 className="text-[32px] md:text-[48px] font-semibold   md:max-w-127.5 leading-[130%] md:uppercase">
                            Join our KicksPlus Club & get 15% off
                        </h1>
                        <p className="mt-2 md:mt-3 text-[16px]  md:text-[20px] font-semibold font-open-sans text-[#E7E7E3]">
                            Sign up for free! Join the community.
                        </p>
                        <div className="mt-6 md:mt-8 flex items-center gap-1">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="h-10 md:h-12 px-4 py-2.5 md:py-3.5 border border-[#FFFFFF] rounded-[8px] w-full md:max-w-[342px] placeholder:font-open-sans "
                            />
                            <Button className="h-10 md:h-12">SUBMIT</Button>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="hidden md:flex md:mt-8 lg:mt-0">
                            <div className="mt-4">
                                <Logo width={351} height={88} color="white" />
                            </div>
                            <CirclePlusIcon />
                        </div>
                        <div className="flex md:hidden mt-8">
                            <div className="mt-3">
                                <Logo width={191} height={48} color="white" />
                            </div>
                            <CirclePlusIcon height={17} width={17} />
                        </div>
                    </div>
                </div>

                <div className="rounded-[24px] md:rounded-[48px] bg-[#232321] w-full p-4 py-6 md:p-10  mt-7 md:mt-9.75 overflow-hidden relative ">
                    <div className="lg:flex gap-30.5">
                        <div className="md:max-w-111.5">
                            <h1 className="text-[#FFA52F] font-semibold text-[24px] md:text-[36px]">
                                About us
                            </h1>
                            <p className="mt-1 text-[#E7E7E3] font-open-sans text-[16px] md:text-[20px] font-semibold">
                                We are the biggest hyperstore in the universe.
                                We got you all cover with our exclusive
                                collections and latest drops.
                            </p>
                        </div>
                        <div className="mt-10 lg:mt-0 md:flex justify-between w-full lg:gap-30px">
                            <div>
                                <h1 className="text-[#FFA52F] font-semibold text-[24px] md:text-[36px]">
                                    Categories
                                </h1>
                                <ul className=" text-[#E7E7E3] font-open-sans text-[16px] md:text-[20px] font-semibold flex flex-col mb-2 lg:mb-0">
                                    {CategoryItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="mt-2"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-6 md:mt-0">
                                <h1 className="text-[#FFA52F] font-semibold text-[24px] md:text-[36px]">
                                    Company
                                </h1>
                                <ul className=" text-[#E7E7E3] font-open-sans text-[16px] md:text-[20px] font-semibold flex flex-col mb-2 lg:mb-0">
                                    {CompanyItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="mt-2"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-6 md:mt-0 pb-[60px] md:pb-0">
                                <h1 className="text-[#FFA52F] font-semibold text-[24px] md:text-[36px]">
                                    Follow us
                                </h1>
                                <ul className="text-[#E7E7E3] font-open-sans text-[16px] md:text-[20px] font-semibold flex gap-5 mt-4">
                                    {FollowUsItems.map((item) => (
                                        <Link key={item.name} href={item.href}>
                                            <item.icon />
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pt-15 md:pt-37.5 lg:pt-55 2xl:pt-82.5">
                        <div className="absolute -bottom-5 md:-bottom-12 lg:-bottom-25 left-1/2 w-screen -translate-x-1/2 pointer-events-none container">
                            <Logo
                                fluid
                                className="w-[88%] md:w-[95%] h-auto mx-auto container"
                                color="#FFFFFF"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center font-open-sans text-[16px] font-normal text-[#232321] my-6.5">
                © All rights reserved
            </div>
        </div>
    );
}
