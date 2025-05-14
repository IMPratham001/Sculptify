import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = cookies();
  const session = cookieStore.get('session');
  const role = cookieStore.get('role');

  return NextResponse.json({
    authenticated: !!session,
    isAdmin: role?.value === 'admin',
  });
}