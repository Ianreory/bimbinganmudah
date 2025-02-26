
export interface User {
  token: string | null;
}
export interface LoginResponse {
  status: number;
  message: string;
  token?: string; // Token bisa ada atau tidak
}
