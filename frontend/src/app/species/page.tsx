import { TableHeader } from '@/components/TableHeader';
import { Species } from '@/lib/api_types';
import { cookies } from 'next/headers';

async function fetchSpecies(searchParams?: {
  [key: string]: string | string[] | undefined;
}) {
  const endpoint = cookies().get('source')?.value ?? 'database';
  const url = new URL(`${process.env.API_URL}/${endpoint}/species`);

  if (searchParams) {
    Object.keys(searchParams).forEach((key) => {
      if (searchParams[key]) {
        url.searchParams.set(key, searchParams[key] as string);
      }
    });
  }


  const response = await fetch(url);
  const data: Species[] = await response.json();
  return data;
}

export default async function Species({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const date = new Date();

  const items = await fetchSpecies(searchParams);

  const elapsed = new Date().getTime() - date.getTime();

  return (
    <div className='w-full flex-col items-center justify-start lg:flex-col'>
      <div className='flex w-full flex-row items-center justify-between'>
        <h1 className='my-5'>
          <span className='text-5xl font-bold'>Species</span>
          <span className='text-5xl font-bold text-green-700'>.</span>
        </h1>
        <div className='text-sm text-gray-500'>
          Fetched in {elapsed}ms from{' '}
          <strong>{cookies().get('source')?.value ?? 'database'}</strong>
        </div>
      </div>
      <table className='text-md round w-full text-left'>
        <TableHeader leftColumnLabel='Species name' />
        <tbody>
          {items.map((item) => (
            <tr key={item.genre}>
              <td className='border border-gray-400 px-2 py-2 dark:border-gray-800'>
                {item.genre}
              </td>
              <td className='border border-gray-400 px-2 py-2 font-bold text-green-700 dark:border-gray-800'>
                {item._count}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
