import { facetGroupOutputSerializer, responseToJSON } from '@/lib/serializer';
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams
    const field = searchParams.get('field')

    if (!field || field !== "arrondissement" && field !== "genre") {
        return new Response(JSON.stringify({ message: 'Missing field' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }


    const url = new URL(`${process.env.DATA_API_URL}/api/records/1.0/search/`);
    url.searchParams.set('dataset', 'les-arbres')
    url.searchParams.set('rows', '0')
    url.searchParams.set('facet', field)

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

    // Serialize the response into an object
    const data = await responseToJSON(res)

    // Serialize the response into the output format expected by the client
    const output = facetGroupOutputSerializer(data)
    
    // Return the data in JSON format
    return new Response(JSON.stringify(output), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}