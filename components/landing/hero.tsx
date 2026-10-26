import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { appUrl } from '@/lib/app'

const proofs = [
  'Every contribution verified against a merged pull request',
  'Published assessment rubric',
  'No CV required to start',
]

const competencies = [
  { name: 'Debugging', level: 'Supported', filled: 2 },
  { name: 'Automated testing', level: 'Guided', filled: 1 },
  { name: 'Technical communication', level: 'Supported', filled: 2 },
]

const merged = ['savanna-maps/geotiler#212', 'okapi-cms/okapi#187']

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-12 md:px-8 md:pt-20 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-24">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent-ink">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
            Graduate development on real work
          </p>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.02] text-foreground sm:text-5xl lg:text-6xl">
            Experience you can <span className="text-primary">verify</span>.
            <br />
            Outcomes you can <span className="text-accent">measure</span>.
          </h1>
          <p className="mt-6 max-w-[52ch] text-pretty text-lg leading-relaxed text-ink-2">
            Kestrel turns real digital and technology challenges from universities and organisations into
            structured, supported projects. Graduates build evidence of what they can do. Partners get work
            delivered and outcomes they can report.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#partner-form"
              className="inline-flex min-h-12 items-center rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground transition-colors hover:bg-sidebar"
            >
              Discuss a project
            </a>
            <Link
              href={appUrl('/signup')}
              className="inline-flex min-h-12 items-center rounded-full border border-border bg-card px-6 text-base font-semibold text-foreground transition-colors hover:border-primary"
            >
              Join as a graduate
            </Link>
          </div>
          <ul className="mt-8 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-6">
            {proofs.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Check className="size-4 shrink-0 text-primary" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <figure className="relative">
            <div className="rounded-2xl border border-border bg-card shadow-[0_24px_60px_-20px_rgba(10,110,120,0.35)]">
              <div className="flex items-center justify-between gap-3 rounded-t-2xl bg-sidebar px-5 py-3 text-sidebar-foreground">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-sidebar-muted">
                  Evidence record
                </span>
                <span className="font-mono text-[11px] text-sidebar-muted">KES-2026-0001</span>
              </div>
              <div className="flex flex-col gap-5 p-5">
                <div className="flex items-center gap-3">
                  <div
                    className="flex size-11 items-center justify-center rounded-full bg-primary font-display text-base font-semibold text-primary-foreground"
                    aria-hidden
                  >
                    AO
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Amara O.</p>
                    <p className="font-mono text-xs text-muted-foreground">cohort 2027-01</p>
                  </div>
                </div>
                <ul className="flex flex-col gap-4">
                  {competencies.map((c) => (
                    <li key={c.name} className="flex flex-col gap-2">
                      <div className="flex items-center justify-between gap-3 text-sm">
                        <span className="text-foreground">{c.name}</span>
                        <span
                          className={
                            c.filled > 1
                              ? 'rounded-full bg-primary-soft px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-primary'
                              : 'rounded-full border border-border px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-ink-2'
                          }
                        >
                          {c.level}
                        </span>
                      </div>
                      <div className="flex gap-1" role="img" aria-label={`${c.filled} of 3 levels`}>
                        {[0, 1, 2].map((i) => (
                          <span
                            key={i}
                            className={i < c.filled ? 'h-1.5 flex-1 rounded-full bg-brand' : 'h-1.5 flex-1 rounded-full bg-muted'}
                          />
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-2 border-t border-dashed border-border pt-4 text-sm">
                  {merged.map((pr) => (
                    <li key={pr} className="flex flex-wrap items-center gap-2">
                      <span className="size-2.5 rounded-full bg-success" aria-hidden />
                      <span className="font-mono text-xs text-ink-2">{pr}</span>
                      <span className="text-xs text-muted-foreground">merged</span>
                      <Link
                        href={appUrl('/verify/KES-2026-0001')}
                        className="ml-auto inline-flex items-center gap-0.5 text-xs font-bold text-primary hover:underline"
                      >
                        verify <ArrowUpRight className="size-3" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <figcaption className="mt-3 px-1 text-sm text-muted-foreground">
              What a graduate leaves with: a record anyone can check, not a line on a CV.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
