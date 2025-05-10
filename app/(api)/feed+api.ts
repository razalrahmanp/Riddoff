// app/(api)/feed+api.ts
import { verifyToken } from '@/lib/clerk';
import { neon } from "@neondatabase/serverless";

// Define TypeScript interface for feed items
interface FeedItem {
  id: string;
  type: 'post' | 'event';
  content: string;
  mediaUrl?: string;
  createdAt: string;
  userName: string;
  userAvatar?: string;
  communityName?: string;
}

export async function POST(request: Request) {
  const sql = neon(process.env.DATABASE_URL!);
  
  try {
    const authHeader = request.headers.get('Authorization');
    const { userId } = await verifyToken(authHeader?.split(' ')[1] || '');

    // Remove generic type from sql call
    const result = await sql`
      SELECT 
        fi.id,
        fi.type,
        fi.content,
        fi.media_url as "mediaUrl",
        fi.created_at as "createdAt",
        u.name as "userName",
        u.avatar_url as "userAvatar",
        c.name as "communityName",
        -- Event-specific fields
        fi.title,
        fi.description,
        fi.location,
        fi.start_date as "startDate",
        fi.end_date as "endDate",
        fi.status,
        fi.participants_count as "participants"
      FROM feed_items fi
      JOIN users u ON fi.user_id = u.clerk_id
      LEFT JOIN communities c ON fi.community_id = c.id
      WHERE fi.user_id = ${userId}
        AND (fi.type = 'post' OR fi.type = 'event')
      ORDER BY fi.created_at DESC
      LIMIT 20
    `;

    // Type cast the result
    const feedItems = result as FeedItem[];

    return new Response(JSON.stringify(feedItems), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Error fetching feed:", error);
    return Response.json(
      { error: error instanceof Error ? error.message : "Internal Server Error" },
      { status: 500 }
    );
  }
}