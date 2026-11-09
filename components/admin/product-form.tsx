'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

export type ProductFormValues = {
  name: string;
  slug: string;
  category: string;
  material: string;
  price: string;
  compareAtPrice: string;
  stock: string;
  status: 'Draft' | 'Published' | 'Archived';
  featured: boolean;
  newArrival: boolean;
  description: string;
  imageUrl: string;
};

const defaultValues: ProductFormValues = {
  name: '',
  slug: '',
  category: 'Panchadhatu',
  material: 'Panchadhatu',
  price: '',
  compareAtPrice: '',
  stock: '0',
  status: 'Draft',
  featured: false,
  newArrival: false,
  description: '',
  imageUrl: '',
};

export function ProductForm({
  initialValues = defaultValues,
  mode = 'create',
}: {
  initialValues?: Partial<ProductFormValues>;
  mode?: 'create' | 'edit';
}) {
  const [form, setForm] = useState<ProductFormValues>({ ...defaultValues, ...initialValues });
  const [saved, setSaved] = useState(false);

  const updateField = (field: keyof ProductFormValues, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value as never }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaved(true);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Products</p>
          <h1 className="mt-2 text-3xl font-semibold text-ink">
            {mode === 'edit' ? 'Edit product' : 'Add new product'}
          </h1>
        </div>
        <span className="rounded-full border border-line bg-[#faf8f5] px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted">
          Admin form
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Product name
          <input
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            className="mt-2 w-full rounded-xl border border-line bg-[#faf8f5] px-4 py-3 outline-none transition focus:border-gold"
            placeholder="Panchadhatu necklace"
          />
        </label>

        <label className="block text-sm font-medium text-ink">
          Slug
          <input
            value={form.slug}
            onChange={(event) => updateField('slug', event.target.value)}
            className="mt-2 w-full rounded-xl border border-line bg-[#faf8f5] px-4 py-3 outline-none transition focus:border-gold"
            placeholder="panchadhatu-necklace"
          />
        </label>

        <label className="block text-sm font-medium text-ink">
          Category
          <select
            value={form.category}
            onChange={(event) => updateField('category', event.target.value)}
            className="mt-2 w-full rounded-xl border border-line bg-[#faf8f5] px-4 py-3 outline-none transition focus:border-gold"
          >
            <option>Panchadhatu</option>
            <option>Steel jewellery</option>
            <option>Rings</option>
            <option>Necklaces</option>
            <option>Earrings</option>
            <option>Bracelets</option>
          </select>
        </label>

        <label className="block text-sm font-medium text-ink">
          Material
          <select
            value={form.material}
            onChange={(event) => updateField('material', event.target.value)}
            className="mt-2 w-full rounded-xl border border-line bg-[#faf8f5] px-4 py-3 outline-none transition focus:border-gold"
          >
            <option>Panchadhatu</option>
            <option>Steel</option>
            <option>Mixed</option>
            <option>Gold plated</option>
          </select>
        </label>

        <label className="block text-sm font-medium text-ink">
          Price (NPR)
          <input
            type="number"
            value={form.price}
            onChange={(event) => updateField('price', event.target.value)}
            className="mt-2 w-full rounded-xl border border-line bg-[#faf8f5] px-4 py-3 outline-none transition focus:border-gold"
            placeholder="4200"
          />
        </label>

        <label className="block text-sm font-medium text-ink">
          Compare-at price (optional)
          <input
            type="number"
            value={form.compareAtPrice}
            onChange={(event) => updateField('compareAtPrice', event.target.value)}
            className="mt-2 w-full rounded-xl border border-line bg-[#faf8f5] px-4 py-3 outline-none transition focus:border-gold"
            placeholder="5200"
          />
        </label>

        <label className="block text-sm font-medium text-ink">
          Stock count
          <input
            type="number"
            value={form.stock}
            onChange={(event) => updateField('stock', event.target.value)}
            className="mt-2 w-full rounded-xl border border-line bg-[#faf8f5] px-4 py-3 outline-none transition focus:border-gold"
            placeholder="12"
          />
        </label>

        <label className="block text-sm font-medium text-ink">
          Status
          <select
            value={form.status}
            onChange={(event) => updateField('status', event.target.value as ProductFormValues['status'])}
            className="mt-2 w-full rounded-xl border border-line bg-[#faf8f5] px-4 py-3 outline-none transition focus:border-gold"
          >
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
            <option value="Archived">Archived</option>
          </select>
        </label>

        <label className="flex items-center gap-3 rounded-xl border border-line bg-[#faf8f5] p-4 text-sm font-medium text-ink">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(event) => updateField('featured', event.target.checked)}
            className="h-4 w-4 rounded border-line text-gold"
          />
          Featured product
        </label>

        <label className="flex items-center gap-3 rounded-xl border border-line bg-[#faf8f5] p-4 text-sm font-medium text-ink">
          <input
            type="checkbox"
            checked={form.newArrival}
            onChange={(event) => updateField('newArrival', event.target.checked)}
            className="h-4 w-4 rounded border-line text-gold"
          />
          Mark as new arrival
        </label>

        <label className="block text-sm font-medium text-ink md:col-span-2">
          Product description
          <textarea
            value={form.description}
            onChange={(event) => updateField('description', event.target.value)}
            className="mt-2 min-h-28 w-full rounded-xl border border-line bg-[#faf8f5] px-4 py-3 outline-none transition focus:border-gold"
            placeholder="Add a premium product description for the storefront."
          />
        </label>

        <label className="block text-sm font-medium text-ink md:col-span-2">
          Product image URL or media key
          <input
            value={form.imageUrl}
            onChange={(event) => updateField('imageUrl', event.target.value)}
            className="mt-2 w-full rounded-xl border border-line bg-[#faf8f5] px-4 py-3 outline-none transition focus:border-gold"
            placeholder="https://cdn.example.com/product.jpg"
          />
        </label>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="text-sm text-muted">
          {saved ? 'Draft saved in admin queue. Connect this to the database later.' : 'Ready for backend integration.'}
        </div>
        <button
          type="submit"
          className="rounded-full bg-gold px-6 py-3 font-medium text-white transition hover:bg-[#9a7734]"
        >
          {mode === 'edit' ? 'Update product' : 'Save product'}
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
