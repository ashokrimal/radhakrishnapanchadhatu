import { adminSections } from '@/lib/storefront-data';

export default function AdminPage() {
  return (
    <div className="container-shell py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Admin</p>
          <h1 className="section-title mt-2">Dashboard</h1>
        </div>
        <button className="rounded-full bg-gold px-5 py-2 font-medium text-white hover:bg-[#9a7734]">Publish updates</button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {adminSections.map((section) => (
          <div key={section.label} className="card p-5">
            <div className="text-sm uppercase tracking-[0.2em] text-muted">{section.label}</div>
            <div className="mt-4 text-3xl font-semibold text-ink">{section.value}</div>
            <div className="mt-2 text-sm text-muted">Managed in admin</div>
          </div>
        ))}
      </div>
    </div>
  );
}
