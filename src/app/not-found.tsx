"use client";
import Link from "next/link"
import Image from "next/image";
import { useState, useEffect } from "react";
import { div } from "framer-motion/client";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center w-full mt-50">
            <h1 className="md:text-4xl text-3xl text-center font-medium">404</h1>
            <h2 className="md:text-2xl font-medium">Ops! Acho que você errou. Essa página não existe</h2>
        </div>
    )
}