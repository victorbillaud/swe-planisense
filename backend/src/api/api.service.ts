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
      throw new Error('Error fetching data');
    }

    return await this.responseToJSON(res);
  };

  private orderData = (
    data: ReturnType<typeof this.facetGroupOutputSerializer>,
    orderBy: '_count' | 'arrondissement' | 'genre',
    sortOrder: 'asc' | 'desc',
  ) => {
    return data.sort((a, b) => {
      if (a[orderBy] < b[orderBy]) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      if (a[orderBy] > b[orderBy]) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };

  async getDistricts(
    orderBy: 'count' | 'name' = 'name',
    sortOrder: 'asc' | 'desc' = 'asc',
  ) {
    const data = await this.fetchApi('arrondissement');

    const serializedData = this.facetGroupOutputSerializer(
      data,
      'arrondissement',
    );

    const orderedData = this.orderData(
      serializedData,
      orderBy === 'count' ? '_count' : 'arrondissement',
      sortOrder,
    );

    return orderedData;
  }

  async getSpecies(
    orderBy: 'count' | 'name' = 'name',
    sortOrder: 'asc' | 'desc' = 'asc',
  ) {
    const data = await this.fetchApi('genre');

    const serializedData = this.facetGroupOutputSerializer(data, 'genre');

    const orderedData = this.orderData(
      serializedData,
      orderBy === 'count' ? '_count' : 'genre',
      sortOrder,
    );

    return orderedData
  }
}
