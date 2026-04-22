const links = [
  ["#reality", "Problem"],
  ["#how", "Solution"],
  ["#wireframes", "Wireframes"],
  ["#demo", "Demo"],
  ["#coverage", "Coverage"],
  ["#strategy", "Strategy"],
  ["#theory", "Theory"],
  ["#impact", "Impact"],
  ["#team", "Team"],
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-soft/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <a
          href="#top"
          className="shrink-0 whitespace-nowrap font-display text-lg font-extrabold tracking-normal text-ink no-underline"
        >
          Scotty <span className="text-cmu">Spots</span>
        </a>
        <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold text-ink/80">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-cmu transition-colors">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
