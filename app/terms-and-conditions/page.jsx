import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Terms for Book Writing and Publishing Services',
  description:
    'Read the terms covering our book services, original content, ownership, image use and refund requests before placing a project order.',
  path: '/terms-and-conditions',
});

const styles = [
  '/assets/css/site2f72.css?v=20261109-eagle-logo',
  '/assets/css/legal2f72.css?v=20261003',
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
];

const scripts = ['/assets/js/main2f72.js?v=20261105-production'];

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageStyles styles={styles} />
      <SectionRail links={railLinks} />
      <main id="main">
        <div className="lg-top" id="top">
          <div className="container">
            <nav className="lg-crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Legal</li>
                <li aria-current="page">{'Terms & Conditions'}</li>
              </ol>
            </nav>
            <div className="lg-rule" aria-hidden="true">
              <span>
                {'American Authors '}
                <i>/</i>
                {' Legal'}
              </span>
              <span>{site.name}</span>
            </div>
            <p className="lg-eyebrow">
              <span />
              Legal
            </p>
            <h1 className="lg-title">{'Terms & Conditions'}</h1>
            <p className="lg-org">{site.name}</p>
          </div>
        </div>
        <div className="lg-doc">
          <div className="container lg-doc__grid">
            <aside className="lg-toc" aria-label="Contents">
              <details className="lg-toc__box" open>
                <summary>Contents</summary>
                <ol role="list">
                  <li>
                    <a href="#terms-and-conditions">
                      <span>01</span>
                      Ordering Book Services
                    </a>
                  </li>
                  <li>
                    <a href="#we-deliver-original-content-only">
                      <span>02</span>
                      Original Written Content
                    </a>
                  </li>
                  <li>
                    <a href="#we-deliver-content-with-complete-ownership">
                      <span>03</span>
                      Ownership of Completed Work
                    </a>
                  </li>
                  <li>
                    <a href="#our-policy-for-using-images">
                      <span>04</span>
                      Images and Permissions
                    </a>
                  </li>
                  <li>
                    <a href="#limitation-of-liability">
                      <span>05</span>
                      Limits on Liability
                    </a>
                  </li>
                  <li>
                    <a href="#we-update-our-policies">
                      <span>06</span>
                      Changes to These Terms
                    </a>
                  </li>
                  <li>
                    <a href="#refund-policy">
                      <span>07</span>
                      Requesting a Refund
                    </a>
                  </li>
                  <li>
                    <a href="#full-refund">
                      <span>08</span>
                      Full Refund Review
                    </a>
                  </li>
                </ol>
              </details>{' '}
              <a className="lg-other" href="/privacy-policy">
                {'Also read: Privacy Policy '}
                <svg aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </a>
            </aside>
            <article className="lg-body" aria-label={'Terms & Conditions'}>
              <div className="lg-intro">
                <p>
                  These terms explain the conditions for ordering our writing, editing, design, publishing and promotion
                  services. Please read them before making a payment or placing a project order.
                </p>
              </div>
              <section className="lg-sec" id="terms-and-conditions" aria-labelledby="terms-and-conditions-h">
                <h2 id="terms-and-conditions-h">
                  <span className="lg-n">01</span>
                  Ordering Book Services
                </h2>
                <p>
                  {`Placing an order and making payment confirms that you have read and accepted these terms. They form the agreement between you and ${site.name} for use of the services described in your order.`}
                </p>
              </section>
              <section
                className="lg-sec"
                id="we-deliver-original-content-only"
                aria-labelledby="we-deliver-original-content-only-h"
              >
                <h2 id="we-deliver-original-content-only-h">
                  <span className="lg-n">02</span>
                  Original Written Content
                </h2>
                <p>
                  We provide original written content and a Copyscape report as part of our originality checks. Text
                  embedded in images, video and other media is not covered by that scan. More extensive checks can be
                  arranged independently and are not included in standard pricing.
                </p>
              </section>
              <section
                className="lg-sec"
                id="we-deliver-content-with-complete-ownership"
                aria-labelledby="we-deliver-content-with-complete-ownership-h"
              >
                <h2 id="we-deliver-content-with-complete-ownership-h">
                  <span className="lg-n">03</span>
                  Ownership of Completed Work
                </h2>
                <p>
                  Completed written work that you have ordered and paid for becomes yours when delivered. You may
                  publish it under your name and use it as you choose. We do not require author credit or an
                  acknowledgement of our services.
                </p>
              </section>
              <section
                className="lg-sec"
                id="our-policy-for-using-images"
                aria-labelledby="our-policy-for-using-images-h"
              >
                <h2 id="our-policy-for-using-images-h">
                  <span className="lg-n">04</span>
                  Images and Permissions
                </h2>
                <p>
                  We do not claim ownership of images created by others. We may suggest image sources, but you are
                  responsible for obtaining any permission or licence needed for their use. Even images offered without
                  royalties should be checked for the conditions that apply to your intended use.
                </p>
              </section>
              <section className="lg-sec" id="limitation-of-liability" aria-labelledby="limitation-of-liability-h">
                <h2 id="limitation-of-liability-h">
                  <span className="lg-n">05</span>
                  Limits on Liability
                </h2>
                <p>
                  {`Under these terms, ${site.name} does not accept liability for direct or indirect losses claimed to arise from using, or being unable to use, this website or the services and products supplied through it. This includes claimed material or reputational loss and loss attributed to a virus obtained through the website or its products.`}
                </p>
              </section>
              <section className="lg-sec" id="we-update-our-policies" aria-labelledby="we-update-our-policies-h">
                <h2 id="we-update-our-policies-h">
                  <span className="lg-n">06</span>
                  Changes to These Terms
                </h2>
                <p>
                  We may update these terms without advance notice. Please review this page periodically and read the
                  applicable terms before placing an order.
                </p>
              </section>
              <section className="lg-sec" id="refund-policy" aria-labelledby="refund-policy-h">
                <h2 id="refund-policy-h">
                  <span className="lg-n">07</span>
                  Requesting a Refund
                </h2>
                <p>
                  Refund requests are reviewed against the specifications of your order. Our evaluation team considers
                  the work and the evidence provided. If that review finds a shortcoming against the agreed
                  specifications, our policy provides for a full refund. A change of mind alone does not qualify,
                  whether work has started or not.
                </p>
                <p>
                  If you are unsure how the refund policy applies, contact our customer service team before ordering. We
                  can explain the review process and the information needed for a request.
                </p>
              </section>
              <section className="lg-sec" id="full-refund" aria-labelledby="full-refund-h">
                <h2 id="full-refund-h">
                  <span className="lg-n">08</span>
                  Full Refund Review
                </h2>
                <p>
                  A full refund may be available under the review process described above. Keep your order brief and
                  relevant correspondence so the evaluation team can assess the request against the agreed work.
                </p>
                <p>
                  The evaluation is based on the order specifications and supporting evidence. If a shortcoming is
                  established, the full amount is refunded. Requests based only on a change of mind are excluded before
                  and after the project starts.
                </p>
                <p>
                  Our services include writing, editing, proofreading and book promotion. The particular services,
                  deliverables and scope for your project are those confirmed in your order.
                </p>
              </section>
            </article>
          </div>
        </div>
      </main>
      <PageScripts scripts={scripts} />
    </>
  );
}
