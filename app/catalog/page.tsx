import Link from 'next/link';
import { placeholderProducts } from '@/lib/storefront-data';

export default function CatalogPage() {
  return (
    <div className="container-shell py-16">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Collection</p>
          <h1 className="section-title mt-2">Catalog</h1>
        </div>
        <div className="rounded-full border border-line bg-white px-4 py-2 text-sm text-muted">
          Product data is CMS-managed from the admin
        </div>
      </div>

      <div className="mb-10 grid gap-4 md:grid-cols-4">
        {['All', 'Panchadhatu', 'Steel', 'Rings', 'Necklaces'].map((filter) => (
          <button key={filter} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-gold hover:text-gold">
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {placeholderProducts.map((product) => (
          <article key={product.slug} className="card overflow-hidden">
            <div className="aspect-[4/5] bg-[linear-gradient(135deg,#f4efe9,#e7dfd1)] p-6">
              <div className="flex h-full items-end justify-between rounded-[1.3rem] border border-white/60 bg-white/20 p-4 backdrop-blur-sm">
                <span className="rounded-full bg-white/80 px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-muted">
                  {product.category}
                </span>
                <span className="text-2xl text-gold">✦</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-muted">{product.material}</p>
                  <h3 className="mt-1 text-xl font-medium text-ink">{product.name}</h3>
                </div>
                <span className="rounded-full border border-line px-2 py-1 text-xs text-muted">{product.stock}</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-semibold text-ink">NPR {product.price}</div>
                  <div className="text-xs text-muted">Price added from admin</div>
                </div>
                <Link href={`/product/${product.slug}`} className="rounded-full bg-gold px-4 py-2 text-sm font-medium text-white hover:bg-[#9a7734]">
                  View
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
