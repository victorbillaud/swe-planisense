export interface TreeLocation {
    idbase: number;
    typeemplacement: string;
    domanialite: string;
    arrondissement: string;
    complementadresse: string;
    numero: number | null;
    adresse: string;
    idemplacement: string;
    libellefrancais: string;
    genre: string;
    espece: string;
    varieteoucultivar: string | null;
    circonferenceencm: number;
    hauteurenm: number;
    stadedeveloppement: string;
    remarquable: string;
    geo_point_2d: {
        lon: number;
        lat: number;
    };
}
