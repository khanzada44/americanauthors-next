import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';

export const metadata = pageMetadata({
  title: 'Billboard Advertising for Books and Authors',
  description:
    'Plan a book billboard campaign with clear artwork, suitable locations and coordinated production. Discuss formats, timing and your campaign budget.',
  path: '/billboard-campaigns',
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

export default function BillboardCampaignsPage() {
  return (
    <>
      <PageStyles styles={styles} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="ns-hero ns-hero--dark on-dark" id="top" aria-labelledby="ns-title">
          <div className="ns-hero__bg" aria-hidden="true">
            <img
              src="/assets/images/photos/1788079029808-c51c6d8bc04d-2000.webp"
              alt=""
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="container">
            <nav className="ns-crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/#services">Services</a>
                </li>
                <li aria-current="page">Billboard Campaigns</li>
              </ol>
            </nav>
            <div className="ns-hero__copy">
              <p className="ns-eyebrow">
                <span />
                {'Marketing & Visibility'}
              </p>
              <h1 className="ns-title" id="ns-title">
                {'Put your book '}
                <em>in the public view.</em>
              </h1>
              <p className="ns-lead">
                We help plan outdoor book campaigns, with clear artwork, placement coordination and production files for
                the chosen locations.
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
                <li>Digital billboards</li>
                <li>Static boards</li>
                <li>{'Street & transit'}</li>
                <li>Campaign creative</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="ns-intro" aria-label="Introduction">
          <div className="container ns-intro__grid">
            <p className="ns-intro__state ns-rv">A billboard needs to communicate before the viewer has passed it.</p>
            <div className="ns-intro__side ns-rv">
              <p>
                We focus the design on your cover and one readable message, then coordinate the practical details of the
                proposed placement. Availability and media costs are confirmed during planning.
              </p>
              <p className="ns-intro__part">
                {'Part of '}
                <a href="/#services">{'Marketing & Visibility'}</a>
              </p>
            </div>
          </div>
        </section>
        <section className="ns-sig ns-bb on-dark" aria-labelledby="sig-title">
          <div className="ns-bb__bg" aria-hidden="true">
            <img
              src="/assets/images/photos/1703725164412-f0c2882c7582-2000.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.06"
            />
          </div>
          <div className="container ns-bb__grid">
            <div className="ns-sig__head">
              <p className="ns-label ns-rv">The board</p>
              <h2 className="ns-h2 ns-rv" id="sig-title">
                {'A clear message '}
                <em>at a larger scale.</em>
              </h2>
              <ol className="ns-bb__rules ns-rv" role="list">
                <li>
                  <span>01</span>
                  The cover, large
                </li>
                <li>
                  <span>02</span>
                  One clear message
                </li>
                <li>
                  <span>03</span>
                  Readable at a distance
                </li>
                <li>
                  <span>04</span>
                  Where to find the book
                </li>
              </ol>
            </div>
            <figure className="ns-bb__board ns-rv" aria-label="Example billboard layout">
              <div className="ns-bb__face">
                <span className="ns-bb__cover" aria-hidden="true">
                  <i />
                </span>
                <span className="ns-bb__copy">
                  <span className="ns-bb__k">A new book</span>
                  <span className="ns-bb__t">
                    {'Your title, '}
                    <em>in lights.</em>
                  </span>
                  <span className="ns-bb__a">Your name · Available now</span>
                </span>
              </div>{' '}
              <span className="ns-bb__legs" aria-hidden="true" /> <figcaption>Example billboard layout</figcaption>
            </figure>
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
                  src="/assets/images/photos/1788079029808-c51c6d8bc04d-900x1100.webp"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <ol className="ns-inc__list ns-rv" role="list">
              <li>
                <span className="ns-inc__n">01</span>
                <h3 className="ns-inc__t">Campaign planning</h3>
                <p className="ns-inc__d">Set the campaign purpose, proposed dates and suitable display formats.</p>
              </li>
              <li>
                <span className="ns-inc__n">02</span>
                <h3 className="ns-inc__t">{'Creative & artwork'}</h3>
                <p className="ns-inc__d">Create artwork with a clear cover image and a message that reads quickly.</p>
              </li>
              <li>
                <span className="ns-inc__n">03</span>
                <h3 className="ns-inc__t">{'Formats & specifications'}</h3>
                <p className="ns-inc__d">Adapt the design to the dimensions and technical requirements supplied.</p>
              </li>
              <li>
                <span className="ns-inc__n">04</span>
                <h3 className="ns-inc__t">Placement coordination</h3>
                <p className="ns-inc__d">
                  Confirm proposed locations, availability and booking details with media owners.
                </p>
              </li>
              <li>
                <span className="ns-inc__n">05</span>
                <h3 className="ns-inc__t">Production files</h3>
                <p className="ns-inc__d">Prepare the final artwork for the selected printed or digital displays.</p>
              </li>
              <li>
                <span className="ns-inc__n">06</span>
                <h3 className="ns-inc__t">Campaign photography</h3>
                <p className="ns-inc__d">Arrange agreed documentation of the live placement for your own channels.</p>
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
                <b>Brief</b>
                <p>Share the book, audience and locations you are considering.</p>
              </li>
              <li>
                <span>02</span>
                <b>Creative</b>
                <p>Review the creative direction and campaign artwork.</p>
              </li>
              <li>
                <span>03</span>
                <b>Placement</b>
                <p>Confirm the placement, dates, specifications and costs.</p>
              </li>
              <li>
                <span>04</span>
                <b>Live</b>
                <p>Coordinate delivery and the agreed campaign documentation.</p>
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
              <li>
                <a href="/book-fairs">
                  <span className="ns-rel__t">Book Fairs</span>
                  <span className="ns-rel__d">
                    Prepare the displays and information needed to present your book at suitable events.
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
              src="/assets/images/photos/1703725164412-f0c2882c7582-1600.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.08"
            />
          </div>
          <div className="container cta__grid">
            <div className="cta__copy">
              <p className="eyebrow" data-reveal="">
                Billboard Campaigns
              </p>
              <h2 className="display cta__title" id="cta-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Where would you like '}
                <em>your book to appear?</em>
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
