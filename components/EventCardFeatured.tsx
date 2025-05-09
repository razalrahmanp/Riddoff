

// // components/EventCardFeatured.tsx
// import React from 'react';
// import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
// import AvatarCircle from './AvatarCircle';
// import PillBadge from './PillBadge';

// type EventCardFeaturedProps = {
//   imageUri: string;
//   participants: string[];      // avatar URIs
//   overflowCount?: number;
//   title: string;
//   location: string;
//   date: string;
//   description: string;
//   fullyPaid?: boolean;
//   onJoin: () => void;
// };

// export default function EventCardFeatured({
//   imageUri,
//   participants,
//   overflowCount = 0,
//   location,
//   date,
//   description,
//   fullyPaid = false,
//   onJoin,
// }: EventCardFeaturedProps) {
//   return (
//     <View style={{ marginVertical: 12 }}>
//       <ImageBackground
//         source={{ uri: imageUri }}
//         style={{ height: 200, borderRadius: 16, overflow: 'hidden' }}
//       >
//         <View style={{ position: 'absolute', top: 8, left: 8 }}>
//           <PillBadge label="1" color="rgba(0,0,0,0.6)" textColor="#fff" />
//         </View>
//         <View style={{ position: 'absolute', top: 8, right: 8, flexDirection: 'row' }}>
//           {participants.slice(0, 3).map((uri, i) => (
//             <View key={i} style={{ marginLeft: i === 0 ? 0 : -12 }}>
//               <AvatarCircle uri={uri} size={32} />
//             </View>
//           ))}
//           {overflowCount > 0 && (
//             <PillBadge label={`+${overflowCount}`} color="rgba(0,0,0,0.6)" textColor="#fff" />
//           )}
//         </View>
//         <TouchableOpacity
//           onPress={onJoin}
//           style={{
//             position: 'absolute',
//             bottom: 16,
//             alignSelf: 'center',
//             backgroundColor: '#FFD200',
//             paddingHorizontal: 24,
//             paddingVertical: 8,
//             borderRadius: 20,
//           }}
//         >
//           <Text style={{ fontWeight: '700' }}>Join</Text>
//         </TouchableOpacity>
//       </ImageBackground>

//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
//         <Text style={{ fontWeight: '600' }}>{location}</Text>
//         <Text style={{ color: '#666' }}>{date}</Text>
//       </View>
//       <Text style={{ marginTop: 4, color: '#444' }}>{description}</Text>

//       <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
//         {fullyPaid && <PillBadge label="Fully Paid" />}
//         {/* replace these with your IconButton components */}
//         <Text style={{ marginLeft: 16 }}>❤️</Text>
//         <Text style={{ marginLeft: 16 }}>🔗</Text>
//         <Text style={{ marginLeft: 16 }}>🔖</Text>
//       </View>
//     </View>
//   );
// }
