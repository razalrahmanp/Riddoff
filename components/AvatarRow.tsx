


// // components/AvatarRow.tsx
// import React from 'react';
// import { FlatList, View } from 'react-native';
// import AvatarCircle from './AvatarCircle';

// type AvatarRowProps = {
//   data: { id: string; uri: string }[];
//   onPressItem?: (id: string) => void;
// };

// export default function AvatarRow({ data, onPressItem }: AvatarRowProps) {
//   return (
//     <FlatList
//       data={data}
//       horizontal
//       keyExtractor={(item) => item.id}
//       showsHorizontalScrollIndicator={false}
//       renderItem={({ item }) => (
//         <View style={{ marginRight: 12 }}>
//           <AvatarCircle uri={item.uri} />
//         </View>
//       )}
//       style={{ marginVertical: 16 }}
//     />
//   );
// }
