"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export function Nav() {

    const segment = useSelectedLayoutSegment();

    return (
        <nav className="flex flex-row gap-3">
            <Link href="/home/genre" className={segment === "genre" ? "text-green-700" : ""}>Genre</Link>
            <Link href="/home/arrondissement" className={segment === "arrondissement" ? "text-green-700" : ""}>Arrondissement</Link>
        </nav>
    )
}