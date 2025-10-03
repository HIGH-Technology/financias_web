import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  gradient?: boolean;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, as: Component = 'h1', gradient = false, ...props }, ref) => {
    const styles = {
      h1: 'text-4xl md:text-5xl font-bold',
      h2: 'text-3xl md:text-4xl font-bold',
      h3: 'text-2xl md:text-3xl font-semibold',
      h4: 'text-xl md:text-2xl font-semibold',
      h5: 'text-lg md:text-xl font-medium',
      h6: 'text-base md:text-lg font-medium',
    };

    const gradientStyle = gradient
      ? 'bg-gradient-to-r from-accent-neon to-primary-teal bg-clip-text text-transparent'
      : 'text-white';

    return (
      <Component
        ref={ref}
        className={cn(styles[Component], gradientStyle, className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: 'body' | 'small' | 'tiny';
  muted?: boolean;
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, className, variant = 'body', muted = false, ...props }, ref) => {
    const variants = {
      body: 'text-base',
      small: 'text-sm',
      tiny: 'text-xs',
    };

    const colorStyle = muted ? 'text-white/60' : 'text-white/90';

    return (
      <p
        ref={ref}
        className={cn(variants[variant], colorStyle, className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = 'Text';

