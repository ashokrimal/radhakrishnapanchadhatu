import Link from 'next/link';

const nav = [
  { href: '/admin', label: 'Overview' },
  { href: '/admin/products', label: 'Products' },
  { href: '/admin/categories', label: 'Categories' },
  { href: '/admin/orders', label: 'Orders' },
  { href: '/admin/banners', label: 'Banners' },
  { href: '/admin/media', label: 'Media library' },
  { href: '/admin/settings', label: 'Settings' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-shell py-8">
      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside className="card p-4">
          <div className="mb-6 px-2 text-xs uppercase tracking-[0.2em] text-gold">Admin nav</div>
          <nav className="space-y-2">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-xl px-3 py-2 text-sm font-medium text-ink transition hover:bg-[#f7f2ea] hover:text-gold">
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div>{children}</div>
      </div>
    </div>
  );
}
