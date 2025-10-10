"use client"

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { LoginUseCase } from '@/core/usecases/auth/LoginUseCase';
import { RegisterUseCase } from '@/core/usecases/auth/RegisterUseCase';
import { AuthRepository } from '@/infrastructure/repositories/AuthRepository';
import type { LoginCredentials, RegisterData, User, AuthResponse } from '@/core/domain/entities/User';

const authRepository = new AuthRepository();
const loginUseCase = new LoginUseCase(authRepository);
const registerUseCase = new RegisterUseCase(authRepository);

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<AuthResponse>;
  register: (data: RegisterData) => Promise<AuthResponse>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    }
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);

    try {
      const response = await loginUseCase.execute(credentials);

      if (!response.error && response.data) {
        const { user, token } = response.data;
        setUser(user);

        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);

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
        const { user, token } = response.data;
        setUser(user);

        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);

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
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
