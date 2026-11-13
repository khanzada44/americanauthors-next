import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Author Websites and Social Media Support',
  description:
    'Build a consistent author presence with website planning, social profiles, content creation and account support suited to your books and readers.',
  path: '/web-social-media',
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

export default function WebSocialMediaPage() {
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
                <li aria-current="page">{'Web & Social Media'}</li>
              </ol>
            </nav>
            <div className="ns-hero__grid">
              <div className="ns-hero__copy">
                <p className="ns-eyebrow">
                  <span />
                  {'Marketing & Visibility'}
                </p>
                <h1 className="ns-title" id="ns-title">
                  {'Keep your author presence '}
                  <em>connected.</em>
                </h1>
                <p className="ns-lead">
                  Bring your website, social profiles and content together with a consistent voice and a posting plan
                  that suits your books and readers.
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
                  <li>Brand identity</li>
                  <li>Author website</li>
                  <li>Social content</li>
                  <li>Account management</li>
                </ul>
              </div>
              <figure className="ns-hero__fig">
                <img
                  src="/assets/images/photos/1724862936518-ae7fcfc052c1-2000.webp"
                  alt="A hand holding a phone showing social media apps"
                  decoding="async"
                  fetchPriority="high"
                />
                <figcaption>
                  <span>{'Web & Social Media'}</span>
                  {site.name}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="ns-intro" aria-label="Introduction">
          <div className="container ns-intro__grid">
            <p className="ns-intro__state ns-rv">
              People who enjoy a book often want to know what its author is doing next.
            </p>
            <div className="ns-intro__side ns-rv">
              <p>
                We help you decide what to share and how to present it across your website and social channels. Account
                support can keep that plan moving between releases.
              </p>
              <p className="ns-intro__part">
                {'Part of '}
                <a href="/#services">{'Marketing & Visibility'}</a>
              </p>
            </div>
          </div>
        </section>
        <section className="ns-sig ns-ws" aria-labelledby="sig-title">
          <div className="container ns-ws__grid">
            <div className="ns-sig__head">
              <p className="ns-label ns-rv">One identity</p>
              <h2 className="ns-h2 ns-rv" id="sig-title">
                {'A familiar author '}
                <em>across the web.</em>
              </h2>
              <ul className="ns-ws__ch ns-rv" role="list">
                <li>Author website</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>TikTok</li>
                <li>LinkedIn</li>
                <li>YouTube</li>
              </ul>
            </div>
            <div className="ns-ws__devices ns-rv" aria-label="Example author website and social post">
              <div className="ns-ws__site">
                <span className="ns-ws__bar">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="ns-ws__nm">Author Name</span>
                <span className="ns-ws__hl">
                  {'A new book, '}
                  <em>out now.</em>
                </span>
                <span className="ns-ws__lines">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="ns-ws__btn">Read the first chapter</span>
                <span className="ns-ws__cover" aria-hidden="true" />
              </div>
              <div className="ns-ws__phone">
                <span className="ns-ws__who">
                  <i />
                  authorname
                </span>
                <span className="ns-ws__post">
                  <span>“A line from the book.”</span>
                </span>
                <span className="ns-ws__acts">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <p className="ns-ws__note">Example layouts</p>
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
                  src="/assets/images/photos/1724862936518-ae7fcfc052c1-900x1100.webp"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <ol className="ns-inc__list ns-rv" role="list">
              <li>
                <span className="ns-inc__n">01</span>
                <h3 className="ns-inc__t">Brand identity</h3>
                <p className="ns-inc__d">Agree on the visual choices and tone that represent you and your books.</p>
              </li>
              <li>
                <span className="ns-inc__n">02</span>
                <h3 className="ns-inc__t">
                  <a href="/author-website">
                    {'Author website '}
                    <svg aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </a>
                </h3>
                <p className="ns-inc__d">
                  Plan a website where readers can explore your work and official information.
                </p>
              </li>
              <li>
                <span className="ns-inc__n">03</span>
                <h3 className="ns-inc__t">Social profiles</h3>
                <p className="ns-inc__d">Present profile details consistently on the channels you choose.</p>
              </li>
              <li>
                <span className="ns-inc__n">04</span>
                <h3 className="ns-inc__t">Content creation</h3>
                <p className="ns-inc__d">Prepare useful posts, graphics and short clips for the content plan.</p>
              </li>
              <li>
                <span className="ns-inc__n">05</span>
                <h3 className="ns-inc__t">Account management</h3>
                <p className="ns-inc__d">Support the posting schedule and agreed community activity.</p>
              </li>
              <li>
                <span className="ns-inc__n">06</span>
                <h3 className="ns-inc__t">Regular review</h3>
                <p className="ns-inc__d">Review the response and discuss what to adjust in the next period.</p>
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
                <b>Identity</b>
                <p>Agree on how your author presence should look and sound.</p>
              </li>
              <li>
                <span>02</span>
                <b>Build</b>
                <p>Prepare the website and selected social profiles.</p>
              </li>
              <li>
                <span>03</span>
                <b>Create</b>
                <p>Create the agreed content for each channel.</p>
              </li>
              <li>
                <span>04</span>
                <b>Manage</b>
                <p>Keep up the posting plan and review the response.</p>
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
              src="/assets/images/photos/1501808503570-36559610f95e-1600.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.08"
            />
          </div>
          <div className="container cta__grid">
            <div className="cta__copy">
              <p className="eyebrow" data-reveal="">
                {'Web & Social Media'}
              </p>
              <h2 className="display cta__title" id="cta-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Let’s plan '}
                <em>your author channels.</em>
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
