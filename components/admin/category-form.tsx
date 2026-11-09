'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

export type CategoryFormValues = {
  name: string;
  slug: string;
  description: string;
  status: 'Published' | 'Draft' | 'Hidden';
  imageUrl: string;
};

const defaultValues: CategoryFormValues = {
  name: '',
  slug: '',
  description: '',
  status: 'Published',
  imageUrl: '',
};

export function CategoryForm() {
  const [form, setForm] = useState<CategoryFormValues>(defaultValues);
  const [saved, setSaved] = useState(false);

  const updateField = (field: keyof CategoryFormValues, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaved(true);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Categories</p>
          <h1 className="mt-2 text-3xl font-semibold text-ink">Add category</h1>
        </div>
        <span className="rounded-full border border-line bg-[#faf8f5] px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted">
          Admin form
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Category name
          <input
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            className="mt-2 w-full rounded-xl border border-line bg-[#faf8f5] px-4 py-3 outline-none transition focus:border-gold"
            placeholder="Panchadhatu"
          />
        </label>

        <label className="block text-sm font-medium text-ink">
          Slug
          <input
            value={form.slug}
            onChange={(event) => updateField('slug', event.target.value)}
            className="mt-2 w-full rounded-xl border border-line bg-[#faf8f5] px-4 py-3 outline-none transition focus:border-gold"
            placeholder="panchadhatu"
          />
        </label>

        <label className="block text-sm font-medium text-ink md:col-span-2">
          Description
          <textarea
            value={form.description}
            onChange={(event) => updateField('description', event.target.value)}
            className="mt-2 min-h-28 w-full rounded-xl border border-line bg-[#faf8f5] px-4 py-3 outline-none transition focus:border-gold"
            placeholder="Describe what belongs in this jewellery category."
          />
        </label>

        <label className="block text-sm font-medium text-ink">
          Visibility
          <select
            value={form.status}
            onChange={(event) => updateField('status', event.target.value as CategoryFormValues['status'])}
            className="mt-2 w-full rounded-xl border border-line bg-[#faf8f5] px-4 py-3 outline-none transition focus:border-gold"
          >
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
            <option value="Hidden">Hidden</option>
          </select>
        </label>

        <label className="block text-sm font-medium text-ink">
          Category image URL
          <input
            value={form.imageUrl}
            onChange={(event) => updateField('imageUrl', event.target.value)}
            className="mt-2 w-full rounded-xl border border-line bg-[#faf8f5] px-4 py-3 outline-none transition focus:border-gold"
            placeholder="https://cdn.example.com/category.jpg"
          />
        </label>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="text-sm text-muted">
          {saved ? 'Category saved to admin queue. Connect to database later.' : 'Ready for CMS backend integration.'}
        </div>
        <button
          type="submit"
          className="rounded-full bg-gold px-6 py-3 font-medium text-white transition hover:bg-[#9a7734]"
        >
          Save category
        </button>
      </div>
    </form>
  );
}

export default CategoryForm;
