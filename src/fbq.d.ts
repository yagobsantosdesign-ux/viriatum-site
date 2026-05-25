interface Window {
  fbq: (...args: unknown[]) => void
  _fbq: unknown
  ivTrack?: (event: string, data?: { email?: string; phone?: string } & Record<string, unknown>) => void
}
