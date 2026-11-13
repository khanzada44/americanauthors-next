import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Planning Your Book from First Draft to Publication',
  description:
    'Understand the work behind a finished book, from outlining and writing to editing, production and publishing support. Find a starting point for yours.',
  path: '/blog-professional-book-writing-and-publishing',
  ogImage: '/assets/images/journal/writing-hero.webp',
});

const styles = [
  '/assets/css/site2f72.css?v=20261109-eagle-logo',
  '/assets/css/article2f72.css?v=20261003',
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
    href: '#article',
    section: 'article',
    label: 'Article',
    icon: '#i-book',
    text: 'Article',
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

export default function BlogProfessionalBookWritingAndPublishingPage() {
  return (
    <>
      <PageStyles styles={styles} />
      <SectionRail links={railLinks} />
      <main id="main">
        <article className="ja" aria-labelledby="ja-title">
          <header className="jn-mast ja-mast" id="top">
            <div className="container">
              <nav className="jn-crumbs" aria-label="Breadcrumb">
                <ol role="list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/blogs">Journal</a>
                  </li>
                  <li aria-current="page">Article 01</li>
                </ol>
              </nav>
              <div className="jn-mast__rule" aria-hidden="true">
                <span>
                  {'American Authors '}
                  <i>/</i>
                  {' Journal'}
                </span>
                <span>Article No. 01</span>
                <span>{site.name}</span>
              </div>
              <div className="ja-head">
                <p className="jn-tag jn-rv">{site.name}</p>
                <h1 className="ja-title jn-rv" id="ja-title">
                  A Practical Path from Idea to Published Book
                </h1>
                <p className="ja-dek jn-rv">
                  Writing a book is easier to plan when you understand the work ahead. Here is how outlining, drafting,
                  editing and production fit together.
                </p>
                <p className="jn-meta jn-rv">
                  {`By ${site.name} `}
                  <i>·</i> <time dateTime="2026-11-05">Updated November 5, 2026</time>
                </p>
              </div>
            </div>
          </header>
          <figure className="ja-fig">
            <div className="container">
              <div className="ja-fig__img jn-rv">
                <img
                  src="/assets/images/journal/writing-hero.webp"
                  alt="A manuscript, open notebook and navy book on a writer’s desk"
                  width="1600"
                  height="720"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </div>
          </figure>
          <div className="container ja-grid" id="article">
            <aside className="ja-side" aria-label="In this article">
              <p className="ja-side__h">In this article</p>
              <ol role="list">
                <li>
                  <a href="#professional-support">Where professional support can help</a>
                </li>
                <li>
                  <a href="#book-services">The main services to consider</a>
                </li>
                <li>
                  <a href="#first-conversation">How to prepare for your first conversation</a>
                </li>
                <li>
                  <a href="#conclusion">Choose the next step for your manuscript</a>
                </li>
              </ol>{' '}
              <a className="jn-read ja-back" href="/blogs">
                <svg className="ja-back__i" aria-hidden="true">
                  <use href="#i-left" />
                </svg>
                Back to the Journal
              </a>
            </aside>
            <div className="ja-body">
              <p className="ja-first">
                An idea gives you a starting point, but a book needs a structure, a draft and time for revision. Whether
                you are writing it yourself or working with a ghostwriter, understanding those stages helps you decide
                where professional support would be useful.
              </p>
              <h2 id="professional-support">Where professional support can help</h2>
              <p>
                A book services team can take on specific tasks or help coordinate several stages. Begin by identifying
                what is slowing your project down.
              </p>
              <h3>1. Clear language and a steady voice</h3>
              <p>
                The aim is readable prose that feels appropriate to your subject. A writer or editor can help you
                explain difficult ideas, remove repetition and keep the voice consistent.
              </p>
              <h3>2. Attention to the intended reader</h3>
              <p>
                A reader brings expectations about language, detail and pace. Discuss who the book is for so the
                examples, explanations and storytelling make sense to that audience.
              </p>
              <h3>3. A useful description of the book</h3>
              <p>
                The book description and author biography introduce your work before anyone reads the first page. They
                should explain the subject clearly and use language the intended reader understands.
              </p>
              <h3>4. Help organising the publishing work</h3>
              <p>
                Formatting, cover preparation and final checks involve different tasks. A project plan helps you see
                which decisions are needed and when to review the work.
              </p>
              <h2 id="book-services">The main services to consider</h2>
              <p>
                Choose support based on the material you have and the work still needed, rather than assuming every
                manuscript needs the same package.
              </p>
              <h3>1. Ghostwriting Services</h3>
              <p>
                A ghostwriter can help develop your notes and conversations into a complete draft. Your input on the
                outline and early chapters keeps the writing close to your intentions.
              </p>
              <h3>2. Professional Editing and Proofreading</h3>
              <p>Editing begins with the level of attention the draft needs. Common options include:</p>
              <ul>
                <li>A structural review of the manuscript’s chapters and overall direction</li>
                <li>Language checks for grammar, usage and consistency</li>
                <li>A final proofread once the text and layout are settled</li>
              </ul>
              <h3>3. Book Formatting and Typesetting</h3>
              <p>
                A print edition needs a settled page layout, while a digital edition needs text that adapts to a screen.
                Formatting can cover:
              </p>
              <ul>
                <li>Print pages with a clear hierarchy and comfortable margins</li>
                <li>A digital edition that adapts to different screens</li>
                <li>Files prepared to the specifications of your selected channels</li>
              </ul>
              <h3>4. Book Cover Design and Illustrations</h3>
              <p>
                Cover art and interior illustrations should suit the book’s readers and the way it will be published.
                Discuss:
              </p>
              <ul>
                <li>A cover concept that reflects the book’s subject and readership</li>
                <li>Illustrations planned around the page and the story</li>
                <li>Artwork and typography that remain clear at a small size</li>
              </ul>
              <h3>5. Book Marketing and Promotion</h3>
              <p>
                Promotion helps you introduce the book once the message and release plans are clear. A practical plan
                may include:
              </p>
              <ul>
                <li>A description that explains the book without overpromising</li>
                <li>An author introduction and useful sample content</li>
                <li>Release announcements and visual materials for your channels</li>
                <li>A website with clear information and reliable buying links</li>
              </ul>
              <h2 id="first-conversation">How to prepare for your first conversation</h2>
              <p>
                You do not need every answer before speaking with a team. A few details will make the conversation more
                useful.
              </p>
              <h3>1. Define Your Book’s Goals</h3>
              <p>
                Explain who you want to read the book, what you want it to say and which parts you need help completing.
              </p>
              <h3>2. Review the kind of support available</h3>
              <p>
                Look for relevant work and ask how the team handles your type of project. Useful things to discuss
                include:
              </p>
              <ul>
                <li>Examples of work relevant to the kind of book you are writing</li>
                <li>A written explanation of deliverables and revision rounds</li>
                <li>A schedule that allows time for your feedback</li>
              </ul>
              <h3>3. Collaborate and Review</h3>
              <p>
                Set aside time to read drafts, gather your questions and give specific feedback. Clear review points
                help the work move forward.
              </p>
              <h3>4. Prepare the release alongside the production</h3>
              <p>
                Once the text and files are approved, follow the submission process for the channels you have chosen.
                You can also plan:
              </p>
              <ul>
                <li>A sample chapter readers can explore</li>
                <li>An announcement with the correct release details</li>
                <li>A manageable plan for introducing yourself and the book</li>
              </ul>
              <h2 id="conclusion">Choose the next step for your manuscript</h2>
              <p>
                You may need an outline, a careful edit or help preparing a completed draft for publication. Start with
                the task that makes the greatest difference to your book today.
              </p>
              <p>
                {`Tell ${site.name} what you have written and what you hope to do with it. We can help you work out a suitable scope and a practical way forward.`}
              </p>
              <p className="ja-end">
                <a className="jn-read" href="/blogs">
                  <svg className="ja-back__i" aria-hidden="true">
                    <use href="#i-left" />
                  </svg>
                  Back to the American Authors Journal
                </a>
              </p>
            </div>
          </div>
        </article>
        <section className="jn-latest ja-related" aria-labelledby="ja-related-title">
          <div className="container">
            <div className="jn-latest__head">
              <h2 className="jn-h2 jn-rv" id="ja-related-title">
                {'Another article '}
                <em>for your writing desk.</em>
              </h2>
            </div>
            <ol className="jn-rows" role="list">
              <li className="jn-row jn-rv">
                <a className="jn-row__link" href="/blog-mastering-book-marketing">
                  <span className="jn-row__n">02</span>{' '}
                  <span className="jn-row__main">
                    <span className="jn-row__kicker">Planning Your Book Promotion</span>
                    <span className="jn-row__title">Practical Ways to Introduce Your Book to Readers</span>
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
                </a>
              </li>
            </ol>
          </div>
        </section>
        <section className="cta on-dark ja-cta" id="contact" aria-labelledby="cta-title">
          <div className="cta__media" aria-hidden="true">
            <img
              src="/assets/images/journal/promotion-cta.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.08"
            />
          </div>
          <div className="container cta__grid">
            <div className="cta__copy">
              <p className="eyebrow" data-reveal="">
                Your book
              </p>
              <h2 className="display cta__title" id="cta-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'What comes next '}
                <em>for your book?</em>
              </h2>
              <p className="lead" data-reveal="" style={{ '--d': '.16s' }}>
                Let us know what you have written and where you need help. Our team will review your enquiry.
              </p>
              <div className="ja-cta__btns" data-reveal="" style={{ '--d': '.2s' }}>
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
