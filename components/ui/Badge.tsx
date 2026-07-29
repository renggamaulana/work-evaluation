import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'tag';
}

export default function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs',
        variant === 'default' && 'bg-white/10 text-gray-300',
        variant === 'outline' && 'border border-white/20 text-gray-400',
        variant === 'tag' && 'bg-teal-500/20 text-teal-400 border border-teal-500/30',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
