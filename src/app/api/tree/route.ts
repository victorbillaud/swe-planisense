import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams
    const limit = searchParams.get('limit') || "20"
    const offset = searchParams.get('offset') || "0"

    // `${process.env.DATA_API_URL}/api/explore/v2.1/catalog/datasets/les-arbres/records?offset=${offset}&limit=${limit}`;

    const url = new URL(`${process.env.DATA_API_URL}/api/explore/v2.1/catalog/datasets/les-arbres/records`);
    url.searchParams.set('offset', offset)
    url.searchParams.set('limit', limit)

    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Check if the response is OK
    if (!res.ok) {
        // Handle errors, for example, by returning a status code and message
        return new Response(JSON.stringify({ message: 'Error fetching data' }), {
            status: res.status,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    const data = await res.json();

    // Return the data in JSON format
    return new Response(JSON.stringify({ data }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}