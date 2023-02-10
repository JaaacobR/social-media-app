export interface CommentProps {
  user: User;
  content: string;
}

interface User {
  id: string;
  name: string;
}
