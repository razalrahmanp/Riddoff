// app/(api)/stories+api.ts
import { verifyToken } from '@/lib/clerk';
import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  const sql = neon(process.env.DATABASE_URL!);
  
  try {
    const authHeader = request.headers.get('Authorization');
    const { userId } = await verifyToken(authHeader?.replace('Bearer ', '') || '');

    // Modified query with column aliases
    const result = await sql`
      SELECT 
        id,
        thumbnail_url as "imageUrl",
        unseen_count as "addCount",
        is_active as "isLive",
        created_at as "createdAt"
      FROM stories 
      WHERE user_id = ${userId}
      ORDER BY created_at DESC 
      LIMIT 10
    `;

    // Cast to Story array type
    const stories = result as Story[];

    return new Response(JSON.stringify(stories), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Error fetching stories:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Internal Server Error" }, 
      { status: 500 }
    );
  }
}