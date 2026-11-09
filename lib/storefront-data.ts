export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold tracking-[0.08em] text-ink">RADHAKRISHNA</div>
          <p className="mt-3 text-sm text-muted">Premium Panchadhatu and steel jewellery storefront.</p>
        </div>
        <div>
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-gold">Explore</div>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Catalog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-gold">Admin-ready</div>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>Products</li>
            <li>Categories</li>
            <li>Orders</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
