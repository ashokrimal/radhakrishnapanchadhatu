export const storeConfig = {
  brandName: 'Radhakrishna Panchadhatu',
  currency: 'NPR',
  locale: 'Nepal',
};

export type ProductRecord = {
  id: string;
  name: string;
  slug: string;
  category: string;
  material: string;
  pricePaisa: number | null;
  stockQuantity: number;
  status: string;
};

// No demo catalogue or fabricated sales metrics: live records will come from the CMS database.
export const placeholderProducts: ProductRecord[] = [];

export const storefrontHighlights = [
  { title: 'Owner-managed catalogue', description: 'Product details, prices, and photos are intended to be entered through the admin CMS.', icon: '◎' },
  { title: 'Premium storefront', description: 'A responsive visual foundation for the store, ready for owner-provided content.', icon: '✦' },
  { title: 'Inventory-ready model', description: 'The database schema supports stock and product publishing fields.', icon: '▣' },
];

export const adminStats: { label: string; value: string }[] = [];
export const adminSections: { label: string; value: string }[] = [];
export const emptyStateMessage = 'No content has been added yet. Store content will be managed through the admin CMS.';
