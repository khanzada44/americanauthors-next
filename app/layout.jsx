import Script from 'next/script';
import { site } from '@/lib/site';
import { formRules } from '@/lib/forms';
import { bodyClasses } from '@/lib/pages';
import Icons from '@/components/layout/Icons';
import SkipLink from '@/components/layout/SkipLink';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LeadModal from '@/components/modals/LeadModal';

export const metadata = {
  metadataBase: new URL(site.url),
  robots: site.allowIndexing
    ? { index: true, follow: true, 'max-image-preview': 'large' }
    : { index: false, follow: false },
  icons: {
    icon: [
      { url: '/favicon/eagle-logo-32.png', sizes: '32x32' },
      { url: '/favicon/eagle-logo-192.png', sizes: '192x192' },
    ],
    apple: '/favicon/eagle-logo-180.png',
  },
  other: { 'msapplication-TileImage': '/favicon/eagle-logo-192.png' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#F6F2EA',
};

// Runs before first paint: "no-js" -> "js", and hides images that fail to load
// (replaces the old inline onerror="this.style.visibility='hidden'").
const headScript = `document.documentElement.classList.replace('no-js','js');
window.addEventListener('error',function(e){var t=e.target;if(t&&t.tagName==='IMG'){t.style.visibility='hidden';}},true);
window.SiteFormRules=${JSON.stringify(formRules)};`;

// Same <body class="..."> the PHP pages had, set before anything is painted.
const bodyClassScript = `(function(m){var p=location.pathname.replace(/\\.html$/,'').replace(/\\/+$/,'')||'/';var c=m[p];if(c)document.body.className=c;})(${JSON.stringify(bodyClasses)});`;

const tawkScript = ``;

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className="no-js" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/assets/fonts/manrope-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/assets/fonts/fraunces-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
        <script dangerouslySetInnerHTML={{ __html: headScript }} />
      </head>
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: bodyClassScript }} />
        <Icons />
        <SkipLink />
        <Header />
        {children}
        <Footer />
        <LeadModal />
        {site.tawk.enabled && (
          <Script id="tawk" strategy="lazyOnload">
            {tawkScript}
          </Script>
        )}
      </body>
    </html>
  );
}
