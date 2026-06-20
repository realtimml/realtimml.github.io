/** Fixed strip Safari 26 samples for status bar tint. Always zinc-950 black. */
export function SafariStatusBarSampler() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[2147483647] sm:h-1.5 bg-zinc-950"
    />
  )
}
