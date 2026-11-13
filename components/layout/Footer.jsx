import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="footer on-dark">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img
              src={site.logos.footer}
              width="800"
              height="320"
              alt={site.name}
              loading="lazy"
            />{' '}
            <p>
              {`${site.name} helps authors develop manuscripts and prepare books for readers. Ask us about writing, editing, design, publishing and promotion, whether you need one service or support across the project.`}
            </p>
            <div className="footer__social" />
          </div>
          <nav className="footer__col" aria-label="Our services">
            <p className="label">Book Services</p>
            <ul role="list">
              <li>
                <a href="/ghostwriting">Ghostwriting</a>
              </li>
              <li>
                <a href="/book-editing">{'Book Editing & Formatting'}</a>
              </li>
              <li>
                <a href="/book-publishing">Book Publishing</a>
              </li>
              <li>
                <a href="/book-promotion">{'Book Promotion & Marketing'}</a>
              </li>
              <li>
                <a href="/audio-book">Audiobook Production</a>
              </li>
              <li>
                <a href="/author-website">Author Website</a>
              </li>
              <li>
                <a href="/copyrights-isbn">{'Copyrights & ISBN'}</a>
              </li>
              <li>
                <a href="/global-distribution">Global Distribution</a>
              </li>
              <li>
                <a href="/podcasts">Podcasts</a>
              </li>
              <li>
                <a href="/book-fairs">Book Fairs</a>
              </li>
              <li>
                <a href="/#services">All services</a>
              </li>
            </ul>
          </nav>
          <nav className="footer__col" aria-label="Quick links">
            <p className="label">Explore More</p>
            <ul role="list">
              <li>
                <a href="/book-video">Book Video</a>
              </li>
              <li>
                <a href="/book-cover-design">Book Cover Design</a>
              </li>
              <li>
                <a href="/illustration">Illustration</a>
              </li>
              <li>
                <a href="/blogs">Blogs</a>
              </li>
              <li>
                <a href="/terms-and-conditions">{'Terms & Conditions'}</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </nav>
          <div className="footer__col">
            <p className="label">Contact Our Team</p>
            <ul role="list" className="footer__contact">
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
              </li>
              <li>{site.address}</li>
            </ul>{' '}
            <button className="btn btn--primary btn--sm" type="button" data-open-lead="">
              Plan Your Book
            </button>
          </div>
        </div>
        <div className="footer__bottom">
          <p>
            {'© '}
            <span data-year="">2026</span>
            {` ${site.name}. All rights reserved.`}
          </p>
          <div className="footer__badges">
            <img
              src="/assets/images/site/payment-methods.webp"
              width="200"
              height="39"
              alt="Accepted payment methods"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
