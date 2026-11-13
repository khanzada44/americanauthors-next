import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Article and Magazine Writing for Authors',
  description:
    'Describe your books beyond the book with articles, author profiles and magazine features written, edited and prepared for your intended readership.',
  path: '/articles-magazines',
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

export default function ArticlesMagazinesPage() {
  return (
    <>
      <PageStyles styles={styles} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="ns-hero ns-hero--split" id="top" aria-labelledby="ns-title">
          <div className="container">
            <nav className="ns-crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/#services">Services</a>
                </li>
                <li aria-current="page">{'Articles & Magazines'}</li>
              </ol>
            </nav>
            <div className="ns-hero__grid">
              <div className="ns-hero__copy">
                <p className="ns-eyebrow">
                  <span />
                  {'Writing & Editorial'}
                </p>
                <h1 className="ns-title" id="ns-title">
                  {'Give your ideas '}
                  <em>another place to be read.</em>
                </h1>
                <p className="ns-lead">
                  Articles and magazine features can introduce your knowledge and your book to a different readership.
                  We help with the angle, writing, editing and preparation.
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
                  <li>Feature articles</li>
                  <li>Author profiles</li>
                  <li>Opinion pieces</li>
                  <li>Magazine layouts</li>
                </ul>
              </div>
              <figure className="ns-hero__fig">
                <img
                  src="/assets/images/photos/1579366877909-40560cf603e2-2000.webp"
                  alt="An open magazine spread with photographs and printed articles"
                  decoding="async"
                  fetchPriority="high"
                />
                <figcaption>
                  <span>{'Articles & Magazines'}</span>
                  {site.name}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="ns-intro" aria-label="Introduction">
          <div className="container ns-intro__grid">
            <p className="ns-intro__state ns-rv">A useful article gives readers something they can take away.</p>
            <div className="ns-intro__side ns-rv">
              <p>
                We work from your subject and experience to develop pieces that suit a particular publication. The focus
                stays on a clear idea and the people who will read it.
              </p>
              <p className="ns-intro__part">
                {'Part of '}
                <a href="/#services">{'Writing & Editorial'}</a>
              </p>
            </div>
          </div>
        </section>
        <section className="ns-sig ns-mag" aria-labelledby="sig-title">
          <div className="container ns-mag__grid">
            <div className="ns-sig__head">
              <p className="ns-label ns-rv">The spread</p>
              <h2 className="ns-h2 ns-rv" id="sig-title">
                {'Articles written '}
                <em>for their readers.</em>
              </h2>
              <ul className="ns-mag__formats ns-rv" role="list">
                <li>Feature article</li>
                <li>Author profile</li>
                <li>Opinion piece</li>
                <li>{'Q&A interview'}</li>
                <li>Book excerpt</li>
                <li>{'Newsletter & long form'}</li>
              </ul>
            </div>
            <figure className="ns-mag__spread ns-rv" aria-label="Example layout of a magazine feature spread">
              <div className="ns-mag__page">
                <span className="ns-mag__kick">Feature</span>
                <span className="ns-mag__hl">
                  {'The idea behind '}
                  <em>the book.</em>
                </span>
                <span className="ns-mag__by">By the author</span>{' '}
                <span className="ns-mag__text">
                  <b>A</b>
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <span className="ns-mag__pq">“The sentence readers remember.”</span>
                <span className="ns-mag__text">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <span className="ns-mag__folio">24</span>
              </div>
              <div className="ns-mag__page ns-mag__page--img">
                <img
                  src="/assets/images/photos/1684323748175-5735beec2308-1400x1000.webp"
                  alt="Magazines displayed on a news stand shelf"
                  loading="lazy"
                  decoding="async"
                />
                <span className="ns-mag__folio">25</span>
              </div>
              <figcaption>Example layout: a two page feature spread</figcaption>
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
                  src="/assets/images/photos/1579366877909-40560cf603e2-900x1100.webp"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <ol className="ns-inc__list ns-rv" role="list">
              <li>
                <span className="ns-inc__n">01</span>
                <h3 className="ns-inc__t">{'Story & angle'}</h3>
                <p className="ns-inc__d">
                  Find an angle that connects your book or expertise with the publication’s audience.
                </p>
              </li>
              <li>
                <span className="ns-inc__n">02</span>
                <h3 className="ns-inc__t">{'Research & interviews'}</h3>
                <p className="ns-inc__d">
                  Gather supporting details and interview material for a credible, useful piece.
                </p>
              </li>
              <li>
                <span className="ns-inc__n">03</span>
                <h3 className="ns-inc__t">Writing in your voice</h3>
                <p className="ns-inc__d">Develop copy that uses your knowledge and sounds natural in your voice.</p>
              </li>
              <li>
                <span className="ns-inc__n">04</span>
                <h3 className="ns-inc__t">{'Editing & proofreading'}</h3>
                <p className="ns-inc__d">Check the structure, language and details before submission.</p>
              </li>
              <li>
                <span className="ns-inc__n">05</span>
                <h3 className="ns-inc__t">Magazine ready layout</h3>
                <p className="ns-inc__d">Prepare a readable layout when the project calls for a designed spread.</p>
              </li>
              <li>
                <span className="ns-inc__n">06</span>
                <h3 className="ns-inc__t">{'Print & digital formats'}</h3>
                <p className="ns-inc__d">Adapt the agreed piece for its print or digital destination.</p>
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
                <p>Discuss the subject, publication and readers you have in mind.</p>
              </li>
              <li>
                <span>02</span>
                <b>{'Angle & outline'}</b>
                <p>Agree on the angle and outline before drafting.</p>
              </li>
              <li>
                <span>03</span>
                <b>{'Draft & revise'}</b>
                <p>Review the draft and work through your feedback.</p>
              </li>
              <li>
                <span>04</span>
                <b>Ready to publish</b>
                <p>Prepare the final copy and any agreed layout files.</p>
              </li>
            </ol>
          </div>
        </section>
        <section className="ns-rel" aria-labelledby="rel-title">
          <div className="container ns-rel__grid">
            <div>
              <p className="ns-label">{'Also in Writing & Editorial'}</p>
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
                <a href="/ghostwriting">
                  <span className="ns-rel__t">Ghostwriting</span>
                  <span className="ns-rel__d">
                    Work with a writer to give your ideas structure and develop the chapter drafts.
                  </span>
                  <svg aria-hidden="true">
                    <use href="#i-arrow-ne" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/book-editing">
                  <span className="ns-rel__t">{'Book Editing & Formatting'}</span>
                  <span className="ns-rel__d">
                    Review the draft, work through revisions and prepare the text for your chosen edition.
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
              src="/assets/images/photos/1684323748175-5735beec2308-1600.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.08"
            />
          </div>
          <div className="container cta__grid">
            <div className="cta__copy">
              <p className="eyebrow" data-reveal="">
                {'Articles & Magazines'}
              </p>
              <h2 className="display cta__title" id="cta-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'What would you like '}
                <em>to write about?</em>
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
