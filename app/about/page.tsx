export default function AboutPage() {
  return (
    <div className="container-shell py-16">
      <h1 className="section-title">About</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card p-8">
          <p className="text-muted">
            This storefront is designed for a premium Nepal-based jewellery business. The final brand story, business details, photo set, and store information are intentionally managed through admin configuration rather than hardcoded into the public pages.
          </p>
          <p className="mt-5 text-muted">
            The content layer can later include store history, craftsmanship, physical location, materials, and business policies without developer intervention.
          </p>
        </div>
        <div className="card p-8">
          <h2 className="text-xl font-medium text-ink">Store content blocks</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>• About story</li>
            <li>• Physical location and map</li>
            <li>• Brand values and materials</li>
            <li>• Policies and contact information</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
