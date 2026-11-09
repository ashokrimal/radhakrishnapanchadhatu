import Link from 'next/link';
import { placeholderProducts } from '@/lib/storefront-data';

export default function ProductDetailPage() {
  const product = placeholderProducts[0];

  return (
    <div className="container-shell py-16">
      <div className="mb-6 text-sm text-muted">
        <Link href="/catalog" className="text-gold hover:underline">Catalog</Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="card overflow-hidden p-4">
          <div className="aspect-[4/5] rounded-[1.5rem] bg-[linear-gradient(135deg,#f4efe9,#e7dfd1)] p-6">
            <div className="flex h-full items-end rounded-[1.2rem] border border-white/60 bg-white/20 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Product preview</p>
                <h2 className="mt-3 text-3xl font-medium text-ink">{product.name}</h2>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gold">{product.category}</p>
          <h1 className="mt-3 text-4xl font-semibold text-ink">{product.name}</h1>
          <p className="mt-4 text-muted">This product page is structured for future admin entries: title, description, material, photos, price, variant options, and stock will be managed from the CMS.</p>

          <div className="mt-8 flex items-center gap-4">
            <div className="text-3xl font-semibold text-ink">NPR {product.price}</div>
            <div className="rounded-full border border-line px-3 py-1 text-sm text-muted">{product.stock}</div>
          </div>

          <div className="mt-8 space-y-4">
            <button className="w-full rounded-full bg-gold px-6 py-3 font-medium text-white hover:bg-[#9a7734]">
              Add to cart
            </button>
            <button className="w-full rounded-full border border-line bg-white px-6 py-3 font-medium text-ink hover:border-gold hover:text-gold">
              Ask on WhatsApp
            </button>
          </div>

          <div className="mt-8 rounded-2xl border border-line bg-white p-5">
            <h3 className="text-lg font-medium text-ink">Admin-managed fields</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>• Product name, slug, SKU</li>
              <li>• Price, compare-at price, material</li>
              <li>• Gallery images and alt text</li>
              <li>• Stock, variants, delivery note</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
