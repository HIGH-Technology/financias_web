import type { IAuthRepository } from '@/core/domain/repositories/IAuthRepository';
import type {
  AuthResponse,
  LoginCredentials,
  RegisterData,
} from '@/core/domain/entities/User';
import { authControllerLogin, authControllerRegister } from '@/api/generated/auth/auth';

export class AuthRepository implements IAuthRepository {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await authControllerLogin({
        email: credentials.email,
        password: credentials.password,
      });

      return response as AuthResponse;
    } catch {
      throw new Error('Falha ao realizar login. Verifique suas credenciais.');
    }
  }

  async register(data: RegisterData): Promise<AuthResponse> {
    try {
      const response = await authControllerRegister({
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
        document: data.document,
      });

      return response as AuthResponse;
    } catch {
      throw new Error('Falha ao registrar usuário. Tente novamente.');
    }
  }
}

