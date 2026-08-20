# Portfolio — Чойжамц

Frontend хөгжүүлэгчийн хувийн портфолио. **Next.js 16 · TypeScript · Tailwind CSS v4**,
монгол / англи / итали гурван хэлтэй.

Дизайн: *Soft Pastel* — дулаан цайвар дэвсгэр, sage / clay / sky пастель карт,
гүн ногоон онцлол, Instrument Serif + Playfair Display гарчиг.

## Ажиллуулах

```bash
npm install      # анх удаа
npm run dev      # http://localhost:3000  ("/" → "/en" рүү шилжинэ)
npm run build    # production build
npm run lint     # код шалгах
```

Хэл бүр өөрийн замтай: `/en` (үндсэн), `/mn`, `/it` — гурвуулаа статикаар
урьдчилан үүсдэг. Үндсэн хэлийг солихдоо `src/lib/i18n.ts` доторх
`defaultLocale` **ба** `next.config.ts` доторх `DEFAULT_LOCALE` хоёуланг нь
сольно (next.config.ts дотор `@/` alias ажилладаггүй тул давхардсан).

## 📝 Текстээ хаанаас засах вэ

| Файл | Юу байгаа |
|---|---|
| `src/content/en.ts` | **Англи** бүх текст (үндсэн хэл) |
| `src/content/mn.ts` | **Монгол** бүх текст |
| `src/content/it.ts` | **Итали** бүх текст |
| `src/content/types.ts` | Гурван файлын нэгдсэн бүтэц |
| `src/content/config.ts` | Орчуулагдахгүй зүйлс — и-мэйл, холбоос, зураг, төслийн жагсаалт |

> **Чухал:** `types.ts` дотор талбар нэмбэл гурван хэлэнд нь бичих ёстой.
> Аль нэгэнд нь мартвал `npm run build` алдаа заана — тиймээс хэл хоорондоо
> хэзээ ч зөрөхгүй.

## 🖼 Зураг

- **Хөрөг:** `public/images/portrait.jpg`. Солихдоо `src/content/config.ts` доторх
  `PORTRAIT`-ыг шинэчил.
- **Төслийн зураг:** `public/images/work/` дотор. Төсөл бүрт `image` зам, шаардвал
  `imagePosition` (CSS `object-position`, ж: `"88% 50%"`) зааж таслалтыг тохируулна.
- `image: null` бол автоматаар пастель өнгөт хайрцаг гарна — алдаа заахгүй.

## ➕ Шинэ төсөл нэмэх

1. `src/content/config.ts` → `PROJECTS` дотор мөр нэм (`id`, `image`).
2. Гурван хэлний файл бүрийн `work.projects` дотор тэр `id`-гаар текстийг нь бич.

Багийн төсөл бол `role` талбарт өөрийн үүргээ бич — сайт дээр "Миний үүрэг: …"
гэж харагдана.

## 🎨 Өнгө солих

`src/app/globals.css` доторх `:root`:

```css
--c-bg:   #faf7f2;   /* дэвсгэр */
--c-card: #ffffff;   /* карт */
--c-ink:  #221f1b;   /* текст */
--c-dim:  #6f6a62;   /* сул текст */
--c-sage: #e4ebe2;   /* пастель 1 */
--c-clay: #f3e4d8;   /* пастель 2 */
--c-sky:  #e2eaf1;   /* пастель 3 */
--c-acc:  #4a6b52;   /* онцлох ногоон */
```

## 🔤 Фонтын тухай

`Instrument Serif` нь **кирилл үсэггүй**. Тиймээс `--font-display` нь
Instrument Serif → **Playfair Display** → Georgia гэсэн дараалалтай:
латин үг (Choijamts, SparkXP) эхнийхээр, кирилл нь Playfair-ээр гарна.
Шинэ гарчгийн фонт сонгохдоо кирилл дэмждэг эсэхийг заавал шалга.

## 🚀 Deploy (Vercel)

1. GitHub рүү push.
2. [vercel.com](https://vercel.com) → **Add New → Project** → repo сонгох → **Deploy**.
3. Дуусмагц `xxx.vercel.app` хаяг өгнө — **өөр юу ч тохируулах шаардлагагүй**.

Сайтын хаягийг `src/lib/site-url.ts` автоматаар олно:

| Дараалал | Эх сурвалж |
|---|---|
| 1 | `NEXT_PUBLIC_SITE_URL` — өөрийн домэйн авбал Vercel дээр энэ хувьсагчийг нэм |
| 2 | `VERCEL_PROJECT_PRODUCTION_URL` — Vercel өөрөө өгнө (`…vercel.app`) |
| 3 | `http://localhost:3000` — дотоод хөгжүүлэлт |

sitemap, `hreflang`, OpenGraph бүгд эндээс хаягаа авдаг тул домэйн авсны дараа
зөвхөн нэг env хувьсагч нэмэхэд хангалттай.

## Бүтэц

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx   # <html lang>, metadata, hreflang, фонт
│   │   └── page.tsx     # хэсгүүдийг угсарна
│   ├── globals.css      # дизайн систем
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/          # TopBar, Footer
│   ├── sections/        # Hero, InfoCards, About, Path, Work, Skills, Contact
│   ├── providers/       # SmoothScroll (Lenis)
│   └── ui/              # Card, Reveal, StatusPill, LanguageSwitcher, Icons
├── content/             # ⭐ бүх текст ба тохиргоо
└── lib/                 # i18n, фонт, useMediaQuery
```
