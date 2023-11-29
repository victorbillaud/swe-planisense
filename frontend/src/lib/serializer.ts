import { ApiResponse } from "./api_types";

export const responseToJSON = async (response: Response) => {
    return await response.json();
}

export const facetGroupOutputSerializer = (response: ApiResponse) => {
    // Take only the first facet group
    return response.facet_groups[0].facets.map((facet) => {
        return {
            name: facet.name,
            count: facet.count,
        };
    });
}