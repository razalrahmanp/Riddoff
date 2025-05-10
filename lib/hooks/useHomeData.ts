import { useAuth } from "@clerk/clerk-expo";
import { useEffect, useState } from "react";

type HomeData = {
  stories: any[];
  posts: any[];
  events: any[];
  loading: boolean;
};

export function useHomeData(): HomeData {
  const { userId, getToken } = useAuth();
  const [data, setData] = useState<HomeData>({
    stories: [],
    posts: [],
    events: [],
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getToken();
        
        const [storiesRes, feedRes] = await Promise.all([
          fetch('/api/stories', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          }),
          fetch('/api/feed', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          })
        ]);

        const stories = await storiesRes.json();
        const feed = await feedRes.json();

        setData({
          stories,
          posts: feed.filter((item: any) => item.type === 'post'),
          events: feed.filter((item: any) => item.type === 'event'),
          loading: false
        });
      } catch (error) {
        console.error("Data fetch error:", error);
        setData(prev => ({ ...prev, loading: false }));
      }
    };

    if (userId) fetchData();
  }, [userId, getToken]);

  return data;
}