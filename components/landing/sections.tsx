import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

function Eyebrow({ children, inverted }: { children: ReactNode; inverted?: boolean }) {
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

function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={cn('mt-3 text-balance font-display text-3xl font-semibold leading-tight md:text-4xl', className)}>
      {children}
    </h2>
  )
}

const problems = [
  {
    title: 'Graduates meet a wall',
    body: 'Employers ask for practical experience. The only way to get it has been to already have it.',
  },
  {
    title: 'Universities need outcomes',
    body: 'Employability has to be shown, not asserted, and placements do not scale to every student.',
  },
  {
    title: 'Organisations have unfunded work',
    body: 'Dashboards, reviews, and digital improvements that matter but never reach the top of the list.',
  },
]

export function ProblemSection() {
  return (
    <section id="why" className="scroll-mt-20 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow>The problem</Eyebrow>
          <SectionTitle>A degree should lead to more than a qualification.</SectionTitle>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {problems.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-sans text-base font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{p.body}</p>
            </div>
          ))}
          <div className="rounded-xl border border-primary bg-primary-soft p-5">
            <h3 className="font-sans text-base font-bold text-sidebar">Kestrel connects the three</h3>
            <p className="mt-2 text-sm leading-relaxed text-sidebar">
              Scoped projects, prepared graduates, supported delivery, and evidence of the result that all three
              can use.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    name: 'Scope',
    partner: 'Share a challenge; we shape it into bounded work with a clear outcome.',
    graduate: 'Join, tell us your availability, and start with a capped first task.',
  },
  {
    name: 'Prepare',
    partner: 'Approve the plan and the people.',
    graduate: 'Get oriented in the codebase, a guide for the work, and a coach to check in with.',
  },
  {
    name: 'Deliver',
    partner: 'See progress without managing it.',
    graduate: 'Do the work in bounded hold windows, with support that never costs you credit.',
  },
  {
    name: 'Verify',
    partner: 'Receive the outcome and a report you can cite.',
    graduate: 'Get verified evidence: merged work, scored against a public rubric, on a page you own.',
  },
]

export function HowSection() {
  return (
    <section id="how" className="scroll-mt-20 border-y border-border bg-card px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Eyebrow>How it works</Eyebrow>
        <SectionTitle className="max-w-[24ch]">One structured process, seen from both sides.</SectionTitle>
        <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const last = i === steps.length - 1
            return (
              <li
                key={s.name}
                className={cn('flex flex-col gap-4 p-6', last ? 'bg-sidebar text-sidebar-foreground' : 'bg-background')}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      'flex size-8 items-center justify-center rounded-full font-mono text-xs font-bold',
                      last ? 'bg-brand text-sidebar' : 'bg-accent-soft text-accent-ink',
                    )}
                  >
                    {i + 1}
                  </span>
                  <h3 className={cn('font-display text-xl font-semibold', last && 'text-sidebar-foreground')}>
                    {s.name}
                  </h3>
                </div>
                <div className="flex flex-col gap-3 text-sm leading-relaxed">
                  <p className={last ? 'text-sidebar-foreground/85' : 'text-ink-2'}>
                    <span className={cn('block font-mono text-[10px] uppercase tracking-[0.14em]', last ? 'text-sidebar-muted' : 'text-muted-foreground')}>
                      Partners
                    </span>
                    {s.partner}
                  </p>
                  <p className={last ? 'text-sidebar-foreground/85' : 'text-ink-2'}>
                    <span className={cn('block font-mono text-[10px] uppercase tracking-[0.14em]', last ? 'text-sidebar-muted' : 'text-muted-foreground')}>
                      Graduates
                    </span>
                    {s.graduate}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

const pillars = [
  {
    title: 'Real work, not exercises',
    body: 'Every project is a genuine need from a partner or an active open-source codebase. Nothing is manufactured to keep people busy.',
  },
  {
    title: 'Managed delivery',
    body: 'Scoping, preparation, matching, progress support, and outcome review are ours. Partners get results without running a programme.',
  },
  {
    title: 'Evidence that holds up',
    body: 'Contributions are verified against merged pull requests and scored against a rubric anyone can read. Credentials carry a serial anyone can check.',
  },
  {
    title: 'Accessible by design',
    body: 'No CV, portfolio, or connections to begin. Part-time, short-term, or fixed-duration participation, in English, Kiswahili, or French.',
  },
]

export function PillarsSection() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Eyebrow>Why Kestrel</Eyebrow>
        <SectionTitle className="max-w-[26ch]">Creating experience without demanding experience first.</SectionTitle>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="border-t-2 border-brand pt-4">
              <h3 className="font-sans text-base font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const offers = [
  { title: 'Graduate digital projects', tags: ['data analysis', 'dashboards', 'website review', 'user research', 'AI readiness'] },
  { title: 'University employability programmes', tags: ['innovation challenges', 'placements', 'summer programmes', 'community tech'] },
  { title: 'Digital skills development', tags: ['data', 'web development', 'cybersecurity', 'project management'] },
  { title: 'Managed project delivery', tags: ['scoping', 'preparation', 'matching', 'outcome review'] },
]

const audiences = [
  ['Universities', 'careers, computing schools, widening participation, graduate outcomes.'],
  ['Businesses and public sector', 'SMEs, tech companies, consultancies, councils and agencies.'],
  ['Charities and NGOs', 'community organisations, education charities, non-profit tech teams.'],
]

const briefs = [
  'Student-engagement dashboard',
  'Charity website review',
  'Digital process project',
  'AI-readiness assessment',
  'Cybersecurity-awareness resource',
]

export function PartnersSection() {
  return (
    <section id="partners" className="scroll-mt-20 border-t border-border px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>For partners</Eyebrow>
            <SectionTitle>Four ways a project creates value.</SectionTitle>
            <p className="mt-4 text-pretty leading-relaxed text-ink-2">
              Built for universities, businesses, public bodies, and charities that believe in potential and need
              outcomes they can show.
            </p>
            <dl className="mt-6 flex flex-col gap-3 text-sm leading-relaxed text-ink-2">
              {audiences.map(([k, v]) => (
                <div key={k}>
                  <dt className="inline font-bold text-foreground">{k}: </dt>
                  <dd className="inline">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {offers.map((o) => (
              <div key={o.title} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5">
                <h3 className="font-sans text-base font-bold text-foreground">{o.title}</h3>
                <ul className="flex flex-wrap gap-1.5">
                  {o.tags.map((t) => (
                    <li key={t} className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-5 md:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <Eyebrow>Example briefs</Eyebrow>
            <p className="text-xs text-muted-foreground">
              Illustrative scopes. Case studies follow the first delivered projects; none will be invented.
            </p>
          </div>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {briefs.map((b, i) => (
              <li key={b} className="rounded-lg border border-dashed border-border-strong p-3">
                <span className="font-mono text-[10px] text-accent-ink">{String.fromCharCode(65 + i)}</span>
                <p className="mt-1 text-sm font-semibold text-foreground">{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

const notRequired = ['A CV', 'A portfolio', 'Prior tech employment', 'Industry connections', 'Years of experience']
const matters = ['Eagerness to learn', 'Reliability and communication', 'Openness to feedback', 'Follow-through', 'Practical interest']

export function GraduatesSection() {
  return (
    <section id="graduates" className="scroll-mt-20 px-5 py-4 md:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-sidebar p-6 text-sidebar-foreground md:p-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Eyebrow inverted>For graduates</Eyebrow>
            <SectionTitle className="text-sidebar-foreground">
              Start with your potential, not your <span className="text-brand">paperwork</span>.
            </SectionTitle>
            <p className="mt-4 max-w-[48ch] text-pretty leading-relaxed text-sidebar-foreground/85">
              Your first real contribution should not require years of experience. It should require a guide, a
              bounded task, someone to ask, and a fair way to show what you did.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/signup"
                className="inline-flex min-h-12 items-center rounded-full bg-accent px-6 font-semibold text-accent-foreground transition-colors hover:bg-accent-ink"
              >
                Join Kestrel
              </Link>
              <Link
                href="/rubric"
                className="inline-flex min-h-12 items-center rounded-full border border-sidebar-muted px-6 font-semibold text-sidebar-foreground transition-colors hover:bg-sidebar-active"
              >
                Read how we assess
              </Link>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-6">
            <div className="rounded-xl border border-sidebar-border bg-sidebar-active/60 p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-sidebar-muted">Not required</p>
              <ul className="mt-3 flex flex-col gap-1.5 text-sm text-sidebar-foreground/80">
                {notRequired.map((x) => (
                  <li key={x} className="line-through decoration-sidebar-muted/60">{x}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-sidebar-border bg-sidebar-active/60 p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-sidebar-muted">What matters</p>
              <ul className="mt-3 flex flex-col gap-1.5 text-sm text-sidebar-foreground">
                {matters.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-brand/40 bg-sidebar-active/60 p-5 sm:col-span-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand">What you leave with</p>
              <p className="mt-3 text-sm leading-relaxed text-sidebar-foreground/90">
                A verified record of merged contributions. A competency transcript scored against a public rubric. A
                portfolio page on Nest that you own and keep. Projects may be part-time, short-term, or
                fixed-duration; paid work is always labelled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const people = [
  { initials: 'AO', name: 'Amara Otieno', line: 'Python developer learning to work in codebases I did not write.', ext: 3, shared: 1, tone: 'bg-primary' },
  { initials: 'DK', name: 'Daniel Kiprop', line: 'TypeScript, accessibility fixes, learning to test what I ship.', ext: 1, shared: 2, tone: 'bg-primary-mid' },
  { initials: 'NA', name: 'Neema Achieng', line: 'Backend, Python, and the tests I used to skip.', ext: 2, shared: 1, tone: 'bg-success' },
]

const ladder = ['Make it run', 'Your page exists', 'Fix your defect', 'Write the test', 'Ship to shared code', 'Review a peer', 'Propose something']

export function NestSection() {
  return (
    <section id="nest" className="scroll-mt-20 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Nest · nest.kestrelcollective.org</Eyebrow>
            <SectionTitle className="max-w-[24ch]">Where first contributions live, and keep growing.</SectionTitle>
            <p className="mt-4 max-w-[60ch] text-pretty leading-relaxed text-ink-2">
              Nest is our own open-source project. Every graduate builds a page there through real pull requests,
              fixes a real defect, ships to shared code, and reviews a peer. The page is theirs for good, and it
              fills with verified work from any project they contribute to afterwards.
            </p>
          </div>
          <a
            href="https://nest.kestrelcollective.org"
            className="inline-flex min-h-11 shrink-0 items-center gap-1 self-start rounded-full border border-primary px-5 text-sm font-semibold text-primary transition-colors hover:bg-primary-soft md:self-auto"
          >
            Browse contributor pages <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {people.map((p) => (
            <article
              key={p.name}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div
                className={cn('flex size-11 items-center justify-center rounded-full font-display font-semibold text-primary-foreground', p.tone)}
                aria-hidden
              >
                {p.initials}
              </div>
              <h3 className="font-sans text-base font-bold text-foreground">{p.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.line}</p>
              <p className="mt-auto flex items-center gap-3 font-mono text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-success" aria-hidden />
                  {p.ext} external
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-primary" aria-hidden />
                  {p.shared} shared
                </span>
              </p>
            </article>
          ))}
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
        </p>
      </div>
    </section>
  )
}

export function OpenSection() {
  return (
    <section className="border-t border-border bg-card px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Eyebrow>Built in the open</Eyebrow>
        <SectionTitle className="max-w-[26ch]">
          Evidence is built through delivery. Here is what you can check today.
        </SectionTitle>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Link href="/rubric" className="group rounded-xl border border-border bg-background p-6 transition hover:border-primary">
            <h3 className="flex items-center gap-1 font-sans text-base font-bold text-foreground group-hover:text-primary">
              The published rubric <ArrowUpRight className="size-4" aria-hidden />
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-2">
              Three competencies, three levels, observable criteria, and the scoring rules. Graduates see it before
              they start; partners can see what a level means.
            </p>
          </Link>
          <a href="https://nest.kestrelcollective.org" className="group rounded-xl border border-border bg-background p-6 transition hover:border-primary">
            <h3 className="flex items-center gap-1 font-sans text-base font-bold text-foreground group-hover:text-primary">
              Nest, our open-source project <ArrowUpRight className="size-4" aria-hidden />
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-2">
              Where every graduate makes their first contributions, in public, with CI, reviews, and releases anyone
              can inspect.
            </p>
          </a>
          <div className="rounded-xl border border-border bg-background p-6">
            <h3 className="font-sans text-base font-bold text-foreground">Verification, not testimonials</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-2">
              Every credential carries a serial that resolves to its record. Partner case studies and graduate
              reflections will appear here after the first projects deliver. Nothing on this page is invented.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
