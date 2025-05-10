// components/EventCard/EventCard.tsx
import EventStatusBadge from '@/components/EventCard/EventStatusBadge';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Text, TouchableOpacity, View } from 'react-native';

export default function EventCard({ event }: { event: any }) {
  const statusColors = {
    upcoming: 'bg-orange-100',
    ongoing: 'bg-green-100',
    completed: 'bg-gray-100'
  };

  return (
    <View className="mb-4 bg-white rounded-xl shadow-sm overflow-hidden">
      <Image
        source={{ uri: event.imageUrl }}
        className="w-full h-48"
        contentFit="cover"
      />
      
      <View className="flex-row justify-between items-start mb-2">
      <Text className="text-lg font-semibold flex-1">{event.title}</Text>
      <EventStatusBadge status={event.status} />
      </View>
      
      <View className="p-4">
        <View className="flex-row justify-between items-start mb-2">
          <Text className="text-lg font-semibold flex-1">{event.title}</Text>
          <EventStatusBadge status={event.status} />
        </View>
        
        <View className="flex-row items-center mb-1">
          <Ionicons name="location-outline" size={16} />
          <Text className="ml-2 text-sm">{event.location}</Text>
        </View>
        
        <View className="flex-row items-center mb-3">
          <Ionicons name="calendar-outline" size={16} />
          <Text className="ml-2 text-sm">{event.date}</Text>
        </View>

        <TouchableOpacity 
          className={`${statusColors[event.status]} py-2 rounded-lg items-center`}
          disabled={event.status === 'completed'}
        >
          <Text className="font-medium">
            {event.status === 'completed' ? 'Event Ended' : 'Join Event'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}