'use client';

import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';

export default function Header() {
  const pathname = usePathname() || '/';
  const current = (href) => ((pathname.replace(/\/$/, '') || '/') === href ? 'page' : undefined);

  return (
    <>
      <header className="site-header" data-header="">
        <nav className="nav" aria-label="Primary">
          <a className="nav__logo" href="/" aria-current={current('/')} aria-label={`${site.name} home`}>
            <img
              className="nav__logo-color"
              src={site.logos.header}
              width="800"
              height="320"
              alt={site.name}
            />
          </a>{' '}
          <ul className="nav__menu" role="list">
            <li className="nav__item nav__item--has-sub" data-dropdown="">
              <button className="nav__link" type="button" aria-expanded="false" aria-controls="sub-services">
                {'Services '}
                <svg className="nav__caret" aria-hidden="true">
                  <use href="#i-down" />
                </svg>
              </button>{' '}
              <div className="nav__sub nav__sub--mega" id="sub-services">
                <div className="nav__mega">
                  <div className="nav__mega-col">
                    <p className="nav__mega-h">
                      <span>01</span>
                      {'Writing & Editorial'}
                    </p>
                    <ul role="list">
                      <li>
                        <a href="/ghostwriting" aria-current={current('/ghostwriting')}>
                          <i aria-hidden="true">
                            <svg>
                              <use href="#i-quill" />
                            </svg>
                          </i>
                          <span>Ghostwriting</span>
                        </a>
                      </li>
                      <li>
                        <a href="/book-editing" aria-current={current('/book-editing')}>
                          <i aria-hidden="true">
                            <svg>
                              <use href="#i-pen" />
                            </svg>
                          </i>
                          <span>{'Book Editing & Formatting'}</span>
                        </a>
                      </li>
                      <li>
                        <a href="/articles-magazines" aria-current={current('/articles-magazines')}>
                          <i aria-hidden="true">
                            <svg>
                              <use href="#i-doc" />
                            </svg>
                          </i>
                          <span>{'Articles & Magazines'}</span>
                          <em aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="nav__mega-col">
                    <p className="nav__mega-h">
                      <span>02</span>
                      {'Publishing & Production'}
                    </p>
                    <ul role="list">
                      <li>
                        <a href="/book-publishing" aria-current={current('/book-publishing')}>
                          <i aria-hidden="true">
                            <svg>
                              <use href="#i-book" />
                            </svg>
                          </i>
                          <span>Book Publishing</span>
                        </a>
                      </li>
                      <li>
                        <a href="/book-cover-design" aria-current={current('/book-cover-design')}>
                          <i aria-hidden="true">
                            <svg>
                              <use href="#i-book" />
                            </svg>
                          </i>
                          <span>Book Cover Design</span>
                        </a>
                      </li>
                      <li>
                        <a href="/illustration" aria-current={current('/illustration')}>
                          <i aria-hidden="true">
                            <svg>
                              <use href="#i-brush" />
                            </svg>
                          </i>
                          <span>Illustration</span>
                        </a>
                      </li>
                      <li>
                        <a href="/audio-book" aria-current={current('/audio-book')}>
                          <i aria-hidden="true">
                            <svg>
                              <use href="#i-audio" />
                            </svg>
                          </i>
                          <span>Audiobook Production</span>
                        </a>
                      </li>
                      <li>
                        <a href="/book-video" aria-current={current('/book-video')}>
                          <i aria-hidden="true">
                            <svg>
                              <use href="#i-play" />
                            </svg>
                          </i>
                          <span>{'Book Video & Trailers'}</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="nav__mega-col">
                    <p className="nav__mega-h">
                      <span>03</span>
                      {'Rights & Distribution'}
                    </p>
                    <ul role="list">
                      <li>
                        <a href="/copyrights-isbn" aria-current={current('/copyrights-isbn')}>
                          <i aria-hidden="true">
                            <svg>
                              <use href="#i-seal" />
                            </svg>
                          </i>
                          <span>{'Copyrights & ISBN'}</span>
                          <em aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="/global-distribution" aria-current={current('/global-distribution')}>
                          <i aria-hidden="true">
                            <svg>
                              <use href="#i-globe" />
                            </svg>
                          </i>
                          <span>Global Distribution</span>
                          <em aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="nav__mega-col">
                    <p className="nav__mega-h">
                      <span>04</span>
                      {'Marketing & Visibility'}
                    </p>
                    <ul role="list">
                      <li>
                        <a href="/book-promotion" aria-current={current('/book-promotion')}>
                          <i aria-hidden="true">
                            <svg>
                              <use href="#i-star" />
                            </svg>
                          </i>
                          <span>{'Book Promotion & Marketing'}</span>
                        </a>
                      </li>
                      <li>
                        <a href="/author-website" aria-current={current('/author-website')}>
                          <i aria-hidden="true">
                            <svg>
                              <use href="#i-globe" />
                            </svg>
                          </i>
                          <span>Author Website</span>
                        </a>
                      </li>
                      <li>
                        <a href="/web-social-media" aria-current={current('/web-social-media')}>
                          <i aria-hidden="true">
                            <svg>
                              <use href="#i-chat" />
                            </svg>
                          </i>
                          <span>{'Web & Social Media'}</span>
                          <em aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="/billboard-campaigns" aria-current={current('/billboard-campaigns')}>
                          <i aria-hidden="true">
                            <svg>
                              <use href="#i-frame" />
                            </svg>
                          </i>
                          <span>Billboard Campaigns</span>
                          <em aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="/podcasts" aria-current={current('/podcasts')}>
                          <i aria-hidden="true">
                            <svg>
                              <use href="#i-mic" />
                            </svg>
                          </i>
                          <span>Podcasts</span>
                          <em aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="/tv-interviews" aria-current={current('/tv-interviews')}>
                          <i aria-hidden="true">
                            <svg>
                              <use href="#i-play" />
                            </svg>
                          </i>
                          <span>TV Interviews</span>
                          <em aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="/book-fairs" aria-current={current('/book-fairs')}>
                          <i aria-hidden="true">
                            <svg>
                              <use href="#i-book" />
                            </svg>
                          </i>
                          <span>Book Fairs</span>
                          <em aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="nav__mega-foot">
                  <span>17 services, one publishing house, from the first draft to the reader.</span>
                  <div>
                    <a href="/#services">All services</a>
                    <a href="/our-work" aria-current={current('/our-work')}>
                      Our work
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="/book-publishing" aria-current={current('/book-publishing')}>
                Book Publishing
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="/book-promotion" aria-current={current('/book-promotion')}>
                Book Promotion
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="/publications" aria-current={current('/publications')}>
                Publications
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="/featured-authors" aria-current={current('/featured-authors')}>
                Featured Authors
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="/faq" aria-current={current('/faq')}>
                FAQ
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="/about" aria-current={current('/about')}>
                About
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="/blogs" aria-current={current('/blogs')}>
                Blogs
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="/contact" aria-current={current('/contact')}>
                Contact
              </a>
            </li>
          </ul>
          <div className="nav__actions">
            <a className="nav__phone" href={`tel:${site.phoneHref}`} aria-label={`Call ${site.phone}`}>
              <svg aria-hidden="true">
                <use href="#i-phone" />
              </svg>
              <span>{site.phone}</span>
            </a>{' '}
            <button className="btn btn--primary btn--sm nav__cta" type="button" data-open-lead="">
              {'Plan Your Book '}
              <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </button>{' '}
            <button
              className="nav__burger"
              type="button"
              aria-label="Open menu"
              aria-expanded="false"
              aria-controls="mobile-menu"
              data-burger=""
            >
              <span />
              <span />
            </button>
          </div>
        </nav>
      </header>
      <div className="mobile-menu" id="mobile-menu" role="navigation" aria-label="Mobile" data-mobile-menu="" hidden>
        <div className="mobile-menu__inner">
          <p className="label mobile-menu__label">Menu</p>
          <ul className="mobile-menu__list" role="list">
            <li>
              <button
                className="mobile-menu__link mobile-menu__toggle"
                type="button"
                aria-expanded="false"
                aria-controls="m-services"
                data-m-toggle=""
              >
                {'Services '}
                <svg aria-hidden="true">
                  <use href="#i-plus" />
                </svg>
              </button>{' '}
              <ul className="mobile-menu__sub" id="m-services" role="list" hidden>
                <li className="mobile-menu__grp" aria-hidden="true">
                  {'Writing & Editorial'}
                </li>
                <li>
                  <a href="/ghostwriting" aria-current={current('/ghostwriting')}>
                    Ghostwriting
                  </a>
                </li>
                <li>
                  <a href="/book-editing" aria-current={current('/book-editing')}>
                    {'Book Editing & Formatting'}
                  </a>
                </li>
                <li>
                  <a href="/articles-magazines" aria-current={current('/articles-magazines')}>
                    {'Articles & Magazines'}
                  </a>
                </li>
                <li className="mobile-menu__grp" aria-hidden="true">
                  {'Publishing & Production'}
                </li>
                <li>
                  <a href="/book-publishing" aria-current={current('/book-publishing')}>
                    Book Publishing
                  </a>
                </li>
                <li>
                  <a href="/book-cover-design" aria-current={current('/book-cover-design')}>
                    Book Cover Design
                  </a>
                </li>
                <li>
                  <a href="/illustration" aria-current={current('/illustration')}>
                    Illustration
                  </a>
                </li>
                <li>
                  <a href="/audio-book" aria-current={current('/audio-book')}>
                    Audiobook Production
                  </a>
                </li>
                <li>
                  <a href="/book-video" aria-current={current('/book-video')}>
                    {'Book Video & Trailers'}
                  </a>
                </li>
                <li className="mobile-menu__grp" aria-hidden="true">
                  {'Rights & Distribution'}
                </li>
                <li>
                  <a href="/copyrights-isbn" aria-current={current('/copyrights-isbn')}>
                    {'Copyrights & ISBN'}
                  </a>
                </li>
                <li>
                  <a href="/global-distribution" aria-current={current('/global-distribution')}>
                    Global Distribution
                  </a>
                </li>
                <li className="mobile-menu__grp" aria-hidden="true">
                  {'Marketing & Visibility'}
                </li>
                <li>
                  <a href="/book-promotion" aria-current={current('/book-promotion')}>
                    {'Book Promotion & Marketing'}
                  </a>
                </li>
                <li>
                  <a href="/author-website" aria-current={current('/author-website')}>
                    Author Website
                  </a>
                </li>
                <li>
                  <a href="/web-social-media" aria-current={current('/web-social-media')}>
                    {'Web & Social Media'}
                  </a>
                </li>
                <li>
                  <a href="/billboard-campaigns" aria-current={current('/billboard-campaigns')}>
                    Billboard Campaigns
                  </a>
                </li>
                <li>
                  <a href="/podcasts" aria-current={current('/podcasts')}>
                    Podcasts
                  </a>
                </li>
                <li>
                  <a href="/tv-interviews" aria-current={current('/tv-interviews')}>
                    TV Interviews
                  </a>
                </li>
                <li>
                  <a href="/book-fairs" aria-current={current('/book-fairs')}>
                    Book Fairs
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="mobile-menu__link" href="/book-publishing" aria-current={current('/book-publishing')}>
                Book Publishing
              </a>
            </li>
            <li>
              <a className="mobile-menu__link" href="/book-promotion" aria-current={current('/book-promotion')}>
                Book Promotion
              </a>
            </li>
            <li>
              <a
                className="mobile-menu__link"
                href="/publications"
                aria-current={current('/publications')}
                data-m-close=""
              >
                Publications
              </a>
            </li>
            <li>
              <a className="mobile-menu__link" href="/featured-authors" aria-current={current('/featured-authors')}>
                Featured Authors
              </a>
            </li>
            <li>
              <a className="mobile-menu__link" href="/faq" aria-current={current('/faq')}>
                FAQ
              </a>
            </li>
            <li>
              <a className="mobile-menu__link" href="/about" aria-current={current('/about')} data-m-close="">
                About
              </a>
            </li>
            <li>
              <a className="mobile-menu__link" href="/blogs" aria-current={current('/blogs')}>
                Blogs
              </a>
            </li>
            <li>
              <a className="mobile-menu__link" href="/contact" aria-current={current('/contact')} data-m-close="">
                Contact
              </a>
            </li>
          </ul>
          <div className="mobile-menu__books" aria-hidden="true">
            <img src="/assets/images/books/cover-06.webp" alt="" loading="lazy" />{' '}
            <img src="/assets/images/books/cover-25.webp" alt="" loading="lazy" />{' '}
            <img src="/assets/images/books/cover-05.webp" alt="" loading="lazy" />
          </div>
          <div className="mobile-menu__foot">
            <button className="btn btn--primary" type="button" data-open-lead="">
              {'Discuss Your Book '}
              <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </button>{' '}
            <a className="btn btn--outline-dark" href={`tel:${site.phoneHref}`}>
              <svg className="btn__icon" aria-hidden="true">
                <use href="#i-phone" />
              </svg>
              {site.phone}
            </a>{' '}
            <a className="mobile-menu__mail" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
