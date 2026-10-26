// The Kestrel platform's public address. The landing site is a separate static site, so every
// link to an app page (sign up, the rubric, an award check) is absolute. Set at build time.
export const APP_URL = (process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.kestrelcollective.org').replace(/\/$/, '')

/** An absolute link to a page of the Kestrel platform, for example appUrl('/signup'). */
export const appUrl = (path: string) => `${APP_URL}${path}`
