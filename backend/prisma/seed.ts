import { PrismaClient } from '@prisma/client';
import { parse } from 'csv-parse/sync';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

async function main() {
  // Read the CSV file
  const fileContent = fs.readFileSync(
    path.join(__dirname, '../les-arbres.csv'),
    {
      encoding: 'utf-8',
    },
  );

  // Parse the CSV data
  const records = parse(fileContent, {
    columns: true,
    delimiter: ';',
    skip_empty_lines: true,
  });

  // Process and insert the data
  const batchSize = 100;
  for (let i = 0; i < records.length; i += batchSize) {
    const batch = records.slice(i, i + batchSize).map((record) => ({
      typeemplacement: record['TYPE EMPLACEMENT'],
      domanialite: record.DOMANIALITE,
      arrondissement: record.ARRONDISSEMENT,
      complementadresse: record['COMPLEMENT ADRESSE'] || null,
      numero: record.NUMERO ? parseInt(record.NUMERO) : null,
      adresse: record['LIEU / ADRESSE'],
      idemplacement: record.IDEMPLACEMENT,
      libellefrancais: record['LIBELLE FRANCAIS'],
      genre: record.GENRE,
      espece: record.ESPECE,
      varieteoucultivar: record['VARIETE OUCULTIVAR'] || null,
      circonferenceencm: parseInt(record['CIRCONFERENCE (cm)']),
      hauteurenm: parseInt(record['HAUTEUR (m)']),
      stadedeveloppement: record['STADE DE DEVELOPPEMENT'],
      remarquable: record.REMARQUABLE,
      longitude: parseFloat(record.geo_point_2d.split(',')[0]),
      latitude: parseFloat(record.geo_point_2d.split(',')[1]),
    }));

    await prisma.treeLocation.createMany({
      data: batch,
      skipDuplicates: true, // Optional: skip inserting records that would cause a duplicate error
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
