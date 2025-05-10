// screens/HomeScreen.tsx
import EventCard from '@/components/EventCard/EventCard'; // Add this import
import Navbar from '@/components/Navbar/Navbar';
import PostCard from '@/components/PostCard/Postcard';
import StoryCarousel from '@/components/StoryCarousel/StoryCarousel';
import useHomeData from '@/hooks/useHomeData';
import { ScrollView, Text, View } from 'react-native';

export default function HomeScreen() {
  const { stories, posts, events, loading } = useHomeData(); // Add events to destructuring

  return (
    <View className="flex-1 bg-white">
      <Navbar />
      
      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ 
          paddingTop: 4,
          paddingBottom: 16,
          paddingHorizontal: 0 
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Stories Section */}
        <View className="mb-3">
          <StoryCarousel stories={stories} />
        </View>

        {/* Posts Section */}
        <View className="px-4">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </View>

        {/* Uncomment Events Section */}
        <View className="px-4 mt-6">
          <Text className="font-bold text-lg mb-3">Upcoming Events</Text>
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </View>

        {loading && (
          <Text className="text-center py-4 text-gray-500">Loading more...</Text>
        )}
      </ScrollView>
    </View>
  );
}