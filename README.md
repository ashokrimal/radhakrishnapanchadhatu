# Radhakrishna Panchadhatu

A mobile-first jewellery storefront scaffold with a CMS-oriented data model. Product photos, descriptions, prices, categories, and business content should be entered by the store owner through protected admin tools; they are not production content in this repository.

## Current status

- Next.js App Router storefront/admin UI scaffold
- PostgreSQL Prisma schema for products, categories, and store settings
- Prices are represented as integer paisa; products may remain unpriced while being drafted
- No production product catalogue or business contact information is seeded
- Admin authentication, database-backed forms, media storage, payments, and checkout are not yet implemented. Do not expose this scaffold as a production admin system before those protections are added.

## Local setup

1. Install Node.js LTS and PostgreSQL.
2. Install dependencies: `npm install`.
3. Copy `.env.example` to `.env` and set `DATABASE_URL` to a development database.
4. Generate the Prisma client: `npm run db:generate`.
5. Create/apply a development migration: `npm run db:migrate`.
6. Start the app: `npm run dev`.

Use a separate production database and secret-managed credentials in deployment. Never commit `.env` files or database credentials.
