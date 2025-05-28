export function AnimatedLogo() {
  return (
    <a
      className="text-3xl md:text-5xl font-komoda text-white flex flex-row gap-1 border border-transparent px-4 py-2 animate-fade-border delay-[1.8s]"
      href="/"
    >
      <span className="relative opacity-0 animate-logo">A</span>
      <span className="relative opacity-0 animate-logo delay-[0.2s]">U</span>
      <span className="relative opacity-0 animate-logo delay-[0.4s]">R</span>
      <span className="relative opacity-0 animate-logo delay-[0.6s]">O</span>
      <span className="relative opacity-0 animate-logo delay-[0.8s]">R</span>
      <span className="relative opacity-0 animate-logo delay-[1s]">U</span>
      <span className="relative opacity-0 animate-logo delay-[1.2s]">S</span>
    </a>
  )
}
