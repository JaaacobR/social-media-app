export interface PostProps {
  user: User;
  photoUrl: string;
  description: string;
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
