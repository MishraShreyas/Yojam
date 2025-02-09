"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const dividerVariants = cva("w-full relative", {
    variants: {
        variant: {
            gradient: "h-24 overflow-hidden angle-15 gradient-border mix-blend-overlay border-2",
            path: "h-32",
            glass: "h-40 perspective-midrange skew-section blur-sm bg-primary/30",
        },
    },
    defaultVariants: {
        variant: "gradient",
    },
});

interface DividerProps extends VariantProps<typeof dividerVariants> {
    className?: string;
}

export function Divider({ variant, className }: DividerProps) {
    const dividerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: dividerRef });

    const pathD = useTransform(
        scrollYProgress,
        [0, 1],
        ["M 0 50 Q 50 0 100 50", "M 0 50 Q 50 100 100 50"]
    );

    if (variant === "glass") {
        return (
            <motion.div
                ref={dividerRef}
                className={dividerVariants({ variant, className })}
            // whileHover={{ rotateX: 15 }}
            />
        );
    }

    if (variant === "path") {
        return (
            <div ref={dividerRef} className={dividerVariants({ variant, className })}>
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        d={pathD}
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8B5CF6" />
                            <stop offset="100%" stopColor="#EC4899" />
                        </linearGradient>
                    </defs>
                </motion.svg>
            </div>
        );
    }

    return (
        <motion.div
            ref={dividerRef}
            className={dividerVariants({ variant, className })}
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
    );
}