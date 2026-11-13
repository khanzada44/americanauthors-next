import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';

export const metadata = pageMetadata({
  title: 'Author Website Design and Development',
  description:
    'Bring your books, biography and news together on an author website. Discuss book pages, content updates and direct sales options with our team.',
  path: '/author-website',
});

const styles = [
  '/assets/css/site2f72.css?v=20261109-eagle-logo',
  '/assets/css/author2f72.css?v=20261003',
  '/assets/css/forms.css?v=20261105-production',
  '/assets/css/widgets.css?v=20261105',
];

const preloads = [
  {
    type: 'image/webp',
    href: '/assets/images/photos/1616400619175-5beda3a17896-2400.webp',
    media: '(min-width: 761px)',
    fetchPriority: 'high',
  },
  {
    type: 'image/webp',
    href: '/assets/images/photos/1616400619175-5beda3a17896-1200.webp',
    media: '(max-width: 760px)',
    fetchPriority: 'high',
  },
];

const railLinks = [
  {
    href: '#top',
    section: 'top',
    label: 'Top',
    icon: '#i-home',
    text: 'Top',
  },
  {
    href: '#showcase',
    section: 'showcase',
    label: 'Showcase',
    icon: '#i-globe',
    text: 'Website',
  },
  {
    href: '#pages',
    section: 'pages',
    label: 'Pages',
    icon: '#i-book',
    text: 'Pages',
  },
  {
    href: '#process',
    section: 'process',
    label: 'Process',
    icon: '#i-steps',
    text: 'Process',
  },
  {
    href: '#contact',
    section: 'contact',
    label: 'Contact',
    icon: '#i-chat',
    text: 'Contact',
  },
];

const scripts = ['/assets/js/author-website2f72.js?v=20261003', '/assets/js/main2f72.js?v=20261105-production'];

export default function AuthorWebsitePage() {
  return (
    <>
      <PageStyles styles={styles} preloads={preloads} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="aw-hero on-dark" id="top" aria-labelledby="aw-title">
          <div className="aw-hero__media" aria-hidden="true">
            <div className="aw-hero__img" data-parallax="0.06" />
          </div>
          <div className="container aw-hero__inner">
            <nav className="aw-crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/#services">Services</a>
                </li>
                <li aria-current="page">Author Website</li>
              </ol>
            </nav>
            <div className="aw-hero__copy">
              <p className="eyebrow" data-reveal="">
                Author website design
              </p>
              <h1 className="aw-hero__title" id="aw-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Give readers a place '}
                <em>to find you.</em>
              </h1>
              <p className="aw-hero__lead" data-reveal="" style={{ '--d': '.16s' }}>
                An author website brings your books, background and latest news together in one place, with a design
                that feels connected to your writing.
              </p>
              <div className="aw-hero__ctas" data-reveal="" style={{ '--d': '.22s' }}>
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Build My Author Website '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>{' '}
                <a className="btn btn--glass" href="#approach">
                  See Our Approach
                </a>
              </div>
            </div>
            <p className="aw-hero__url" data-reveal="" style={{ '--d': '.3s' }} aria-hidden="true">
              <span className="aw-hero__lock" />
              www.
              <b>yourname</b>
              .com
            </p>
          </div>
        </section>
        <section className="section section--ivory aw-presence" id="approach" aria-labelledby="presence-title">
          <div className="container aw-presence__grid">
            <div className="aw-presence__head">
              <p className="aw-kicker" data-reveal="">
                <span>01</span>
                Your digital presence
              </p>
              <h2 className="aw-h2" id="presence-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'A home for your books '}
                <em>and the person behind them.</em>
              </h2>
              <p className="aw-presence__lede" data-reveal="" style={{ '--d': '.14s' }}>
                Readers may discover you through a recommendation or a single title. Your website helps them learn more,
                explore your other work and find a reliable way to get in touch.
              </p>
            </div>
            <ol className="aw-roles" role="list" data-reveal="" style={{ '--d': '.1s' }}>
              <li>
                <span>i.</span>
                Introduce the author
              </li>
              <li>
                <span>ii.</span>
                Showcase your books
              </li>
              <li>
                <span>iii.</span>
                Establish credibility
              </li>
              <li>
                <span>iv.</span>
                Give readers a place to connect
              </li>
              <li>
                <span>v.</span>
                {'Support media & press'}
              </li>
              <li>
                <span>vi.</span>
                Collect reader interest
              </li>
              <li>
                <span>vii.</span>
                Make you easy to contact
              </li>
              <li>
                <span>viii.</span>
                Create a lasting digital identity
              </li>
            </ol>
          </div>
        </section>
        <section className="section section--paper aw-built" id="showcase" aria-labelledby="built-title">
          <div className="container">
            <div className="aw-built__head">
              <p className="aw-kicker" data-reveal="">
                <span>02</span>
                The author’s home page
              </p>
              <h2 className="aw-h2" id="built-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Your books. '}
                <em>Your corner of the web.</em>
              </h2>
            </div>
            <figure className="aw-browser" data-reveal="scale" style={{ '--d': '.1s' }}>
              <div className="aw-browser__bar" aria-hidden="true">
                <i />
                <i />
                <i />
                <span>clarawhitmore.com</span>
              </div>
              <div className="aw-screen" aria-label="Illustrative author website design for a fictional author">
                <div className="cw cw-home">
                  <header className="cw-nav">
                    <span className="cw-mark">Clara Whitmore</span>
                    <nav className="cw-links">
                      <span className="is-on">Books</span>
                      <span>About</span>
                      <span>Journal</span>
                      <span>Press</span>
                      <span>Events</span>
                      <span>Contact</span>
                    </nav>
                    <span className="cw-btn cw-btn--line">Newsletter</span>
                  </header>
                  <section className="cw-hero">
                    <div className="cw-hero__copy">
                      <p className="cw-eyebrow">New novel · Autumn</p>
                      <p className="cw-h1">Stories about the people who stay behind.</p>
                      <p className="cw-lead">
                        Clara Whitmore writes quiet coastal fiction about family, memory and the small towns we carry
                        with us.
                      </p>
                      <div className="cw-actions">
                        <span className="cw-btn">Read the first chapter</span>
                        <span className="cw-link">
                          {'Order '}
                          <i>The Quiet Harbour</i>
                          {' →'}
                        </span>
                      </div>
                      <p className="cw-avail">Hardcover · Ebook · Audiobook</p>
                    </div>
                    <div className="cw-hero__art">
                      <span className="cw-hero__photo">
                        <img
                          src="/assets/images/photos/1707922402614-a111012d89bb-1200.webp"
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                      </span>
                      <span className="bk bk--harbour bk--hero">
                        <img
                          src="/assets/images/photos/1707922402605-2739e9e503ad-700x1050.webp"
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="bk__top">
                          <span className="bk__kicker">A Novel</span>
                          <span className="bk__t">The Quiet Harbour</span>
                        </span>
                        <span className="bk__a">Clara Whitmore</span>
                      </span>
                    </div>
                  </section>
                  <section className="cw-band">
                    <div className="cw-about">
                      <img
                        className="cw-portrait"
                        src="/assets/images/photos/1667053508464-eb11b394df83-500x620.webp"
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                      <div>
                        <p className="cw-label">About Clara</p>
                        <p className="cw-small">
                          {'A former bookseller, Clara lives on the coast and writes in the early mornings. '}
                          <i>The Quiet Harbour</i>
                          {' is her third novel.'}
                        </p>
                        <span className="cw-social">
                          <i>Instagram</i>
                          <i>Goodreads</i>
                          <i>Substack</i>
                        </span>
                      </div>
                    </div>
                    <div className="cw-excerpt">
                      <p className="cw-label">From the book</p>
                      <p className="cw-quote">
                        “The tide never asked permission. It simply came back, the way grief does: quietly, and all at
                        once.”
                      </p>
                      <span className="cw-link">Read chapter one →</span>
                    </div>
                    <div className="cw-shelf">
                      <p className="cw-label">Books</p>
                      <div className="cw-shelf__row">
                        <span className="cw-shelf__item">
                          <span className="bk bk--harbour ">
                            <img
                              src="/assets/images/photos/1707922402605-2739e9e503ad-700x1050.webp"
                              alt=""
                              loading="lazy"
                              decoding="async"
                            />
                            <span className="bk__top">
                              <span className="bk__kicker">A Novel</span>
                              <span className="bk__t">The Quiet Harbour</span>
                            </span>
                            <span className="bk__a">Clara Whitmore</span>
                          </span>
                          <b>The Quiet Harbour</b>
                          <em>2026</em>
                        </span>
                        <span className="cw-shelf__item">
                          <span className="bk bk--salt ">
                            <span className="bk__top">
                              <span className="bk__t">
                                {'Salt &'}
                                <br />
                                Silence
                              </span>
                              <span className="bk__rule" />
                            </span>
                            <span className="bk__sun" />
                            <span className="bk__a">Clara Whitmore</span>
                          </span>
                          <b>{'Salt & Silence'}</b>
                          <em>2024</em>
                        </span>
                        <span className="cw-shelf__item">
                          <span className="bk bk--tide ">
                            <img
                              src="/assets/images/photos/1760872069217-7580345401e3-700x1050.webp"
                              alt=""
                              loading="lazy"
                              decoding="async"
                            />
                            <span className="bk__top">
                              <span className="bk__kicker">A Novel</span>
                            </span>
                            <span className="bk__t">The Last Tide</span>
                            <span className="bk__a">Clara Whitmore</span>
                          </span>
                          <b>The Last Tide</b>
                          <em>2021</em>
                        </span>
                      </div>
                    </div>
                  </section>
                  <section className="cw-journal">
                    <div className="cw-journal__post">
                      <span className="cw-journal__img">
                        <img
                          src="/assets/images/photos/1707922402614-a111012d89bb-1200.webp"
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                      </span>
                      <div>
                        <p className="cw-label">Journal · September</p>
                        <p className="cw-h3">On writing the towns we leave</p>
                        <p className="cw-small">Notes on place, memory and the harbour that became a character.</p>
                      </div>
                    </div>
                    <div className="cw-events">
                      <p className="cw-label">Events</p>
                      <p className="cw-event">
                        <b>Oct 12</b>
                        <span>
                          {'Reading & signing'}
                          <br />
                          <em>Harbour Books, Portland</em>
                        </span>
                      </p>
                      <p className="cw-event">
                        <b>Nov 03</b>
                        <span>
                          In conversation
                          <br />
                          <em>Coastal Literary Festival</em>
                        </span>
                      </p>
                    </div>
                  </section>
                  <section className="cw-press">
                    <p className="cw-label">Featured in</p>
                    <span>The Coastal Review</span>
                    <span>Northlight Magazine</span>
                    <span>The Harbour Quarterly</span>
                    <span>Tidewater Radio</span>
                  </section>
                  <section className="cw-news">
                    <div>
                      <p className="cw-h3">Letters from the coast</p>
                      <p className="cw-small">
                        A short monthly note: new writing, events and first looks at upcoming books.
                      </p>
                    </div>
                    <span className="cw-field">your@email.com</span>
                    <span className="cw-btn">Subscribe</span>
                  </section>
                  <footer className="cw-foot">
                    <span className="cw-mark">Clara Whitmore</span>
                    <span>Books · About · Journal · Press · Contact</span>
                    <span className="cw-social">
                      <i>Instagram</i>
                      <i>Goodreads</i>
                      <i>Substack</i>
                    </span>
                    <span>© 2026 Clara Whitmore</span>
                  </footer>
                </div>
              </div>
              <ul className="aw-callouts" role="list">
                <li style={{ '--x': '62%', '--y': '1.5%' }}>
                  <b>Navigation</b>
                  Books, about, journal, press, events
                </li>
                <li style={{ '--x': '58%', '--y': '22%' }}>
                  <b>Featured book</b>
                  The newest title, front and centre
                </li>
                <li style={{ '--x': '2%', '--y': '47%' }}>
                  <b>Biography</b>
                  Portrait, short bio and social links
                </li>
                <li style={{ '--x': '38%', '--y': '47%' }}>
                  <b>Excerpt</b>A taste of the writing
                </li>
                <li style={{ '--x': '2%', '--y': '66%' }}>
                  <b>{'Journal & events'}</b>
                  Reasons for readers to return
                </li>
                <li style={{ '--x': '60%', '--y': '84%' }}>
                  <b>Reader connection</b>
                  Newsletter sign up
                </li>
              </ul>
              <figcaption>
                Illustrative design for a fictional author, showing how an American Authors author website can be
                structured.
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="section section--ivory aw-pages" id="pages" aria-labelledby="pages-title">
          <div className="aw-photo aw-photo--pages" data-aw-bg="" aria-hidden="true">
            <div className="aw-photo__img" />
          </div>
          <div className="container aw-pages__grid">
            <div className="aw-pages__head">
              <p className="aw-kicker" data-reveal="">
                <span>03</span>
                Site structure
              </p>
              <h2 className="aw-h2" id="pages-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Useful pages, '}
                <em>with a clear purpose.</em>
              </h2>
              <p data-reveal="" style={{ '--d': '.14s' }}>
                We can plan a site you can update with new book details, articles and event news. Editing features are
                agreed as part of the build.
              </p>
            </div>
            <ol className="aw-toc" role="list">
              <li data-reveal="">
                <span className="aw-toc__n">01</span>
                <b>Author Home</b>
                <i />
                <span className="aw-toc__d">First impression</span>
              </li>
              <li data-reveal="">
                <span className="aw-toc__n">02</span>
                <b>About the Author</b>
                <i />
                <span className="aw-toc__d">Your story</span>
              </li>
              <li data-reveal="">
                <span className="aw-toc__n">03</span>
                <b>{'Books & Publications'}</b>
                <i />
                <span className="aw-toc__d">Your shelf</span>
              </li>
              <li data-reveal="">
                <span className="aw-toc__n">04</span>
                <b>Individual Book Pages</b>
                <i />
                <span className="aw-toc__d">One page per title</span>
              </li>
              <li data-reveal="">
                <span className="aw-toc__n">05</span>
                <b>{'Media & Press'}</b>
                <i />
                <span className="aw-toc__d">For journalists</span>
              </li>
              <li data-reveal="">
                <span className="aw-toc__n">06</span>
                <b>{'Events & Appearances'}</b>
                <i />
                <span className="aw-toc__d">{'Readings & signings'}</span>
              </li>
              <li data-reveal="">
                <span className="aw-toc__n">07</span>
                <b>Reader Connection</b>
                <i />
                <span className="aw-toc__d">Community</span>
              </li>
              <li data-reveal="">
                <span className="aw-toc__n">08</span>
                <b>Contact</b>
                <i />
                <span className="aw-toc__d">Contact form</span>
              </li>
              <li data-reveal="">
                <span className="aw-toc__n">09</span>
                <b>Newsletter / Mailing List</b>
                <i />
                <span className="aw-toc__d">Sign up</span>
              </li>
              <li data-reveal="">
                <span className="aw-toc__n">10</span>
                <b>Blog or Journal</b>
                <i />
                <span className="aw-toc__d">Optional</span>
              </li>
            </ol>
          </div>
        </section>
        <section className="section section--dark aw-devices" id="responsive" aria-labelledby="devices-title">
          <div className="container">
            <div className="aw-devices__head">
              <p className="aw-kicker aw-kicker--dark" data-reveal="">
                <span>04</span>
                Responsive design
              </p>
              <h2 className="aw-h2" id="devices-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Easy to explore '}
                <em>on any screen.</em>
              </h2>
              <p data-reveal="" style={{ '--d': '.14s' }}>
                We design for the ways readers visit, with readable text, straightforward navigation and book
                information that works on phones, tablets and computers.
              </p>
            </div>
            <div
              className="aw-trio"
              data-reveal="scale"
              style={{ '--d': '.1s' }}
              aria-label="The same illustrative author website shown on desktop, tablet and phone"
            >
              <div className="aw-dev aw-dev--desk">
                <div className="aw-screen aw-screen--desk">
                  <div className="cw cw-home">
                    <header className="cw-nav">
                      <span className="cw-mark">Clara Whitmore</span>
                      <nav className="cw-links">
                        <span className="is-on">Books</span>
                        <span>About</span>
                        <span>Journal</span>
                        <span>Press</span>
                        <span>Events</span>
                        <span>Contact</span>
                      </nav>
                      <span className="cw-btn cw-btn--line">Newsletter</span>
                    </header>
                    <section className="cw-hero">
                      <div className="cw-hero__copy">
                        <p className="cw-eyebrow">New novel · Autumn</p>
                        <p className="cw-h1">Stories about the people who stay behind.</p>
                        <p className="cw-lead">
                          Clara Whitmore writes quiet coastal fiction about family, memory and the small towns we carry
                          with us.
                        </p>
                        <div className="cw-actions">
                          <span className="cw-btn">Read the first chapter</span>
                          <span className="cw-link">
                            {'Order '}
                            <i>The Quiet Harbour</i>
                            {' →'}
                          </span>
                        </div>
                        <p className="cw-avail">Hardcover · Ebook · Audiobook</p>
                      </div>
                      <div className="cw-hero__art">
                        <span className="cw-hero__photo">
                          <img
                            src="/assets/images/photos/1707922402614-a111012d89bb-1200.webp"
                            alt=""
                            loading="lazy"
                            decoding="async"
                          />
                        </span>
                        <span className="bk bk--harbour bk--hero">
                          <img
                            src="/assets/images/photos/1707922402605-2739e9e503ad-700x1050.webp"
                            alt=""
                            loading="lazy"
                            decoding="async"
                          />
                          <span className="bk__top">
                            <span className="bk__kicker">A Novel</span>
                            <span className="bk__t">The Quiet Harbour</span>
                          </span>
                          <span className="bk__a">Clara Whitmore</span>
                        </span>
                      </div>
                    </section>
                    <section className="cw-band">
                      <div className="cw-about">
                        <img
                          className="cw-portrait"
                          src="/assets/images/photos/1667053508464-eb11b394df83-500x620.webp"
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                        <div>
                          <p className="cw-label">About Clara</p>
                          <p className="cw-small">
                            {'A former bookseller, Clara lives on the coast and writes in the early mornings. '}
                            <i>The Quiet Harbour</i>
                            {' is her third novel.'}
                          </p>
                          <span className="cw-social">
                            <i>Instagram</i>
                            <i>Goodreads</i>
                            <i>Substack</i>
                          </span>
                        </div>
                      </div>
                      <div className="cw-excerpt">
                        <p className="cw-label">From the book</p>
                        <p className="cw-quote">
                          “The tide never asked permission. It simply came back, the way grief does: quietly, and all at
                          once.”
                        </p>
                        <span className="cw-link">Read chapter one →</span>
                      </div>
                      <div className="cw-shelf">
                        <p className="cw-label">Books</p>
                        <div className="cw-shelf__row">
                          <span className="cw-shelf__item">
                            <span className="bk bk--harbour ">
                              <img
                                src="/assets/images/photos/1707922402605-2739e9e503ad-700x1050.webp"
                                alt=""
                                loading="lazy"
                                decoding="async"
                              />
                              <span className="bk__top">
                                <span className="bk__kicker">A Novel</span>
                                <span className="bk__t">The Quiet Harbour</span>
                              </span>
                              <span className="bk__a">Clara Whitmore</span>
                            </span>
                            <b>The Quiet Harbour</b>
                            <em>2026</em>
                          </span>
                          <span className="cw-shelf__item">
                            <span className="bk bk--salt ">
                              <span className="bk__top">
                                <span className="bk__t">
                                  {'Salt &'}
                                  <br />
                                  Silence
                                </span>
                                <span className="bk__rule" />
                              </span>
                              <span className="bk__sun" />
                              <span className="bk__a">Clara Whitmore</span>
                            </span>
                            <b>{'Salt & Silence'}</b>
                            <em>2024</em>
                          </span>
                          <span className="cw-shelf__item">
                            <span className="bk bk--tide ">
                              <img
                                src="/assets/images/photos/1760872069217-7580345401e3-700x1050.webp"
                                alt=""
                                loading="lazy"
                                decoding="async"
                              />
                              <span className="bk__top">
                                <span className="bk__kicker">A Novel</span>
                              </span>
                              <span className="bk__t">The Last Tide</span>
                              <span className="bk__a">Clara Whitmore</span>
                            </span>
                            <b>The Last Tide</b>
                            <em>2021</em>
                          </span>
                        </div>
                      </div>
                    </section>
                    <section className="cw-journal">
                      <div className="cw-journal__post">
                        <span className="cw-journal__img">
                          <img
                            src="/assets/images/photos/1707922402614-a111012d89bb-1200.webp"
                            alt=""
                            loading="lazy"
                            decoding="async"
                          />
                        </span>
                        <div>
                          <p className="cw-label">Journal · September</p>
                          <p className="cw-h3">On writing the towns we leave</p>
                          <p className="cw-small">Notes on place, memory and the harbour that became a character.</p>
                        </div>
                      </div>
                      <div className="cw-events">
                        <p className="cw-label">Events</p>
                        <p className="cw-event">
                          <b>Oct 12</b>
                          <span>
                            {'Reading & signing'}
                            <br />
                            <em>Harbour Books, Portland</em>
                          </span>
                        </p>
                        <p className="cw-event">
                          <b>Nov 03</b>
                          <span>
                            In conversation
                            <br />
                            <em>Coastal Literary Festival</em>
                          </span>
                        </p>
                      </div>
                    </section>
                    <section className="cw-press">
                      <p className="cw-label">Featured in</p>
                      <span>The Coastal Review</span>
                      <span>Northlight Magazine</span>
                      <span>The Harbour Quarterly</span>
                      <span>Tidewater Radio</span>
                    </section>
                    <section className="cw-news">
                      <div>
                        <p className="cw-h3">Letters from the coast</p>
                        <p className="cw-small">
                          A short monthly note: new writing, events and first looks at upcoming books.
                        </p>
                      </div>
                      <span className="cw-field">your@email.com</span>
                      <span className="cw-btn">Subscribe</span>
                    </section>
                    <footer className="cw-foot">
                      <span className="cw-mark">Clara Whitmore</span>
                      <span>Books · About · Journal · Press · Contact</span>
                      <span className="cw-social">
                        <i>Instagram</i>
                        <i>Goodreads</i>
                        <i>Substack</i>
                      </span>
                      <span>© 2026 Clara Whitmore</span>
                    </footer>
                  </div>
                </div>
              </div>
              <div className="aw-dev aw-dev--tab">
                <div className="aw-screen aw-screen--tab">
                  <div className="cw cw-tab">
                    <header className="cw-nav">
                      <span className="cw-mark">Clara Whitmore</span>
                      <span className="cw-links">
                        <span>Books</span>
                        <span>About</span>
                        <span>Journal</span>
                      </span>
                      <span className="cw-burger" />
                    </header>
                    <section className="cw-tabhero">
                      <span className="bk bk--harbour bk--tab">
                        <img
                          src="/assets/images/photos/1707922402605-2739e9e503ad-700x1050.webp"
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="bk__top">
                          <span className="bk__kicker">A Novel</span>
                          <span className="bk__t">The Quiet Harbour</span>
                        </span>
                        <span className="bk__a">Clara Whitmore</span>
                      </span>
                      <div>
                        <p className="cw-eyebrow">New novel · Autumn</p>
                        <p className="cw-h1 cw-h1--tab">The Quiet Harbour</p>
                        <p className="cw-small">
                          A daughter, a harbour town and the one summer that changed them both.
                        </p>
                        <div className="cw-actions">
                          <span className="cw-btn">Order now</span>
                          <span className="cw-link">Excerpt →</span>
                        </div>
                      </div>
                    </section>
                    <section className="cw-tababout">
                      <img
                        className="cw-portrait"
                        src="/assets/images/photos/1667053508464-eb11b394df83-500x620.webp"
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                      <div>
                        <p className="cw-label">About Clara</p>
                        <p className="cw-small">
                          Clara Whitmore writes quiet coastal fiction about family, memory and the small towns we carry
                          with us.
                        </p>
                      </div>
                    </section>
                    <section className="cw-tabbooks">
                      <p className="cw-label">Also by Clara</p>
                      <div>
                        <span className="bk bk--salt ">
                          <span className="bk__top">
                            <span className="bk__t">
                              {'Salt &'}
                              <br />
                              Silence
                            </span>
                            <span className="bk__rule" />
                          </span>
                          <span className="bk__sun" />
                          <span className="bk__a">Clara Whitmore</span>
                        </span>
                        <span className="bk bk--tide ">
                          <img
                            src="/assets/images/photos/1760872069217-7580345401e3-700x1050.webp"
                            alt=""
                            loading="lazy"
                            decoding="async"
                          />
                          <span className="bk__top">
                            <span className="bk__kicker">A Novel</span>
                          </span>
                          <span className="bk__t">The Last Tide</span>
                          <span className="bk__a">Clara Whitmore</span>
                        </span>
                        <span className="cw-small">
                          {'Salt & Silence · 2024'}
                          <br />
                          The Last Tide · 2021
                        </span>
                      </div>
                    </section>
                    <section className="cw-news cw-news--stack">
                      <p className="cw-h3">Letters from the coast</p>
                      <span className="cw-field">your@email.com</span>
                      <span className="cw-btn">Subscribe</span>
                    </section>
                  </div>
                </div>
              </div>
              <div className="aw-dev aw-dev--phone">
                <span className="aw-dev__notch" />
                <div className="aw-screen aw-screen--phone">
                  <div className="cw cw-phone">
                    <header className="cw-nav">
                      <span className="cw-mark">Clara Whitmore</span>
                      <span className="cw-burger" />
                    </header>
                    <p className="cw-eyebrow">New novel · Autumn</p>
                    <p className="cw-h1 cw-h1--phone">Stories about the people who stay behind.</p>{' '}
                    <span className="bk bk--harbour bk--phone">
                      <img
                        src="/assets/images/photos/1707922402605-2739e9e503ad-700x1050.webp"
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="bk__top">
                        <span className="bk__kicker">A Novel</span>
                        <span className="bk__t">The Quiet Harbour</span>
                      </span>
                      <span className="bk__a">Clara Whitmore</span>
                    </span>{' '}
                    <span className="cw-btn cw-btn--block">Read the first chapter</span>{' '}
                    <p className="cw-quote cw-quote--phone">“The tide never asked permission.”</p>
                    <p className="cw-label">More books</p>
                    <div className="cw-phonebooks">
                      <span className="bk bk--salt ">
                        <span className="bk__top">
                          <span className="bk__t">
                            {'Salt &'}
                            <br />
                            Silence
                          </span>
                          <span className="bk__rule" />
                        </span>
                        <span className="bk__sun" />
                        <span className="bk__a">Clara Whitmore</span>
                      </span>
                      <span className="bk bk--tide ">
                        <img
                          src="/assets/images/photos/1760872069217-7580345401e3-700x1050.webp"
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="bk__top">
                          <span className="bk__kicker">A Novel</span>
                        </span>
                        <span className="bk__t">The Last Tide</span>
                        <span className="bk__a">Clara Whitmore</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="aw-devices__notes" role="list" data-reveal="" style={{ '--d': '.16s' }}>
              <li>
                <b>Typography</b>
                {' set for long reading'}
              </li>
              <li>
                <b>Navigation</b>
                {' that adapts to thumbs'}
              </li>
              <li>
                <b>Books</b>
                {' presented at every size'}
              </li>
              <li>
                <b>Accessibility</b>
                {' in contrast and structure'}
              </li>
            </ul>
          </div>
        </section>
        <section className="section section--ivory aw-books" id="books" aria-labelledby="books-title">
          <div className="container aw-books__grid">
            <div className="aw-books__head">
              <p className="aw-kicker" data-reveal="">
                <span>05</span>
                Book pages
              </p>
              <h2 className="aw-h2" id="books-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Let each book '}
                <em>have its own space.</em>
              </h2>
              <p data-reveal="" style={{ '--d': '.14s' }}>
                A dedicated book page can hold the description, cover, sample and buying links. If direct sales are part
                of your plan, we can discuss a store and payment setup.
              </p>
            </div>
            <figure className="aw-browser aw-browser--book" data-reveal="scale" style={{ '--d': '.1s' }}>
              <div className="aw-browser__bar" aria-hidden="true">
                <i />
                <i />
                <i />
                <span>clarawhitmore.com/books/salt and silence</span>
              </div>
              <div className="aw-screen" aria-label="Illustrative book page for a fictional title">
                <div className="cw cw-book">
                  <header className="cw-nav">
                    <span className="cw-mark">Clara Whitmore</span>
                    <nav className="cw-links">
                      <span className="is-on">Books</span>
                      <span>About</span>
                      <span>Journal</span>
                      <span>Press</span>
                      <span>Events</span>
                      <span>Contact</span>
                    </nav>
                    <span className="cw-btn cw-btn--line">Newsletter</span>
                  </header>
                  <p className="cw-crumb">
                    {'Books '}
                    <i>/</i>
                    {' Salt & Silence'}
                  </p>
                  <section className="cw-bookhero">
                    <div className="cw-bookhero__cover">
                      <span className="bk bk--salt bk--xl">
                        <span className="bk__top">
                          <span className="bk__t">
                            {'Salt &'}
                            <br />
                            Silence
                          </span>
                          <span className="bk__rule" />
                        </span>
                        <span className="bk__sun" />
                        <span className="bk__a">Clara Whitmore</span>
                      </span>
                    </div>
                    <div className="cw-bookhero__info">
                      <p className="cw-eyebrow">Literary fiction · 2024</p>
                      <p className="cw-h1 cw-h1--book">{'Salt & Silence'}</p>
                      <p className="cw-by">by Clara Whitmore</p>
                      <p className="cw-lead">
                        When a lighthouse keeper’s daughter returns to the island she swore she’d leave forever, she
                        finds the town has kept every one of her secrets, and one of its own.
                      </p>
                      <div className="cw-actions">
                        <span className="cw-btn">Buy the book</span>
                        <span className="cw-link">Read an excerpt →</span>
                      </div>
                      <dl className="cw-spec">
                        <div>
                          <dt>Format</dt>
                          <dd>Hardcover, ebook, audiobook</dd>
                        </div>
                        <div>
                          <dt>Pages</dt>
                          <dd>312</dd>
                        </div>
                        <div>
                          <dt>Published</dt>
                          <dd>March 2024</dd>
                        </div>
                      </dl>
                    </div>
                  </section>
                  <section className="cw-bookbody">
                    <div className="cw-bookabout">
                      <p className="cw-label">About the book</p>
                      <p className="cw-body">
                        Nell Aldous left Carrick Island at eighteen and built a life that never once required her to
                        look back. Twenty years later, her father’s death brings her home to the lighthouse, the
                        keeper’s cottage and a community that remembers her better than she remembers herself.
                      </p>
                      <p className="cw-body">
                        {'Told across one winter, '}
                        <i>{'Salt & Silence'}</i>
                        {' is a novel about inheritance and the quiet courage it takes to stay.'}
                      </p>
                    </div>
                    <figure className="cw-praise">
                      <p className="cw-label">{'Praise for Salt & Silence'}</p>
                      <blockquote>
                        “A tender, tidal novel. Whitmore writes silence the way other writers write storms.”
                      </blockquote>
                      <figcaption>The Coastal Review</figcaption>
                      <blockquote className="cw-praise__2">“Unhurried, luminous and quietly devastating.”</blockquote>
                      <figcaption>Northlight Magazine</figcaption>
                    </figure>
                  </section>
                  <section className="cw-also">
                    <p className="cw-label">Also by Clara</p>
                    <div className="cw-also__row">
                      <span className="cw-also__item">
                        <span className="bk bk--harbour ">
                          <img
                            src="/assets/images/photos/1707922402605-2739e9e503ad-700x1050.webp"
                            alt=""
                            loading="lazy"
                            decoding="async"
                          />
                          <span className="bk__top">
                            <span className="bk__kicker">A Novel</span>
                            <span className="bk__t">The Quiet Harbour</span>
                          </span>
                          <span className="bk__a">Clara Whitmore</span>
                        </span>
                        <span>
                          <b>The Quiet Harbour</b>
                          <em>2026 · Novel</em>
                        </span>
                      </span>
                      <span className="cw-also__item">
                        <span className="bk bk--tide ">
                          <img
                            src="/assets/images/photos/1760872069217-7580345401e3-700x1050.webp"
                            alt=""
                            loading="lazy"
                            decoding="async"
                          />
                          <span className="bk__top">
                            <span className="bk__kicker">A Novel</span>
                          </span>
                          <span className="bk__t">The Last Tide</span>
                          <span className="bk__a">Clara Whitmore</span>
                        </span>
                        <span>
                          <b>The Last Tide</b>
                          <em>2021 · Novel</em>
                        </span>
                      </span>
                    </div>
                    <div className="cw-news cw-news--inline">
                      <div>
                        <p className="cw-h3">Letters from the coast</p>
                        <p className="cw-small">New writing and events, once a month.</p>
                      </div>
                      <span className="cw-field">your@email.com</span>
                      <span className="cw-btn">Subscribe</span>
                    </div>
                  </section>
                </div>
              </div>
              <figcaption>Illustrative example: fictional author and titles.</figcaption>
            </figure>
          </div>
        </section>
        <section className="section section--paper aw-details" id="details" aria-labelledby="details-title">
          <div className="aw-photo aw-photo--details" data-aw-bg="" aria-hidden="true">
            <div className="aw-photo__img" />
          </div>
          <div className="container">
            <div className="aw-details__head">
              <p className="aw-kicker" data-reveal="">
                <span>06</span>
                Craft
              </p>
              <h2 className="aw-h2" id="details-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'The details that '}
                <em>make browsing easier.</em>
              </h2>
            </div>
            <p className="aw-words" data-reveal="" style={{ '--d': '.1s' }}>
              <span>Typography</span> <i>·</i> <span>Spacing</span> <i>·</i> <span>Navigation</span> <i>·</i>{' '}
              <span>Image direction</span> <i>·</i> <span>Mobile responsiveness</span> <i>·</i>{' '}
              <span>Accessibility</span> <i>·</i> <span>Page hierarchy</span> <i>·</i> <span>Loading performance</span>{' '}
              <i>·</i> <span>SEO structure</span> <i>·</i> <span>Social sharing</span> <i>·</i>{' '}
              <span>Contact forms</span>
            </p>
            <div className="aw-details__cols" data-reveal="" style={{ '--d': '.16s' }}>
              <p>
                <b>Design.</b>
                {' Type, colours and layouts chosen for comfortable reading and a clear view of your books.'}
              </p>
              <p>
                <b>Build.</b>
                {' Pages planned with responsive layouts, useful metadata and attention to loading performance.'}
              </p>
              <p>
                <b>Care.</b>
                {' Checks before launch and a clear discussion of any support you need afterwards.'}
              </p>
            </div>
          </div>
        </section>
        <section className="aw-journey on-dark" id="process" aria-labelledby="journey-title">
          <div className="aw-journey__media" data-aw-bg="" aria-hidden="true">
            <div className="aw-journey__img" />
          </div>
          <div className="container">
            <div className="aw-journey__head">
              <p className="aw-kicker aw-kicker--dark" data-reveal="">
                <span>07</span>
                The long view
              </p>
              <h2 className="aw-h2" id="journey-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'A website that grows '}
                <em>with your writing.</em>
              </h2>
            </div>
            <ol className="aw-path" role="list">
              <li data-reveal="">
                <b>Author</b>
                <span>{'Planning & concept: your vision, genre and branding.'}</span>
              </li>
              <li data-reveal="" style={{ '--d': '.05s' }}>
                <b>Story</b>
                <span>The voice and personality the site should carry.</span>
              </li>
              <li data-reveal="" style={{ '--d': '.1s' }}>
                <b>Book</b>
                <span>Your titles, presented with care.</span>
              </li>
              <li data-reveal="" style={{ '--d': '.15s' }}>
                <b>Website</b>
                <span>Designed, developed, tested and launched.</span>
              </li>
              <li data-reveal="" style={{ '--d': '.2s' }}>
                <b>Readers</b>
                <span>Found through search, kept through connection.</span>
              </li>
              <li data-reveal="" style={{ '--d': '.25s' }}>
                <b>Long term platform</b>
                <span>Updated by you, supported by us.</span>
              </li>
            </ol>
          </div>
        </section>
        <section className="section section--ivory faq" id="faq" aria-labelledby="faq-title">
          <div className="container faq__grid">
            <div className="faq__head">
              <p className="aw-kicker" data-reveal="">
                <span>08</span>
                FAQ
              </p>
              <h2 className="h2" id="faq-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Questions about '}
                <em>your author website.</em>
              </h2>
            </div>
            <div className="faq__list" data-faq="">
              <details className="qa" data-reveal="" open>
                <summary>
                  <span>Why do authors need a professional website?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    It gives readers one dependable place to explore your books, learn about you and find your official
                    links.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="">
                <summary>
                  <span>What features should an author’s website include?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Most authors need book pages, a biography and contact information. A journal, newsletter or store
                    can be added where it serves your plans.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="">
                <summary>
                  <span>Can I update my website content myself?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Yes, if content management is included in the build. We discuss what you want to update and explain
                    how to make those changes.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="">
                <summary>
                  <span>Will readers be able to use it on a phone?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>Yes. We plan and check layouts for mobile, tablet and desktop screens.</p>
                </div>
              </details>
              <details className="qa" data-reveal="">
                <summary>
                  <span>How does SEO help my author website?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Clear page titles, descriptions and organised content help search engines understand the site.
                    Search positions and visitor numbers still depend on several factors.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="">
                <summary>
                  <span>Can I sell books through my website?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    We can discuss a store, payment provider and delivery process if you want direct sales. These
                    features are scoped before the build.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="">
                <summary>
                  <span>How do I get started with my author website?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Share your books, preferred style and the features you need. We will help you turn those
                    requirements into a website brief.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="cta on-dark aw-cta" id="contact" aria-labelledby="cta-title">
          <div className="cta__media" aria-hidden="true">
            <img
              src="/assets/images/photos/1499750310107-5fef28a66643-1600.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.08"
            />
          </div>
          <div className="container cta__grid">
            <div className="cta__copy">
              <p className="eyebrow" data-reveal="">
                Build your author website
              </p>
              <h2 className="display cta__title" id="cta-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Let’s plan '}
                <em>your author website.</em>
              </h2>
              <p className="lead" data-reveal="" style={{ '--d': '.16s' }}>
                Show us your books and tell us what you want readers to find when they visit.
              </p>
              <div className="aw-cta__btns" data-reveal="" style={{ '--d': '.2s' }}>
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Build My Author Website '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>{' '}
                <a className="btn btn--glass" href="/contact">
                  <svg className="btn__icon" aria-hidden="true">
                    <use href="#i-phone" />
                  </svg>
                  Speak With Us
                </a>
              </div>
            </div>
            <LeadForm
              title="Start your author website"
              messageLabel="What are you writing, and where do you need help?"
            />
          </div>
        </section>
      </main>
      <PageScripts scripts={scripts} />
    </>
  );
}
