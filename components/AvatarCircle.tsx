// components/AvatarCircle.tsx
import React from 'react';
import { Image, View } from 'react-native';

type AvatarCircleProps = {
  uri: string;
  size?: number;
  showDot?: boolean;
};

export default function AvatarCircle({
  uri,
  size = 56,
  showDot = false,
}: AvatarCircleProps) {
  return (
    <View style={{ width: size, height: size }}>
      <Image
        source={{ uri }}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
        }}
      />
      {showDot && (
        <View
          style={{
            position: 'absolute',
            top: 2,
            right: 2,
            width: size * 0.2,
            height: size * 0.2,
            borderRadius: (size * 0.2) / 2,
            backgroundColor: '#0286FF',
          }}
        />
      )}
    </View>
  );
}
