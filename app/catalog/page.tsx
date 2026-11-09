import Link from 'next/link';
import { placeholderProducts } from '@/lib/storefront-data';

export default function CatalogPage() {
  const publishedProducts = placeholderProducts.filter((product) => product.status === 'PUBLISHED');
  return (
    <div className="container-shell py-16">
      <div className="mb-10"><p className="text-xs uppercase tracking-[0.2em] text-gold">Collection</p><h1 className="section-title mt-2">Catalog</h1><p className="mt-3 text-muted">New items will appear here after they are added and published in the store admin.</p></div>
      {publishedProducts.length === 0 ? (
        <div className="card px-6 py-16 text-center"><h2 className="text-2xl font-medium text-ink">Our collection is being prepared</h2><p className="mt-3 text-muted">Please check back soon for products.</p><Link href="/contact" className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 font-medium text-white hover:bg-[#9a7734]">Contact the store</Link></div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{publishedProducts.map((product) => <article key={product.id} className="card overflow-hidden"><div className="aspect-[4/5] bg-[#f2efe9]"/><div className="p-5"><p className="text-sm text-muted">{product.material}</p><h2 className="mt-1 text-xl font-medium text-ink">{product.name}</h2>{product.pricePaisa !== null && <p className="mt-4 text-xl font-semibold">NPR {(product.pricePaisa / 100).toFixed(2)}</p>}<Link href={`/product/${product.slug}`} className="mt-4 inline-flex rounded-full bg-gold px-4 py-2 text-sm font-medium text-white">View</Link></div></article>)}</div>
      )}
    </div>
  );
}
