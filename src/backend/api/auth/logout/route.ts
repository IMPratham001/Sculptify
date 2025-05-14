import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  const cookieStore = cookies();
  
  // Clear authentication cookies
  cookieStore.delete('session');
  cookieStore.delete('role');

  return NextResponse.json({ success: true });
}