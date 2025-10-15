// Mock data para TikTok replica

export const mockUsers = [
  {
    id: '1',
    username: 'charlidamelio',
    displayName: 'Charli D\'Amelio',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    bio: 'hi 👋',
    followers: '151.7M',
    following: '1420',
    likes: '11.2B',
    verified: true
  },
  {
    id: '2',
    username: 'khaby.lame',
    displayName: 'Khaby Lame',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    bio: 'Se vuoi ridere sei nel posto giusto👌🏾',
    followers: '162.3M',
    following: '152',
    likes: '2.5B',
    verified: true
  },
  {
    id: '3',
    username: 'bellapoarch',
    displayName: 'Bella Poarch',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    bio: '🦋',
    followers: '93.5M',
    following: '281',
    likes: '2.3B',
    verified: true
  },
  {
    id: '4',
    username: 'zachking',
    displayName: 'Zach King',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    bio: 'Filmmaker | Magician 🎩',
    followers: '70.9M',
    following: '372',
    likes: '897.6M',
    verified: true
  },
  {
    id: '5',
    username: 'addisonre',
    displayName: 'Addison Rae',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
    bio: 'AQUAMARINE OUT NOW',
    followers: '88.7M',
    following: '592',
    likes: '5.9B',
    verified: true
  }
];

export const mockSounds = [
  {
    id: 's1',
    name: 'original sound',
    author: 'charlidamelio',
    coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=100&h=100&fit=crop',
    videoCount: '2.5M',
    isFavorite: false
  },
  {
    id: 's2',
    name: 'Monkeys Spinning Monkeys',
    author: 'Kevin MacLeod',
    coverImage: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=100&h=100&fit=crop',
    videoCount: '1.8M',
    isFavorite: false
  },
  {
    id: 's3',
    name: 'Sí Señorita',
    author: 'Yolanda Be Cool',
    coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop',
    videoCount: '3.2M',
    isFavorite: true
  }
];

export const mockVideos = [
  {
    id: 'v1',
    userId: '1',
    username: 'charlidamelio',
    displayName: 'Charli D\'Amelio',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    verified: true,
    description: 'new dance!! who wants a tutorial? 💃 #dance #tutorial #fyp',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1547153760-18fc9498041c?w=400&h=700&fit=crop',
    soundId: 's1',
    soundName: 'original sound - charlidamelio',
    likes: '2.5M',
    comments: '42.3K',
    shares: '18.5K',
    isLiked: false,
    isFollowing: false,
    hashtags: ['#dance', '#tutorial', '#fyp'],
    createdAt: '2024-07-15T10:30:00Z'
  },
  {
    id: 'v2',
    userId: '2',
    username: 'khaby.lame',
    displayName: 'Khaby Lame',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    verified: true,
    description: 'Life is simple 🤷🏾‍♂️ #comedy #funny #lifehacks',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1533636721434-0e2d61030955?w=400&h=700&fit=crop',
    soundId: 's2',
    soundName: 'Monkeys Spinning Monkeys - Kevin MacLeod',
    likes: '8.9M',
    comments: '125.7K',
    shares: '65.2K',
    isLiked: true,
    isFollowing: true,
    hashtags: ['#comedy', '#funny', '#lifehacks'],
    createdAt: '2024-07-14T15:20:00Z'
  },
  {
    id: 'v3',
    userId: '3',
    username: 'bellapoarch',
    displayName: 'Bella Poarch',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    verified: true,
    description: 'M to the B 🎵 #viral #trending #music',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=700&fit=crop',
    soundId: 's3',
    soundName: 'Sí Señorita - Yolanda Be Cool',
    likes: '55.8M',
    comments: '658.2K',
    shares: '212.4K',
    isLiked: true,
    isFollowing: true,
    hashtags: ['#viral', '#trending', '#music'],
    createdAt: '2024-07-13T08:45:00Z'
  },
  {
    id: 'v4',
    userId: '4',
    username: 'zachking',
    displayName: 'Zach King',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    verified: true,
    description: 'Magic trick reveal! Can you figure it out? 🎩✨ #magic #tutorial #reveal',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=700&fit=crop',
    soundId: 's1',
    soundName: 'original sound - zachking',
    likes: '12.3M',
    comments: '289.5K',
    shares: '145.8K',
    isLiked: false,
    isFollowing: false,
    hashtags: ['#magic', '#tutorial', '#reveal'],
    createdAt: '2024-07-12T12:15:00Z'
  },
  {
    id: 'v5',
    userId: '5',
    username: 'addisonre',
    displayName: 'Addison Rae',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
    verified: true,
    description: 'obsessed with this song 💙 #music #dance #vibes',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1496024840928-4c417adf211d?w=400&h=700&fit=crop',
    soundId: 's3',
    soundName: 'Sí Señorita - Yolanda Be Cool',
    likes: '3.8M',
    comments: '94.2K',
    shares: '32.1K',
    isLiked: false,
    isFollowing: true,
    hashtags: ['#music', '#dance', '#vibes'],
    createdAt: '2024-07-11T18:30:00Z'
  }
];

export const mockComments = [
  {
    id: 'c1',
    videoId: 'v1',
    userId: '2',
    username: 'khaby.lame',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    verified: true,
    text: 'Amazing! 🔥',
    likes: '12.5K',
    isLiked: false,
    replies: 234,
    createdAt: '2024-07-15T11:30:00Z'
  },
  {
    id: 'c2',
    videoId: 'v1',
    userId: '3',
    username: 'bellapoarch',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    verified: true,
    text: 'Love this!! 💕',
    likes: '8.2K',
    isLiked: true,
    replies: 156,
    createdAt: '2024-07-15T12:45:00Z'
  },
  {
    id: 'c3',
    videoId: 'v1',
    userId: '4',
    username: 'zachking',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    verified: true,
    text: 'Tutorial please!',
    likes: '5.7K',
    isLiked: false,
    replies: 89,
    createdAt: '2024-07-15T13:20:00Z'
  }
];

export const mockNotifications = [
  {
    id: 'n1',
    type: 'like',
    userId: '2',
    username: 'khaby.lame',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    verified: true,
    text: 'liked your video',
    videoThumbnail: 'https://images.unsplash.com/photo-1547153760-18fc9498041c?w=100&h=100&fit=crop',
    timestamp: '2h ago',
    isRead: false
  },
  {
    id: 'n2',
    type: 'follow',
    userId: '3',
    username: 'bellapoarch',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    verified: true,
    text: 'started following you',
    timestamp: '5h ago',
    isRead: false
  },
  {
    id: 'n3',
    type: 'comment',
    userId: '4',
    username: 'zachking',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    verified: true,
    text: 'commented: "Amazing! 🔥"',
    videoThumbnail: 'https://images.unsplash.com/photo-1547153760-18fc9498041c?w=100&h=100&fit=crop',
    timestamp: '1d ago',
    isRead: true
  },
  {
    id: 'n4',
    type: 'mention',
    userId: '5',
    username: 'addisonre',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
    verified: true,
    text: 'mentioned you in a comment',
    videoThumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=100&h=100&fit=crop',
    timestamp: '2d ago',
    isRead: true
  }
];

export const mockHashtags = [
  { id: 'h1', name: '#fyp', views: '2.5T', isFollowing: false },
  { id: 'h2', name: '#dance', views: '1.8T', isFollowing: true },
  { id: 'h3', name: '#comedy', views: '986B', isFollowing: false },
  { id: 'h4', name: '#tutorial', views: '745B', isFollowing: true },
  { id: 'h5', name: '#viral', views: '1.2T', isFollowing: true }
];

export const mockMessages = [
  {
    id: 'm1',
    userId: '2',
    username: 'khaby.lame',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    lastMessage: 'Hey! Thanks for the collab idea 🙌',
    timestamp: '5m ago',
    unread: 2,
    verified: true
  },
  {
    id: 'm2',
    userId: '3',
    username: 'bellapoarch',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    lastMessage: 'Love your content! 💕',
    timestamp: '2h ago',
    unread: 0,
    verified: true
  },
  {
    id: 'm3',
    userId: '4',
    username: 'zachking',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    lastMessage: 'That magic trick was amazing!',
    timestamp: '1d ago',
    unread: 0,
    verified: true
  }
];
