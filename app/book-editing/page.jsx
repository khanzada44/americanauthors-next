import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Manuscript Editing and Proofreading Services',
  description:
    'Get a thoughtful review of your manuscript with developmental editing, copy editing, sentence revisions and proofreading suited to your draft.',
  path: '/book-editing',
  ogType: 'article',
});

const styles = [
  '/assets/css/site2f72.css?v=20261109-eagle-logo',
  '/assets/css/service2f72.css?v=20261003',
  '/assets/css/forms.css?v=20261105-production',
  '/assets/css/widgets.css?v=20261105',
];

const preloads = [
  {
    type: 'image/webp',
    href: '/assets/images/photos/1580127645995-d43fe9598711-2000.webp',
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
    href: '#editing-services',
    section: 'editing-services',
    label: 'Editing services',
    icon: '#i-pen',
    text: 'Editing',
  },
  {
    href: '#process',
    section: 'process',
    label: 'Process',
    icon: '#i-steps',
    text: 'Process',
  },
  {
    href: '#faq',
    section: 'faq',
    label: 'FAQ',
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

export default function BookEditingPage() {
  return (
    <>
      <PageStyles styles={styles} preloads={preloads} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="sv-hero" id="top" aria-labelledby="sv-title">
          <div className="sv-hero__ambient" aria-hidden="true">
            <div className="sv-hero__img" data-parallax="0.06" />
            <div className="sv-hero__veil" />
          </div>
          <div className="container">
            <nav className="crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/#services">Services</a>
                </li>
                <li aria-current="page">Book Editing</li>
              </ol>
            </nav>
            <div className="sv-hero__shell">
              <div className="sv-hero__copy">
                <p className="eyebrow" data-reveal="">
                  Book Editing
                </p>
                <h1 className="sv-hero__title" id="sv-title" data-reveal="" style={{ '--d': '.08s' }}>
                  {'Keep your voice. '}
                  <em>Strengthen your draft.</em>
                </h1>
                <p className="lead" data-reveal="" style={{ '--d': '.16s' }}>
                  A fresh editorial eye can help you see what is working, what needs attention and how to make your
                  manuscript easier to read.
                </p>
                <div className="sv-hero__ctas" data-reveal="" style={{ '--d': '.22s' }}>
                  <button className="btn btn--primary" type="button" data-open-lead="">
                    {'Plan Your Book '}
                    <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </button>
                </div>
                <ul className="sv-hero__kinds" role="list" data-reveal="" style={{ '--d': '.28s' }}>
                  <li>Developmental</li>
                  <li>Copy editing</li>
                  <li>Proofreading</li>
                  <li>Revision</li>
                </ul>
              </div>
              <div className="sv-hero__stage on-dark" data-reveal="scale" style={{ '--d': '.12s' }}>
                <div className="sv-hero__stage-bg" aria-hidden="true">
                  <img
                    src="/assets/images/photos/1601675336070-7393219f765e-1200.webp"
                    width="1200"
                    height="800"
                    alt=""
                    decoding="async"
                  />
                </div>
                <div className="book3d sv-hero__book" aria-hidden="true">
                  <div className="book3d__body">
                    <div className="book3d__back" />
                    <img
                      className="book3d__cover"
                      src="/assets/images/books/cover-05.webp"
                      width="440"
                      height="660"
                      alt=""
                    />
                  </div>
                  <div className="book3d__shadow" />
                </div>
                <p className="sv-hero__caption">
                  <span className="label">Published with American Authors</span>
                  <span>The Naked Truth of AI 2.0 by Douglas Hawes</span>
                </p>{' '}
                <span className="sv-hero__num" aria-hidden="true">
                  02
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="section section--ivory sv-intro" id="overview" aria-labelledby="intro-title">
          <div className="container sv-intro__grid">
            <div className="sv-intro__statement">
              <span className="ghost-num" aria-hidden="true">
                01
              </span>
              <p className="eyebrow" data-reveal="">
                Your story, refined
              </p>
              <h2 className="h2" id="intro-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Give your draft '}
                <em>a thoughtful second look.</em>
              </h2>
            </div>
            <div className="sv-intro__body" data-reveal="" style={{ '--d': '.14s' }}>
              <p className="sv-intro__lede">
                A draft can hold a good story and still need work. We look at how its chapters fit together, where the
                pace slows and which passages could say more with fewer words.
              </p>
              <p>
                Whether you plan to publish independently or approach a publisher, we help you decide what level of
                editing your manuscript needs.
              </p>
              <dl className="sv-intro__facts">
                <div>
                  <dt className="label">For authors who are</dt>
                  <dd>
                    {'Self publishing '}
                    <span>·</span>
                    {' Submitting to traditional publishers'}
                  </dd>
                </div>
                <div>
                  <dt className="label">Genres we work in</dt>
                  <dd>Fiction, nonfiction, biographies, self help, romance, fantasy, business books and more</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
        <section className="section section--ivory sv-kinds" id="editing-services" aria-labelledby="kinds-title">
          <div className="ed-bg ed-bg--svc" aria-hidden="true">
            <div className="ed-bg__img" data-parallax="0.05" />
          </div>
          <div className="container">
            <div className="sv-head">
              <div>
                <span className="ghost-num" aria-hidden="true">
                  02
                </span>
                <p className="eyebrow" data-reveal="">
                  What book editing includes
                </p>
                <h2 className="h2" id="kinds-title" data-reveal="" style={{ '--d': '.08s' }}>
                  {'Choose the editing '}
                  <em>your manuscript needs.</em>
                </h2>
              </div>
            </div>
            <div className="sv-kinds__grid">
              <article className="sv-feature" data-reveal="">
                <div className="sv-feature__top">
                  <span className="cat__n">01</span>
                  <span className="label">{'Structure & story'}</span>
                </div>
                <h3 className="sv-feature__title">Developmental Editing</h3>
                <p className="sv-feature__lede">
                  We look at the book as a whole, including its structure, argument or story, and how each chapter
                  supports it.
                </p>
                <p>
                  For fiction, we review plot, characters, dialogue and pacing. For nonfiction, we consider
                  organisation, explanations and the reader’s questions. You receive practical notes to guide the next
                  draft.
                </p>
                <ul className="sv-feature__tags" role="list">
                  <li>Plot</li>
                  <li>Character arcs</li>
                  <li>Pacing</li>
                  <li>Transitions</li>
                  <li>Dialogue</li>
                  <li>Themes</li>
                </ul>
              </article>
              <ol className="sv-rows" role="list" start="2">
                <li className="sv-row" data-reveal="" style={{ '--d': '.06s' }}>
                  <span className="cat__n">02</span>{' '}
                  <div>
                    <h3 className="sv-row__title">Copy Editing</h3>
                    <p>
                      We check grammar, spelling, punctuation and usage, while keeping names, dates, terminology and
                      style consistent throughout the book.
                    </p>
                  </div>
                </li>
                <li className="sv-row" data-reveal="" style={{ '--d': '.12s' }}>
                  <span className="cat__n">03</span>{' '}
                  <div>
                    <h3 className="sv-row__title">Proofreading</h3>
                    <p>
                      Once the text and layout are settled, we check for remaining typos, punctuation problems and small
                      inconsistencies before publication.
                    </p>
                  </div>
                </li>
                <li className="sv-row" data-reveal="" style={{ '--d': '.18s' }}>
                  <span className="cat__n">04</span>{' '}
                  <div>
                    <h3 className="sv-row__title">Comprehensive Revision</h3>
                    <p>
                      We work at sentence level to improve rhythm, word choice and clarity. Repeated ideas, awkward
                      transitions and passages that lose their focus get particular attention.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className="section section--dark sv-desk" id="on-the-page" aria-labelledby="desk-title">
          <div className="sv-desk__bg" aria-hidden="true">
            <div className="sv-desk__img" data-parallax="0.04" />
          </div>
          <div className="container sv-desk__grid">
            <div className="sv-desk__copy">
              <span className="ghost-num" aria-hidden="true">
                03
              </span>
              <p className="eyebrow" data-reveal="">
                On the page
              </p>
              <h2 className="h2" id="desk-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Changes that '}
                <em>serve the writing.</em>
              </h2>
              <p className="lead" data-reveal="" style={{ '--d': '.14s' }}>
                Some edits fix a small mistake. Others help a paragraph land or give a chapter a clearer direction. Each
                change should make the reader’s job easier.
              </p>
              <ul className="sv-legend" role="list" data-reveal="" style={{ '--d': '.2s' }}>
                <li>
                  <span className="sv-legend__mark sv-legend__mark--note">¶</span>
                  <span>
                    <b>Margin notes</b>
                    Structure, pacing and clarity: the developmental conversation.
                  </span>
                </li>
                <li>
                  <span className="sv-legend__mark sv-legend__mark--del">word</span>
                  <span>
                    <b>Deletions</b>
                    Repeated ideas reviewed so each paragraph has a clear purpose.
                  </span>
                </li>
                <li>
                  <span className="sv-legend__mark sv-legend__mark--ins">^</span>
                  <span>
                    <b>Insertions</b>
                    Word choice, punctuation and consistency, refined.
                  </span>
                </li>
              </ul>
            </div>
            <figure className="sheet-wrap" data-reveal="scale" style={{ '--d': '.1s' }}>
              <div className="sheet" aria-label="Example of editorial markup on a manuscript page">
                <div className="sheet__head">
                  <span>Chapter Three</span>
                  <span>47</span>
                </div>
                <p className="sheet__p">
                  {'Line editing focuses '}
                  <del>in on</del>
                  {' on the finer details of your writing'}
                  <del>, and</del>
                  <ins>,</ins>
                  {' enhancing clarity, flow'}
                  <ins>,</ins>
                  {' and readability. Our editors refine sentence structure, word choice'}
                  <ins>,</ins>
                  {' and tone to ensure consistency '}
                  <del>and also</del>
                  <ins>and</ins>
                  {' engagement.'}
                  <span className="sheet__note sheet__note--a" aria-hidden="true">
                    tighten: repeated idea
                  </span>
                </p>
                <p className="sheet__p">
                  {'We eliminate redundancies, '}
                  <mark>clarify complex ideas</mark>, and create a smooth reading experience
                  <del>{"\u00a0for the reader"}</del>.
                  <span className="sheet__note sheet__note--b" aria-hidden="true">
                    keep: strong
                  </span>
                </p>
                <p className="sheet__p sheet__p--muted">
                  A careful line edit helps the prose read smoothly while keeping the author’s voice.
                </p>{' '}
                <span className="sheet__pen" aria-hidden="true" />
              </div>
              <figcaption>Illustrative editorial markup on a sample passage.</figcaption>
            </figure>
          </div>
        </section>
        <section className="section section--ivory sv-why" id="why-editing" aria-labelledby="why-title">
          <div className="container">
            <div className="sv-why__head">
              <span className="ghost-num" aria-hidden="true">
                04
              </span>
              <p className="eyebrow" data-reveal="">
                Why editing matters
              </p>
              <h2 className="h2" id="why-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Good editing helps '}
                <em>the whole book work.</em>
              </h2>
            </div>
            <dl className="sv-why__list">
              <div data-reveal="">
                <dt>Clarity</dt>
                <dd>Difficult passages explained more clearly, with smoother links between ideas.</dd>
              </div>
              <div data-reveal="" style={{ '--d': '.05s' }}>
                <dt>Consistency</dt>
                <dd>A consistent tone, style and format throughout the manuscript.</dd>
              </div>
              <div data-reveal="" style={{ '--d': '.1s' }}>
                <dt>Structure</dt>
                <dd>A connected story with believable character development and a pace that suits the scenes.</dd>
              </div>
              <div data-reveal="" style={{ '--d': '.15s' }}>
                <dt>Readability</dt>
                <dd>Sentences revised for clearer meaning and a more natural rhythm.</dd>
              </div>
              <div data-reveal="" style={{ '--d': '.2s' }}>
                <dt>Tone</dt>
                <dd>Editorial choices that respect your genre and the way you write.</dd>
              </div>
              <div data-reveal="" style={{ '--d': '.25s' }}>
                <dt>Professionalism</dt>
                <dd>An error free, publication ready book that leaves a lasting impression on readers.</dd>
              </div>
            </dl>
          </div>
        </section>
        <section className="section section--paper sv-process" id="process" aria-labelledby="proc-title">
          <div className="ed-bg ed-bg--rev" aria-hidden="true">
            <div className="ed-bg__img" data-parallax="0.04" />
          </div>
          <div className="container sv-process__grid">
            <div className="sv-process__head">
              <span className="ghost-num" aria-hidden="true">
                05
              </span>
              <p className="eyebrow" data-reveal="">
                Our editing process
              </p>
              <h2 className="h2" id="proc-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'A clear route '}
                <em>through the edits.</em>
              </h2>
              <p className="lead" data-reveal="" style={{ '--d': '.14s' }}>
                We agree on the scope, review the manuscript and work through the changes with you before preparing the
                final version.
              </p>
            </div>
            <ol className="sv-steps" role="list">
              <li className="sv-step" data-reveal="">
                <span className="sv-step__n">01</span>
                <div>
                  <p className="label">Strengthening the foundation</p>
                  <h3>Review</h3>
                  <p>
                    We read the manuscript and identify its strengths, recurring issues and the changes that would make
                    the greatest difference.
                  </p>
                </div>
              </li>
              <li className="sv-step" data-reveal="">
                <span className="sv-step__n">02</span>
                <div>
                  <p className="label">{'Refining style & readability'}</p>
                  <h3>Edit</h3>
                  <p>
                    We work through the prose, improving unclear passages and transitions without making every sentence
                    sound the same.
                  </p>
                </div>
              </li>
              <li className="sv-step" data-reveal="">
                <span className="sv-step__n">03</span>
                <div>
                  <p className="label">{'Perfecting grammar & consistency'}</p>
                  <h3>Refine</h3>
                  <p>
                    We check language and style across the manuscript so details stay consistent from the opening
                    chapter to the last.
                  </p>
                </div>
              </li>
              <li className="sv-step" data-reveal="">
                <span className="sv-step__n">04</span>
                <div>
                  <p className="label">The final touch</p>
                  <h3>Proofread</h3>
                  <p>A final review catches remaining text and layout issues before the files move on.</p>
                </div>
              </li>
              <li className="sv-step sv-step--end" data-reveal="">
                <span className="sv-step__n">05</span>
                <div>
                  <p className="label">The result</p>
                  <h3>Final Manuscript</h3>
                  <p>A revised manuscript with the agreed editorial work completed.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section className="section section--ivory sv-receive" id="receive" aria-labelledby="receive-title">
          <div className="container">
            <div className="sv-receive__panel" data-reveal="scale">
              <div className="sv-receive__intro">
                <span className="ghost-num" aria-hidden="true">
                  06
                </span>
                <p className="eyebrow">What you receive</p>
                <h2 className="h3" id="receive-title">
                  {'Know what '}
                  <em>your edit includes.</em>
                </h2>
                <div className="sv-receive__books" aria-hidden="true">
                  <img src="/assets/images/books/cover-25.webp" width="440" height="660" alt="" loading="lazy" />{' '}
                  <img src="/assets/images/books/cover-27.webp" width="440" height="660" alt="" loading="lazy" />{' '}
                  <img src="/assets/images/books/cover-12.webp" width="440" height="660" alt="" loading="lazy" />
                </div>
                <p className="sv-receive__books-cap label">{`Published with ${site.name}`}</p>
              </div>
              <ul className="sv-receive__list" role="list">
                <li>
                  <span className="cat__n">i.</span>
                  <h3>Personalized feedback</h3>
                  <p>Notes that explain the main editorial decisions and give you useful direction for revisions.</p>
                </li>
                <li>
                  <span className="cat__n">ii.</span>
                  <h3>Consistency checks</h3>
                  <p>A review of recurring details, language choices and formatting conventions.</p>
                </li>
                <li>
                  <span className="cat__n">iii.</span>
                  <h3>Clarity enhancement</h3>
                  <p>Clearer sentences and smoother transitions between ideas and scenes.</p>
                </li>
                <li>
                  <span className="cat__n">iv.</span>
                  <h3>Final polishing</h3>
                  <p>A final pass for the small mistakes that can distract a reader.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section section--ivory faq" id="faq" aria-labelledby="faq-title">
          <div className="ed-bg ed-bg--faq" aria-hidden="true">
            <div className="ed-bg__img" data-parallax="0.04" />
          </div>
          <div className="container faq__grid">
            <div className="faq__head">
              <span className="ghost-num" aria-hidden="true">
                07
              </span>
              <p className="eyebrow" data-reveal="">
                FAQ
              </p>
              <h2 className="h2" id="faq-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Questions about '}
                <em>editing your book.</em>
              </h2>
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
        <section className="cta on-dark" id="contact" aria-labelledby="cta-title">
          <div className="cta__media" aria-hidden="true">
            <img
              src="/assets/images/photos/1580127645995-d43fe9598711-1600.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.12"
            />
          </div>
          <div className="container cta__grid">
            <div className="cta__copy">
              <p className="eyebrow" data-reveal="">
                Have a draft ready?
              </p>
              <h2 className="display cta__title" id="cta-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Let’s see what '}
                <em>your manuscript needs.</em>
              </h2>
              <p className="lead" data-reveal="" style={{ '--d': '.16s' }}>
                Tell us the genre, approximate word count and where you feel stuck. We will help you choose an
                appropriate editorial starting point.
              </p>
              <div className="sv-cta__btns" data-reveal="" style={{ '--d': '.2s' }}>
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Start Your Editing Project '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>{' '}
                <a className="btn btn--glass" href="#editing-form">{`Contact ${site.name}`}</a>
              </div>
            </div>
            <LeadForm id="editing-form" title="Start your editing project" />
          </div>
        </section>
      </main>
      <PageScripts scripts={scripts} />
    </>
  );
}
