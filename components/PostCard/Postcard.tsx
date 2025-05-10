// components/PostCard/PostCard.tsx
import UserAvatar from '@/components/Avatar/UserAvatar';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Text, TouchableOpacity, View } from 'react-native';

export default function PostCard({ post }: { post: any }) {
  return (
    <View className="mb-4 bg-white rounded-xl shadow-sm">
      {/* Header */}
      <View className="flex-row items-center p-4">
        <UserAvatar source={{ uri: post.userAvatar }} size={40} />
        <View className="ml-3">
          <Text className="font-semibold">{post.userName}</Text>
          <Text className="text-gray-500 text-sm">{post.community}</Text>
        </View>
      </View>

      {/* Content */}
      {post.mediaUrl && (
        <Image
          source={{ uri: post.mediaUrl }}
          className="w-full h-64"
          contentFit="cover"
        />
      )}
      
      {/* Actions */}
      <View className="p-4">
        <Text className="text-base mb-3">{post.content}</Text>
        <View className="flex-row justify-between">
          <View className="flex-row items-center gap-4">
            <TouchableOpacity className="flex-row items-center">
              <Ionicons name="heart-outline" size={24} />
              <Text className="ml-2">{post.likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="chatbubble-outline" size={24} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Ionicons name="bookmark-outline" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}