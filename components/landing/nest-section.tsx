import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getNestFeed, initials, NEST_REPO_URL, NEST_URL, pickRecentPages } from '@/lib/nest'
import { Eyebrow, SectionTitle } from './primitives'

const ladder = ['Make it run', 'Your page exists', 'Fix your defect', 'Write the test', 'Ship to shared code', 'Review a peer', 'Propose something']

const tones = ['bg-primary', 'bg-primary-mid', 'bg-success', 'bg-accent']

const STAGE_ONE_ISSUES_URL = `${NEST_REPO_URL}/issues?q=is%3Aopen+label%3Astage%3A1`

export async function NestSection() {
  const feed = await getNestFeed()
  const pages = feed ? pickRecentPages(feed, 3) : []
  const live = feed !== null
  const host = NEST_URL.replace(/^https?:\/\//, '')

  return (
    <section id="nest" className="scroll-mt-20 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Nest · {host}</Eyebrow>
            <SectionTitle className="max-w-[24ch]">Where first contributions live, and keep growing.</SectionTitle>
            <p className="mt-4 max-w-[60ch] text-pretty leading-relaxed text-ink-2">
              Nest is our own open-source project. Every graduate builds a page there through real pull requests,
              fixes a real defect, ships to shared code, and reviews a peer. The page is theirs for good, and it
              fills with verified work from any project they contribute to afterwards.
            </p>
          </div>
          <a
            href={live ? NEST_URL : NEST_REPO_URL}
            className="inline-flex min-h-11 shrink-0 items-center gap-1 self-start rounded-full border border-primary px-5 text-sm font-semibold text-primary transition-colors hover:bg-primary-soft md:self-auto"
          >
            {live ? 'Browse contributor pages' : 'Nest on GitHub'} <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pages.length > 0 ? (
            pages.map((p, i) => {
              const activity = p.counts.external + p.counts.shared
              const nameId = `nest-page-${p.handle}`
              return (
                <a
                  key={p.handle}
                  href={p.url}
                  aria-labelledby={nameId}
                  className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div
                    className={cn(
                      'flex size-11 items-center justify-center rounded-full font-display font-semibold text-primary-foreground',
                      tones[i % tones.length],
                    )}
                    aria-hidden
                  >
                    {initials(p.name)}
                  </div>
                  <h3 id={nameId} className="font-sans text-base font-bold text-foreground">
                    {p.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.intro}</p>
                  <p className="mt-auto flex items-center gap-3 font-mono text-[11px] text-muted-foreground">
                    {activity > 0 ? (
                      <>
                        <span className="flex items-center gap-1.5">
                          <span className="size-2 rounded-full bg-success" aria-hidden />
                          {p.counts.external} external
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="size-2 rounded-full bg-primary" aria-hidden />
                          {p.counts.shared} shared
                        </span>
                      </>
                    ) : (
                      <span>Stage {p.stage} of 7</span>
                    )}
                  </p>
                </a>
              )
            })
          ) : (
            <div className="flex flex-col gap-3 rounded-xl border border-dashed border-border-strong bg-card p-5 sm:col-span-2 lg:col-span-3">
              <p className="font-sans text-base font-bold text-foreground">The first pages are being built right now.</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Contributor pages appear here as their owners publish them, and the project is open to clone now.
              </p>
              <a
                href={STAGE_ONE_ISSUES_URL}
                className="mt-auto inline-flex items-center gap-1 self-start rounded-sm text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Start with Stage 1 on GitHub <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>
          )}
          <div className="flex flex-col gap-3 rounded-xl bg-sidebar p-5 text-sidebar-foreground">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-sidebar-muted">The ladder</p>
            <ol className="flex flex-col gap-1 text-sm">
              {ladder.map((step, i) => (
                <li key={step} className={cn('flex gap-2', i === 4 ? 'font-bold text-brand' : 'text-sidebar-foreground/85')}>
                  <span className="w-3 font-mono text-xs leading-5 text-sidebar-muted">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-auto text-xs text-sidebar-muted">An invitation, not a gate. Experienced? Start at 5.</p>
          </div>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          Practice on a learner&apos;s own page, contributions to Nest&apos;s shared code, and work accepted by other
          projects are counted and shown separately. Pages appear only when their owner publishes them.
          {feed ? ` Updated from Nest release ${feed.release}.` : null}
        </p>
      </div>
    </section>
  )
}
