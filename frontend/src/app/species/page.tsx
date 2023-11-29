import { Species } from "@/lib/api_types";
import { cookies } from "next/headers";

async function fetchSpecies() {
    const endpoint = cookies().get('source')?.value ?? 'database'
    const response = await fetch(`${process.env.API_URL}/${endpoint}/species`)
    const data: Species[] = await response.json()
    return data
}

export default async function Species() {

    const date = new Date()

    const items = await fetchSpecies()

    const elapsed = new Date().getTime() - date.getTime()

    return (
        <div className="w-full flex-col lg:flex-col items-center justify-start">
            <div className="w-full flex flex-row items-center justify-between">
                <h1 className="my-5">
                    <span className="text-5xl font-bold">Species</span>
                    <span className="text-5xl font-bold text-green-700">.</span>

                </h1>
                <div className="text-sm text-gray-500">Fetched in {elapsed}ms from <strong>{cookies().get('source')?.value ?? 'database'}</strong></div>
            </div>
            <table className="w-full text-left text-md round">
                <thead>
                    <tr>
                        <th className="py-2">Species</th>
                        <th className="py-2">Count</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.genre}>
                            <td className="py-2 px-2 border border-gray-400 dark:border-gray-800">{item.genre}</td>
                            <td className="py-2 px-2 border border-gray-400 dark:border-gray-800 font-bold text-green-700">{item._count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
