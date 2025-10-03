import type { IAuthRepository } from '@/core/domain/repositories/IAuthRepository';
import type { RegisterData, AuthResponse } from '@/core/domain/entities/User';

export class RegisterUseCase {
  constructor(private authRepository: IAuthRepository) {}

  async execute(data: RegisterData): Promise<AuthResponse> {
    return await this.authRepository.register(data);
  }
}

