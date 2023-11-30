import { TableHeader } from '@/components/TableHeader';
import { District } from '@/lib/api_types';
import { cookies } from 'next/headers';

async function fetchDistricts(searchParams?: {
  [key: string]: string | string[] | undefined;
}) {
  const endpoint = cookies().get('source')?.value ?? 'database';
  const url = new URL(`${process.env.API_URL}/${endpoint}/districts`);

  if (searchParams) {
    Object.keys(searchParams).forEach((key) => {
      if (searchParams[key]) {
        url.searchParams.set(key, searchParams[key] as string);
      }
    });
  }

  const response = await fetch(url);
  const data: District[] = await response.json();
  return data;
}

export default async function Districts({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const date = new Date();

  const items = await fetchDistricts(searchParams);

  const elapsed = new Date().getTime() - date.getTime();

  return (
    <div className='w-full flex-col items-center justify-start lg:flex-col'>
      <div className='flex w-full flex-row items-center justify-between'>
        <h1 className='my-5'>
          <span className='text-5xl font-bold'>Districts</span>
          <span className='text-5xl font-bold text-green-700'>.</span>
        </h1>
        <div className='text-sm text-gray-500'>
          Fetched in {elapsed}ms from{' '}
          <strong>{cookies().get('source')?.value ?? 'database'}</strong>
        </div>
      </div>
      <table className='text-md w-full text-left'>
        <TableHeader leftColumnLabel='District name' />
        <tbody>
          {items.map((item) => (
            <tr key={item.arrondissement}>
              <td className='border-gray-400 py-2 dark:border-gray-800'>
                {item.arrondissement}
              </td>
              <td className='border-gray-400 py-2 font-bold text-green-700 dark:border-gray-800'>
                {item._count}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
