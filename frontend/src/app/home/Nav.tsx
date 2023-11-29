"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export function Nav() {

    const segment = useSelectedLayoutSegment();

    return (
        <nav className="flex flex-row gap-3">
            <Link href="/home/species" className={segment === "species" ? "text-green-700" : ""}>Species</Link>
            <Link href="/home/district" className={segment === "district" ? "text-green-700" : ""}>Districts</Link>
        </nav>
    )
}