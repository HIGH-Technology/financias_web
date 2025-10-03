import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        className={cn(
          'h-4 w-4 rounded border-white/20 bg-white/5 text-primary-teal transition-colors duration-200 focus:ring-2 focus:ring-primary-teal/50 focus:ring-offset-0 cursor-pointer',
          className
        )}
        {...props}
      />
    );
  }
);

Checkbox.displayName = 'Checkbox';

