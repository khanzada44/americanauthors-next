import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Book Fair Preparation and Author Support',
  description:
    'Prepare your book for fairs and publishing events with event planning, catalogue details, display materials and support for presentation.',
  path: '/book-fairs',
});

const styles = [
  '/assets/css/site2f72.css?v=20261109-eagle-logo',
  '/assets/css/services-plus2f72.css?v=20261003',
  '/assets/css/forms.css?v=20261105-production',
  '/assets/css/widgets.css?v=20261105',
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
    href: '#sig-title',
    section: 'sig-title',
    label: 'Overview',
    icon: '#i-book',
    text: 'Overview',
  },
  {
    href: '#inc-title',
    section: 'inc-title',
    label: 'What we handle',
    icon: '#i-pen',
    text: 'Services',
  },
  {
    href: '#contact',
    section: 'contact',
    label: 'Contact',
    icon: '#i-chat',
    text: 'Contact',
  },
];

const scripts = ['/assets/js/service-page2f72.js?v=20261003', '/assets/js/main2f72.js?v=20261105-production'];

export default function BookFairsPage() {
  return (
    <>
      <PageStyles styles={styles} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="ns-hero ns-hero--plate" id="top" aria-labelledby="ns-title">
          <div className="container">
            <nav className="ns-crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/#services">Services</a>
                </li>
                <li aria-current="page">Book Fairs</li>
              </ol>
            </nav>
            <div className="ns-hero__copy">
              <p className="ns-eyebrow">
                <span />
                {'Marketing & Visibility'}
              </p>
              <h1 className="ns-title" id="ns-title">
                {'Bring your book '}
                <em>into the conversation.</em>
              </h1>
              <p className="ns-lead">
                Prepare for book fairs and publishing events with support for event selection, catalogue information,
                displays and book presentation.
              </p>
              <div className="ns-hero__btns">
                <button className="btn btn--primary" type="button" data-open-lead="">
                  {'Plan Your Book '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>
              </div>
              <ul className="ns-chips" role="list">
                <li>Event selection</li>
                <li>Book display</li>
                <li>Fair materials</li>
                <li>Industry meetings</li>
              </ul>
            </div>
            <figure className="ns-hero__plate">
              <img
                src="/assets/images/photos/1732652835004-efc80cb31d9d-2000.webp"
                alt="Visitors browsing tables of books at a book fair"
                decoding="async"
                fetchPriority="high"
              />
              <figcaption>
                <span>Book Fairs</span>
                {site.name}
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="ns-intro" aria-label="Introduction">
          <div className="container ns-intro__grid">
            <p className="ns-intro__state ns-rv">
              A fair is a chance to put a book in front of people who work with and enjoy books.
            </p>
            <div className="ns-intro__side ns-rv">
              <p>
                We discuss which events suit your title, then help prepare the information and materials needed to
                present it. Participation arrangements depend on the event and the scope you choose.
              </p>
              <p className="ns-intro__part">
                {'Part of '}
                <a href="/#services">{'Marketing & Visibility'}</a>
              </p>
            </div>
          </div>
        </section>
        <section className="ns-sig ns-bf" aria-labelledby="sig-title">
          <div className="container ns-bf__grid">
            <figure className="ns-bf__fig ns-rv">
              <img
                src="/assets/images/photos/1660606422784-5a18d4be40fe-1400x1000.webp"
                alt="A table covered with displayed books at a book fair"
                loading="lazy"
                decoding="async"
              />
              <figcaption>The table, the cover, the conversation.</figcaption>
            </figure>
            <div>
              <div className="ns-sig__head">
                <p className="ns-label ns-rv">The programme</p>
                <h2 className="ns-h2 ns-rv" id="sig-title">
                  {'Make a plan '}
                  <em>for the whole event.</em>
                </h2>
              </div>
              <ol className="ns-bf__prog ns-rv" role="list">
                <li>
                  <p className="ns-bf__h">
                    <span>I.</span>
                    Before the fair
                  </p>
                  <ul role="list">
                    <li>Choosing the event</li>
                    <li>{'Catalogue & rights listings'}</li>
                    <li>{'Posters, bookmarks & sell sheets'}</li>
                  </ul>
                </li>
                <li>
                  <p className="ns-bf__h">
                    <span>II.</span>
                    At the fair
                  </p>
                  <ul role="list">
                    <li>Your book on display</li>
                    <li>Signings, where available</li>
                    <li>{'Meetings with booksellers & librarians'}</li>
                  </ul>
                </li>
                <li>
                  <p className="ns-bf__h">
                    <span>III.</span>
                    After the fair
                  </p>
                  <ul role="list">
                    <li>Following up contacts</li>
                    <li>Sharing the event online</li>
                    <li>Planning the next step</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className="ns-inc" aria-labelledby="inc-title">
          <div className="container ns-inc__grid">
            <div className="ns-inc__head">
              <p className="ns-label ns-rv">What we handle</p>
              <h2 className="ns-h2 ns-rv" id="inc-title">
                What we can help with.
              </h2>
              <figure className="ns-inc__fig ns-rv">
                <img
                  src="/assets/images/photos/1732652835004-efc80cb31d9d-900x1100.webp"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <ol className="ns-inc__list ns-rv" role="list">
              <li>
                <span className="ns-inc__n">01</span>
                <h3 className="ns-inc__t">Event selection</h3>
                <p className="ns-inc__d">Consider fairs that fit the book’s subject, audience and your plans.</p>
              </li>
              <li>
                <span className="ns-inc__n">02</span>
                <h3 className="ns-inc__t">{'Catalogue & listings'}</h3>
                <p className="ns-inc__d">Prepare title information for relevant catalogues and event listings.</p>
              </li>
              <li>
                <span className="ns-inc__n">03</span>
                <h3 className="ns-inc__t">{'Display & materials'}</h3>
                <p className="ns-inc__d">Develop display artwork, bookmarks and other agreed printed materials.</p>
              </li>
              <li>
                <span className="ns-inc__n">04</span>
                <h3 className="ns-inc__t">Book presentation</h3>
                <p className="ns-inc__d">
                  Arrange the agreed presentation of the book for visitors and trade contacts.
                </p>
              </li>
              <li>
                <span className="ns-inc__n">05</span>
                <h3 className="ns-inc__t">{'Signings & meetings'}</h3>
                <p className="ns-inc__d">Discuss signing and meeting opportunities offered by the event.</p>
              </li>
              <li>
                <span className="ns-inc__n">06</span>
                <h3 className="ns-inc__t">Follow up</h3>
                <p className="ns-inc__d">Organise useful contacts and decide which conversations to continue.</p>
              </li>
            </ol>
          </div>
        </section>
        <section className="ns-steps" aria-labelledby="steps-title">
          <div className="container">
            <p className="ns-label ns-rv" id="steps-title">
              The steps we work through
            </p>
            <ol className="ns-steps__list ns-rv" role="list">
              <li>
                <span>01</span>
                <b>Choose</b>
                <p>Choose an event with a clear reason for attending.</p>
              </li>
              <li>
                <span>02</span>
                <b>Prepare</b>
                <p>Prepare the book details, display and supporting materials.</p>
              </li>
              <li>
                <span>03</span>
                <b>Present</b>
                <p>Present the title through the agreed event arrangement.</p>
              </li>
              <li>
                <span>04</span>
                <b>Follow up</b>
                <p>Review the contacts and decide what to follow up.</p>
              </li>
            </ol>
          </div>
        </section>
        <section className="ns-rel" aria-labelledby="rel-title">
          <div className="container ns-rel__grid">
            <div>
              <p className="ns-label">{'Also in Marketing & Visibility'}</p>
              <h2 className="ns-rel__title" id="rel-title">
                Other ways we can support your book.
              </h2>{' '}
              <a className="ns-link" href="/#services">
                {'All services '}
                <svg aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </a>
            </div>
            <ul className="ns-rel__list" role="list">
              <li>
                <a href="/book-promotion">
                  <span className="ns-rel__t">{'Book Promotion & Marketing'}</span>
                  <span className="ns-rel__d">
                    Plan launch materials and promotional activity around your likely readers.
                  </span>
                  <svg aria-hidden="true">
                    <use href="#i-arrow-ne" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/author-website">
                  <span className="ns-rel__t">Author Website</span>
                  <span className="ns-rel__d">
                    Give readers a clear place to explore your books, news and background.
                  </span>
                  <svg aria-hidden="true">
                    <use href="#i-arrow-ne" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/web-social-media">
                  <span className="ns-rel__t">{'Web & Social Media'}</span>
                  <span className="ns-rel__d">
                    Connect your website and social profiles with a practical author content plan.
                  </span>
                  <svg aria-hidden="true">
                    <use href="#i-arrow-ne" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/billboard-campaigns">
                  <span className="ns-rel__t">Billboard Campaigns</span>
                  <span className="ns-rel__d">
                    Plan outdoor book artwork and coordinate the agreed advertising locations.
                  </span>
                  <svg aria-hidden="true">
                    <use href="#i-arrow-ne" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/podcasts">
                  <span className="ns-rel__t">Podcasts</span>
                  <span className="ns-rel__d">
                    Prepare for guest interviews or develop and produce your own author episodes.
                  </span>
                  <svg aria-hidden="true">
                    <use href="#i-arrow-ne" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/tv-interviews">
                  <span className="ns-rel__t">TV Interviews</span>
                  <span className="ns-rel__d">
                    Practise the interview and prepare the story angles and materials for outreach.
                  </span>
                  <svg aria-hidden="true">
                    <use href="#i-arrow-ne" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="cta on-dark ns-cta" id="contact" aria-labelledby="cta-title">
          <div className="cta__media" aria-hidden="true">
            <img
              src="/assets/images/photos/1660606422784-5a18d4be40fe-1600.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.08"
            />
          </div>
          <div className="container cta__grid">
            <div className="cta__copy">
              <p className="eyebrow" data-reveal="">
                Book Fairs
              </p>
              <h2 className="display cta__title" id="cta-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Which event could '}
                <em>suit your book?</em>
              </h2>
              <p className="lead" data-reveal="" style={{ '--d': '.16s' }}>
                Share the book you have in mind and the support you need. We will review your enquiry and contact you.
              </p>
              <div className="ns-cta__btns" data-reveal="" style={{ '--d': '.2s' }}>
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Plan Your Book '}
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
            <LeadForm />
          </div>
        </section>
      </main>
      <PageScripts scripts={scripts} />
    </>
  );
}
