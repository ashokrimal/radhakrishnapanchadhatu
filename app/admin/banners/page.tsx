export default function AdminMediaPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Media</p>
          <h1 className="section-title mt-2">Media library</h1>
        </div>
        <button className="rounded-full bg-gold px-5 py-2 font-medium text-white hover:bg-[#9a7734]">Upload media</button>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {['Hero banners', 'Product gallery', 'Brand photography', 'Social assets', 'Category art', 'Homepage sections'].map((asset) => (
          <div key={asset} className="card p-5">
            <div className="aspect-[4/3] rounded-2xl bg-[linear-gradient(135deg,#f4efe9,#e7dfd1)]" />
            <div className="mt-4 text-lg font-medium text-ink">{asset}</div>
            <div className="mt-2 text-sm text-muted">Uploaded and reused through the CMS later.</div>
          </div>
        ))}
      </div>
    </div>
  );
}
