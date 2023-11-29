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
        <div className="flex-1 h-full flex-col lg:flex-col items-center justify-start p-12">
            <h1 className="my-5">
                <span className="text-5xl font-bold">Arrondissement</span>
                <span className="text-5xl font-bold text-blue-500">.</span>
            </h1>

            <ul>
                {arrondissements.map((arrondissement) => (
                    <li key={arrondissement.name} className="flex flex-row gap-3">
                        <span className="text-m">{arrondissement.name}</span>
                        <span className="text-m font-bold text-blue-500">{arrondissement.count}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
