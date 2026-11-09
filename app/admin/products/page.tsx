import Link from 'next/link';
import { placeholderProducts } from '@/lib/storefront-data';

export default function AdminProductsPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Products</p>
          <h1 className="section-title mt-2">Product management</h1>
        </div>
        <Link href="/admin/products/new" className="rounded-full bg-gold px-5 py-2 font-medium text-white hover:bg-[#9a7734]">
          Add product
        </Link>
      </div>

      <div className="card p-6">
        <div className="mb-4 grid gap-4 md:grid-cols-6">
          {['Name', 'Category', 'Material', 'Price', 'Stock', 'Status'].map((header) => (
            <div key={header} className="text-xs uppercase tracking-[0.18em] text-muted">{header}</div>
          ))}
        </div>

        <div className="space-y-3">
          {placeholderProducts.map((product) => (
            <div key={product.id} className="grid gap-4 rounded-xl border border-line bg-[#faf8f5] p-4 md:grid-cols-6">
              <div className="font-medium text-ink">{product.name}</div>
              <div className="text-muted">{product.category}</div>
              <div className="text-muted">{product.material}</div>
              <div className="text-muted">NPR {product.price}</div>
              <div className="text-muted">{product.stock}</div>
              <div className="text-muted">{product.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
