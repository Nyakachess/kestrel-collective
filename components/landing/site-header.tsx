import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { appUrl } from '@/lib/app'

export const navLinks = [
  { href: '#why', label: 'Why Kestrel' },
  { href: '#how', label: 'How it works' },
  { href: '#partners', label: 'For partners' },
  { href: '#graduates', label: 'For graduates' },
  { href: '#nest', label: 'Nest' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center gap-8 px-5 py-3 md:px-8">
        <Link href="/" aria-label="Kestrel Collective home" className="shrink-0">
          <Image src="/kestrel-logo.png" alt="" width={676} height={240} priority className="h-10 w-auto" />
        </Link>

        <nav aria-label="Site" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-ink-2 transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <Link
            href={appUrl('/signup')}
            className="inline-flex min-h-10 items-center rounded-full border border-primary px-4 text-sm font-semibold text-primary transition-colors hover:bg-primary-soft"
          >
            Join as a graduate
          </Link>
          <a
            href="#partner-form"
            className="inline-flex min-h-10 items-center rounded-full bg-accent px-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-ink"
          >
            Discuss a project
          </a>
        </div>

        <details className="group ml-auto lg:hidden">
          <summary
            aria-label="Open menu"
            className="flex size-11 cursor-pointer list-none items-center justify-center rounded-lg border border-border text-primary [&::-webkit-details-marker]:hidden"
          >
            <Menu className="size-5" aria-hidden />
          </summary>
          <div className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-border bg-card px-5 py-4 shadow-lg">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="py-2 text-base font-medium text-ink-2">
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Link
                href={appUrl('/signup')}
                className="flex min-h-11 items-center justify-center rounded-full border border-primary text-sm font-semibold text-primary"
              >
                Join as a graduate
              </Link>
              <a
                href="#partner-form"
                className="flex min-h-11 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground"
              >
                Discuss a project
              </a>
            </div>
          </div>
        </details>
      </div>
    </header>
  )
}
