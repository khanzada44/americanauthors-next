// GLOBAL SETTINGS: edit this file to update the whole site
// (same values as the old config/site.php).
export const site = {
  name: 'americanauthors.org',
  shortName: 'American Authors',
  url: 'https://americanauthors.org',
  email: 'info@americanauthors.org',
  phone: '+1 832-464-6607',
  // Clickable tel: number (digits only, with country code).
  phoneHref: '+18324646607',
  address: '700 Smith St, Houston, TX, United States, 77002',
  logos: {
    header: '/assets/images/brand/eagle-logo-header.png',
    footer: '/assets/images/brand/eagle-logo-footer.png',
    social: '/assets/images/brand/eagle-logo-social.png',
  },
  // Live chat (Tawk.to). Set enabled to false to remove the widget.
  tawk: {
    enabled: true,
    propertyId: '6ad661f02476ba34ce68a4f8',
    widgetId: '1k5amt5jk',
  },
  // Keep false during development. Set true when ready for search indexing.
  allowIndexing: false,
};
