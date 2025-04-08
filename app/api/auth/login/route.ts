import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email : username } });
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return NextResponse.json({ error: 'Invalid password' }, { status: 401 });

  const response = NextResponse.json({ message: 'Login successful' });
  response.cookies.set('token', user.id, { path: '/', httpOnly: true });

  return response;
}
