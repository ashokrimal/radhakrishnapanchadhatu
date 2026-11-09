import { notFound } from 'next/navigation';
import ProductForm from '@/components/admin/product-form';
import { placeholderProducts } from '@/lib/storefront-data';

export default function EditProductPage({ params }: { params: { id: string } }) {
  const product = placeholderProducts.find(
    (item) => item.id === Number(params.id) || item.slug === params.id,
  );

  if (!product) {
    notFound();
  }

  return (
    <div className="container-shell py-8">
      <ProductForm
        mode="edit"
        initialValues={{
          name: product.name,
          slug: product.slug,
          category: product.category,
          material: product.material,
          price: product.price,
          compareAtPrice: '',
          stock: product.stock,
          status: product.status,
          featured: false,
          newArrival: false,
          description: 'Admin-managed product description pending content entry.',
          imageUrl: '',
        }}
      />
    </div>
  );
}
