export type Post = {
  id: string;
  title: string;
  body: string;
  tags: string[];
  reactions: {likes: number; dislikes: number;};
  views: number;
  userId: number;
};