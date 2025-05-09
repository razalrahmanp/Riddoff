// components/PillBadge.tsx
import React from 'react';
import { Text, View } from 'react-native';

type PillBadgeProps = {
  label: string;
  color?: string;
  textColor?: string;
};

export default function PillBadge({
  label,
  color = '#FFD200',
  textColor = '#000',
}: PillBadgeProps) {
  return (
    <View
      style={{
        backgroundColor: color,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        alignSelf: 'flex-start',
      }}
    >
      <Text style={{ color: textColor, fontSize: 12, fontWeight: '600' }}>
        {label}
      </Text>
    </View>
  );
}
