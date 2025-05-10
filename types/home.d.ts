// types/home.d.ts
declare global {
  type Story = {
    id: string;
    imageUrl: string;       // Previously thumbnail_url
    addCount: number;       // Previously unseen_count
    isLive: boolean;        // Previously is_active
    createdAt: string;      // Previously created_at
  };

  type FeedItem = Post | Event;

  type Post = {
    id: string;
    type: "post";
    content: string;
    mediaUrl?: string;      // Previously media_url
    likes: number;          // Previously likes_count
    createdAt: string;      // Previously created_at
    userName: string;
    userAvatar?: string;
    communityName?: string;
  };

  type Event = {
    id: string;
    type: "event";
    title: string;
    description: string;
    location: string;
    startDate: string;      // Previously start_date
    endDate: string;        // Previously end_date
    status: "upcoming" | "ongoing" | "completed";
    participants: number;   // Previously participants_count
    createdAt: string;      // Previously created_at
    communityName?: string;
  };
}