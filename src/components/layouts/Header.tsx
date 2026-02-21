"use client";
import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { MenuIcon, Plus } from "lucide-react";

import { TriangleIcon } from "@/svg/header/TriangleIcon";
import { Logo } from "@/svg/logo/logo";
import { SearchIcon } from "@/svg/header/SearchIcon";
import { UserIcon } from "@/svg/header/UserIcon";
import {
    headerNavItems,
    type HeaderNavItem,
    type HeaderNavSubSection,
} from "@/utils/navItems";
import { useClickOutside } from "@/utils/useClickOutside";

function CartBadge({ count = 0 }: { count?: number }) {
    const isTenOrMore = count >= 10;

    const display = useMemo(() => {
        if (count <= 0) return "0";
        if (isTenOrMore) return "10";
        return String(count);
    }, [count, isTenOrMore]);

    return (
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#FFA52F] text-[#232321] font-semibold font-open-sans text-[16px]">
            <div className="flex items-center leading-none">
                <span>{display}</span>
                {isTenOrMore ? <Plus className="w-3 h-3" /> : null}
            </div>
        </div>
    );
}

function DesktopNav({
    navItems,
    openSubmenuHref,
    onToggleSubmenu,
    onNavigate,
}: {
    navItems: HeaderNavItem[];
    openSubmenuHref: string | null;
    onToggleSubmenu: (href: string) => void;
    onNavigate: () => void;
}) {
    return (
        <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
                const hasSubSections = Boolean(item.subSections?.length);
                const isOpen = openSubmenuHref === item.href;

                if (!hasSubSections) {
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-4 font-semibold text-[#232321] hover:text-[#0e0e0c] transition-colors duration-200"
                        >
                            {item.name}
                        </Link>
                    );
                }

                return (
                    <div key={item.href} className="relative">
                        <button
                            type="button"
                            aria-label={
                                isOpen
                                    ? `Collapse ${item.name}`
                                    : `Expand ${item.name}`
                            }
                            aria-expanded={isOpen}
                            onClick={() => onToggleSubmenu(item.href)}
                            className="text-4 font-semibold text-[#232321] hover:text-[#0e0e0c] transition-colors duration-200"
                        >
                            <div className="flex items-center gap-1.5">
                                {item.name}
                                <div
                                    className={`transition-transform duration-200 ${
                                        isOpen ? "rotate-180" : "rotate-0"
                                    }`}
                                >
                                    <TriangleIcon />
                                </div>
                            </div>
                        </button>

                        {isOpen ? (
                            <div className="absolute left-0 top-full mt-2 w-48 rounded-2xl border border-border bg-[#FAFAFA] p-3">
                                <div className="flex flex-col gap-2">
                                    {item.subSections!.map(
                                        (sub: HeaderNavSubSection) => (
                                            <Link
                                                key={sub.href}
                                                href={sub.href}
                                                onClick={onNavigate}
                                                className="text-sm font-medium text-[#232321]"
                                            >
                                                {sub.name}
                                            </Link>
                                        ),
                                    )}
                                </div>
                            </div>
                        ) : null}
                    </div>
                );
            })}
        </nav>
    );
}

function MobileNav({
    navItems,
    openSubmenuHref,
    onToggleSubmenu,
    onNavigate,
}: {
    navItems: HeaderNavItem[];
    openSubmenuHref: string | null;
    onToggleSubmenu: (href: string) => void;
    onNavigate: () => void;
}) {
    return (
        <nav className="flex flex-col gap-3">
            {navItems.map((item) => {
                const hasSubSections = Boolean(item.subSections?.length);
                const isOpen = openSubmenuHref === item.href;

                return (
                    <div key={item.href} className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            {hasSubSections ? (
                                <button
                                    type="button"
                                    aria-label={
                                        isOpen
                                            ? `Collapse ${item.name}`
                                            : `Expand ${item.name}`
                                    }
                                    aria-expanded={isOpen}
                                    onClick={() => onToggleSubmenu(item.href)}
                                    className="w-full flex items-center justify-between text-sm font-semibold text-[#232321]"
                                >
                                    <span>{item.name}</span>
                                    <div
                                        className={`transition-transform duration-200 ${
                                            isOpen ? "rotate-180" : "rotate-0"
                                        }`}
                                    >
                                        <TriangleIcon />
                                    </div>
                                </button>
                            ) : (
                                <Link
                                    href={item.href}
                                    onClick={onNavigate}
                                    className="text-sm font-semibold text-[#232321]"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>

                        {hasSubSections && isOpen ? (
                            <div className="pl-3 flex flex-col gap-2">
                                {item.subSections!.map(
                                    (sub: HeaderNavSubSection) => (
                                        <Link
                                            key={sub.href}
                                            href={sub.href}
                                            onClick={onNavigate}
                                            className="text-sm font-medium text-[#232321]"
                                        >
                                            {sub.name}
                                        </Link>
                                    ),
                                )}
                            </div>
                        ) : null}
                    </div>
                );
            })}
        </nav>
    );
}

export default function Header() {
    const navItems: HeaderNavItem[] = headerNavItems;
    const cartItemCount = 10;

    const headerRef = useRef<HTMLElement | null>(null);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openSubmenuHref, setOpenSubmenuHref] = useState<string | null>(null);

    useClickOutside(
        headerRef,
        () => {
            setIsMobileMenuOpen(false);
            setOpenSubmenuHref(null);
        },
        { enabled: isMobileMenuOpen || openSubmenuHref !== null },
    );

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((value) => !value);
        setOpenSubmenuHref(null);
    };

    const handleToggleSubmenu = (href: string) => {
        setOpenSubmenuHref((current) => (current === href ? null : href));
    };

    const handleNavigate = () => {
        setIsMobileMenuOpen(false);
        setOpenSubmenuHref(null);
    };

    return (
        <header
            ref={headerRef}
            className="bg-[#FAFAFA] container mx-auto rounded-2xl md:rounded-[24px]"
        >
            {/* desktop */}
            <div className="hidden lg:flex items-center justify-between mt-8 p-8">
                <DesktopNav
                    navItems={navItems}
                    openSubmenuHref={openSubmenuHref}
                    onToggleSubmenu={handleToggleSubmenu}
                    onNavigate={handleNavigate}
                />

                <div>
                    <Logo />
                </div>

                <div className="flex items-center gap-11">
                    <div>
                        <SearchIcon />
                    </div>
                    <div>
                        <UserIcon />
                    </div>
                    <CartBadge count={cartItemCount} />
                </div>
            </div>

            {/* mobile */}
            <div className="flex lg:hidden items-center justify-between mt-8 p-4">
                <button
                    type="button"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                    onClick={toggleMobileMenu}
                    className="p-2"
                >
                    <MenuIcon />
                </button>

                <div>
                    <Logo width={80} height={20} />
                </div>

                <div className="flex items-center gap-2.25">
                    <div>
                        <UserIcon />
                    </div>
                    <CartBadge count={cartItemCount} />
                </div>
            </div>

            {isMobileMenuOpen ? (
                <div className="lg:hidden px-4 pb-4">
                    <MobileNav
                        navItems={navItems}
                        openSubmenuHref={openSubmenuHref}
                        onToggleSubmenu={handleToggleSubmenu}
                        onNavigate={handleNavigate}
                    />
                </div>
            ) : null}
        </header>
    );
}
