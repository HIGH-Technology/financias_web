import { ReactNode } from 'react';

export interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="h-full bg-base-dark flex items-center justify-center p-3 md:p-4 relative overflow-hidden">
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-5 md:p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

