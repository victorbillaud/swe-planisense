// export interface ApiResponse {
//     nhits: number;
//     parameters: {
//         dataset: string;
//         timezone: string;
//         rows: number;
//         format: string;
//     };
//     records: [];
//     facet_groups: FacetGroup[];
// }

// export interface FacetGroup {
//     name: string;
//     facets: Facet[];
// }

// export interface Facet {
//     name: string;
//     path: string;
//     count: number;
//     state: string;
// }

export interface Species {
  _count: number;
  genre: string;
}

export interface District {
  _count: number;
  arrondissement: string;
}
