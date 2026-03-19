import { Post, Author } from "@/types";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: "admin" | "user";
}

export interface Notification {
  id: string;
  type: "info" | "warning" | "success";
  message: string;
  read: boolean;
  createdAt: string;
}

const authors: Author[] = [
  { id: "1", name: "John Doe", bio: "Tech writer", avatar: "" },
  { id: "2", name: "Jane Smith", bio: "React expert", avatar: "" },
];

const posts: Post[] = [
  {
    id: "1",
    title: "Next.js Guide",
    content: "This is Next.js content...",
    author: "1",
    date: "2026-03-01",
    tags: ["nextjs"],
    readTime: 5,
  },
  {
    id: "2",
    title: "React Basics",
    content: "React is awesome...",
    author: "2",
    date: "2026-03-02",
    tags: ["react"],
    readTime: 4,
  },
];

export async function getAllPosts(): Promise<Post[]> {
  return posts;
}

export async function getPostById(id: string): Promise<Post | undefined> {
  return posts.find((p) => p.id === id);
}

export async function getAuthorById(id: string): Promise<Author | undefined> {
  return authors.find((a) => a.id === id);
}

export function getCurrentUser(): User {
  return {
    id: "user-123",
    name: "Demo User",
    email: "demo@example.com",
    avatar: "",
    role: "user",
  };
}

export async function getUserNotifications(
  userId: string
): Promise<Notification[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return [
    {
      id: "1",
      type: "info",
      message: "Welcome to the dashboard!",
      read: false,
      createdAt: "2026-03-01",
    },
    {
      id: "2",
      type: "success",
      message: "Your profile was updated",
      read: true,
      createdAt: "2026-02-28",
    },
  ];
}

export async function getUserAnalytics(userId: string) {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return {
    pageViews: Math.floor(Math.random() * 10000),
    sessions: Math.floor(Math.random() * 1000),
    bounceRate: Math.random() * 100,
  };
}