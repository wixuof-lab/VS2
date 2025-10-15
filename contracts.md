# TikTok Mobile Replica - Contracts & Implementation Plan

## Frontend Status (COMPLETADO con Mock Data)

### Páginas Implementadas
1. **Feed (Para ti / Siguiendo)** ✅
   - Scroll vertical infinito con videos
   - Reproducción automática de videos
   - Botones de acción: Like, Comment, Bookmark, Share, More
   - Botón de seguir en el perfil del video
   - Información del video: username, descripción, sound
   - Navegación superior con tabs "Siguiendo" y "Para ti"

2. **Discover (Buscar)** ✅
   - Barra de búsqueda
   - Tendencias con búsquedas populares
   - Hashtags populares con botón seguir/siguiendo
   - Grid de videos en tendencia
   - Filtros: Todo, Usuarios, Videos, Sonidos, Hashtags

3. **Create (Crear Video)** ✅
   - Vista de cámara (mockeada en demo)
   - Botón de subir video desde dispositivo
   - Herramientas de edición: Sonidos, Efectos, Texto, Cortar
   - Pantalla de publicación con descripción
   - Configuración de privacidad
   - Opciones de permitir: Comentar, Dueto, Stitch

4. **Inbox (Bandeja de entrada)** ✅
   - Tabs: Notificaciones y Mensajes
   - Notificaciones con filtros: Todos, Me gusta, Comentarios, Seguidores, Menciones
   - Lista de notificaciones con tipo (like, follow, comment, mention)
   - Lista de mensajes directos con contador de no leídos

5. **Profile (Perfil)** ✅
   - Avatar, username, displayName verificado
   - Stats: Siguiendo, Seguidores, Me gusta
   - Botones: Editar perfil, Bookmark, Share
   - Biografía del usuario
   - Tabs: Videos publicados, Videos con like, Videos guardados
   - Grid de videos con contador de views

### Componentes
- **BottomNav** ✅ - Navegación inferior con 5 tabs
- **Mock Data** ✅ - Datos de usuarios, videos, comentarios, notificaciones, hashtags, mensajes

## Mock Data (mockData.js)

### Actualmente Mockeado:
1. **mockUsers** - 5 usuarios con avatares, stats, verificación
2. **mockVideos** - 5 videos con toda la metadata necesaria
3. **mockComments** - Comentarios de ejemplo
4. **mockNotifications** - 4 notificaciones de diferentes tipos
5. **mockHashtags** - 5 hashtags populares
6. **mockMessages** - 3 conversaciones de mensajes
7. **mockSounds** - 3 sonidos/músicas de ejemplo

## Backend Implementation Plan

### MongoDB Models

```python
# User Model
{
  "_id": ObjectId,
  "username": str,
  "displayName": str,
  "email": str,
  "avatar": str (URL),
  "bio": str,
  "verified": bool,
  "followers_count": int,
  "following_count": int,
  "likes_count": int,
  "google_id": str,
  "created_at": datetime,
  "updated_at": datetime
}

# Video Model
{
  "_id": ObjectId,
  "user_id": ObjectId,
  "video_url": str,
  "thumbnail_url": str,
  "description": str,
  "sound_id": ObjectId,
  "sound_name": str,
  "hashtags": [str],
  "likes_count": int,
  "comments_count": int,
  "shares_count": int,
  "views_count": int,
  "privacy": str, # "public", "friends", "private"
  "allow_comments": bool,
  "allow_duet": bool,
  "allow_stitch": bool,
  "created_at": datetime
}

# Comment Model
{
  "_id": ObjectId,
  "video_id": ObjectId,
  "user_id": ObjectId,
  "text": str,
  "likes_count": int,
  "replies_count": int,
  "parent_comment_id": ObjectId (nullable),
  "created_at": datetime
}

# Like Model
{
  "_id": ObjectId,
  "user_id": ObjectId,
  "video_id": ObjectId,
  "created_at": datetime
}

# Follow Model
{
  "_id": ObjectId,
  "follower_id": ObjectId,
  "following_id": ObjectId,
  "created_at": datetime
}

# Notification Model
{
  "_id": ObjectId,
  "user_id": ObjectId, # recipient
  "from_user_id": ObjectId,
  "type": str, # "like", "comment", "follow", "mention"
  "video_id": ObjectId (nullable),
  "comment_id": ObjectId (nullable),
  "is_read": bool,
  "created_at": datetime
}

# Message Model
{
  "_id": ObjectId,
  "conversation_id": str,
  "sender_id": ObjectId,
  "receiver_id": ObjectId,
  "text": str,
  "is_read": bool,
  "created_at": datetime
}

# Sound Model
{
  "_id": ObjectId,
  "name": str,
  "author": str,
  "cover_image": str,
  "audio_url": str,
  "video_count": int,
  "created_at": datetime
}

# Hashtag Model
{
  "_id": ObjectId,
  "name": str,
  "views_count": int,
  "created_at": datetime
}
```

### API Endpoints

#### Authentication
- `POST /api/auth/google` - Google OAuth login/signup
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user

#### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `GET /api/users/:id/videos` - Get user's videos
- `GET /api/users/:id/liked` - Get user's liked videos
- `GET /api/users/:id/followers` - Get followers list
- `GET /api/users/:id/following` - Get following list

#### Videos
- `GET /api/videos/feed` - Get feed videos (For You algorithm)
- `GET /api/videos/following` - Get following feed
- `GET /api/videos/:id` - Get single video
- `POST /api/videos` - Upload video
- `PUT /api/videos/:id` - Update video
- `DELETE /api/videos/:id` - Delete video
- `POST /api/videos/:id/like` - Like video
- `DELETE /api/videos/:id/like` - Unlike video
- `GET /api/videos/trending` - Get trending videos
- `GET /api/videos/search` - Search videos

#### Comments
- `GET /api/videos/:id/comments` - Get video comments
- `POST /api/videos/:id/comments` - Post comment
- `DELETE /api/comments/:id` - Delete comment
- `POST /api/comments/:id/like` - Like comment

#### Follows
- `POST /api/users/:id/follow` - Follow user
- `DELETE /api/users/:id/follow` - Unfollow user

#### Notifications
- `GET /api/notifications` - Get notifications
- `PUT /api/notifications/:id/read` - Mark as read
- `PUT /api/notifications/read-all` - Mark all as read

#### Messages
- `GET /api/messages/conversations` - Get conversations list
- `GET /api/messages/:conversationId` - Get messages in conversation
- `POST /api/messages` - Send message
- `PUT /api/messages/:id/read` - Mark message as read

#### Search
- `GET /api/search` - Universal search (users, videos, sounds, hashtags)
- `GET /api/search/users` - Search users
- `GET /api/search/hashtags` - Search hashtags
- `GET /api/search/sounds` - Search sounds

#### Hashtags
- `GET /api/hashtags/trending` - Get trending hashtags
- `GET /api/hashtags/:name/videos` - Get videos by hashtag

#### Sounds
- `GET /api/sounds/:id` - Get sound details
- `GET /api/sounds/:id/videos` - Get videos using sound
- `GET /api/sounds/trending` - Get trending sounds

## Video Upload Strategy

### Frontend
1. User selects video file
2. Chunk the video file (5MB chunks)
3. Upload chunks sequentially with progress tracking
4. Send metadata after successful upload

### Backend
1. Receive video chunks
2. Store chunks temporarily
3. Once all chunks received, combine them
4. Generate thumbnail from video (first frame)
5. Store video in persistent location (e.g., /app/backend/uploads/)
6. Save video record in MongoDB
7. Return video URL and metadata

**Important**: Videos will be stored locally in `/app/backend/uploads/videos/` and thumbnails in `/app/backend/uploads/thumbnails/`

## Frontend-Backend Integration

### Changes Needed in Frontend:

1. **Replace mockData imports** with API calls:
   - Feed.jsx: Fetch videos from `/api/videos/feed` or `/api/videos/following`
   - Discover.jsx: Fetch from `/api/hashtags/trending`, `/api/videos/trending`, `/api/search`
   - Inbox.jsx: Fetch from `/api/notifications`, `/api/messages/conversations`
   - Profile.jsx: Fetch from `/api/users/:id`, `/api/users/:id/videos`

2. **Add Authentication Context**:
   - Create AuthContext to manage user session
   - Store JWT token in localStorage
   - Add Google OAuth button
   - Protect routes that require authentication

3. **Implement Real Video Upload**:
   - Create file upload with chunking
   - Add progress bar
   - Handle video processing status

4. **Add Real-time Features** (Optional for MVP):
   - WebSocket for notifications
   - Real-time message updates

## Authentication Flow

1. User clicks "Sign in with Google"
2. Google OAuth flow redirects to callback URL
3. Backend receives Google token
4. Backend validates token with Google
5. Backend creates/updates user in MongoDB
6. Backend returns JWT token
7. Frontend stores JWT in localStorage
8. Frontend includes JWT in Authorization header for all API calls

## Next Steps

### Phase 1: Authentication (PRIORITY 1)
1. Integrate Emergent Google Social Login
2. Create JWT middleware
3. Implement user registration/login flow
4. Add protected routes

### Phase 2: Core Video Features (PRIORITY 2)
1. Video upload with chunking
2. Video storage and serving
3. Feed algorithm (simple: recent videos from followed users + random)
4. Like/Comment/Share functionality

### Phase 3: Social Features (PRIORITY 3)
1. Follow/Unfollow
2. User profiles
3. Notifications
4. Search functionality

### Phase 4: Additional Features (PRIORITY 4)
1. Direct messages
2. Hashtags and Sounds
3. Video editing (if time permits)
4. Real-time notifications

## Notes

- All video URLs in mock data are currently using sample videos
- Videos are set to muted autoplay to avoid browser restrictions
- The UI is fully responsive for mobile viewport (375x812)
- All interactive elements are functional in the frontend (using local state)
- Backend will need to implement the same state management logic
