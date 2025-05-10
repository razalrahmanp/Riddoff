// components/Avatar/UserAvatar.tsx
import { Image } from 'expo-image';
import { View } from 'react-native';

export default function UserAvatar({
  source,
  size = 40,
  isOnline = false
}: {
  source: { uri: string };
  size?: number;
  isOnline?: boolean;
}) {
  return (
    <View className="relative">
      <Image
        source={source}
        style={{ width: size, height: size }}
        className="rounded-full"
      />
      {isOnline && (
        <View className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
      )}
    </View>
  );
}