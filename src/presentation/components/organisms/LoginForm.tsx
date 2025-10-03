'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputField } from '../molecules/InputField';
import { PasswordInput } from '../molecules/PasswordInput';
import { CheckboxWithLabel } from '../molecules/CheckboxWithLabel';
import { Button } from '../atoms/Button';
import { Link } from '../atoms/Link';
import { Text } from '../atoms/Typography';
import { Mail } from 'lucide-react';
import { loginSchema, type LoginFormData } from '@/shared/schemas/auth.schemas';

export interface LoginFormProps {
  onSubmit: (data: LoginFormData) => Promise<void>;
  isLoading?: boolean;
}

export function LoginForm({ onSubmit, isLoading = false }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmitForm = async (data: LoginFormData) => {
    await onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4" noValidate>
      <InputField
        label="Email"
        type="email"
        placeholder="seu@email.com"
        required
        error={errors.email?.message}
        icon={<Mail size={18} />}
        autoComplete="email"
        {...register('email')}
      />

      <PasswordInput
        label="Senha"
        placeholder="********"
        required
        error={errors.password?.message}
        autoComplete="current-password"
        {...register('password')}
      />

      <div className="flex items-center justify-between gap-2 text-sm">
        <CheckboxWithLabel
          label="Lembrar-me"
          id="rememberMe"
          {...register('rememberMe')}
        />
        <Link href="/forgot-password" variant="ghost" className="text-xs whitespace-nowrap">
          Esqueceu a senha?
        </Link>
      </div>

      <Button type="submit" fullWidth isLoading={isLoading}>
        Entrar
      </Button>

      <div className="text-center pt-1">
        <Text variant="small" muted>
          Não tem conta?{' '}
          <Link href="/register" variant="primary">
            Criar conta
          </Link>
        </Text>
      </div>
    </form>
  );
}

