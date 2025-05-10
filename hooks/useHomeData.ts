// hooks/useHomeData.ts
import { mockEvents, mockPosts, mockStories } from '@/features/home/home.mock';
import { useEffect, useState } from 'react';

export type FeedItem = Post | Event;

type Post = {
  id: string;
  type: 'post';
  // ... (all post properties)
};

type Event = {
  id: string;
  type: 'event';
  // ... (all event properties)
};

export default function useHomeData() {
  const [data, setData] = useState<{
    stories: Story[];
    posts: Post[];
    events: Event[];
    loading: boolean;
    error: string | null;
  }>({
    stories: [],
    posts: [],
    events: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Replace with real API calls:
        // const stories = await fetch('/api/stories');
        // const posts = await fetch('/api/posts');
        // const events = await fetch('/api/events');
        
        setData({
          stories: mockStories,
          posts: mockPosts,
          events: mockEvents,
          loading: false,
          error: null,
        });
      } catch (error) {
        setData(prev => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : 'Failed to load data',
        }));
      }
    };

    fetchData();
  }, []);

  return {
    stories: data.stories,
    posts: data.posts,
    events: data.events,
    loading: data.loading,
    error: data.error,
  };
}