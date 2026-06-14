# 🌸 Mia — Portfolio Dashboard

Portfolio dashboard premium dengan desain **3D Claymorphism** menggunakan pastel purple, lavender, pink, dan cream.

## ✨ Tech Stack

- **Next.js 15** — App Router
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling
- **Framer Motion** — Animations
- **Recharts** — Charts & analytics
- **Lucide React** — Icons

## 📁 Struktur Folder

```
mia-portfolio/
├── app/
│   ├── globals.css        ← Design tokens, clay styles
│   ├── layout.tsx         ← Root layout + SEO metadata
│   └── page.tsx           ← Main dashboard (routing logic)
├── components/
│   ├── dashboard/
│   │   ├── Sidebar.tsx    ← Left sidebar + nav + upgrade card
│   │   └── Header.tsx     ← Top header + search + dark mode
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── AnalyticsSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── BooksSection.tsx
│   │   ├── NasyidSection.tsx
│   │   ├── WebsetSection.tsx
│   │   ├── AchievementsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── SettingsSection.tsx
│   │   └── CtaBanner.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       └── badge.tsx
├── lib/
│   ├── utils.ts           ← cn() helper
│   └── data.ts            ← Mock data
├── types/
│   └── index.ts           ← TypeScript interfaces
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## 🚀 Cara Menjalankan

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev

# 3. Buka browser
# http://localhost:3000
```

## 🎨 Fitur

| Halaman | Konten |
|---|---|
| **Dashboard** | Hero + Stats + Charts + Books + Nasyid + Webset + Awards + CTA |
| **About** | Profil + Highlights + Stats |
| **Books** | Kartu buku dengan cover, genre, tahun |
| **Nasyid** | Playlist interaktif dengan play/pause + like |
| **My Webset** | Grid project cards |
| **Penghargaan** | Timeline awards dengan ikon |
| **Contact** | Form + info kontak + social links |
| **Settings** | Toggle dark mode, notifikasi, privasi |

## 🌙 Dark Mode

Klik ikon bulan di header untuk mengaktifkan dark mode.

## 📱 Responsive

- Mobile: sidebar collapsible dengan hamburger menu
- Tablet: layout adaptif
- Desktop: full sidebar + multi-column layout
