import TabIcon from '@/components/TabIcon';
import { Tabs } from 'expo-router';
import React from 'react';

/**
 * Root Tabs layout for the app. We disable labels and insert our custom TabIcon for each tab.
 */

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // hide text labels for icons
        tabBarStyle: {
            backgroundColor: '#0f0D23',
            position: 'absolute',
          },
      }}
    >
      {/* Home tab */}
      <Tabs.Screen
        name="home" 
        options={{
          tabBarIcon: ({ focused, color }) => 
            <TabIcon name="home" focused={focused} color={color} />
          ,
        }}
      />
      {/* Search tab */}
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused, color }) => 
            <TabIcon name="search" focused={focused} color={color} />
          ,
        }}
      />
      {/* New Post (Add) tab */}
      <Tabs.Screen
        name="CreatePost"
        options={{
          tabBarIcon: ({ focused, color }) => 
            <TabIcon name="CreatePost" focused={focused} color={color} />
          ,
        }}
      />
      {/* Activity (Heart) tab */}
      <Tabs.Screen
        name="saved"
        options={{
          tabBarIcon: ({ focused, color }) => 
            <TabIcon name="saved" focused={focused} color={color} />
          ,
        }}
      />
      {/* Profile tab */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused, color }) => 
            <TabIcon name="profile" focused={focused} color={color} />
          ,
        }}
      />
    </Tabs>
  );
}
