'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export const TableHeader = ({
  leftColumnLabel,
}: {
  leftColumnLabel: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback((name: string, value: string) => {
    const params = new URLSearchParams();
    params.set(name, value);
    return params.toString();
  }, []);

  return (
    <thead>
      <tr>
        <th className='py-2'>
          <div className='flex flex-row items-center justify-start'>
            <span className='text-sm font-semibold'>{leftColumnLabel}</span>
            <div className='ml-2 flex flex-col items-center justify-center'>
              <button
                onClick={() => {
                  router.push(
                    `${pathname}?${createQueryString(
                      'order_by',
                      'name'
                    )}&${createQueryString('sort_order', 'asc')}`
                  );
                }}
                className={
                  searchParams.get('sort_order') === 'asc' &&
                  searchParams.get('order_by') === 'name'
                    ? 'text-green-500'
                    : ''
                }
              >
                <svg
                  className='h-3 w-3'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5 15l7-7 7 7'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  router.push(
                    `${pathname}?${createQueryString(
                      'order_by',
                      'name'
                    )}&${createQueryString('sort_order', 'desc')}`
                  );
                }}
                className={
                  searchParams.get('sort_order') === 'desc' &&
                  searchParams.get('order_by') === 'name'
                    ? 'text-green-500'
                    : ''
                }
              >
                <svg
                  className='h-3 w-3'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M19 9l-7 7-7-7'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  />
                </svg>
              </button>
            </div>
          </div>
        </th>
        <th className='py-2'>
          <div className='flex flex-row items-center justify-start'>
            <span className='text-sm font-semibold'>Count</span>
            <div className='ml-2 flex flex-col items-center justify-center'>
              <button
                onClick={() => {
                  router.push(
                    `${pathname}?${createQueryString(
                      'order_by',
                      'count'
                    )}&${createQueryString('sort_order', 'desc')}`
                  );
                }}
                className={
                  searchParams.get('sort_order') === 'desc' &&
                  searchParams.get('order_by') === 'count'
                    ? 'text-green-500'
                    : ''
                }
              >
                <svg
                  className='h-3 w-3'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5 15l7-7 7 7'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  router.push(
                    `${pathname}?${createQueryString(
                      'order_by',
                      'count'
                    )}&${createQueryString('sort_order', 'asc')}`
                  );
                }}
                className={
                  searchParams.get('sort_order') === 'asc' &&
                  searchParams.get('order_by') === 'count'
                    ? 'text-green-500'
                    : ''
                }
              >
                <svg
                  className='h-3 w-3'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M19 9l-7 7-7-7'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  />
                </svg>
              </button>
            </div>
          </div>
        </th>
      </tr>
    </thead>
  );
};
