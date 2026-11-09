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
        <Link href="/admin/products/new" className="rounded-full bg-gold px-5 py-2 font-medium text-white hover:bg-[#9a7734]">Add product</Link>
      </div>
      <div className="card overflow-x-auto p-6">
        {placeholderProducts.length === 0 ? (
          <div className="py-12 text-center">
            <h2 className="text-xl font-medium text-ink">No products added</h2>
            <p className="mt-2 text-sm text-muted">Products will appear here after the database-backed admin workflow is connected.</p>
          </div>
        ) : (
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead><tr className="border-b border-line text-xs uppercase tracking-[0.15em] text-muted"><th className="pb-3">Name</th><th className="pb-3">Category</th><th className="pb-3">Material</th><th className="pb-3">Price</th><th className="pb-3">Stock</th><th className="pb-3">Status</th></tr></thead>
            <tbody>{placeholderProducts.map((product) => <tr key={product.id} className="border-b border-line last:border-0"><td className="py-4 font-medium">{product.name}</td><td>{product.category}</td><td>{product.material}</td><td>{product.pricePaisa === null ? 'Not set' : `NPR ${(product.pricePaisa / 100).toFixed(2)}`}</td><td>{product.stockQuantity}</td><td>{product.status}</td></tr>)}</tbody>
          </table>
        )}
      </div>
    </div>
  );
}
