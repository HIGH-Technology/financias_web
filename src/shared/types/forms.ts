// Types moved to schemas/auth.schemas.ts using Zod
export type { LoginFormData, RegisterFormData } from '@/shared/schemas/auth.schemas';

export interface FormFieldError {
  field: string;
  message: string;
}

