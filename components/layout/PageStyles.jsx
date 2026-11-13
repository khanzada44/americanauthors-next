/**
 * Page stylesheets + hero image preloads.
 * React 19 hoists these <link> tags into <head> and keeps the order given here.
 */
export default function PageStyles({ styles = [], preloads = [] }) {
  return (
    <>
      {styles.map((href) => (
        <link key={href} rel="stylesheet" href={href} precedence="default" />
      ))}
      {preloads.map((p) => (
        <link key={`${p.href}${p.media || ''}`} rel="preload" as="image" {...p} />
      ))}
    </>
  );
}
