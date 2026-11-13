import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Book Publishing Support for Authors',
  description:
    'Prepare your manuscript for print and digital publication with interior formatting, cover preparation, production checks and submission support.',
  path: '/book-publishing',
});

export const viewport = { themeColor: '#0D0D0F' };

const styles = [
  '/assets/css/site2f72.css?v=20261109-eagle-logo',
  '/assets/css/publishing2f72.css?v=20261003',
  '/assets/css/forms.css?v=20261105-production',
  '/assets/css/widgets.css?v=20261105',
];

const preloads = [
  {
    type: 'image/webp',
    href: '/assets/images/photos/1581508512961-0e3b9524db40-2400.webp',
    fetchPriority: 'high',
  },
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
    href: '#approach',
    section: 'approach',
    label: 'Process',
    icon: '#i-steps',
    text: 'Process',
  },
  {
    href: '#editions',
    section: 'editions',
    label: 'Print and digital',
    icon: '#i-book',
    text: 'Editions',
  },
  {
    href: '#finished',
    section: 'finished',
    label: 'Finished book',
    icon: '#i-star',
    text: 'Finished',
  },
  {
    href: '#contact',
    section: 'contact',
    label: 'Contact',
    icon: '#i-chat',
    text: 'Contact',
  },
];

const scripts = ['/assets/js/real-work2f72.js?v=20261003', '/assets/js/main2f72.js?v=20261105-production'];

export default function BookPublishingPage() {
  return (
    <>
      <PageStyles styles={styles} preloads={preloads} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="bp-hero on-dark" id="top" aria-labelledby="bp-title">
          <div className="bp-hero__media" aria-hidden="true">
            <div className="bp-hero__img" data-parallax="0.05" />
          </div>
          <div className="container bp-hero__inner">
            <nav className="bp-crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/#services">Services</a>
                </li>
                <li aria-current="page">Book Publishing</li>
              </ol>
            </nav>
            <div className="bp-hero__copy">
              <p className="bp-eyebrow">Book publishing</p>
              <h1 className="bp-hero__title" id="bp-title">
                {'You have the manuscript. '}
                <em>Let’s prepare the book.</em>
              </h1>
              <p className="bp-hero__lead">
                From page layout to the final cover, we help you prepare print and digital editions with a clear plan
                for each stage.
              </p>
              <div className="bp-hero__ctas">
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Start Your Publishing Journey '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>
              </div>
              <dl className="bp-hero__spec">
                <div>
                  <dt>Print</dt>
                  <dd>{'Paperback & hardcover'}</dd>
                </div>
                <div>
                  <dt>Digital</dt>
                  <dd>eBook editions</dd>
                </div>
                <div>
                  <dt>Files</dt>
                  <dd>{'Print- & digital ready'}</dd>
                </div>
              </dl>
            </div>
            <figure className="bp-hero__books" aria-label={`Books published with ${site.name}`}>
              <div className="book3d bp-b bp-b--1">
                <div className="book3d__body">
                  <div className="book3d__back" />
                  <img
                    className="book3d__cover"
                    src="/assets/images/books/cover-20.webp"
                    width="440"
                    height="660"
                    alt=""
                    decoding="async"
                  />
                </div>
                <div className="book3d__shadow" />
              </div>
              <div className="book3d bp-b bp-b--2">
                <div className="book3d__body">
                  <div className="book3d__back" />
                  <img
                    className="book3d__cover"
                    src="/assets/images/books/cover-06.webp"
                    width="440"
                    height="660"
                    alt=""
                    decoding="async"
                  />
                </div>
                <div className="book3d__shadow" />
              </div>
              <div className="book3d bp-b bp-b--3">
                <div className="book3d__body">
                  <div className="book3d__back" />
                  <img
                    className="book3d__cover"
                    src="/assets/images/books/cover-24.webp"
                    width="440"
                    height="660"
                    alt=""
                    decoding="async"
                  />
                </div>
                <div className="book3d__shadow" />
              </div>
              <figcaption>{`Published with ${site.name}`}</figcaption>
            </figure>
          </div>
        </section>
        <section className="bp-sec bp-process" id="approach" aria-labelledby="process-title">
          <div
            className="bp-bg"
            data-photo="1634713157685-676e35324215-2000"
            style={{ '--o': '.26', '--b': '4px', '--pos': '50% 45%' }}
            aria-hidden="true"
          />
          <div className="container">
            <div className="bp-head">
              <p className="bp-kicker">
                <b>01</b>
                The publishing process
              </p>
              <h2 className="bp-h2" id="process-title">
                {'The work between '}
                <em>draft and publication.</em>
              </h2>
              <p className="bp-body">
                Publishing brings several pieces together. The text, interior, cover and book details all need to agree
                before the files are ready to submit.
              </p>
            </div>
            <div className="bp-run">
              <div className="bp-run__line" aria-hidden="true" />
              <ol className="bp-run__list" role="list">
                <li className="bp-step">
                  <span className="bp-step__n">01</span>
                  <span className="bp-step__obj">The manuscript</span>
                  <h3>Manuscript Preparation</h3>
                  <p>Check the manuscript and gather the material needed for layout.</p>
                </li>
                <li className="bp-step">
                  <span className="bp-step__n">02</span>
                  <span className="bp-step__obj">The page</span>
                  <h3>Interior Formatting</h3>
                  <p>Arrange chapters, headings and pages for the way each edition will be read.</p>
                </li>
                <li className="bp-step">
                  <span className="bp-step__n">03</span>
                  <span className="bp-step__obj">The cover</span>
                  <h3>{'Cover & Design'}</h3>
                  <p>Develop cover artwork that suits the content and the chosen format.</p>
                </li>
                <li className="bp-step">
                  <span className="bp-step__n">04</span>
                  <span className="bp-step__obj">The proof</span>
                  <h3>Proofing</h3>
                  <p>Review the laid out book and resolve the final corrections.</p>
                </li>
                <li className="bp-step">
                  <span className="bp-step__n">05</span>
                  <span className="bp-step__obj">The files</span>
                  <h3>Final Production</h3>
                  <p>Create the files required for your selected print and digital editions.</p>
                </li>
                <li className="bp-step">
                  <span className="bp-step__n">06</span>
                  <span className="bp-step__obj">The book</span>
                  <h3>Publication</h3>
                  <p>Submit the prepared editions through the agreed publishing channels.</p>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className="bp-sec bp-prep" id="prepare" aria-labelledby="prep-title">
          <div className="container bp-prep__grid">
            <figure className="bp-prep__fig">
              <img
                src="/assets/images/photos/1609605348579-3123e3d40eb8-1100x1300.webp"
                alt="Open pages of a typeset book showing a range of typefaces"
                loading="lazy"
                decoding="async"
              />{' '}
              <figcaption>Typesetting, where a manuscript becomes a page.</figcaption>
            </figure>
            <div>
              <p className="bp-kicker">
                <b>02</b>
                Publication ready
              </p>
              <h2 className="bp-h2 bp-h2--stack" id="prep-title">
                {'The right files. '}
                <em>The final checks.</em>
              </h2>
              <div className="bp-contents">
                <p className="bp-contents__head">
                  <span>Contents</span>
                  <span>Production</span>
                </p>
                <ol className="bp-contents__list" role="list">
                  <li>
                    <span>01</span>
                    Print formatting
                  </li>
                  <li>
                    <span>02</span>
                    Digital formatting
                  </li>
                  <li>
                    <span>03</span>
                    Interior layout
                  </li>
                  <li>
                    <span>04</span>
                    Cover preparation
                  </li>
                  <li>
                    <span>05</span>
                    Front and back matter
                  </li>
                  <li>
                    <span>06</span>
                    ISBN / publishing preparation
                  </li>
                  <li>
                    <span>07</span>
                    Print ready production files
                  </li>
                  <li>
                    <span>08</span>
                    Digital production files
                  </li>
                  <li>
                    <span>09</span>
                    Final quality review
                  </li>
                  <li>
                    <span>10</span>
                    Publishing assistance
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="bp-sec bp-ed" id="editions" aria-labelledby="ed-title">
          <div className="container">
            <div className="bp-head bp-head--c">
              <p className="bp-kicker bp-kicker--c">
                <b>03</b>
                {'Print & digital'}
              </p>
              <h2 className="bp-h2 bp-h2--c" id="ed-title">
                {'On paper '}
                <em>and on screen.</em>
              </h2>
              <p className="bp-body bp-body--c">
                A printed page and a digital page behave differently. We prepare each edition for its own reading
                experience.
              </p>
            </div>
            <div className="bp-ed__split">
              <article className="bp-edition bp-edition--print">
                <div className="bp-edition__img">
                  <img
                    src="/assets/images/photos/1709158997589-c547225f86f3-1200x800.webp"
                    alt="A finished clothbound hardcover with a ribbon marker"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="bp-edition__label">Print edition</p>
                <h3>Pages that feel right.</h3>
                <p className="bp-edition__lead">
                  Margins, type size, chapter openings and page numbers are planned for a comfortable printed reading
                  experience.
                </p>
                <ul className="bp-spec" role="list">
                  <li>
                    <b>Trim size</b>
                    <span>Chosen for the genre and the reader</span>
                  </li>
                  <li>
                    <b>Interior layout</b>
                    <span>Running heads, folios and chapter openings</span>
                  </li>
                  <li>
                    <b>Typography</b>
                    <span>Readable type, consistent spacing</span>
                  </li>
                  <li>
                    <b>Margins</b>
                    <span>Comfortable, with room for the gutter</span>
                  </li>
                  <li>
                    <b>Bleed</b>
                    <span>Artwork extended past the trim line</span>
                  </li>
                  <li>
                    <b>Print ready files</b>
                    <span>Prepared to the printer’s specification</span>
                  </li>
                  <li>
                    <b>Cover specifications</b>
                    <span>Front, spine and back sized to the page count</span>
                  </li>
                </ul>
              </article>
              <article className="bp-edition bp-edition--digital">
                <div className="bp-edition__img">
                  <img
                    src="/assets/images/photos/1610731826702-6ded935d39a2-1200x800.webp"
                    alt="An e reader showing a page of text on a wooden table"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="bp-edition__label">Digital edition</p>
                <h3>Text that adapts.</h3>
                <p className="bp-edition__lead">
                  The digital edition is arranged so readers can adjust their view without losing the structure of the
                  book.
                </p>
                <ul className="bp-spec" role="list">
                  <li>
                    <b>eBook formatting</b>
                    <span>Clean, structured digital text</span>
                  </li>
                  <li>
                    <b>Responsive text flow</b>
                    <span>Reflows for screen size and font settings</span>
                  </li>
                  <li>
                    <b>Digital cover</b>
                    <span>Clear at thumbnail size in online stores</span>
                  </li>
                  <li>
                    <b>Metadata preparation</b>
                    <span>Title, author and description details</span>
                  </li>
                  <li>
                    <b>Device compatibility</b>
                    <span>Checked across common reading devices</span>
                  </li>
                  <li>
                    <b>Final digital files</b>
                    <span>Ready for upload</span>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section className="bp-finish on-dark" id="finished" aria-labelledby="finish-title">
          <div className="bp-finish__photo" aria-hidden="true">
            <img
              src="/assets/images/photos/1650735310293-307be67b3236-2000x1200.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.05"
            />
          </div>
          <div className="container bp-finish__grid">
            <div className="bp-finish__copy">
              <p className="bp-kicker bp-kicker--light">
                <b>04</b>
                The finished book
              </p>
              <h2 className="bp-h2 bp-h2--light" id="finish-title">
                {'See your work '}
                <em>as a complete edition.</em>
              </h2>
              <p className="bp-body bp-body--light">
                Your manuscript becomes a book when the text and presentation work together. We coordinate the details
                so the cover, interior and final files feel like parts of the same project.
              </p>
            </div>
            <figure className="bp-finish__book">
              <div className="book3d bp-fb">
                <div className="book3d__body">
                  <div className="book3d__back" />
                  <img
                    className="book3d__cover"
                    src="/assets/images/books/cover-18.webp"
                    width="440"
                    height="660"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="book3d__shadow" />
              </div>
              <figcaption>
                <span className="label">The finished edition</span>
                {`Published with ${site.name}`}
              </figcaption>
            </figure>
          </div>
          <div className="container">
            <div className="bp-shelf">
              <p>From the American Authors catalogue</p>
              <ul role="list">
                <li>
                  <img
                    src="/assets/images/books/cover-25.webp"
                    width="440"
                    height="660"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </li>
                <li>
                  <img
                    src="/assets/images/books/cover-05.webp"
                    width="440"
                    height="660"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </li>
                <li>
                  <img
                    src="/assets/images/books/cover-26.webp"
                    width="440"
                    height="660"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </li>
                <li>
                  <img
                    src="/assets/images/books/cover-12.webp"
                    width="440"
                    height="660"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </li>
                <li>
                  <img
                    src="/assets/images/books/cover-23.webp"
                    width="440"
                    height="660"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="rw-sel rw-sel--light bp-rw" id="published" aria-labelledby="published-title">
          <div className="container">
            <div className="rw-sel__rule rw-rv" aria-hidden="true">
              <span>
                {'American Authors '}
                <i>/</i>
                {' Published work'}
              </span>
              <span>Selected titles</span>
              <span>In print</span>
            </div>
            <div className="rw-sel__head">
              <div>
                <p className="rw-eyebrow rw-rv">
                  <span />
                  Published work
                </p>
                <h2 className="rw-h2 rw-rv" id="published-title">
                  {'A few books '}
                  <em>from our catalogue.</em>
                </h2>
              </div>
              <div className="rw-sel__side rw-rv">
                <p className="rw-lead">{`Explore selected titles published with ${site.name}, each with its own subject, style and readership.`}</p>{' '}
                <a className="rw-link" href="/our-work#catalogue">
                  {'See the full catalogue '}
                  <svg aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="rw-table" data-rw-table="">
              <div className="rw-table__row">
                <a
                  className="rw-book rw-table__book"
                  href="/our-work#book-19"
                  aria-label="The Legal Tender Question by Joseph R. K. Eshun, view in Our Work"
                  data-rw-book="19"
                  style={{ '--s': '0.52', '--z': '7' }}
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-19-s.webp"
                      width="360"
                      height="614"
                      alt="The Legal Tender Question: Volume Two by Joseph R. K. Eshun, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">The Legal Tender Question</span>
                    <span className="rw-cap__s">Volume Two</span>
                    <span className="rw-cap__a">Joseph R. K. Eshun</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </a>
                <a
                  className="rw-book rw-table__book"
                  href="/our-work#emilio-degher"
                  aria-label="Eternal Coherence by Emilio Degher, view in Our Work"
                  data-rw-book="09"
                  style={{ '--s': '0.62', '--z': '8' }}
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-09-s.webp"
                      width="360"
                      height="614"
                      alt="Eternal Coherence: Jesus Christ and the Architecture of Reality by Emilio Degher, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">Eternal Coherence</span>
                    <span className="rw-cap__s">Jesus Christ and the Architecture of Reality</span>
                    <span className="rw-cap__a">Emilio Degher</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </a>
                <a
                  className="rw-book rw-table__book"
                  href="/our-work#book-27"
                  aria-label="Change to Stay Unchanged by Yerzhan Dosmukhamedov, view in Our Work"
                  data-rw-book="27"
                  style={{ '--s': '0.74', '--z': '9' }}
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-27.webp"
                      width="600"
                      height="1024"
                      alt="Change to Stay Unchanged: Authoritarian Reform in Kazakhstan Under the Tokayev Regime by Yerzhan Dosmukhamedov, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">Change to Stay Unchanged</span>
                    <span className="rw-cap__s">Authoritarian Reform in Kazakhstan Under the Tokayev Regime</span>
                    <span className="rw-cap__a">Yerzhan Dosmukhamedov</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </a>
                <a
                  className="rw-book rw-table__book is-lead"
                  href="/our-work#book-04"
                  aria-label="The Cosmic Mind by Maneseh, view in Our Work"
                  data-rw-book="04"
                  style={{ '--s': '1', '--z': '20' }}
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-04.webp"
                      width="600"
                      height="1024"
                      alt="The Cosmic Mind: Consciousness, Creation and the Search for Meaning by Maneseh, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">The Cosmic Mind</span>
                    <span className="rw-cap__s">Consciousness, Creation and the Search for Meaning</span>
                    <span className="rw-cap__a">Maneseh</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </a>
                <a
                  className="rw-book rw-table__book"
                  href="/our-work#book-18"
                  aria-label="The Legal Tender Question by Joseph R. K. Eshun, view in Our Work"
                  data-rw-book="18"
                  style={{ '--s': '0.74', '--z': '11' }}
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-18.webp"
                      width="600"
                      height="1024"
                      alt="The Legal Tender Question: Volume One by Joseph R. K. Eshun, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">The Legal Tender Question</span>
                    <span className="rw-cap__s">Volume One</span>
                    <span className="rw-cap__a">Joseph R. K. Eshun</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </a>
                <a
                  className="rw-book rw-table__book"
                  href="/our-work#emilio-degher"
                  aria-label="The Sole by Emilio Degher, view in Our Work"
                  data-rw-book="15"
                  style={{ '--s': '0.62', '--z': '12' }}
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-15-s.webp"
                      width="360"
                      height="614"
                      alt="The Sole: On the Soul, the Heavens, and the Silence Between the Creator and the Listener by Emilio Degher, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">The Sole</span>
                    <span className="rw-cap__s">
                      On the Soul, the Heavens, and the Silence Between the Creator and the Listener
                    </span>
                    <span className="rw-cap__a">Emilio Degher</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </a>
                <a
                  className="rw-book rw-table__book"
                  href="/our-work#book-17"
                  aria-label="Business Administration Mastery, view in Our Work"
                  data-rw-book="17"
                  style={{ '--s': '0.52', '--z': '13' }}
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-17-s.webp"
                      width="360"
                      height="614"
                      alt="Business Administration Mastery: The Complete Guide for Aspiring Leaders, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">Business Administration Mastery</span>
                    <span className="rw-cap__s">The Complete Guide for Aspiring Leaders</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
              <div className="rw-table__surface" aria-hidden="true" />
            </div>
            <p className="rw-now" data-rw-now="" aria-live="polite">
              <span className="rw-now__n">In print</span>
              <span className="rw-now__main">
                <span className="rw-cap__t">The Cosmic Mind</span>
                <span className="rw-cap__s">Consciousness, Creation and the Search for Meaning</span>
                <span className="rw-cap__a">Maneseh</span>
              </span>
              <span className="rw-now__hint">Explore a cover for book details</span>
            </p>
          </div>
        </section>
        <section className="bp-sec bp-why" id="why" aria-labelledby="why-title">
          <div
            className="bp-bg"
            data-photo="1675126217708-9f7947119413-2000"
            style={{
              '--o': '.16',
              '--b': '4px',
              '--pos': '50% 50%',
              '--veil':
                'linear-gradient(90deg, rgba(246,242,234,.92) 0%, rgba(246,242,234,.8) 45%, rgba(246,242,234,.55) 100%)',
            }}
            aria-hidden="true"
          />
          <div className="container bp-why__grid">
            <div className="bp-why__head">
              <p className="bp-kicker">
                <b>05</b>
                Why it matters
              </p>
              <blockquote className="bp-why__quote">
                {'A professionally published book should feel '}
                <em>intentional from cover to final page.</em>
              </blockquote>
              <p className="bp-body">
                A distracting layout can pull readers away from good writing. We pay attention to the quiet details,
                including spacing, margins, headings and the way pages turn.
              </p>
            </div>
            <ol className="bp-why__list" role="list">
              <li>
                <span className="bp-why__n">i</span>
                <div>
                  <h3>Consistent typography</h3>
                  <p>Type choices carried consistently through the book.</p>
                </div>
              </li>
              <li>
                <span className="bp-why__n">ii</span>
                <div>
                  <h3>Professional interior hierarchy</h3>
                  <p>A clear order for chapters, headings and section breaks.</p>
                </div>
              </li>
              <li>
                <span className="bp-why__n">iii</span>
                <div>
                  <h3>Correct print specifications</h3>
                  <p>Files prepared around the printer’s specified dimensions and margins.</p>
                </div>
              </li>
              <li>
                <span className="bp-why__n">iv</span>
                <div>
                  <h3>Clean digital formatting</h3>
                  <p>Digital text arranged for a comfortable reading experience.</p>
                </div>
              </li>
              <li>
                <span className="bp-why__n">v</span>
                <div>
                  <h3>Strong visual presentation</h3>
                  <p>Cover artwork and interior choices that suit the same readership.</p>
                </div>
              </li>
              <li>
                <span className="bp-why__n">vi</span>
                <div>
                  <h3>Production accuracy</h3>
                  <p>A review of the production files before submission.</p>
                </div>
              </li>
              <li>
                <span className="bp-why__n">vii</span>
                <div>
                  <h3>Reader experience</h3>
                  <p>A book that is easy to navigate and comfortable to spend time with.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section className="section section--ivory faq bp-faq" id="faq" aria-labelledby="faq-title">
          <div className="container faq__grid">
            <div className="faq__head">
              <p className="bp-kicker">
                <b>06</b>
                FAQ
              </p>
              <h2 className="h2" id="faq-title">
                {'Questions about '}
                <em>getting published.</em>
              </h2>
            </div>
            <div className="faq__list" data-faq="">
              <details className="qa" open>
                <summary>
                  <span>What help do you provide with publishing?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    We can coordinate formatting, cover preparation, production checks and submission support. We agree
                    on the services and editions your project needs before work begins.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>Which publishing route should I choose?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    That depends on your goals, budget and how much control you want. We can explain the practical work
                    involved in preparing an independent edition and discuss the route you are considering.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>When could my book be ready?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    The schedule depends on the manuscript’s condition, the formats you choose and the number of review
                    rounds. We discuss those details before setting a project timeline.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>Can you edit and format my manuscript?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Yes. Editing and formatting can be included in the project scope. We settle the text before laying
                    out the print edition or preparing the digital version.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>Can you help me promote the book afterwards?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Yes. We can discuss a separate promotion plan covering your book description, author presence,
                    launch materials and suitable reader channels.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>Will the book remain mine?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Our services help you prepare and publish your work. Ownership and any platform permissions should
                    be clear in your project agreement before you begin.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="cta on-dark bp-cta" id="contact" aria-labelledby="cta-title">
          <div className="cta__media" aria-hidden="true">
            <img
              src="/assets/images/photos/1604931668626-ab49cb27d952-1800.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.06"
            />
          </div>
          <div className="container cta__grid">
            <div className="cta__copy">
              <p className="eyebrow">Ready to publish?</p>
              <h2 className="display cta__title bp-cta__title" id="cta-title">
                {'Let’s get your manuscript '}
                <em>ready to publish.</em>
              </h2>
              <p className="lead">
                Tell us which editions you have in mind and how far your manuscript has progressed. We will help you
                work out the next step.
              </p>
              <div className="bp-cta__btns">
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Start Your Publishing Journey '}
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
            <LeadForm
              title="Start your publishing journey"
              messageLabel="What are you writing, and where do you need help?"
            />
          </div>
        </section>
      </main>
      <PageScripts scripts={scripts} />
    </>
  );
}
