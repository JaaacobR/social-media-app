export interface User {
  id: string;
  gender: string;
  fullName: string;
  biography: string;
}
export interface Credentials {
  email: string;
  hash_password: string;
}

export interface PostData {
  user_id: string;
  description: string;
}