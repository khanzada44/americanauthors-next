import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Questions About Our Book Services',
  description:
    'Find answers about working with our book services team, including project scope, writing, editing, publishing, costs and ongoing support.',
  path: '/faq',
});

const styles = [
  '/assets/css/site2f72.css?v=20261109-eagle-logo',
  '/assets/css/faq2f72.css?v=20261003',
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
    href: '#faq',
    section: 'faq',
    label: 'Questions',
    icon: '#i-quote',
    text: 'FAQ',
  },
  {
    href: '#contact',
    section: 'contact',
    label: 'Contact',
    icon: '#i-chat',
    text: 'Contact',
  },
];

const scripts = ['/assets/js/main2f72.js?v=20261105-production'];

export default function FaqPage() {
  return (
    <>
      <PageStyles styles={styles} />
      <SectionRail links={railLinks} />
      <main id="main">
        <div className="faq-page__top" id="top">
          <div className="container">
            <nav className="faq-page__crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li aria-current="page">FAQ</li>
              </ol>
            </nav>
            <div className="faq-page__rule" aria-hidden="true">
              <span>
                {'American Authors '}
                <i>/</i>
                {' FAQ'}
              </span>
              <span>{site.name}</span>
              <span>{'Questions & answers'}</span>
            </div>
          </div>
        </div>
        <section className="section section--ivory faq faq-page" id="faq" aria-labelledby="faq-title">
          <div className="ed-bg ed-bg--faq" aria-hidden="true">
            <div className="ed-bg__img" data-parallax="0.04" />
          </div>
          <div className="container faq__grid">
            <div className="faq__head">
              <p className="eyebrow" data-reveal="">
                Your questions
              </p>
              <h1 className="h2 faq-page__title" id="faq-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'What would you like to know '}
                <em>about working with us?</em>
              </h1>
            </div>
            <div className="faq__list" data-faq="">
              <details className="qa" data-reveal="" open>
                <summary>
                  <span>What can your team help me with?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    We help with ghostwriting, editing, cover design, illustration, publishing and promotion. You can
                    choose one service or discuss a plan that connects several stages.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.04s' }}>
                <summary>
                  <span>How do you work out the cost?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    We review the manuscript length, the work involved and the services you need before preparing a
                    quote. The agreed scope explains what is included.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.08s' }}>
                <summary>
                  <span>Can you help with a draft I have already started?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Yes. Send us some context about the draft and where you feel stuck. We can discuss writing support,
                    an editorial review or preparation for publication.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.12s' }}>
                <summary>
                  <span>Do you work with my type of book?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    We work across fiction and nonfiction, including memoir, children’s stories, business and personal
                    development. Tell us the genre so we can discuss the right approach.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.16s' }}>
                <summary>
                  <span>Can I ask for publishing support after editing?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Yes. Once the text is settled, we can discuss formatting, cover preparation and the files needed for
                    your chosen editions.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.2s' }}>
                <summary>
                  <span>Can you help readers find my book?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    We can discuss book descriptions, author content, websites and promotion plans. The approach should
                    fit your readers and budget, with no promise of a particular ranking or sales result.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.24s' }}>
                <summary>
                  <span>Can we work together on more than one book?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Yes. Tell us about the series or longer project. We can discuss a scope, schedule and review process
                    that keeps the work organised.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="cta on-dark faq-cta" id="contact" aria-labelledby="cta-title">
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
                Need to ask something else?
              </p>
              <h2 className="display cta__title" id="cta-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Tell us '}
                <em>what is on your mind.</em>
              </h2>
              <p className="lead" data-reveal="" style={{ '--d': '.16s' }}>
                Share the details of your book and any questions you have about the work involved.
              </p>
              <div className="faq-cta__btns" data-reveal="" style={{ '--d': '.2s' }}>
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
