import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  product = 'Contributors',
  inverted,
  className,
}: {
  product?: 'Contributors' | 'Staff'
  inverted?: boolean
  className?: string
}) {
  return (
    <Link href="/tickets" className={cn('flex items-center gap-3', className)} aria-label={`Kestrel Collective ${product}`}>
      <Image
        src="/kestrel-logo.png"
        alt=""
        width={676}
        height={240}
        priority
        className="h-9 w-auto shrink-0"
      />
      <span
        aria-hidden
        className={cn(
          'border-l pl-3 font-mono text-[11px] font-medium uppercase leading-none tracking-[0.14em]',
          inverted ? 'border-sidebar-border text-sidebar-muted' : 'border-border text-muted-foreground',
        )}
      >
        {product}
      </span>
    </Link>
  )
}
