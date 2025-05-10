import { createClerkClient } from '@clerk/clerk-sdk-node';

export async function verifyToken(authHeader: string | null) {
  if (!authHeader?.startsWith('Bearer ')) {
    throw new Error('Invalid authorization header');
  }

  const clerk = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
  });

  const { userId } = await clerk.verifyToken(authHeader.split(' ')[1]);
  return { userId };
}