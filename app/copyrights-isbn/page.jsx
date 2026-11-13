import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'ISBN and Copyright Application Support',
  description:
    'Organise your book identifiers, copyright page and registration paperwork with practical support for ISBNs, metadata and eligible library applications.',
  path: '/copyrights-isbn',
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

export default function CopyrightsIsbnPage() {
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
                <li aria-current="page">{'Copyrights & ISBN'}</li>
              </ol>
            </nav>
            <div className="ns-hero__grid">
              <div className="ns-hero__copy">
                <p className="ns-eyebrow">
                  <span />
                  {'Rights & Distribution'}
                </p>
                <h1 className="ns-title" id="ns-title">
                  {'Get the book details '}
                  <em>in order.</em>
                </h1>
                <p className="ns-lead">
                  Practical help with ISBNs, copyright application paperwork and the records that identify your book
                  across editions and listings.
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
                  <li>ISBN</li>
                  <li>Copyright</li>
                  <li>Barcodes</li>
                  <li>Metadata</li>
                </ul>
              </div>
              <figure className="ns-hero__fig">
                <img
                  src="/assets/images/photos/1537275181304-62f51a71af79-2000.webp"
                  alt="A stack of books with a barcode on the back cover"
                  decoding="async"
                  fetchPriority="high"
                />
                <figcaption>
                  <span>{'Copyrights & ISBN'}</span>
                  {site.name}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="ns-intro" aria-label="Introduction">
          <div className="container ns-intro__grid">
            <p className="ns-intro__state ns-rv">
              The details on the copyright page and in a retailer listing should tell the same story.
            </p>
            <div className="ns-intro__side ns-rv">
              <p>
                We help organise identifiers, notices and registration paperwork for your book. Questions about your
                legal rights should be discussed with a qualified attorney.
              </p>
              <p className="ns-intro__part">
                {'Part of '}
                <a href="/#services">{'Rights & Distribution'}</a>
              </p>
            </div>
          </div>
        </section>
        <section className="ns-sig ns-cr" aria-labelledby="sig-title">
          <div className="container ns-cr__grid">
            <div className="ns-sig__head">
              <p className="ns-label ns-rv">The record</p>
              <h2 className="ns-h2 ns-rv" id="sig-title">
                {'The details behind '}
                <em>the edition.</em>
              </h2>
              <p className="ns-body ns-rv">
                We check the copyright page, barcode and title information for consistency before the files are
                finalised.
              </p>
            </div>
            <figure className="ns-cr__page ns-rv" aria-label="Example copyright page">
              <p className="ns-cr__mark">©</p>
              <p>
                Copyright © [Year] [Author Name]
                <br />
                All rights reserved.
              </p>
              <p>
                No part of this book may be reproduced without written permission from the author, except for brief
                quotations in reviews.
              </p>
              <p>
                ISBN [number for print edition] (paperback)
                <br />
                ISBN [number for digital edition] (eBook)
              </p>
              <p>First edition</p>{' '}
              <span className="ns-cr__bar" aria-hidden="true">
                <i style={{ '--w': '2px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '3px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '2px' }} />
                <i style={{ '--w': '3px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '2px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '3px' }} />
                <i style={{ '--w': '2px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '2px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '3px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '2px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '3px' }} />
                <i style={{ '--w': '2px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '2px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '3px' }} />
                <i style={{ '--w': '1px' }} />
                <i style={{ '--w': '2px' }} />
              </span>{' '}
              <figcaption>Example copyright page</figcaption>
            </figure>
            <dl className="ns-cr__rec ns-rv" aria-label="Example metadata record">
              <div>
                <dt>Title</dt>
                <dd>Your book’s title</dd>
              </div>
              <div>
                <dt>Contributor</dt>
                <dd>Author name</dd>
              </div>
              <div>
                <dt>Format</dt>
                <dd>Paperback · Hardcover · eBook</dd>
              </div>
              <div>
                <dt>ISBN</dt>
                <dd>One per format</dd>
              </div>
              <div>
                <dt>Subject</dt>
                <dd>Category codes</dd>
              </div>
              <div>
                <dt>Description</dt>
                <dd>Back cover copy</dd>
              </div>
              <div>
                <dt>{'Price & territory'}</dt>
                <dd>Per market</dd>
              </div>
            </dl>
          </div>
        </section>
        <section className="ns-inc" aria-labelledby="inc-title">
          <div className="container ns-inc__grid">
            <div className="ns-inc__head">
              <p className="ns-label ns-rv">What we handle</p>
              <h2 className="ns-h2 ns-rv" id="inc-title">
                Support for your book records.
              </h2>
              <figure className="ns-inc__fig ns-rv">
                <img
                  src="/assets/images/photos/1537275181304-62f51a71af79-900x1100.webp"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <ol className="ns-inc__list ns-rv" role="list">
              <li>
                <span className="ns-inc__n">01</span>
                <h3 className="ns-inc__t">ISBN for each format</h3>
                <p className="ns-inc__d">
                  Identify the ISBN needs for each edition and the requirements of your chosen channels.
                </p>
              </li>
              <li>
                <span className="ns-inc__n">02</span>
                <h3 className="ns-inc__t">Back cover barcode</h3>
                <p className="ns-inc__d">Prepare a barcode from the assigned ISBN for the print cover.</p>
              </li>
              <li>
                <span className="ns-inc__n">03</span>
                <h3 className="ns-inc__t">Copyright registration</h3>
                <p className="ns-inc__d">
                  Help organise the information and paperwork needed for a copyright application.
                </p>
              </li>
              <li>
                <span className="ns-inc__n">04</span>
                <h3 className="ns-inc__t">Library of Congress</h3>
                <p className="ns-inc__d">Assist with a control number application where the title is eligible.</p>
              </li>
              <li>
                <span className="ns-inc__n">05</span>
                <h3 className="ns-inc__t">Copyright page</h3>
                <p className="ns-inc__d">
                  Prepare the notices, edition details and identifiers for your copyright page.
                </p>
              </li>
              <li>
                <span className="ns-inc__n">06</span>
                <h3 className="ns-inc__t">Book metadata</h3>
                <p className="ns-inc__d">
                  Record the title, contributors and description consistently across the agreed listings.
                </p>
              </li>
            </ol>
          </div>
        </section>
        <section className="ns-steps" aria-labelledby="steps-title">
          <div className="container">
            <p className="ns-label ns-rv" id="steps-title">
              Working through the details
            </p>
            <ol className="ns-steps__list ns-rv" role="list">
              <li>
                <span>01</span>
                <b>Your details</b>
                <p>Confirm the title, author, edition and formats you plan to publish.</p>
              </li>
              <li>
                <span>02</span>
                <b>Preparation</b>
                <p>Prepare the draft notices, application information and identifiers.</p>
              </li>
              <li>
                <span>03</span>
                <b>{'Filing & assignment'}</b>
                <p>Complete the agreed applications and edition records.</p>
              </li>
              <li>
                <span>04</span>
                <b>Ready for print</b>
                <p>Check that the cover, copyright page and listings match.</p>
              </li>
            </ol>
          </div>
        </section>
        <section className="ns-rel" aria-labelledby="rel-title">
          <div className="container ns-rel__grid">
            <div>
              <p className="ns-label">{'Also in Rights & Distribution'}</p>
              <h2 className="ns-rel__title" id="rel-title">
                More support for the next stage.
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
                <a href="/global-distribution">
                  <span className="ns-rel__t">Global Distribution</span>
                  <span className="ns-rel__d">
                    Prepare listings and distribution settings for the channels you want to use.
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
              src="/assets/images/photos/1730370432060-f49046da66aa-1600.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.08"
            />
          </div>
          <div className="container cta__grid">
            <div className="cta__copy">
              <p className="eyebrow" data-reveal="">
                {'Copyrights & ISBN'}
              </p>
              <h2 className="display cta__title" id="cta-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Let’s get your book '}
                <em>properly identified.</em>
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
