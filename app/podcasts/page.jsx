import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';

export const metadata = pageMetadata({
  title: 'Podcast Support and Production for Authors',
  description:
    'Prepare for podcast guest interviews or develop your own author show with topic planning, recording, editing, episode notes and promotional clips.',
  path: '/podcasts',
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

export default function PodcastsPage() {
  return (
    <>
      <PageStyles styles={styles} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="ns-hero ns-hero--dark on-dark" id="top" aria-labelledby="ns-title">
          <div className="ns-hero__bg" aria-hidden="true">
            <img
              src="/assets/images/photos/1559523161-0fc0d8b38a7a-2000.webp"
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
                <li aria-current="page">Podcasts</li>
              </ol>
            </nav>
            <div className="ns-hero__copy">
              <p className="ns-eyebrow">
                <span />
                {'Marketing & Visibility'}
              </p>
              <h1 className="ns-title" id="ns-title">
                {'Talk about your book '}
                <em>where people listen.</em>
              </h1>
              <p className="ns-lead">
                Get ready for podcast interviews or plan an author show of your own, with support for topics, recording,
                editing and episode materials.
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
                <li>Guest appearances</li>
                <li>Interview preparation</li>
                <li>Your own show</li>
                <li>{'Recording & editing'}</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="ns-intro" aria-label="Introduction">
          <div className="container ns-intro__grid">
            <p className="ns-intro__state ns-rv">
              A thoughtful conversation can make someone curious about the book behind it.
            </p>
            <div className="ns-intro__side ns-rv">
              <p>
                We help you find a useful angle, prepare for guest interviews or develop your own episodes. Guest
                bookings depend on the host, so outreach begins with a relevant pitch.
              </p>
              <p className="ns-intro__part">
                {'Part of '}
                <a href="/#services">{'Marketing & Visibility'}</a>
              </p>
            </div>
          </div>
        </section>
        <section className="ns-sig ns-pod" aria-labelledby="sig-title">
          <div className="container">
            <div className="ns-pod__head">
              <p className="ns-label ns-rv">On the record</p>
              <h2 className="ns-h2 ns-rv" id="sig-title">
                {'Give the conversation '}
                <em>a clear direction.</em>
              </h2>
            </div>
            <div className="ns-pod__wave ns-rv" aria-hidden="true">
              <i style={{ '--h': '18%' }} />
              <i style={{ '--h': '43%' }} />
              <i style={{ '--h': '64%' }} />
              <i style={{ '--h': '77%' }} />
              <i style={{ '--h': '81%' }} />
              <i style={{ '--h': '75%' }} />
              <i style={{ '--h': '62%' }} />
              <i style={{ '--h': '44%' }} />
              <i style={{ '--h': '26%' }} />
              <i style={{ '--h': '25%' }} />
              <i style={{ '--h': '34%' }} />
              <i style={{ '--h': '37%' }} />
              <i style={{ '--h': '34%' }} />
              <i style={{ '--h': '27%' }} />
              <i style={{ '--h': '19%' }} />
              <i style={{ '--h': '21%' }} />
              <i style={{ '--h': '22%' }} />
              <i style={{ '--h': '18%' }} />
              <i style={{ '--h': '28%' }} />
              <i style={{ '--h': '41%' }} />
              <i style={{ '--h': '55%' }} />
              <i style={{ '--h': '64%' }} />
              <i style={{ '--h': '68%' }} />
              <i style={{ '--h': '63%' }} />
              <i style={{ '--h': '49%' }} />
              <i style={{ '--h': '29%' }} />
              <i style={{ '--h': '31%' }} />
              <i style={{ '--h': '54%' }} />
              <i style={{ '--h': '74%' }} />
              <i style={{ '--h': '85%' }} />
              <i style={{ '--h': '86%' }} />
              <i style={{ '--h': '78%' }} />
              <i style={{ '--h': '61%' }} />
              <i style={{ '--h': '39%' }} />
              <i style={{ '--h': '18%' }} />
              <i style={{ '--h': '37%' }} />
              <i style={{ '--h': '50%' }} />
              <i style={{ '--h': '55%' }} />
              <i style={{ '--h': '53%' }} />
              <i style={{ '--h': '45%' }} />
              <i style={{ '--h': '34%' }} />
              <i style={{ '--h': '25%' }} />
              <i style={{ '--h': '19%' }} />
              <i style={{ '--h': '18%' }} />
              <i style={{ '--h': '22%' }} />
              <i style={{ '--h': '31%' }} />
              <i style={{ '--h': '41%' }} />
              <i style={{ '--h': '48%' }} />
              <i style={{ '--h': '51%' }} />
              <i style={{ '--h': '46%' }} />
              <i style={{ '--h': '34%' }} />
              <i style={{ '--h': '19%' }} />
              <i style={{ '--h': '40%' }} />
              <i style={{ '--h': '61%' }} />
              <i style={{ '--h': '77%' }} />
              <i style={{ '--h': '85%' }} />
              <i style={{ '--h': '84%' }} />
              <i style={{ '--h': '72%' }} />
              <i style={{ '--h': '53%' }} />
              <i style={{ '--h': '28%' }} />
              <i style={{ '--h': '31%' }} />
              <i style={{ '--h': '52%' }} />
              <i style={{ '--h': '66%' }} />
              <i style={{ '--h': '72%' }} />
              <i style={{ '--h': '68%' }} />
              <i style={{ '--h': '58%' }} />
              <i style={{ '--h': '43%' }} />
              <i style={{ '--h': '28%' }} />
              <i style={{ '--h': '18%' }} />
              <i style={{ '--h': '25%' }} />
              <i style={{ '--h': '25%' }} />
              <i style={{ '--h': '20%' }} />
              <i style={{ '--h': '22%' }} />
              <i style={{ '--h': '29%' }} />
              <i style={{ '--h': '33%' }} />
              <i style={{ '--h': '31%' }} />
              <i style={{ '--h': '23%' }} />
              <i style={{ '--h': '26%' }} />
              <i style={{ '--h': '43%' }} />
              <i style={{ '--h': '60%' }} />
              <i style={{ '--h': '73%' }} />
              <i style={{ '--h': '78%' }} />
              <i style={{ '--h': '74%' }} />
              <i style={{ '--h': '61%' }} />
              <i style={{ '--h': '40%' }} />
              <i style={{ '--h': '20%' }} />
              <i style={{ '--h': '45%' }} />
              <i style={{ '--h': '66%' }} />
            </div>
            <ol className="ns-pod__run ns-rv" role="list" aria-label="Example episode outline">
              <li>
                <span>00:00</span>
                Pre interview
              </li>
              <li>
                <span>05:00</span>
                Your story
              </li>
              <li>
                <span>18:00</span>
                The book
              </li>
              <li>
                <span>32:00</span>
                Reader questions
              </li>
              <li>
                <span>41:00</span>
                Where to find it
              </li>
            </ol>
            <p className="ns-pod__note ns-rv">Example episode outline</p>
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
                  src="/assets/images/photos/1559523161-0fc0d8b38a7a-900x1100.webp"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <ol className="ns-inc__list ns-rv" role="list">
              <li>
                <span className="ns-inc__n">01</span>
                <h3 className="ns-inc__t">{'Show research & pitching'}</h3>
                <p className="ns-inc__d">Research relevant shows and prepare pitches around your subject.</p>
              </li>
              <li>
                <span className="ns-inc__n">02</span>
                <h3 className="ns-inc__t">Interview preparation</h3>
                <p className="ns-inc__d">
                  Organise talking points and examples that help you discuss the book naturally.
                </p>
              </li>
              <li>
                <span className="ns-inc__n">03</span>
                <h3 className="ns-inc__t">Your own show</h3>
                <p className="ns-inc__d">Develop a format and episode plan for a podcast you host.</p>
              </li>
              <li>
                <span className="ns-inc__n">04</span>
                <h3 className="ns-inc__t">{'Recording & editing'}</h3>
                <p className="ns-inc__d">Record and edit the agreed episodes with attention to pace and sound.</p>
              </li>
              <li>
                <span className="ns-inc__n">05</span>
                <h3 className="ns-inc__t">Publishing episodes</h3>
                <p className="ns-inc__d">Prepare episode descriptions, artwork and files for the chosen channels.</p>
              </li>
              <li>
                <span className="ns-inc__n">06</span>
                <h3 className="ns-inc__t">{'Clips & promotion'}</h3>
                <p className="ns-inc__d">Create the agreed short clips for your website and social profiles.</p>
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
                <b>Plan</b>
                <p>Discuss the book, likely listeners and topics worth exploring.</p>
              </li>
              <li>
                <span>02</span>
                <b>Prepare</b>
                <p>Prepare a pitch or a practical episode outline.</p>
              </li>
              <li>
                <span>03</span>
                <b>Record</b>
                <p>Record the conversation or prepare for the guest appearance.</p>
              </li>
              <li>
                <span>04</span>
                <b>Share</b>
                <p>Finish the agreed episode files, notes and promotional clips.</p>
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
              src="/assets/images/photos/1589903308904-1010c2294adc-1600.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.08"
            />
          </div>
          <div className="container cta__grid">
            <div className="cta__copy">
              <p className="eyebrow" data-reveal="">
                Podcasts
              </p>
              <h2 className="display cta__title" id="cta-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'What conversation could '}
                <em>your book start?</em>
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
