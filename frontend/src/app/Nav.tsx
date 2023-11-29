"use client";

import { handleChangeEndpoint } from "@/lib/actions";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export function Nav() {

    const segment = useSelectedLayoutSegment();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const formData = new FormData();
        formData.append('source', event.target.value)
        handleChangeEndpoint(formData)
    }

    return (
        <nav className="w-full flex flex-row items-start justify-between gap-3">
            <div className="flex flex-row items-center justify-between gap-3">
                <Link href="/species" className={segment === "species" ? "text-green-700" : ""}>Species</Link>
                <Link href="/district" className={segment === "district" ? "text-green-700" : ""}>Districts</Link>
            </div>
            <div className="flex flex-row items-center justify-between gap-3">
                <span className="text-sm">Data source</span>
                <form>
                    <select onChange={handleChange} name="source" id="source" className=" bg-transparent text-gray-900 text-sm font-bold block w-full p-2.5 dark:placeholder-gray-400 dark:text-white">
                        <option value="database">Database</option>
                        <option value="api">API</option>
                    </select>
                </form>
            </div>
        </nav>
    )
}