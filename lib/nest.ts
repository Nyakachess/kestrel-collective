export const NEST_URL = process.env.NEXT_PUBLIC_NEST_URL ?? 'https://nest.kestrelcollective.org'
export const NEST_REPO_URL = 'https://github.com/Nyakachess/KestrelNest'

export type NestPage = {
  handle: string
  name: string
  intro: string
  cohort: string
  stage: number
  counts: { external: number; shared: number; practice: number }
  url: string
}

export type NestFeed = { generated_at: string; release: string; pages: NestPage[] }

function isNestFeed(value: unknown): value is NestFeed {
  return typeof value === 'object' && value !== null && Array.isArray((value as { pages?: unknown }).pages)
}

/**
 * Server-side read of the feed Nest publishes at /api/pages.json.
 * Cached for an hour. Never throws: any failure (network, non-2xx, bad JSON,
 * missing pages array) resolves to null so the section can fall back to its
 * empty state and the site builds identically when Nest is unreachable.
 */
export async function getNestFeed(): Promise<NestFeed | null> {
  try {
    const res = await fetch(`${NEST_URL}/api/pages.json`, {
      next: { revalidate: 3600 },
      // A host that accepts the connection but never answers must not stall a build.
      signal: AbortSignal.timeout(8000),
    })
    if (!res.ok) return null
    const data: unknown = await res.json()
    return isNestFeed(data) ? data : null
  } catch {
    return null
  }
}

function activity(page: NestPage): number {
  return (page.counts?.external ?? 0) + (page.counts?.shared ?? 0)
}

/** The n pages with the most external plus shared contributions. */
export function pickRecentPages(feed: NestFeed, n = 3): NestPage[] {
  return [...feed.pages].sort((a, b) => activity(b) - activity(a)).slice(0, n)
}

/** First letter of the first two words, upper-cased. */
export function initials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
}
