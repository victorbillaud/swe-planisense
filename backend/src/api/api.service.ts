import { Injectable } from '@nestjs/common';
import { ApiResponse } from './types';

@Injectable()
export class ApiService {
  private responseToJSON = async (response: Response) => {
    return await response.json();
  };

  private facetGroupOutputSerializer = (
    response: ApiResponse,
    nameKey: string,
  ) => {
    // Take only the first facet group
    return response.facet_groups[0].facets.map((facet) => {
      return {
        _count: facet.count,
        [nameKey]: facet.name,
      };
    });
  };

  private fetchApi = async (facet: 'arrondissement' | 'genre') => {
    const url = new URL(`${process.env.DATA_API_URL}/api/records/1.0/search/`);
    url.searchParams.set('dataset', 'les-arbres');
    url.searchParams.set('rows', '0');
    url.searchParams.set('facet', facet);

    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      // Handle errors, for example, by returning a status code and message
      throw new Error('Error fetching data');
    }

    // Serialize the response into an object
    return await this.responseToJSON(res);
  };

  async getDistricts(
    orderBy: 'count' | 'name' = 'name',
    sortOrder: 'asc' | 'desc' = 'asc',
  ) {
    const data = await this.fetchApi('arrondissement');

    // Serialize the response into the output format expected by the client
    return this.facetGroupOutputSerializer(data, 'arrondissement');
  }

  async getSpecies(
    orderBy: 'count' | 'name' = 'name',
    sortOrder: 'asc' | 'desc' = 'asc',
  ) {
    const data = await this.fetchApi('genre');

    // Serialize the response into the output format expected by the client
    return this.facetGroupOutputSerializer(data, 'genre');
  }
}
