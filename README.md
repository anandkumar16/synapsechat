# Synapsechat

**Synapsechat** is a modern, full-stack real-time chat application inspired by Discord. It offers a seamless communication experience through features like server-based channels, direct messaging, file uploads, and integrated audio/video chat.

## 🚀 Features

- 🔐 **Authentication**: Secure sign-in/sign-up with [Clerk](https://clerk.dev)
- 🏠 **Servers & Channels**: Create and manage servers with text, audio, and video channels
- 💬 **Direct Messages**: One-on-one private conversations
- ⚡ **Real-time Messaging**: Instant updates powered by [Socket.io](https://socket.io)
- 🎥 **Audio/Video Rooms**: Media chat rooms using [LiveKit](https://livekit.io)
- 📁 **File Uploads**: Share images and PDFs using [UploadThing](https://uploadthing.com)
- 👥 **Role Management**: Admin, Moderator, and Guest roles for server members
- 🎨 **Modern UI**: Built with React, Next.js, and Tailwind CSS

---

### 1. Clone the repository

```bash
git clone https://github.com/your-username/synapsechat.git
cd synapsechat
```

## 🛠️ Installation

```
npm install
```

Configure environment variables:
Copy .env.example to .env and fill in your database, Clerk, and LiveKit credentials.

Set up the database

```bash
npx prisma generate
npx prisma migrate dev
```
Run the development server
```bash
npm run dev
```

Open http://localhost:3000 to view the app in your browser.

Scripts
npm run dev – Start the development server
npm run build – Build for production (runs prisma generate first)
npm run start – Start the production server
npm run lint – Lint the codebase

Folder Structure
app/ – Next.js app directory (pages, API routes, layouts)
components/ – Reusable UI and feature components
hooks/ – Custom React hooks
lib/ – Utility functions and database logic
prisma/ – Prisma schema and migrations
public/ – Static assets

Contributing
Contributions are welcome! Please open issues or pull requests for new features, bug fixes, or suggestions.
