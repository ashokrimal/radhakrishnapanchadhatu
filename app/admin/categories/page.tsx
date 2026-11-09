export default function AdminProductsPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Products</p>
          <h1 className="section-title mt-2">Product management</h1>
        </div>
        <button className="rounded-full bg-gold px-5 py-2 font-medium text-white hover:bg-[#9a7734]">Add product</button>
      </div>

      <div className="card p-6">
        <div className="mb-4 grid gap-4 md:grid-cols-5">
          {['Name', 'Material', 'Price', 'Stock', 'Status'].map((header) => (
            <div key={header} className="text-xs uppercase tracking-[0.18em] text-muted">{header}</div>
          ))}
        </div>
        <div className="space-y-3">
          {['Panchadhatu necklace', 'Steel bangles', 'Statement ring'].map((item, index) => (
            <div key={item} className="grid gap-4 rounded-xl border border-line bg-[#faf8f5] p-4 md:grid-cols-5">
              <div className="font-medium text-ink">{item}</div>
              <div className="text-muted">{index === 0 ? 'Panchadhatu' : index === 1 ? 'Steel' : 'Mixed'}</div>
              <div className="text-muted">NPR {index === 0 ? '4200' : index === 1 ? '2600' : '3900'}</div>
              <div className="text-muted">{index === 0 ? '12' : index === 1 ? '8' : '5'}</div>
              <div className="text-muted">Published</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
