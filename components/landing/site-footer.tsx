import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from './site-header'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <Image src="/kestrel-logo.png" alt="Kestrel Collective" width={676} height={240} className="h-9 w-auto self-start" />
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-2">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary">
              {l.label}
            </a>
          ))}
          <Link href="/rubric" className="hover:text-primary">Rubric</Link>
        </nav>
        <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] text-muted-foreground">
          <a href="mailto:hello@kestrelcollective.org" className="hover:text-primary">Contact</a>
          <span>&copy; 2026 Kestrel Collective</span>
        </div>
      </div>
    </footer>
  )
}
