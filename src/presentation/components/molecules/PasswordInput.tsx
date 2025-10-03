'use client';

import { forwardRef, useState } from 'react';
import { InputField, InputFieldProps } from './InputField';
import { Eye, EyeOff } from 'lucide-react';

export type PasswordInputProps = Omit<InputFieldProps, 'type'>;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    const icon = (
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="cursor-pointer text-white/40 hover:text-white/60 transition-colors pointer-events-auto"
        aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
        tabIndex={-1}
      >
        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    );

    return (
      <div className="w-full">
        <InputField
          ref={ref}
          type={showPassword ? 'text' : 'password'}
          icon={icon}
          iconPosition="right"
          {...props}
        />
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

