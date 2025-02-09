"use client";

import React, { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HoveredLink, NavItem } from "@/components/Nav/Nav";
import { Account } from "@/components/Nav/Account";

export const Header = ({ className }: {
    className?: string;
}) => {
    const [active, setActive] = useState<string | null>(null);

    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            const direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(true);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "w-full h-16 fixed inset-x-0 border-b border-purple-500/[0.2] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] bg-slate-950",
                    className
                )}
            >
                <div
                    onMouseLeave={() => setActive(null)}
                    className="container mx-auto flex justify-between items-center pr-2 pl-8 py-2 w-full h-full"
                >
                    <div className="flex">
                        <Link href="/" className="text-2xl font-bold mr-8">
                            Yojam
                        </Link>
                        <nav className="hidden md:flex space-x-4">
                            <NavItem setActive={setActive} active={active} item="Services">
                                <div className="flex flex-col space-y-4 text-sm">
                                    <HoveredLink href="/meditation">
                                        Meditation
                                    </HoveredLink>
                                    <HoveredLink href="/yoga">
                                        Yoga
                                    </HoveredLink>
                                    <HoveredLink href="/tarot">
                                        Reiki
                                    </HoveredLink>
                                    <HoveredLink href="/tarot">
                                        Tarot
                                    </HoveredLink>
                                </div>
                            </NavItem>
                        </nav>
                    </div>
                    <Account />
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px" />
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
