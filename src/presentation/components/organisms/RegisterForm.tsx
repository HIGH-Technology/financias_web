'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputField } from '../molecules/InputField';
import { PasswordInput } from '../molecules/PasswordInput';
import { CheckboxWithLabel } from '../molecules/CheckboxWithLabel';
import { Button } from '../atoms/Button';
import { Link } from '../atoms/Link';
import { Text } from '../atoms/Typography';
import { Mail, User, Phone, FileText, DollarSign } from 'lucide-react';
import { formatPhone, formatDocument, formatCurrency } from '@/shared/utils/validation';
import { registerSchema, type RegisterFormData } from '@/shared/schemas/auth.schemas';

export interface RegisterFormProps {
  onSubmit: (data: Omit<RegisterFormData, 'confirmPassword' | 'acceptTerms' | 'balance'> & { balance?: number }) => Promise<void>;
  isLoading?: boolean;
}

export function RegisterForm({ onSubmit, isLoading = false }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      document: '',
      balance: '',
      acceptTerms: false,
    },
  });

  const handlePhoneChange = (e: { target: { value: string } }) => {
    const formatted = formatPhone(e.target.value);
    setValue('phone', formatted, { shouldValidate: true });
  };

  const handleDocumentChange = (e: { target: { value: string } }) => {
    const formatted = formatDocument(e.target.value);
    setValue('document', formatted, { shouldValidate: true });
  };

  const handleBalanceChange = (e: { target: { value: string } }) => {
    const formatted = formatCurrency(e.target.value);
    setValue('balance', formatted, { shouldValidate: true });
  };

  const onSubmitForm = async (data: RegisterFormData) => {
    const { confirmPassword, acceptTerms, balance, ...rest } = data;
    
    const submitData = {
      ...rest,
      balance: balance && balance !== '' 
        ? Math.round(parseFloat(balance.replace(/[^\d,.-]/g, '').replace(',', '.')) * 100)
        : undefined,
    };
    
    await onSubmit(submitData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-3" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <InputField
          label="Nome"
          type="text"
          placeholder="João Silva"
          required
          error={errors.name?.message}
          icon={<User size={18} />}
          autoComplete="name"
          {...register('name')}
        />

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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <InputField
          label="Telefone"
          type="tel"
          placeholder="(11) 99999-9999"
          required
          value={watch('phone')}
          onChange={handlePhoneChange}
          error={errors.phone?.message}
          icon={<Phone size={18} />}
          autoComplete="tel"
        />

        <InputField
          label="CPF/CNPJ"
          type="text"
          placeholder="000.000.000-00"
          required
          value={watch('document')}
          onChange={handleDocumentChange}
          error={errors.document?.message}
          icon={<FileText size={18} />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <PasswordInput
          label="Senha"
          placeholder="••••••••"
          required
          error={errors.password?.message}
          autoComplete="new-password"
          {...register('password')}
        />

        <PasswordInput
          label="Confirmar"
          placeholder="••••••••"
          required
          error={errors.confirmPassword?.message}
          autoComplete="new-password"
          {...register('confirmPassword')}
        />
      </div>

      <InputField
        label="Saldo inicial"
        type="text"
        placeholder="0,00 (opcional)"
        value={watch('balance') || ''}
        onChange={handleBalanceChange}
        error={errors.balance?.message}
        icon={<DollarSign size={18} />}
      />

      <CheckboxWithLabel
        label={
          <>
            Aceito os{' '}
            <Link href="/terms" variant="primary" className="text-xs">
              termos de uso
            </Link>{' '}
            e{' '}
            <Link href="/privacy" variant="primary" className="text-xs">
              política de privacidade
            </Link>
          </>
        }
        id="acceptTerms"
        error={errors.acceptTerms?.message}
        {...register('acceptTerms')}
      />

      <Button type="submit" fullWidth isLoading={isLoading}>
        Criar conta
      </Button>

      <div className="text-center pt-1">
        <Text variant="small" muted>
          Já tem conta?{' '}
          <Link href="/login" variant="primary">
            Entrar
          </Link>
        </Text>
      </div>
    </form>
  );
}

