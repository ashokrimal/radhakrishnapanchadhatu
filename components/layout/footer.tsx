import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-3">
        <div><div className="text-lg font-semibold tracking-[0.08em] text-ink">RADHAKRISHNA</div><p className="mt-3 text-sm text-muted">Jewellery storefront. Store contact details and policies will be configured by the owner.</p></div>
        <div><div className="text-sm font-medium uppercase tracking-[0.18em] text-gold">Explore</div><ul className="mt-3 space-y-2 text-sm text-muted"><li><Link href="/catalog" className="hover:text-gold">Catalog</Link></li><li><Link href="/about" className="hover:text-gold">About</Link></li><li><Link href="/contact" className="hover:text-gold">Contact</Link></li></ul></div>
        <div><div className="text-sm font-medium uppercase tracking-[0.18em] text-gold">Store management</div><ul className="mt-3 space-y-2 text-sm text-muted"><li><Link href="/admin/products" className="hover:text-gold">Products</Link></li><li><Link href="/admin/categories" className="hover:text-gold">Categories</Link></li><li><Link href="/admin/settings" className="hover:text-gold">Settings</Link></li></ul></div>
      </div>
    </footer>
  );
}
