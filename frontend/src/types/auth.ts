// types/auth.ts
export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface AuthErrorResponse {
  success: false;
  message: string;
}



export interface AuthSuccessResponse {
  success: boolean;
  user: User;
}


export type AuthResponse = AuthSuccessResponse | AuthErrorResponse;
