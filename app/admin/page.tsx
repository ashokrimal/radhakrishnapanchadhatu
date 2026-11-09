import Link from 'next/link';

const modules = [
  { href: '/admin/products', label: 'Products', detail: 'Manage descriptions, prices, stock, and publishing.' },
  { href: '/admin/categories', label: 'Categories', detail: 'Organize products and category imagery.' },
  { href: '/admin/orders', label: 'Orders', detail: 'Order management will be added in a later phase.' },
  { href: '/admin/banners', label: 'Banners', detail: 'Manage campaign content when CMS publishing is implemented.' },
  { href: '/admin/media', label: 'Media library', detail: 'Media uploads will be connected to protected storage.' },
  { href: '/admin/settings', label: 'Store settings', detail: 'Configure store details and policies.' },
];

export default function AdminPage() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">Admin</p>
        <h1 className="section-title mt-2">Store management</h1>
        <p className="mt-3 max-w-2xl text-muted">Set up your catalogue and store content here. Dashboard totals will appear once they are calculated from real records.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {modules.map((item) => (
          <Link key={item.href} href={item.href} className="card p-6 transition hover:-translate-y-1 hover:border-gold">
            <h2 className="text-xl font-medium text-ink">{item.label}</h2>
            <p className="mt-3 text-sm text-muted">{item.detail}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
