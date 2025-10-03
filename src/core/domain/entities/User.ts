export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  document: string;
  balance: number;
  role: 'Administrator' | 'User';
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone: string;
  document: string;
  balance?: number;
}

export interface AuthResponse {
  error: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

