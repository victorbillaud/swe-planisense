import { facetGroupOutputSerializer } from "@/lib/serializer";

async function fetchArrondissement() {
    const response = await fetch('http://localhost:3000/api/tree?field=arrondissement');
    const data: ReturnType<typeof facetGroupOutputSerializer> = await response.json()

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return data
}

export default async function Arrondissement() {

    const arrondissements = await fetchArrondissement()

    return (
        <div className="w-full flex-col lg:flex-col items-center justify-start">
            <h1 className="my-5">
                <span className="text-5xl font-bold">Arrondissement</span>
                <span className="text-5xl font-bold text-green-700">.</span>
            </h1>

            <table className="w-full text-left text-lg">
                <thead>
                    <tr>
                        <th className="py-2">Arrondissement</th>
                        <th className="py-2">Count</th>
                    </tr>
                </thead>
                <tbody>
                    {arrondissements.map((arrondissement) => (
                        <tr key={arrondissement.name}>
                            <td className="py-2">{arrondissement.name}</td>
                            <td className="py-2 font-bold text-green-700">{arrondissement.count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
