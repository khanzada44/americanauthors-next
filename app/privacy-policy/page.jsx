import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Privacy Policy for Website Visitors and Clients',
  description:
    'Read how information shared through our website is collected, used and handled, including enquiry details, cookies and optional text messaging.',
  path: '/privacy-policy',
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

export default function PrivacyPolicyPage() {
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
                <li aria-current="page">Privacy Policy</li>
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
            <h1 className="lg-title">Privacy Policy</h1>
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
                    <a href="#what-information-do-we-collect-about-you">
                      <span>01</span>
                      Information You Share With Us
                    </a>
                  </li>
                  <li>
                    <a href="#why-do-we-collect-your-information">
                      <span>02</span>
                      How We Use Your Information
                    </a>
                  </li>
                  <li>
                    <a href="#how-do-we-protect-your-information">
                      <span>03</span>
                      Keeping Information Secure
                    </a>
                  </li>
                  <li>
                    <a href="#why-do-we-use-cookies">
                      <span>04</span>
                      Cookies and Website Activity
                    </a>
                  </li>
                  <li>
                    <a href="#we-never-share-personally-identifiable-information-with-third-parties">
                      <span>05</span>
                      Sharing Personal Information
                    </a>
                  </li>
                  <li>
                    <a href="#applicability-of-privacy-policy">
                      <span>06</span>
                      Where This Policy Applies
                    </a>
                  </li>
                  <li>
                    <a href="#sms-and-phone-number">
                      <span>07</span>
                      Phone Numbers and Text Messages
                    </a>
                  </li>
                </ol>
              </details>{' '}
              <a className="lg-other" href="/terms-and-conditions">
                {'Also read: Terms & Conditions '}
                <svg aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </a>
            </aside>
            <article className="lg-body" aria-label="Privacy Policy">
              <div className="lg-intro">
                <p>
                  {`This policy explains how ${site.name} handles information shared through its website. It covers the details you give us when asking about a book project, contacting our team or requesting updates.`}
                </p>
              </div>
              <section
                className="lg-sec"
                id="what-information-do-we-collect-about-you"
                aria-labelledby="what-information-do-we-collect-about-you-h"
              >
                <h2 id="what-information-do-we-collect-about-you-h">
                  <span className="lg-n">01</span>
                  Information You Share With Us
                </h2>
                <p>
                  When you contact us or place an order, we may ask for your name, email address, phone number, mailing
                  details and information about your book. Payment information may also be needed to complete an order.
                  You can browse the website without sending an enquiry.
                </p>
              </section>
              <section
                className="lg-sec"
                id="why-do-we-collect-your-information"
                aria-labelledby="why-do-we-collect-your-information-h"
              >
                <h2 id="why-do-we-collect-your-information-h">
                  <span className="lg-n">02</span>
                  How We Use Your Information
                </h2>
                <p>We use the details you provide to understand your enquiry and deliver the services you request.</p>
                <ul>
                  <li>Understand your book project and the support you need.</li>
                  <li>Use feedback to improve the website and the services we offer.</li>
                  <li>Respond to service questions and requests for project support.</li>
                  <li>Reply to your enquiries and send relevant project communications.</li>
                </ul>
                <p>
                  We do not sell or exchange your personal information. Information is shared for service delivery only
                  as needed, or with your consent.
                </p>
              </section>
              <section
                className="lg-sec"
                id="how-do-we-protect-your-information"
                aria-labelledby="how-do-we-protect-your-information-h"
              >
                <h2 id="how-do-we-protect-your-information-h">
                  <span className="lg-n">03</span>
                  Keeping Information Secure
                </h2>
                <p>
                  We use security measures to help protect information submitted through our website, including SSL for
                  secure transmission where enabled. Our policy is not to retain private financial details such as card
                  information after a transaction is completed.
                </p>
              </section>
              <section className="lg-sec" id="why-do-we-use-cookies" aria-labelledby="why-do-we-use-cookies-h">
                <h2 id="why-do-we-use-cookies-h">
                  <span className="lg-n">04</span>
                  Cookies and Website Activity
                </h2>
                <p>
                  Cookies may help us understand site visits, interactions and advertising activity so we can improve
                  the website. If a service provider assists with visitor analysis, the information is to be used only
                  for that purpose.
                </p>
              </section>
              <section
                className="lg-sec"
                id="we-never-share-personally-identifiable-information-with-third-parties"
                aria-labelledby="we-never-share-personally-identifiable-information-with-third-parties-h"
              >
                <h2 id="we-never-share-personally-identifiable-information-with-third-parties-h">
                  <span className="lg-n">05</span>
                  Sharing Personal Information
                </h2>
                <p>
                  We do not sell, trade or distribute personally identifiable information for another party’s marketing.
                  Information that does not identify an individual visitor may be used for marketing, advertising or
                  website analysis.
                </p>
              </section>
              <section
                className="lg-sec"
                id="applicability-of-privacy-policy"
                aria-labelledby="applicability-of-privacy-policy-h"
              >
                <h2 id="applicability-of-privacy-policy-h">
                  <span className="lg-n">06</span>
                  Where This Policy Applies
                </h2>
                <p>
                  This policy covers information collected through our website and other online channels. It does not
                  cover information collected through offline channels.
                </p>
              </section>
              <section className="lg-sec" id="sms-and-phone-number" aria-labelledby="sms-and-phone-number-h">
                <h2 id="sms-and-phone-number-h">
                  <span className="lg-n">07</span>
                  Phone Numbers and Text Messages
                </h2>
                <p>
                  If you choose to receive text messages, we use the number you provide to send information and
                  promotional updates about our services.
                </p>
                <p>
                  We do not sell, rent or share your mobile number or text messaging consent with affiliates, partners
                  or other parties for their promotional use.
                </p>
                <p>
                  Your text messaging consent is for communications from us. It is not shared except where disclosure is
                  required by law.
                </p>
                <p>
                  Reply STOP to stop receiving texts or HELP for assistance. Message frequency varies, and message and
                  data charges may apply.
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
