import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Eyebrow({ children, inverted }: { children: ReactNode; inverted?: boolean }) {
  return (
    <p
      className={cn(
        'font-mono text-[11px] font-medium uppercase tracking-[0.16em]',
        inverted ? 'text-sidebar-muted' : 'text-primary',
      )}
    >
      {children}
    </p>
  )
}

export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={cn('mt-3 text-balance font-display text-3xl font-semibold leading-tight md:text-4xl', className)}>
      {children}
    </h2>
  )
}
