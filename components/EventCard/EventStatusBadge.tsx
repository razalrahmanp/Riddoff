// components/EventStatusBadge/EventStatusBadge.tsx
import { Text, View } from 'react-native';

type Status = 'upcoming' | 'ongoing' | 'completed';

export default function EventStatusBadge({ status }: { status: Status }) {
  const statusConfig = {
    upcoming: {
      bg: 'bg-orange-100',
      text: 'text-orange-800',
      label: 'Upcoming',
    },
    ongoing: {
      bg: 'bg-green-100',
      text: 'text-green-800',
      label: 'Ongoing',
    },
    completed: {
      bg: 'bg-gray-100',
      text: 'text-gray-800',
      label: 'Completed',
    },
  };

  return (
    <View className={`${statusConfig[status].bg} px-2 py-1 rounded-full`}>
      <Text className={`${statusConfig[status].text} text-xs font-medium`}>
        {statusConfig[status].label}
      </Text>
    </View>
  );
}