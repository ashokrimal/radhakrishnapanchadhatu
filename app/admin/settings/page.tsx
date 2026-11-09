export default function AdminOrdersPage() {
  return (
    <div>
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">Orders</p>
        <h1 className="section-title mt-2">Order dashboard</h1>
      </div>

      <div className="card p-6">
        <div className="mb-4 grid gap-4 md:grid-cols-5">
          {['Order', 'Customer', 'Status', 'Amount', 'Date'].map((header) => (
            <div key={header} className="text-xs uppercase tracking-[0.18em] text-muted">{header}</div>
          ))}
        </div>
        <div className="space-y-3">
          {[
            ['#ORD-1001', 'Guest customer', 'Processing', 'NPR 4200', 'Today'],
            ['#ORD-1002', 'Returning customer', 'Paid', 'NPR 6800', 'Yesterday'],
            ['#ORD-1003', 'Phone order', 'Dispatched', 'NPR 5200', '2 days ago'],
          ].map(([order, customer, status, amount, date]) => (
            <div key={order} className="grid gap-4 rounded-xl border border-line bg-[#faf8f5] p-4 md:grid-cols-5">
              <div className="font-medium text-ink">{order}</div>
              <div className="text-muted">{customer}</div>
              <div className="text-muted">{status}</div>
              <div className="text-muted">{amount}</div>
              <div className="text-muted">{date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
