import { z } from 'zod';

export const loginSchema = z
  .object({
    email: z
      .string()
      .min(1, 'Email é obrigatório')
      .email('Email inválido'),
    password: z
      .string()
      .min(1, 'Senha é obrigatória')
      .min(6, 'Senha deve ter no mínimo 6 caracteres'),
    rememberMe: z.boolean().optional(),
  })
  .transform((data) => ({
    ...data,
    rememberMe: data.rememberMe ?? false,
  }));

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Nome é obrigatório')
      .min(3, 'Nome deve ter no mínimo 3 caracteres'),
    email: z
      .string()
      .min(1, 'Email é obrigatório')
      .email('Email inválido'),
    phone: z
      .string()
      .min(1, 'Telefone é obrigatório')
      .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Telefone inválido'),
    document: z
      .string()
      .min(1, 'CPF/CNPJ é obrigatório')
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 'CPF/CNPJ inválido'),
    password: z
      .string()
      .min(1, 'Senha é obrigatória')
      .min(6, 'Senha deve ter no mínimo 6 caracteres'),
    confirmPassword: z.string().min(1, 'Confirmação de senha é obrigatória'),
    balance: z.string().optional(),
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: 'Você deve aceitar os termos',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;

