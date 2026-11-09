export default function AdminBannersPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Home page</p>
          <h1 className="section-title mt-2">Banners and announcements</h1>
        </div>
        <button className="rounded-full bg-gold px-5 py-2 font-medium text-white hover:bg-[#9a7734]">Add banner</button>
      </div>

      <div className="space-y-5">
        {['Hero campaign banner', 'Festival promotion', 'Store announcement bar'].map((banner) => (
          <div key={banner} className="card p-5">
            <div className="text-xl font-medium text-ink">{banner}</div>
            <div className="mt-2 text-sm text-muted">Draft, publish, schedule, and update via CMS later.</div>
          </div>
        ))}
      </div>
    </div>
  );
}
