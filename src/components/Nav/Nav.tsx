"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const NavItem = ({
    setActive,
    active,
    item,
    children,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className={`relative flex flex-col justify-center px-2 py-1 rounded-md`}>
            <motion.p
                transition={{ duration: 0.3 }}
                className={`cursor-pointer hover:opacity-[0.9] ${active === item ? "text-fuchsia-700" : ""} duration-300`}
            >
                {item}
            </motion.p>
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: -2 }}
                    animate={{ opacity: 1, scale: 1, y: -2 }}
                    transition={transition}
                >
                    {active === item && (
                        <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2">
                            <motion.div
                                transition={transition}
                                layoutId="active" // layoutId ensures smooth animation
                                className="backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl bg-slate-950/80"
                            >
                                <motion.div
                                    layout // layout ensures smooth animation
                                    className="w-max h-full p-4"
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const ProductItem = ({
    title,
    description,
    href,
    src,
}: {
    title: string;
    description: string;
    href: string;
    src: string;
}) => {
    return (
        <Link href={href} className="flex space-x-2">
            <Image
                src={src}
                width={140}
                height={70}
                alt={title}
                className="flex-shrink-0 rounded-md shadow-2xl"
            />
            <div>
                <h4 className="text-xl font-bold mb-1">
                    {title}
                </h4>
                <p className="text-sm max-w-[10rem] text-neutral-300">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export const HoveredLink = forwardRef<HTMLAnchorElement, ComponentPropsWithoutRef<typeof Link> & { children: React.ReactNode }>(
    ({ children, ...rest }, ref) => {
        return (
            <Link
                {...rest}
                ref={ref}
                className="relative px-2 py-1 rounded-md duration-300 active:text-primary active:font-bold group"
            >
                <div className="absolute bg-primary w-0.5 h-full rounded-l -left-1 top-0 group-hover:w-[calc(100%+4px)] group-hover:rounded group-hover:bg-fuchsia-600/20 duration-300" />
                {children}
            </Link>
        );
    }
);

HoveredLink.displayName = 'HoveredLink';