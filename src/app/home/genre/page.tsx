import { facetGroupOutputSerializer } from "@/lib/serializer";

async function fetchTreeGenre() {
    const response = await fetch('http://localhost:3000/api/tree?field=genre');
    const data: ReturnType<typeof facetGroupOutputSerializer> = await response.json()

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return data
}

export default async function Arrondissement() {

    const treeGenres = await fetchTreeGenre()

    return (
        <div className="w-full flex-col lg:flex-col items-center justify-start">
            <h1 className="my-5">
                <span className="text-5xl font-bold">Genre</span>
                <span className="text-5xl font-bold text-green-700">.</span>
            </h1>

            <table className="w-full text-left text-lg">
                <thead>
                    <tr>
                        <th className="py-2">Genre</th>
                        <th className="py-2">Count</th>
                    </tr>
                </thead>
                <tbody>
                    {treeGenres.map((treeGenre) => (
                        <tr key={treeGenre.name}>
                            <td className="py-2">{treeGenre.name}</td>
                            <td className="py-2 font-bold text-green-700">{treeGenre.count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
