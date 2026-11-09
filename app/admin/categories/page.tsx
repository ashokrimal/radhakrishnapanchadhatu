import Link from 'next/link';

export default function AdminCategoriesPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-4">
        <div><p className="text-xs uppercase tracking-[0.2em] text-gold">Categories</p><h1 className="section-title mt-2">Category management</h1></div>
        <Link href="/admin/categories/new" className="rounded-full bg-gold px-5 py-2 font-medium text-white hover:bg-[#9a7734]">New category</Link>
      </div>
      <div className="card p-8 text-center">
        <h2 className="text-xl font-medium text-ink">No categories added</h2>
        <p className="mt-2 text-sm text-muted">Create categories in the CMS once the database-backed forms are connected.</p>
      </div>
    </div>
  );
}
