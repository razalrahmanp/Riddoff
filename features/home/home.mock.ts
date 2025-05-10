// features/home/home.mock.ts
export const mockStories = [
  {
    id: '1',
    imageUrl: 'https://www.citypng.com/public/uploads/preview/-11591396102oojxpyygnw.png',
    addCount: 2,
    isLive: true,
  },
  {
    id: '2',
    imageUrl: 'https://i.ytimg.com/vi/pVFEt7n-unM/maxresdefault.jpg',
    addCount: 0,
    isLive: false,
  },
 ];

export const mockPosts = [
  {
    id: '1',
    userAvatar: 'https://picsum.photos/100',
    userName: 'Traveler123',
    community: 'Adventure Seekers',
    content: 'Just climbed Mount Fuji! 🗻',
    mediaUrl: 'https://picsum.photos/300',
    likes: 42,
  },
  {
    id: '2',
    userAvatar: 'https://th.bing.com/th/id/OIP.Zu8uDafTSGekceNYokam0QHaFj?cb=iwp2&w=1200&h=900&rs=1&pid=ImgDetMain',
    userName: 'NatureLover',
    community: 'Wildlife Enthusiasts',
    content: 'Spotted a rare bird species in the forest! 🦅',
    mediaUrl: 'https://picsum.photos/300',
    likes: 36,
  },
  {
    id: '3',
    userAvatar: 'https://th.bing.com/th/id/OIP.Zu8uDafTSGekceNYokam0QHaFj?cb=iwp2&w=1200&h=900&rs=1&pid=ImgDetMain',
    userName: 'BeachBum',
    community: 'Ocean Explorers',
    content: 'Caught the perfect wave today! 🌊🏄‍♂️',
    mediaUrl: 'https://picsum.photos/300',
    likes: 28,
  },
  {
    id: '4',
    userAvatar: 'https://th.bing.com/th/id/OIP.Zu8uDafTSGekceNYokam0QHaFj?cb=iwp2&w=1200&h=900&rs=1&pid=ImgDetMain',
    userName: 'MountainHiker',
    community: 'Trail Blazers',
    content: 'The view from the top was breathtaking! 🏞️',
    mediaUrl: 'https://picsum.photos/300',
    likes: 50,
  },
];

export const mockEvents = [
  {
    id: '1',
    title: 'Weekend Camping Trip',
    location: 'Yosemite National Park',
    date: 'March 25-27, 2024',
    imageUrl: 'https://th.bing.com/th?id=OIF.NQ42wXIY9qQecC1khxdE%2bg&cb=iwp2&rs=1&pid=ImgDetMain',
    status: 'upcoming',
    participants: 8,
  },
  
  // Add more mock events...
];