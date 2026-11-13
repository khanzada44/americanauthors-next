import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Print and Digital Book Distribution Support',
  description:
    'Prepare your editions, listings and distribution settings so readers can find and order your book through the channels agreed for your project.',
  path: '/global-distribution',
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

export default function GlobalDistributionPage() {
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
                <li aria-current="page">Global Distribution</li>
              </ol>
            </nav>
            <div className="ns-hero__copy">
              <p className="ns-eyebrow">
                <span />
                {'Rights & Distribution'}
              </p>
              <h1 className="ns-title" id="ns-title">
                {'Help readers '}
                <em>get hold of your book.</em>
              </h1>
              <p className="ns-lead">
                Prepare print and digital editions for the distribution channels that suit your plans, with clear title
                records and agreed market settings.
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
                <li>Print on demand</li>
                <li>Offset print</li>
                <li>eBook</li>
                <li>{'Retail & library'}</li>
              </ul>
            </div>
            <figure className="ns-hero__plate">
              <img
                src="/assets/images/photos/1709924168698-620ea32c3488-2000.webp"
                alt="Long rows of bookshelves in a library"
                decoding="async"
                fetchPriority="high"
              />
              <figcaption>
                <span>Global Distribution</span>
                {site.name}
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="ns-intro" aria-label="Introduction">
          <div className="container ns-intro__grid">
            <p className="ns-intro__state ns-rv">Readers need a practical way to find and order the book.</p>
            <div className="ns-intro__side ns-rv">
              <p>
                We help organise files, title information and platform setup for your chosen channels. Listing a book
                makes it available to order; individual shops and libraries make their own stocking decisions.
              </p>
              <p className="ns-intro__part">
                {'Part of '}
                <a href="/#services">{'Rights & Distribution'}</a>
              </p>
            </div>
          </div>
        </section>
        <section className="ns-sig ns-gd" aria-labelledby="sig-title">
          <div className="container">
            <div className="ns-gd__head">
              <p className="ns-label ns-rv">The routes</p>
              <h2 className="ns-h2 ns-rv" id="sig-title">
                {'Plan the routes '}
                <em>to your readers.</em>
              </h2>
            </div>
            <ol className="ns-gd__routes ns-rv" role="list">
              <li>
                <span className="ns-gd__n">01</span>
                <p className="ns-gd__h">Formats</p>
                <ul role="list">
                  <li>Paperback</li>
                  <li>Hardcover</li>
                  <li>eBook</li>
                  <li>Audiobook</li>
                </ul>
              </li>
              <li>
                <span className="ns-gd__n">02</span>
                <p className="ns-gd__h">Production</p>
                <ul role="list">
                  <li>Print on demand</li>
                  <li>Offset print run</li>
                  <li>Digital files</li>
                </ul>
              </li>
              <li>
                <span className="ns-gd__n">03</span>
                <p className="ns-gd__h">Channels</p>
                <ul role="list">
                  <li>Online retailers</li>
                  <li>Bookstores</li>
                  <li>Libraries</li>
                  <li>Academic institutions</li>
                </ul>
              </li>
              <li>
                <span className="ns-gd__n">04</span>
                <p className="ns-gd__h">Readers</p>
                <ul role="list">
                  <li>Worldwide</li>
                </ul>
              </li>
            </ol>
            <figure className="ns-gd__plate ns-rv">
              <img
                src="/assets/images/photos/1769355104335-acef3aa4c9b6-1400x1000.webp"
                alt="Cardboard boxes and packaging ready for shipping"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span>Plate</span>
                Packed, shipped, shelved.
              </figcaption>
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
                  src="/assets/images/photos/1709924168698-620ea32c3488-900x1100.webp"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <ol className="ns-inc__list ns-rv" role="list">
              <li>
                <span className="ns-inc__n">01</span>
                <h3 className="ns-inc__t">Distribution setup</h3>
                <p className="ns-inc__d">Help prepare accounts and title records on the agreed publishing platforms.</p>
              </li>
              <li>
                <span className="ns-inc__n">02</span>
                <h3 className="ns-inc__t">Print on demand</h3>
                <p className="ns-inc__d">Set up printing as orders arrive where that model suits the edition.</p>
              </li>
              <li>
                <span className="ns-inc__n">03</span>
                <h3 className="ns-inc__t">Offset print runs</h3>
                <p className="ns-inc__d">Discuss larger quantities for launches, events or your own stock.</p>
              </li>
              <li>
                <span className="ns-inc__n">04</span>
                <h3 className="ns-inc__t">eBook distribution</h3>
                <p className="ns-inc__d">Prepare the digital edition for the stores selected in the project.</p>
              </li>
              <li>
                <span className="ns-inc__n">05</span>
                <h3 className="ns-inc__t">{'Pricing & territories'}</h3>
                <p className="ns-inc__d">Review list prices and territory settings with you before submission.</p>
              </li>
              <li>
                <span className="ns-inc__n">06</span>
                <h3 className="ns-inc__t">{'Listings & metadata'}</h3>
                <p className="ns-inc__d">
                  Keep the book title, contributors and description consistent across listings.
                </p>
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
                <b>Prepare</b>
                <p>Gather the approved cover, interior and digital files.</p>
              </li>
              <li>
                <span>02</span>
                <b>Set up</b>
                <p>Prepare the title records for the selected channels.</p>
              </li>
              <li>
                <span>03</span>
                <b>{'Price & territories'}</b>
                <p>Agree on prices, territories and edition details.</p>
              </li>
              <li>
                <span>04</span>
                <b>Available</b>
                <p>Submit the setup and review the available listings.</p>
              </li>
            </ol>
          </div>
        </section>
        <section className="ns-rel" aria-labelledby="rel-title">
          <div className="container ns-rel__grid">
            <div>
              <p className="ns-label">{'Also in Rights & Distribution'}</p>
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
                <a href="/copyrights-isbn">
                  <span className="ns-rel__t">{'Copyrights & ISBN'}</span>
                  <span className="ns-rel__d">
                    Organise ISBNs, copyright paperwork and the title details for your editions.
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
              src="/assets/images/photos/1769355104335-acef3aa4c9b6-1600.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.08"
            />
          </div>
          <div className="container cta__grid">
            <div className="cta__copy">
              <p className="eyebrow" data-reveal="">
                Global Distribution
              </p>
              <h2 className="display cta__title" id="cta-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Let’s discuss '}
                <em>your distribution options.</em>
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
