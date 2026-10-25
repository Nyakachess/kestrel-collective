'use client'

import Link from 'next/link'
import { useState, type FormEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'

const CONTACT_EMAIL = 'hello@kestrelcollective.org'
const orgTypes = ['University', 'Business', 'Charity or NGO', 'Public sector', 'Other']

const inputClass =
  'w-full rounded-lg border border-border bg-background px-3.5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-brand/40'

export function PartnerSection() {
  const [opened, setOpened] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? '').trim()
    const body = [
      `Name: ${get('name')}`,
      `Email: ${get('email')}`,
      `Organisation: ${get('organisation')} (${get('organisation_type')})`,
      '',
      get('challenge'),
    ].join('\n')
    const subject = `Project enquiry from ${get('organisation')}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }

  return (
    <section id="partner-form" className="scroll-mt-20 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-accent-ink">Partner with us</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-semibold leading-tight md:text-4xl">
            Have a challenge that could become an opportunity?
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-ink-2">
            Four questions to start. We reply within two working days with a short call to shape the scope,
            timescale, and the number of graduates. Budget and detail come later, together.
          </p>
          <div className="mt-8 rounded-xl border border-border bg-card p-5">
            <h3 className="font-sans text-base font-bold text-foreground">Graduates join in the app</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-2">
              Create an account, tell us your availability, link GitHub, and claim a first task capped small on
              purpose.
            </p>
            <Link
              href="/signup"
              className="mt-4 inline-flex min-h-10 items-center gap-1 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-sidebar"
            >
              Join Kestrel <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-5 rounded-2xl border border-border bg-card p-6 shadow-[0_24px_60px_-30px_rgba(10,110,120,0.35)] sm:grid-cols-2 md:p-8 lg:col-span-7"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="f-name" className="text-sm font-semibold text-foreground">Your name</label>
            <input id="f-name" name="name" type="text" required autoComplete="name" className={inputClass} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="f-email" className="text-sm font-semibold text-foreground">Work email</label>
            <input id="f-email" name="email" type="email" required autoComplete="email" className={inputClass} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="f-org" className="text-sm font-semibold text-foreground">Organisation</label>
            <input id="f-org" name="organisation" type="text" required autoComplete="organization" className={inputClass} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="f-type" className="text-sm font-semibold text-foreground">Organisation type</label>
            <select id="f-type" name="organisation_type" className={inputClass} defaultValue="University">
              {orgTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="f-challenge" className="text-sm font-semibold text-foreground">
              The challenge, in a few sentences
            </label>
            <textarea
              id="f-challenge"
              name="challenge"
              rows={4}
              required
              placeholder="What needs doing, and what would a good outcome look like?"
              className={`${inputClass} resize-y`}
            />
          </div>
          <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:gap-5">
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 font-semibold text-accent-foreground transition-colors hover:bg-accent-ink"
            >
              Discuss a project
            </button>
            <p className="text-xs text-muted-foreground" aria-live="polite">
              {opened
                ? `Your email app should open with the details filled in. If not, write to ${CONTACT_EMAIL}.`
                : 'We will never share your details.'}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
