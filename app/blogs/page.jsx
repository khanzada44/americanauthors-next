import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Writing and Publishing Advice for Authors',
  description:
    'Read practical articles about writing a manuscript, preparing a book for publication and planning promotion that suits your readership.',
  path: '/blogs',
  ogImage: '/assets/images/journal/writing-card.webp',
});

const styles = [
  '/assets/css/site2f72.css?v=20261109-eagle-logo',
  '/assets/css/blog2f72.css?v=20261003',
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
    href: '#latest',
    section: 'latest',
    label: 'Latest articles',
    icon: '#i-book',
    text: 'Latest',
  },
  {
    href: '#contact',
    section: 'contact',
    label: 'Contact',
    icon: '#i-chat',
    text: 'Contact',
  },
];

const scripts = ['/assets/js/journal2f72.js?v=20261104-forms', '/assets/js/main2f72.js?v=20261105-production'];

export default function BlogsPage() {
  return (
    <>
      <PageStyles styles={styles} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="jn-mast" id="top" aria-labelledby="jn-title">
          <div className="container">
            <nav className="jn-crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li aria-current="page">Journal</li>
              </ol>
            </nav>
            <div className="jn-mast__rule" aria-hidden="true">
              <span>
                {'American Authors '}
                <i>/</i>
                {' Journal'}
              </span>
              <span>Issue 01</span>
              <span>{site.name}</span>
            </div>
            <div className="jn-mast__grid">
              <div>
                <p className="jn-eyebrow jn-rv">
                  <span />
                  The American Authors Journal
                </p>
                <h1 className="jn-mast__title jn-rv" id="jn-title">
                  {'Notes on writing '}
                  <em>and making books.</em>
                </h1>
                <p className="jn-mast__lead jn-rv">
                  Practical reading for authors working through a draft, planning publication or finding ways to reach
                  readers.
                </p>
              </div>
              <aside className="jn-issue jn-rv" aria-label="In this issue">
                <p className="jn-issue__h">Inside the journal</p>
                <ol role="list">
                  <li>
                    <a href="/blog-professional-book-writing-and-publishing">
                      <span>01</span>
                      {`${site.name} | A Practical Path from Idea to Published Book`}
                    </a>
                  </li>
                  <li>
                    <a href="/blog-mastering-book-marketing">
                      <span>02</span>
                      Planning Your Book Promotion | Practical Ways to Introduce Your Book to Readers
                    </a>
                  </li>
                </ol>
              </aside>
            </div>
          </div>
        </section>
        <article className="jn-cover" aria-labelledby="cover-title">
          <div className="container jn-cover__grid">
            <a
              className="jn-cover__fig jn-rv"
              href="/blog-professional-book-writing-and-publishing"
              tabIndex="-1"
              aria-hidden="true"
            >
              <img src="/assets/images/journal/writing-card.webp" alt="" decoding="async" fetchPriority="high" />
            </a>{' '}
            <div className="jn-cover__copy">
              <p className="jn-tag jn-rv">
                {'Cover story '}
                <i>·</i>
                {' No. 01'}
              </p>
              <h2 className="jn-cover__title jn-rv" id="cover-title">
                {'A Practical Path '}
                <em>from Idea to Published Book</em>
              </h2>
              <p className="jn-cover__dek jn-rv">
                A finished book comes from many small decisions. This article walks through the work of planning,
                drafting, editing and preparing your manuscript for publication.
              </p>
              <p className="jn-meta jn-rv">
                {`By ${site.name} `}
                <i>·</i> <time dateTime="2026-11-05">Updated November 5, 2026</time>
              </p>
              <div className="jn-cover__toc jn-rv">
                <p>Explore the article</p>
                <ol role="list">
                  <li>Where professional support can help</li>
                  <li>The main services to consider</li>
                  <li>Preparing for your first conversation</li>
                  <li>Choosing the next step for your manuscript</li>
                </ol>
              </div>{' '}
              <a className="jn-read jn-rv" href="/blog-professional-book-writing-and-publishing">
                {'Read article '}
                <svg aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <section className="jn-latest" id="latest" aria-labelledby="latest-title">
          <div className="container">
            <div className="jn-latest__head">
              <h2 className="jn-h2 jn-rv" id="latest-title">
                {'Articles for '}
                <em>your next step.</em>
              </h2>
              <p className="jn-latest__count jn-rv">02 articles</p>
            </div>
            <ol className="jn-rows" role="list">
              <li className="jn-row jn-rv">
                <a className="jn-row__link" href="/blog-professional-book-writing-and-publishing">
                  <span className="jn-row__n">01</span>{' '}
                  <span className="jn-row__main">
                    <span className="jn-row__kicker">{site.name}</span>{' '}
                    <span className="jn-row__title">A Practical Path from Idea to Published Book</span>{' '}
                    <span className="jn-row__dek">
                      Follow the work behind a finished book, from shaping the idea and developing a draft to editing,
                      design and publication.
                    </span>
                  </span>{' '}
                  <span className="jn-row__side">
                    <time dateTime="2026-11-05">Updated November 5, 2026</time>{' '}
                    <span className="jn-row__go">
                      {'Read '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>{' '}
                  <span className="jn-row__thumb" aria-hidden="true">
                    <img src="/assets/images/journal/writing-thumb.webp" alt="" loading="lazy" decoding="async" />
                  </span>
                </a>{' '}
                <details className="jn-row__toc">
                  <summary>4 sections in this article</summary>
                  <ol role="list">
                    <li>Where professional support can help</li>
                    <li>The main services to consider</li>
                    <li>Preparing for your first conversation</li>
                    <li>Choosing the next step for your manuscript</li>
                  </ol>
                </details>
              </li>
              <li className="jn-row jn-rv">
                <a className="jn-row__link" href="/blog-mastering-book-marketing">
                  <span className="jn-row__n">02</span>{' '}
                  <span className="jn-row__main">
                    <span className="jn-row__kicker">Planning Your Book Promotion</span>{' '}
                    <span className="jn-row__title">Practical Ways to Introduce Your Book to Readers</span>{' '}
                    <span className="jn-row__dek">
                      Readers need a way to discover your book and understand what it offers. Explore practical ways to
                      plan that introduction.
                    </span>
                  </span>{' '}
                  <span className="jn-row__side">
                    <time dateTime="2026-11-05">Updated November 5, 2026</time>{' '}
                    <span className="jn-row__go">
                      {'Read '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>{' '}
                  <span className="jn-row__thumb" aria-hidden="true">
                    <img src="/assets/images/journal/promotion-thumb.webp" alt="" loading="lazy" decoding="async" />
                  </span>
                </a>{' '}
                <details className="jn-row__toc">
                  <summary>8 sections in this article</summary>
                  <ol role="list">
                    <li>Why the introduction matters</li>
                    <li>Make the book listing clear</li>
                    <li>Choose social channels you can sustain</li>
                    <li>Give readers a home base</li>
                    <li>Make room for honest reader feedback</li>
                    <li>Plan the release materials together</li>
                    <li>Review paid promotion before expanding</li>
                    <li>Check how readers can order the book</li>
                  </ol>
                </details>
              </li>
            </ol>
          </div>
        </section>
        <figure className="jn-spread">
          <div className="container">
            <div className="jn-spread__img jn-rv">
              <img
                src="/assets/images/journal/writing-spread.webp"
                alt="Manuscript pages, a notebook and a finished book in a sunlit writing studio"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="jn-spread__cap">
              <span>Plate</span>
              The work behind every book.
            </figcaption>
          </div>
        </figure>
        <section className="jn-editor" aria-labelledby="editor-title">
          <div className="container jn-editor__grid">
            <div className="jn-editor__copy">
              <p className="jn-eyebrow jn-rv">
                <span />
                From the editor
              </p>
              <h2 className="jn-h2 jn-rv" id="editor-title">
                {'There is work behind '}
                <em>every finished page.</em>
              </h2>
              <p className="jn-body jn-rv">
                Choosing a structure, reviewing a chapter and deciding how to publish can all raise questions. We use
                this journal to explain the work in plain language and help you make informed choices about your book.
              </p>
              <p className="jn-sign jn-rv">{site.name}</p>
            </div>
            <figure className="jn-editor__fig jn-rv">
              <img
                src="/assets/images/journal/writing-detail.webp"
                alt="A close view of manuscript pages and an open writing notebook"
                loading="lazy"
                decoding="async"
              />{' '}
              <figcaption>Detail: the handwritten page.</figcaption>
            </figure>
          </div>
        </section>
        <section className="jn-topics" aria-labelledby="topics-title">
          <div className="container jn-topics__grid">
            <div className="jn-topics__head">
              <p className="jn-eyebrow jn-rv">
                <span />
                Explore by topic
              </p>
              <h2 className="jn-h2 jn-rv" id="topics-title">
                {'Find the subject '}
                <em>you need today.</em>
              </h2>
              <p className="jn-body jn-rv">Choose a topic to visit the relevant part of an article.</p>
            </div>
            <ol className="jn-topics__list jn-rv" role="list">
              <li>
                <a className="jn-topic" href="/blog-mastering-book-marketing#book-listing">
                  <span className="jn-topic__n">01</span>
                  <span className="jn-topic__t">Make the book listing clear</span>
                  <span className="jn-topic__go" aria-hidden="true">
                    <svg aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a className="jn-topic" href="/blog-mastering-book-marketing#social-channels">
                  <span className="jn-topic__n">02</span>
                  <span className="jn-topic__t">Choose social channels you can sustain</span>
                  <span className="jn-topic__go" aria-hidden="true">
                    <svg aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a className="jn-topic" href="/blog-mastering-book-marketing#reader-home-base">
                  <span className="jn-topic__n">03</span>
                  <span className="jn-topic__t">Give readers a home base</span>
                  <span className="jn-topic__go" aria-hidden="true">
                    <svg aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a className="jn-topic" href="/blog-mastering-book-marketing#reader-feedback">
                  <span className="jn-topic__n">04</span>
                  <span className="jn-topic__t">Make room for honest reader feedback</span>
                  <span className="jn-topic__go" aria-hidden="true">
                    <svg aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a className="jn-topic" href="/blog-mastering-book-marketing#release-materials">
                  <span className="jn-topic__n">05</span>
                  <span className="jn-topic__t">Plan the release materials together</span>
                  <span className="jn-topic__go" aria-hidden="true">
                    <svg aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a className="jn-topic" href="/blog-mastering-book-marketing#paid-promotion">
                  <span className="jn-topic__n">06</span>
                  <span className="jn-topic__t">Review paid promotion before expanding</span>
                  <span className="jn-topic__go" aria-hidden="true">
                    <svg aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a className="jn-topic" href="/blog-mastering-book-marketing#ordering-your-book">
                  <span className="jn-topic__n">07</span>
                  <span className="jn-topic__t">Check how readers can order the book</span>
                  <span className="jn-topic__go" aria-hidden="true">
                    <svg aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a className="jn-topic" href="/blog-professional-book-writing-and-publishing#professional-support">
                  <span className="jn-topic__n">08</span>
                  <span className="jn-topic__t">Where professional support can help</span>
                  <span className="jn-topic__go" aria-hidden="true">
                    <svg aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a className="jn-topic" href="/blog-professional-book-writing-and-publishing#first-conversation">
                  <span className="jn-topic__n">09</span>
                  <span className="jn-topic__t">Preparing for your first conversation</span>
                  <span className="jn-topic__go" aria-hidden="true">
                    <svg aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </span>
                </a>
              </li>
            </ol>
          </div>
        </section>
        <section className="jn-join on-dark" id="contact" aria-labelledby="join-title">
          <div className="container jn-join__grid">
            <div>
              <p className="jn-eyebrow jn-eyebrow--light jn-rv">
                <span />
                The American Authors Journal
              </p>
              <h2 className="jn-join__title jn-rv" id="join-title">
                {'More ideas '}
                <em>for your writing desk.</em>
              </h2>
            </div>
            <div className="jn-join__side jn-rv">
              <p>{`Ask to receive occasional writing, publishing and promotion notes from ${site.name}.`}</p>
              <form
                method="post"
                action="/api/contact.php"
                encType="multipart/form-data"
                data-site-form=""
                className="jn-join__form"
                data-journal-form=""
              >
                <input type="hidden" name="csrf_token" defaultValue="" />{' '}
                <input type="hidden" name="form_kind" defaultValue="journal" />{' '}
                <div className="form-honeypot" aria-hidden="true">
                  <label>
                    Leave this field empty
                    <input type="text" name="website" tabIndex="-1" autoComplete="off" />
                  </label>
                </div>{' '}
                <label className="sr-only" htmlFor="jn-email">
                  Email address
                </label>{' '}
                <input
                  id="jn-email"
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  autoComplete="email"
                  required
                  maxLength="254"
                />{' '}
                <button type="submit">
                  {'Join the Journal '}
                  <svg aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>
              </form>
              <p className="jn-join__note" data-journal-status="" role="status">
                Send your email address and our team will receive your signup request.
              </p>
            </div>
          </div>
        </section>
      </main>
      <PageScripts scripts={scripts} />
    </>
  );
}
