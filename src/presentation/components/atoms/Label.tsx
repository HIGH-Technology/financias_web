import { LabelHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, className, required = false, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          'block text-sm font-medium text-white/80 mb-1.5',
          className
        )}
        {...props}
      >
        {children}
        {required && <span className="ml-1 text-accent-neon">*</span>}
      </label>
    );
  }
);

Label.displayName = 'Label';

