import { forwardRef, ReactNode } from 'react';
import { Input, InputProps } from '../atoms/Input';
import { Label } from '../atoms/Label';
import { Text } from '../atoms/Typography';

export interface InputFieldProps extends Omit<InputProps, 'error'> {
  label: string;
  error?: string;
  helperText?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      error,
      helperText,
      required,
      id,
      icon,
      iconPosition,
      ...inputProps
    },
    ref
  ) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        <Label htmlFor={inputId} required={required}>
          {label}
        </Label>
        <Input
          ref={ref}
          id={inputId}
          error={!!error}
          icon={icon}
          iconPosition={iconPosition}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...inputProps}
        />
        {error && (
          <Text
            variant="small"
            className="mt-1.5 text-red-400"
            id={`${inputId}-error`}
            role="alert"
          >
            {error}
          </Text>
        )}
        {helperText && !error && (
          <Text variant="small" muted className="mt-1.5">
            {helperText}
          </Text>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

