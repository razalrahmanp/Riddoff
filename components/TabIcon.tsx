// TabIcon.tsx
import { Ionicons } from '@expo/vector-icons'; // Icon library
import { View } from 'react-native';
/**
 * TabIcon component for bottom tabs.
 * - For regular tabs: renders an Ionicons icon (filled when focused, outline when not).
 * - For the profile tab: renders a circular Image with an optional colored ring and dot when focused.
 */
export default function TabIcon({
  name,
  focused,
  color,
}: {
  name: string;
  focused: boolean;
  color: string;
}) {

let iconName: React.ComponentProps<typeof Ionicons>['name'];
switch (name) {
  case 'home':
    iconName = focused ? 'home' : 'home-outline';
    break;
  case 'search':
    iconName = focused ? 'search' : 'search-outline';
    break;
  case 'CreatePost':
    iconName = focused ? 'add-circle' : 'add-circle-outline';
    break;
  case 'saved':
    iconName = focused ? 'bookmark' : 'bookmark-outline';
    break;
  case 'profile':
      iconName = focused ? 'person-circle' : 'person-circle-outline';
      break;     
  default:
    iconName = focused ? 'ellipse' : 'ellipse-outline'; // fallback icon
    break;
}

 // Profile tab custom styling (ring + red dot when focused)
 if (name === 'profile') {
    return (
      <View className="relative items-center justify-center">
        <Ionicons
          name={iconName}
          size={focused ? 30 : 28}
          color={color}
          className={focused ? 'text-blue-500' : ''}
        />
        {/* {focused && (
          <View className="absolute -bottom-0 right-0 w-1 h-1 bg-red-500 rounded-full" />
        )} */}
      </View>
    );
  }

  // For regular icons, simulate "bold effect" by enlarging on focus
  return (
    <Ionicons
      name={iconName}
      size={focused ? 28 : 24}
      color={color}
    />
  );
}
