import { Species } from "@/lib/api_types";

async function fetchSpecies() {
    const response = await fetch('http://localhost:8000/tree/species/');
    const data: Species[] = await response.json()

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return data
}

export default async function Species() {

    const items = await fetchSpecies()

    return (
        <div className="w-full flex-col lg:flex-col items-center justify-start">
            <h1 className="my-5">
                <span className="text-5xl font-bold">Species</span>
                <span className="text-5xl font-bold text-green-700">.</span>
            </h1>

            <table className="w-full text-left text-lg">
                <thead>
                    <tr>
                        <th className="py-2">Species</th>
                        <th className="py-2">Count</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.genre}>
                            <td className="py-2">{item.genre}</td>
                            <td className="py-2 font-bold text-green-700">{item._count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
