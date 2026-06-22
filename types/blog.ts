export type Blog = {
    id: number;
    title: string;
    description: string;
    content: string;
    thumbnail: string | null;
    createdAt: string;
    author: {
      id: number;
      username: string;
      email: string;
    };
  };