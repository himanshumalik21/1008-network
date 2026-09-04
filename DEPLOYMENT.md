# Deployment Guide: 1008 (1008.network)

This repository is configured to be deployed directly to GitHub and Vercel with zero configuration required.

## 1. Push to GitHub

```bash
cd /Users/hm/Documents/GitHub/1008-network
git init
git add .
git commit -m "feat: complete production-ready 1008 venture platform"
git branch -M main
git remote add origin https://github.com/YOUR_ORGANIZATION/1008-network.git
git push -u origin main
```

## 2. Deploy to Vercel (Recommended)

1. Navigate to [vercel.com/new](https://vercel.com/new) and select the `1008-network` repository.
2. Vercel will automatically detect Next.js 15.
3. Add Custom Domain: `1008.network` and `www.1008.network`.
4. Click **Deploy**.

## 3. Environment Variables (Optional for PostgreSQL)

The platform works out of the box with resilient in-memory and static data. To connect a live PostgreSQL database:

```env
DATABASE_URL="postgresql://username:password@host:5432/1008_db?schema=public"
```

Run migrations:
```bash
npx prisma db push
```
