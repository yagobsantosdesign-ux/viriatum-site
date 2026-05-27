interface Window {
  ivTrack?: (event: string, data?: { email?: string; phone?: string } & Record<string, unknown>) => void
}
