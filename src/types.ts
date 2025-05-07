export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CommentData {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface PaginationType{
  count: number,
  sort: string,
  page: number,
  from: number,
  to: number,
}
