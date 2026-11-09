import Link from 'next/link';

const adminLinks = [
  { href: '/admin/products', label: 'Products' },
  { href: '/admin/categories', label: 'Categories' },
  { href: '/admin/orders', label: 'Orders' },
  { href: '/admin/banners', label: 'Banners' },
  { href: '/admin/media', label: 'Media library' },
  { href: '/admin/settings', label: 'Store settings' },
];

export default function AdminRootPage() {
  return (
    <div className="container-shell py-12">
      <div className="mb-8">
        <h1 className="section-title">Admin modules</h1>
        <p className="mt-3 text-muted">Every storefront content area is structured for future CMS editing.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {adminLinks.map((item) => (
          <Link key={item.href} href={item.href} className="card p-6 transition hover:-translate-y-1 hover:border-gold">
            <div className="text-xl font-medium text-ink">{item.label}</div>
            <div className="mt-3 text-sm text-muted">Add, update, and publish later from admin</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
