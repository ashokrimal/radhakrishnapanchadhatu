import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-line bg-white/90 backdrop-blur-sm">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-semibold tracking-[0.08em] text-ink">
          RADHAKRISHNA
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          <Link href="/" className="hover:text-gold">Home</Link>
          <Link href="/about" className="hover:text-gold">About</Link>
          <Link href="/catalog" className="hover:text-gold">Catalog</Link>
          <Link href="/contact" className="hover:text-gold">Contact</Link>
          <Link href="/admin" className="hover:text-gold">Admin</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink hover:border-gold hover:text-gold">
            Search
          </button>
          <button className="rounded-full bg-gold px-4 py-2 text-sm font-medium text-white hover:bg-[#9a7734]">
            Cart (0)
          </button>
        </div>
      </div>
    </header>
  );
}
