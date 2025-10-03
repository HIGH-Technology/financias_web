'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { AuthLayout } from '../components/organisms/AuthLayout';
import { LoginForm } from '../components/organisms/LoginForm';
import { Heading, Text } from '../components/atoms/Typography';
import { useAuth } from '@/shared/hooks/useAuth';
import type { LoginFormData } from '@/shared/types/forms';

export function LoginPage() {
  const router = useRouter();
  const { login, isLoading } = useAuth();

  const handleLogin = async (data: LoginFormData) => {
    try {
      await login({
        email: data.email,
        password: data.password,
      });

      toast.success('Login realizado com sucesso!', {
        description: 'Redirecionando para o dashboard...',
      });

      setTimeout(() => {
        router.push('/dashboard');
      }, 1000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao fazer login';
      toast.error('Erro no login', {
        description: errorMessage,
      });
    }
  };

  return (
    <AuthLayout>
      <div className="space-y-4">
        <div className="text-center space-y-1">
          <div className="inline-block p-2 rounded-lg bg-gradient-to-br from-primary-teal to-accent-neon/50 mb-1">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <Heading as="h1" gradient className="text-2xl">
            Bem-vindo
          </Heading>
          <Text muted className="text-sm">Entre com suas credenciais para continuar</Text>
        </div>

        <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
      </div>
    </AuthLayout>
  );
}

