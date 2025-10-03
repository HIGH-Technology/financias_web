import { AnchorHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import NextLink from 'next/link';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, href, variant = 'primary', ...props }, ref) => {
    const variants = {
      primary:
        'text-accent-neon hover:text-accent-neon/80 font-medium transition-colors duration-200',
      secondary:
        'text-primary-teal hover:text-primary-teal/80 font-medium transition-colors duration-200',
      ghost:
        'text-white/60 hover:text-white transition-colors duration-200',
    };

    return (
      <NextLink
        ref={ref}
        href={href}
        className={cn(variants[variant], className)}
        {...props}
      >
        {children}
      </NextLink>
    );
  }
);

Link.displayName = 'Link';

