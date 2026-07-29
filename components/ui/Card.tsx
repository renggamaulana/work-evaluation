import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'challenges';
}

export default function Card({ className, variant = 'default', children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-white/10 p-4 md:p-6 transition-all duration-300 flex flex-col',
        'hover:border-teal-400/40 hover:shadow-teal-500/10 hover:shadow-lg',
        variant === 'challenges' ? 'bg-slate-900/80' : 'bg-white/5',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
