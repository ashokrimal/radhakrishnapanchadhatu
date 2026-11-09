export default function AdminSettingsPage() {
  return (
    <div>
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">Settings</p>
        <h1 className="section-title mt-2">Store configuration</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-xl font-medium text-ink">Business details</h2>
          <div className="mt-4 space-y-3 text-sm text-muted">
            <p>Store name: managed in admin</p>
            <p>Phone: managed in admin</p>
            <p>WhatsApp: managed in admin</p>
            <p>Opening hours: configurable later</p>
          </div>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-medium text-ink">Payments and shipping</h2>
          <div className="mt-4 space-y-3 text-sm text-muted">
            <p>eSewa, Khalti, Fonepay integration toggle</p>
            <p>Delivery regions and fees</p>
            <p>Currency set to NPR</p>
            <p>Tax and policy configuration</p>
          </div>
        </div>
      </div>
    </div>
  );
}
