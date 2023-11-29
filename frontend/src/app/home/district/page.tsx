import { District } from "@/lib/api_types";

async function fetchDistricts() {
    const response = await fetch('http://localhost:8000/tree/districts/');
    const data: District[] = await response.json()

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return data
}

export default async function District() {

    const items = await fetchDistricts()

    return (
        <div className="w-full flex-col lg:flex-col items-center justify-start">
            <h1 className="my-5">
                <span className="text-5xl font-bold">Districts</span>
                <span className="text-5xl font-bold text-green-700">.</span>
            </h1>

            <table className="w-full text-left text-lg">
                <thead>
                    <tr>
                        <th className="py-2">District</th>
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
