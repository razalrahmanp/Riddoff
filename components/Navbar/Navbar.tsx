// components/Navbar/Navbar.tsx
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Navbar() {
  return (
    <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
      {/* Logo */}
      <Text className="text-2xl font-bold text-primary">Riddoff</Text>
      
      {/* Right Section */}
      <View className="flex-row items-center gap-4">
        <Link href="/activity" asChild>
          <TouchableOpacity className="p-2">
            <Ionicons name="heart-outline" size={24} color="#1e293b" />
          </TouchableOpacity>
        </Link>
        
        <Link href="/messages" asChild>
          <TouchableOpacity className="p-2">
            <Ionicons name="chatbubble-outline" size={24} color="#1e293b" />
          </TouchableOpacity>
        </Link>
        
        
      </View>
    </View>
  );
}