# americanauthors.org — Next.js

This is the PHP site (`brand-backup`) converted to **Next.js 15 (App Router, React 19)**.
All 29 pages, the header/footer, menus, modals, forms, styles and scripts are the same as before.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

The enquiry forms post to the PHP backend (`/api/contact.php`), so they only send email on the
live server (or under a local PHP/Apache). Everything else works in `npm run dev`.

## Build for the server

```bash
npm run build      # writes the finished static site to /out
```

Upload to `public_html` on Hostinger:

1. Everything inside **`out/`** (HTML pages, `assets/`, `favicon/`, `.htaccess`, `404.html`, `_next/`).
2. Everything inside **`php-api/`** (`api/`, `server/`, `config/`, `composer.json`, `composer.lock`).
3. Run `composer install --no-dev` in `public_html` (or upload the `vendor/` folder) for PHPMailer.
4. Email: copy `config/mail.local.example.php` to `config/mail.local.php`, add the mailbox password
   and set `enabled` to `true` (same as before).

`.htaccess` serves clean URLs (`/about` → `about.html`), redirects the old `about.php` / `about.html`
links, forces `https://americanauthors.org` and blocks `config/`, `server/` and `vendor/`.

## Where things are

| Old PHP                                   | Next.js                                      |
| ----------------------------------------- | -------------------------------------------- |
| `about.php`, `faq.php` …                  | `app/about/page.jsx`, `app/faq/page.jsx` …   |
| `index.php`                               | `app/page.jsx`                               |
| `components/layout/head.php`              | `app/layout.jsx` + `lib/seo.js`              |
| `components/layout/header.php`            | `components/layout/Header.jsx`               |
| `components/layout/footer.php`            | `components/layout/Footer.jsx`               |
| `components/shared/icons.php`             | `components/layout/Icons.jsx` (SVG sprite)   |
| `components/navigation/section-rail.php`  | `components/navigation/SectionRail.jsx`      |
| `components/forms/lead-form.php`          | `components/forms/LeadForm.jsx`              |
| `components/forms/security.php`           | `components/forms/FormSecurity.jsx`          |
| `components/modals/*.php`                 | `components/modals/LeadModal.jsx`, `BookModal.jsx` |
| `components/head/styles.php`, `scripts.php` | `components/layout/PageStyles.jsx`, `PageScripts.jsx` |
| `config/site.php` (global settings)       | `lib/site.js`                                |
| `config/forms.php` (rules for the browser)| `lib/forms.js` (server rules stay in `php-api/config/forms.php`) |
| `assets/css`, `assets/js`, `assets/images`| `public/assets/...` (unchanged)              |
| `api/contact.php`, `server/`, `config/`   | `php-api/` (unchanged) + new `api/csrf.php`  |

### Global settings

Change the phone, email, address, logos, live chat or indexing in **`lib/site.js`** — every page
reads from it. When the site may be indexed, set `allowIndexing: true` and remove the
`X-Robots-Tag` line from `public/.htaccess`.

### Per-page SEO

Each `page.jsx` exports `metadata = pageMetadata({ title, description, path })`, which outputs the
title, description, canonical and Open Graph tags exactly like the PHP `<head>`.

## What changed from the PHP version

- **Forms / CSRF**: a static page cannot print a session token, so `assets/js/forms.js` now calls
  the new `api/csrf.php` right before sending. Validation, rate limits and PHPMailer are unchanged.
- **Page scripts** (`assets/js/*.js`) load after React hydrates (`PageScripts.jsx`), in the same order.
  `main2f72.js` got a one-line fix so its `load` handler still runs when the page has already loaded.
- **`<body class>`** per page lives in `lib/pages.js` and is applied before the first paint.
- **Image `onerror`** handlers became one global handler in `app/layout.jsx` (same behaviour).
- Links use plain `<a href>` (full page loads), because the original vanilla JS expects a fresh page.
- `default.php` (the "Coming soon" placeholder) and the duplicate `files/public_html` copy were not converted.
