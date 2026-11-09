import Link from 'next/link';
import { adminStats, storefrontHighlights, storeConfig } from '@/lib/storefront-data';

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-line bg-white">
        <div className="container-shell grid gap-8 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-gold/30 bg-[#f8f1e4] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-gold">
              Premium jewellery storefront
            </p>
            <h1 className="max-w-xl text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
              A luxury shopping experience for {storeConfig.brandName}
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted">
              Built to let the business add products, pricing, photos, categories, and content later from the admin dashboard without editing code.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/catalog" className="rounded-full bg-gold px-6 py-3 font-medium text-white transition hover:bg-[#9a7734]">
                Explore catalog
              </Link>
              <Link href="/admin" className="rounded-full border border-line bg-white px-6 py-3 font-medium text-ink transition hover:border-gold hover:text-gold">
                Open admin
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-line bg-[#f2efe9] p-6 shadow-soft">
            <div className="aspect-[4/5] rounded-[1.5rem] border border-dashed border-gold/50 bg-[radial-gradient(circle_at_top,_#f8f1e4,_#efe7da_58%,_#e5dcc6)] p-6">
              <div className="flex h-full items-end justify-between rounded-[1.2rem] border border-white/60 bg-white/30 p-5 backdrop-blur-sm">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">Hero</p>
                  <h2 className="mt-3 text-3xl font-medium text-ink">CMS-ready storefront</h2>
                </div>
                <div className="text-5xl text-gold">✦</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Why this structure</p>
            <h2 className="section-title mt-2">Admin-managed storefront</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {storefrontHighlights.map((item) => (
            <div key={item.title} className="card p-6">
              <div className="mb-4 rounded-full bg-[#f8f1e4] p-3 text-xl text-gold">{item.icon}</div>
              <h3 className="text-xl font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f2efe9] py-16">
        <div className="container-shell">
          <h2 className="section-title text-center">Operational overview</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {adminStats.map((stat) => (
              <div key={stat.label} className="card p-6 text-center">
                <div className="text-3xl font-semibold text-gold">{stat.value}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.15em] text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
