export default function AdminCategoriesPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Categories</p>
          <h1 className="section-title mt-2">Category management</h1>
        </div>
        <button className="rounded-full bg-gold px-5 py-2 font-medium text-white hover:bg-[#9a7734]">New category</button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {['Panchadhatu', 'Steel jewellery', 'Rings', 'Necklaces', 'Earrings', 'Bracelets'].map((category) => (
          <div key={category} className="card p-5">
            <div className="text-xl font-medium text-ink">{category}</div>
            <div className="mt-2 text-sm text-muted">Slug, image, order, status, and SEO fields can be managed later.</div>
          </div>
        ))}
      </div>
    </div>
  );
}
