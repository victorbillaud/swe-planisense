export async function GET() {
    const res = await fetch(`${process.env.DATA_API_URL}/api/explore/v2.1/catalog/datasets/les-arbres/records?limit=20`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()

    return Response.json({ data })
}