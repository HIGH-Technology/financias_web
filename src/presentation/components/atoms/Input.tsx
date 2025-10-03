import { InputHTMLAttributes, forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      error = false,
      icon,
      iconPosition = 'left',
      type = 'text',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'w-full rounded-lg bg-white/5 px-4 py-3 text-white placeholder:text-white/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-teal/50 border backdrop-blur-sm';

    const errorStyles = error
      ? 'border-red-500/50 focus:ring-red-500/50'
      : 'border-white/10 hover:border-white/20';

    const paddingWithIcon = icon
      ? iconPosition === 'left'
        ? 'pl-11'
        : 'pr-11'
      : '';

    if (icon) {
      return (
        <div className="relative">
          {iconPosition === 'left' && (
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            type={type}
            className={cn(
              baseStyles,
              errorStyles,
              paddingWithIcon,
              className
            )}
            {...props}
          />
          {iconPosition === 'right' && (
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/40">
              {icon}
            </div>
          )}
        </div>
      );
    }

    return (
      <input
        ref={ref}
        type={type}
        className={cn(baseStyles, errorStyles, className)}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

