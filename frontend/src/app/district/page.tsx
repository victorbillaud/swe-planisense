import { District } from "@/lib/api_types";
import { cookies } from "next/headers";

async function fetchDistricts() {
    const endpoint = cookies().get('source')?.value ?? 'database'
    const response = await fetch(`${process.env.API_URL}/${endpoint}/districts`)
    const data: District[] = await response.json()
    return data
}

export default async function Districts() {

    const date = new Date()

    const items = await fetchDistricts()

    const elapsed = new Date().getTime() - date.getTime()

    return (
        <div className="w-full flex-col lg:flex-col items-center justify-start">
            <div className="w-full flex flex-row items-center justify-between">
                <h1 className="my-5">
                    <span className="text-5xl font-bold">Districts</span>
                    <span className="text-5xl font-bold text-green-700">.</span>

                </h1>
                <div className="text-sm text-gray-500">Fetched in {elapsed}ms from <strong>{cookies().get('source')?.value ?? 'database'}</strong></div>
            </div>
            <table className="w-full text-left text-md">
                <thead>
                    <tr>
                        <th className="py-2">Districts</th>
                        <th className="py-2">Count</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.arrondissement}>
                            <td className="py-2">{item.arrondissement}</td>
                            <td className="py-2 font-bold text-green-700">{item._count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
