// components/StoryCarousel/StoryCarousel.tsx
import { Image } from 'expo-image';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

export default function StoryCarousel({ stories }: { stories: any[] }) {
  return (
    <View className="pb-3 bg-white">
      <FlatList
        horizontal
        data={stories}
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="px-3 gap-3"
        renderItem={({ item }) => (
          <TouchableOpacity className="items-center justify-center">
            <View className="relative">
              {/* Story Ring */}
              <View className={`absolute -top-0.5 -left-0.5 right-0.5 bottom-0.5 rounded-full ${
                item.isLive ? 'bg-[#ff0069]' : 'bg-gray-200'
              }`} style={{ transform: [{ scale: 1.1 }] }} />
              
              {/* Profile Image */}
              <Image
                source={{ uri: item.imageUrl }}
                className="w-20 h-20 rounded-full border-4 border-white"
                contentFit="cover"
                transition={200}
              />

              {/* Live Badge */}
              {item.isLive && (
                <View className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-red-500 px-2 py-1 rounded-full flex-row items-center z-10">
                  <View className="w-2 h-2 bg-white rounded-full mr-1" />
                  <Text className="text-white text-xs font-bold">Live</Text>
                </View>
              )}

              {/* Add Story Indicator */}
              {item.addCount > 0 && (
                <View className="absolute -bottom-1 -right-1 bg-blue-500 w-6 h-6 rounded-full items-center justify-center border-2 border-white z-10">
                  <Text className="text-white text-xs font-bold">+{item.addCount}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}