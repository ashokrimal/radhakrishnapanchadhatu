export default function ContactPage() {
  return (
    <div className="container-shell py-16">
      <h1 className="section-title">Contact</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="card p-8">
          <h2 className="text-2xl font-medium text-ink">Business contact</h2>
          <div className="mt-6 space-y-3 text-muted">
            <p>Phone: added from store settings</p>
            <p>WhatsApp: managed in admin</p>
            <p>Email: inserted by owner</p>
            <p>Location: verified from CMS</p>
          </div>
        </div>
        <div className="card p-8">
          <h2 className="text-2xl font-medium text-ink">Contact form</h2>
          <div className="mt-5 space-y-4">
            <div className="rounded-xl border border-line bg-[#faf8f5] p-4 text-sm text-muted">Name field</div>
            <div className="rounded-xl border border-line bg-[#faf8f5] p-4 text-sm text-muted">Phone field</div>
            <div className="rounded-xl border border-line bg-[#faf8f5] p-4 text-sm text-muted">Message field</div>
            <button className="rounded-full bg-gold px-5 py-2.5 font-medium text-white hover:bg-[#9a7734]">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
