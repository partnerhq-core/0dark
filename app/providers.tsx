'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

const NEXT_PUBLIC_POSTHOG_KEY =
  'phc_QAIjdQhQRs4Tw0MAuvRncV3rXeKCmtVmeieNLmC3azk'
const NEXT_PUBLIC_POSTHOG_HOST = 'https://app.posthog.com'

if (typeof window !== 'undefined') {
  posthog.init(NEXT_PUBLIC_POSTHOG_KEY, { api_host: NEXT_PUBLIC_POSTHOG_HOST })
}
export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  // if (process.env.NODE_ENV === 'development') {
  return <>{children}</>
  // }
  // return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
