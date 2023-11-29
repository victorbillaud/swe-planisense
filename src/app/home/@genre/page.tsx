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
        <div className="flex-1 max-h-full overflow-y-auto flex-col lg:flex-col items-center justify-start p-12">
            <h1 className="my-5">
                <span className="text-5xl font-bold">Genre</span>
                <span className="text-5xl font-bold text-blue-500">.</span>
            </h1>

            <ul className="h-[90%] flex flex-col gap-1">
                {treeGenres.map((treeGenre) => (
                    <li key={treeGenre.name} className="flex flex-row gap-3">
                        <span className="text-m">{treeGenre.name}</span>
                        <span className="text-m font-bold text-blue-500">{treeGenre.count}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
