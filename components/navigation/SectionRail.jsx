/** Floating "page sections" rail (was components/navigation/section-rail.php). */
export default function SectionRail({ links }) {
  return (
    <nav className="rail" aria-label="Page sections" data-rail="">
      {links.map((link) => (
        <a key={link.href} href={link.href} data-rail-link={link.section} aria-label={link.label}>
          <svg aria-hidden="true">
            <use href={link.icon} />
          </svg>
          <span>{link.text}</span>
        </a>
      ))}
    </nav>
  );
}
