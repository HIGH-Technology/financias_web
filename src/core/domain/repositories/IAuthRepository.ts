import type { AuthResponse, LoginCredentials, RegisterData } from '../entities/User';

export interface IAuthRepository {
  login(credentials: LoginCredentials): Promise<AuthResponse>;
  register(data: RegisterData): Promise<AuthResponse>;
}

