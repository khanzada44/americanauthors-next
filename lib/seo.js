import { site } from './site';

/**
 * Builds the per-page <head> metadata exactly like the PHP pages did:
 * title, description, canonical, Open Graph and Twitter tags.
 */
export function pageMetadata({ title, description, path, ogType = 'website', ogImage = site.logos.social }) {
  const fullTitle = title.endsWith(`| ${site.name}`) ? title : `${title} | ${site.name}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: ogType,
      siteName: site.name,
      title: fullTitle,
      description,
      url: path,
      images: [ogImage],
    },
    twitter: { card: 'summary_large_image' },
  };
}
