"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface WavingLogoProps {
    colors?: string[];
    className?: string;
}

export default function WavingLogo({ className, colors = [
    "invert(67%) sepia(23%) saturate(3300%) hue-rotate(167deg) brightness(100%) contrast(95%)",
    "invert(49%) sepia(86%) saturate(557%) hue-rotate(201deg) brightness(101%) contrast(95%)",
    "invert(66%) sepia(99%) saturate(3554%) hue-rotate(225deg) brightness(108%) contrast(98%)",
    "invert(59%) sepia(100%) saturate(1558%) hue-rotate(233deg) brightness(98%) contrast(99%)",
    "invert(70%) sepia(83%) saturate(1159%) hue-rotate(146deg) brightness(96%) contrast(94%)",
] }: WavingLogoProps) {
    return (
        <motion.img
            src="/Yojam-White.png"
            alt="Yojam Logo"
            animate={{ filter: colors }}
            transition={{ duration: 30, repeat: Infinity, repeatType: "mirror" }}
            className={cn("size-[20vh]", className)}
        />
    )
}