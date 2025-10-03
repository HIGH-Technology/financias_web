import type { IAuthRepository } from '@/core/domain/repositories/IAuthRepository';
import type { LoginCredentials, AuthResponse } from '@/core/domain/entities/User';

export class LoginUseCase {
  constructor(private authRepository: IAuthRepository) {}

  async execute(credentials: LoginCredentials): Promise<AuthResponse> {
    return await this.authRepository.login(credentials);
  }
}

