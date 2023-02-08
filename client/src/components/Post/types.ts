export interface PostProps {
  user: User;
  photos: string[];
  reactions: User[];
  comments: Comment;
}

interface User {
  id: string;
  fullName: string;
}

interface Comment {
  content: string;
  user: User;
}
