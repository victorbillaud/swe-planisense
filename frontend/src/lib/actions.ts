'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function handleChangeEndpoint(formData: FormData) {
  const source = formData.get('source') as string;

  if (source === 'api') {
    // Store in cookies that we are using the database
    cookies().set('source', 'api');
  } else {
    // Else, we are using the database
    cookies().set('source', 'database');
  }

  revalidatePath('/species');
  revalidatePath('/districts');

  return source;
}
