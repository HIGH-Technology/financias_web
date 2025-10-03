import { useState } from 'react';
import { LoginUseCase } from '@/core/usecases/auth/LoginUseCase';
import { RegisterUseCase } from '@/core/usecases/auth/RegisterUseCase';
import { AuthRepository } from '@/infrastructure/repositories/AuthRepository';
import type { LoginCredentials, RegisterData, User } from '@/core/domain/entities/User';

const authRepository = new AuthRepository();
const loginUseCase = new LoginUseCase(authRepository);
const registerUseCase = new RegisterUseCase(authRepository);

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);

    try {
      const response = await loginUseCase.execute(credentials);
      
      if (!response.error && response.data) {
        setUser(response.data.user);
        // Aqui você pode salvar o token se necessário
        return response;
      } else {
        throw new Error(response.message || 'Erro ao fazer login');
      }
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data: RegisterData) => {
    setIsLoading(true);

    try {
      const response = await registerUseCase.execute(data);
      
      if (!response.error && response.data) {
        setUser(response.data.user);
        return response;
      } else {
        throw new Error(response.message || 'Erro ao registrar');
      }
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    isLoading,
    login,
    register,
    logout,
  };
}

