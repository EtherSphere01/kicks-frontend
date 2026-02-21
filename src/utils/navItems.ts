export type HeaderNavSubSection = {
    name: string;
    href: string;
};

export type HeaderNavItem = {
    name: string;
    href: string;
    subSections?: HeaderNavSubSection[];
};

export const headerNavItems: HeaderNavItem[] = [
    {
        name: "New Drops 🔥",
        href: "/new-drops",
    },
    {
        name: "Men",
        href: "/men",
        subSections: [
            { name: "Sneakers", href: "/men/sneakers" },
            { name: "Running", href: "/men/running" },
            { name: "Basketball", href: "/men/basketball" },
        ],
    },
    {
        name: "Women",
        href: "/women",
        subSections: [
            { name: "Sneakers", href: "/women/sneakers" },
            { name: "Running", href: "/women/running" },
            { name: "Training", href: "/women/training" },
        ],
    },
];
