import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Browse the Books and Author Projects',
  description:
    'Browse selected books and author profiles from our catalogue. See the subjects, stories and finished editions that make up our work.',
  path: '/our-work',
});

const styles = [
  '/assets/css/site2f72.css?v=20261109-eagle-logo',
  '/assets/css/work2f72.css?v=20261003',
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
    href: '#selected',
    section: 'selected',
    label: 'Selected work',
    icon: '#i-book',
    text: 'Work',
  },
  {
    href: '#authors',
    section: 'authors',
    label: 'Featured authors',
    icon: '#i-pen',
    text: 'Authors',
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

export default function OurWorkPage() {
  return (
    <>
      <PageStyles styles={styles} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="ow-mast" id="top" aria-labelledby="ow-title">
          <div className="container">
            <nav className="ow-crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li aria-current="page">Our Work</li>
              </ol>
            </nav>
            <div className="ow-rule rw-rv" aria-hidden="true">
              <span>
                {'American Authors '}
                <i>/</i>
                {' Our work'}
              </span>
              <span>Books in print</span>
              <span>Featured authors</span>
            </div>
            <div className="ow-mast__grid">
              <div>
                <p className="rw-eyebrow rw-rv">
                  <span />
                  Our work
                </p>
                <h1 className="ow-title rw-rv" id="ow-title">
                  {'Different voices. '}
                  <em>Finished books.</em>
                </h1>
              </div>
              <div className="ow-mast__side rw-rv">
                <p className="rw-lead">{`Explore books published with ${site.name} and meet some of the authors behind them.`}</p>
                <dl className="ow-facts">
                  <div>
                    <dt>29</dt>
                    <dd>titles in this selection</dd>
                  </div>
                  <div>
                    <dt>10</dt>
                    <dd>featured authors</dd>
                  </div>
                </dl>
                <nav className="ow-jump" aria-label="On this page">
                  <a href="#selected">Selected work</a>
                  <a href="#authors">Featured authors</a>
                  <a href="#catalogue">The catalogue</a>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="rw-sel rw-dark" id="selected" aria-labelledby="sel-title">
          <div className="container">
            <div className="rw-sel__rule rw-rv" aria-hidden="true">
              <span>Selected work</span>
              <span>07 titles</span>
              <span>In print</span>
            </div>
            <div className="rw-sel__head">
              <div>
                <p className="rw-eyebrow rw-rv">
                  <span />
                  Selected work
                </p>
                <h2 className="rw-h2 rw-rv" id="sel-title">
                  {'A few titles '}
                  <em>to explore.</em>
                </h2>
              </div>
              <div className="rw-sel__side rw-rv">
                <p className="rw-lead">Seven authors and seven different approaches to the written page.</p>
              </div>
            </div>
            <div className="rw-table" data-rw-table="">
              <div className="rw-table__row">
                <a
                  className="rw-book rw-table__book"
                  href="#lee-roy-jefferson"
                  aria-label="The Goodness of God by Dr. Lee Roy Jefferson, view in Our Work"
                  data-rw-book="06"
                  style={{ '--s': '0.52', '--z': '7' }}
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-06-s.webp"
                      width="360"
                      height="614"
                      alt="The Goodness of God: Reflection at 80 by Dr. Lee Roy Jefferson, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">The Goodness of God</span>
                    <span className="rw-cap__s">Reflection at 80</span>
                    <span className="rw-cap__a">Dr. Lee Roy Jefferson</span>
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
                  href="#virginia-perez-perez"
                  aria-label="Bajo la Influencia del Kremlin by Virginia Perez Perez, view in Our Work"
                  data-rw-book="25"
                  style={{ '--s': '0.62', '--z': '8' }}
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-25-s.webp"
                      width="360"
                      height="614"
                      alt="Bajo la Influencia del Kremlin: La Penetración Rusa en Venezuela by Virginia Perez Perez, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">Bajo la Influencia del Kremlin</span>
                    <span className="rw-cap__s">La Penetración Rusa en Venezuela</span>
                    <span className="rw-cap__a">Virginia Perez Perez</span>
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
                  href="#emilio-degher"
                  aria-label="The Path of Truth by Emilio Degher, view in Our Work"
                  data-rw-book="12"
                  style={{ '--s': '0.74', '--z': '9' }}
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-12.webp"
                      width="600"
                      height="1024"
                      alt="The Path of Truth: Beyond Belief, Beyond Illusion by Emilio Degher, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">The Path of Truth</span>
                    <span className="rw-cap__s">Beyond Belief, Beyond Illusion</span>
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
                  className="rw-book rw-table__book is-lead"
                  href="#douglas-hawes"
                  aria-label="The Naked Truth of AI 2.0 by Douglas Hawes, view in Our Work"
                  data-rw-book="05"
                  style={{ '--s': '1', '--z': '20' }}
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-05.webp"
                      width="600"
                      height="1024"
                      alt="The Naked Truth of AI 2.0: Divine Intervention by Douglas Hawes, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">The Naked Truth of AI 2.0</span>
                    <span className="rw-cap__s">Divine Intervention</span>
                    <span className="rw-cap__a">Douglas Hawes</span>
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
                  href="#kadeisha-corbin"
                  aria-label="Bloom Through the Pain by Kadeisha Corbin, view in Our Work"
                  data-rw-book="20"
                  style={{ '--s': '0.74', '--z': '11' }}
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-20.webp"
                      width="600"
                      height="1024"
                      alt="Bloom Through the Pain: A 90 Day Affirmation and Reflection Journal by Kadeisha Corbin, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">Bloom Through the Pain</span>
                    <span className="rw-cap__s">A 90 Day Affirmation and Reflection Journal</span>
                    <span className="rw-cap__a">Kadeisha Corbin</span>
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
                  href="#corey-t-alston-sr"
                  aria-label="The Story Book Chronicles: A Dreamy Adventure of Isla and Ava by Corey T. Alston Sr., view in Our Work"
                  data-rw-book="03"
                  style={{ '--s': '0.62', '--z': '12' }}
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-03-s.webp"
                      width="360"
                      height="614"
                      alt="The Story Book Chronicles: A Dreamy Adventure of Isla and Ava by Corey T. Alston Sr., shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">The Story Book Chronicles: A Dreamy Adventure of Isla and Ava</span>
                    <span className="rw-cap__a">Corey T. Alston Sr.</span>
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
                  href="#book-23"
                  aria-label="Poems of Life by O’Dell James Ford Sr., view in Our Work"
                  data-rw-book="23"
                  style={{ '--s': '0.52', '--z': '13' }}
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-23-s.webp"
                      width="360"
                      height="614"
                      alt="Poems of Life: Reflections on Life, Love, and the Human Journey by O’Dell James Ford Sr., shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">Poems of Life</span>
                    <span className="rw-cap__s">Reflections on Life, Love, and the Human Journey</span>
                    <span className="rw-cap__a">O’Dell James Ford Sr.</span>
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
              <span className="rw-now__n">In focus</span>
              <span className="rw-now__main">
                <span className="rw-cap__t">The Naked Truth of AI 2.0</span>
                <span className="rw-cap__s">Divine Intervention</span>
                <span className="rw-cap__a">Douglas Hawes</span>
              </span>
              <span className="rw-now__hint">Explore a cover for book details</span>
            </p>
          </div>
        </section>
        <section className="ow-authors" id="authors" aria-labelledby="authors-title">
          <div className="container">
            <div className="rw-authors__head">
              <div>
                <p className="rw-eyebrow rw-rv">
                  <span />
                  Featured authors
                </p>
                <h2 className="rw-h2 rw-rv" id="authors-title">
                  {'The writers '}
                  <em>behind the collection.</em>
                </h2>
              </div>
              <div className="rw-authors__side rw-rv">
                <p className="rw-lead">
                  Read about the authors, their interests and the books they have brought to readers.
                </p>
              </div>
            </div>
            <article className="rw-spread rw-rv" id="emilio-degher" aria-labelledby="au-emilio-degher">
              <div className="rw-spread__num" aria-hidden="true">
                <span>01</span>
                Featured author
              </div>
              <figure className="rw-spread__photo">
                <img
                  src="/assets/images/authors/author-emilio-degher.webp"
                  width="480"
                  height="600"
                  alt="Portrait of Emilio Degher"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="rw-spread__head">
                <p className="rw-label">Author spotlight</p>
                <h3 className="rw-spread__name" id="au-emilio-degher">
                  Emilio Degher
                </h3>
                <p className="rw-spread__genre">Philosophy · Spirituality · Personal Growth</p>
              </div>
              <div className="rw-spread__body">
                <div className="rw-spread__of">
                  <p className="rw-label">Author of</p>
                  <ul role="list">
                    <li>Eternal Coherence</li>
                    <li>The Awakening of Thought</li>
                    <li>A Life Led from the Heart</li>
                    <li>The Path of Truth</li>
                    <li>The Exodus Code</li>
                    <li>The Awakening of Memory</li>
                    <li>The Sole</li>
                    <li>Atoms of Fate</li>
                  </ul>
                </div>
                <p className="rw-spread__bio">
                  Emilio Degher writes about philosophy, psychology and spiritual awareness. His books ask readers to
                  examine familiar beliefs and consider how purpose, understanding and personal strength shape their
                  lives.
                </p>
                <div className="rw-spread__about">
                  <p className="rw-label">Thought provoking works by Emilio Degher</p>
                  <p>
                    Emilio Degher explores faith, awareness and the search for meaning, inviting readers to consider the
                    beliefs that shape everyday life.
                  </p>
                </div>
                <p className="rw-spread__avail">Available on Amazon</p>
              </div>
              <div className="rw-spread__books">
                <a
                  className="rw-book rw-spread__lead"
                  href="#emilio-degher"
                  aria-label="The Path of Truth by Emilio Degher, view in Our Work"
                  data-rw-book="12"
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-12.webp"
                      width="600"
                      height="1024"
                      alt="The Path of Truth: Beyond Belief, Beyond Illusion by Emilio Degher, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">The Path of Truth</span>
                    <span className="rw-cap__s">Beyond Belief, Beyond Illusion</span>
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
                  className="rw-book rw-spread__minor"
                  href="#emilio-degher"
                  aria-label="Eternal Coherence by Emilio Degher, view in Our Work"
                  data-rw-book="09"
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
                  className="rw-book rw-spread__minor"
                  href="#emilio-degher"
                  aria-label="The Awakening of Memory by Emilio Degher, view in Our Work"
                  data-rw-book="14"
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-14-s.webp"
                      width="360"
                      height="614"
                      alt="The Awakening of Memory by Emilio Degher, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">The Awakening of Memory</span>
                    <span className="rw-cap__a">Emilio Degher</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </article>
            <article className="rw-spread is-rev rw-rv" id="kadeisha-corbin" aria-labelledby="au-kadeisha-corbin">
              <div className="rw-spread__num" aria-hidden="true">
                <span>02</span>
                Featured author
              </div>
              <figure className="rw-spread__photo">
                <img
                  src="/assets/images/authors/author-kadeisha-corbin.webp"
                  width="480"
                  height="600"
                  alt="Portrait of Kadeisha Corbin"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="rw-spread__head">
                <p className="rw-label">Author spotlight</p>
                <h3 className="rw-spread__name" id="au-kadeisha-corbin">
                  Kadeisha Corbin
                </h3>
                <p className="rw-spread__genre">Self Help · Inspirational · Guided Journal</p>
              </div>
              <div className="rw-spread__body">
                <div className="rw-spread__of">
                  <p className="rw-label">Author of</p>
                  <ul role="list">
                    <li>Bloom Through the Pain</li>
                  </ul>
                </div>
                <p className="rw-spread__bio">
                  Kadeisha Corbin brings faith and reflection into her writing through Scripture, affirmations and
                  journal prompts. Her work offers readers space to pause and consider their own healing and growth.
                </p>
                <div className="rw-spread__about">
                  <p className="rw-label">A healing journal by Kadeisha Corbin</p>
                  <p>
                    Bloom Through the Pain offers ninety days of affirmations, Scripture and space for reflection, with
                    an emphasis on healing and personal growth.
                  </p>
                </div>
                <p className="rw-spread__avail">Available on Amazon</p>
              </div>
              <div className="rw-spread__books">
                <a
                  className="rw-book rw-spread__lead"
                  href="#kadeisha-corbin"
                  aria-label="Bloom Through the Pain by Kadeisha Corbin, view in Our Work"
                  data-rw-book="20"
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-20.webp"
                      width="600"
                      height="1024"
                      alt="Bloom Through the Pain: A 90 Day Affirmation and Reflection Journal by Kadeisha Corbin, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">Bloom Through the Pain</span>
                    <span className="rw-cap__s">A 90 Day Affirmation and Reflection Journal</span>
                    <span className="rw-cap__a">Kadeisha Corbin</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </article>
            <article className="rw-spread rw-rv" id="douglas-hawes" aria-labelledby="au-douglas-hawes">
              <div className="rw-spread__num" aria-hidden="true">
                <span>03</span>
                Featured author
              </div>
              <figure className="rw-spread__photo">
                <img
                  src="/assets/images/authors/author-douglas-hawes.webp"
                  width="480"
                  height="600"
                  alt="Portrait of Douglas Hawes"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="rw-spread__head">
                <p className="rw-label">Author spotlight</p>
                <h3 className="rw-spread__name" id="au-douglas-hawes">
                  Douglas Hawes
                </h3>
                <p className="rw-spread__genre">
                  {'Faith & Technology · Christian Apologetics · Science & Spirituality'}
                </p>
              </div>
              <div className="rw-spread__body">
                <div className="rw-spread__of">
                  <p className="rw-label">Author of</p>
                  <ul role="list">
                    <li>The Naked Truth of AI 2.0: Divine Intervention</li>
                  </ul>
                </div>
                <p className="rw-spread__bio">
                  Douglas Hawes writes about artificial intelligence, science and Christian faith. He considers how
                  technology affects human thought and choice while exploring creation, free will and humanity’s
                  relationship with God.
                </p>
                <div className="rw-spread__about">
                  <p className="rw-label">Divine intervention by Douglas Hawes</p>
                  <p>
                    The Naked Truth of AI 2.0: Divine Intervention considers artificial intelligence alongside questions
                    of creation, faith and human purpose.
                  </p>
                </div>
                <p className="rw-spread__avail">Available on Amazon</p>
              </div>
              <div className="rw-spread__books">
                <a
                  className="rw-book rw-spread__lead"
                  href="#douglas-hawes"
                  aria-label="The Naked Truth of AI 2.0 by Douglas Hawes, view in Our Work"
                  data-rw-book="05"
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-05.webp"
                      width="600"
                      height="1024"
                      alt="The Naked Truth of AI 2.0: Divine Intervention by Douglas Hawes, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">The Naked Truth of AI 2.0</span>
                    <span className="rw-cap__s">Divine Intervention</span>
                    <span className="rw-cap__a">Douglas Hawes</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </article>
            <article className="rw-spread is-rev rw-rv" id="lee-roy-jefferson" aria-labelledby="au-lee-roy-jefferson">
              <div className="rw-spread__num" aria-hidden="true">
                <span>04</span>
                Featured author
              </div>
              <figure className="rw-spread__photo">
                <img
                  src="/assets/images/authors/author-lee-roy-jefferson.webp"
                  width="480"
                  height="600"
                  alt="Portrait of Dr. Lee Roy Jefferson"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="rw-spread__head">
                <p className="rw-label">Author spotlight</p>
                <h3 className="rw-spread__name" id="au-lee-roy-jefferson">
                  Dr. Lee Roy Jefferson
                </h3>
                <p className="rw-spread__genre">{'Christian Memoir · Faith & Inspiration · Ministry'}</p>
              </div>
              <div className="rw-spread__body">
                <div className="rw-spread__of">
                  <p className="rw-label">Author of</p>
                  <ul role="list">
                    <li>The Goodness of God</li>
                  </ul>
                </div>
                <p className="rw-spread__bio">
                  Dr. Lee Roy Jefferson is a pastor, educator and community advocate with more than sixty years in
                  ministry. His work has included church service, mentoring and leadership in religious education and
                  community organisations.
                </p>
                <div className="rw-spread__about">
                  <p className="rw-label">Reflection at 80 by Dr. Lee Roy Jefferson</p>
                  <p>
                    In The Goodness of God, Dr. Lee Roy Jefferson looks back on faith, family, ministry and perseverance
                    across his life.
                  </p>
                </div>
                <p className="rw-spread__avail">Available on Amazon</p>
              </div>
              <div className="rw-spread__books">
                <a
                  className="rw-book rw-spread__lead"
                  href="#lee-roy-jefferson"
                  aria-label="The Goodness of God by Dr. Lee Roy Jefferson, view in Our Work"
                  data-rw-book="06"
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-06.webp"
                      width="600"
                      height="1024"
                      alt="The Goodness of God: Reflection at 80 by Dr. Lee Roy Jefferson, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">The Goodness of God</span>
                    <span className="rw-cap__s">Reflection at 80</span>
                    <span className="rw-cap__a">Dr. Lee Roy Jefferson</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </article>
            <article className="rw-spread rw-rv" id="corey-t-alston-sr" aria-labelledby="au-corey-t-alston-sr">
              <div className="rw-spread__num" aria-hidden="true">
                <span>05</span>
                Featured author
              </div>
              <figure className="rw-spread__photo">
                <img
                  src="/assets/images/authors/author-corey-t-alston-sr.webp"
                  width="480"
                  height="600"
                  alt="Portrait of Corey T. Alston Sr."
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="rw-spread__head">
                <p className="rw-label">Author spotlight</p>
                <h3 className="rw-spread__name" id="au-corey-t-alston-sr">
                  Corey T. Alston Sr.
                </h3>
                <p className="rw-spread__genre">{'Children’s Fiction · Adventure · Friendship & Imagination'}</p>
              </div>
              <div className="rw-spread__body">
                <div className="rw-spread__of">
                  <p className="rw-label">Author of</p>
                  <ul role="list">
                    <li>The Story Book Chronicles: A Dreamy Adventure of Isla and Ava</li>
                  </ul>
                </div>
                <p className="rw-spread__bio">
                  Corey T. Alston Sr. writes children’s adventures inspired by Ava and Isla. Friendship, bravery and a
                  playful imagination run through his stories for young readers.
                </p>
                <div className="rw-spread__about">
                  <p className="rw-label">A dreamy adventure by Corey T. Alston Sr.</p>
                  <p>
                    Isla and Ava set off on a dream adventure, following a fire truck, crossing a river and discovering
                    what friendship and courage can help them face.
                  </p>
                </div>
                <p className="rw-spread__avail">Available on Amazon</p>
              </div>
              <div className="rw-spread__books">
                <a
                  className="rw-book rw-spread__lead"
                  href="#corey-t-alston-sr"
                  aria-label="The Story Book Chronicles: A Dreamy Adventure of Isla and Ava by Corey T. Alston Sr., view in Our Work"
                  data-rw-book="03"
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-03.webp"
                      width="600"
                      height="1024"
                      alt="The Story Book Chronicles: A Dreamy Adventure of Isla and Ava by Corey T. Alston Sr., shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">The Story Book Chronicles: A Dreamy Adventure of Isla and Ava</span>
                    <span className="rw-cap__a">Corey T. Alston Sr.</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </article>
            <article
              className="rw-spread is-rev rw-rv"
              id="virginia-perez-perez"
              aria-labelledby="au-virginia-perez-perez"
            >
              <div className="rw-spread__num" aria-hidden="true">
                <span>06</span>
                Featured author
              </div>
              <figure className="rw-spread__photo">
                <img
                  src="/assets/images/authors/author-virginia-perez-perez.webp"
                  width="480"
                  height="600"
                  alt="Portrait of Virginia Perez Perez"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="rw-spread__head">
                <p className="rw-label">Author spotlight</p>
                <h3 className="rw-spread__name" id="au-virginia-perez-perez">
                  Virginia Perez Perez
                </h3>
                <p className="rw-spread__genre">Geopolitics · International Relations · Political Analysis</p>
              </div>
              <div className="rw-spread__body">
                <div className="rw-spread__of">
                  <p className="rw-label">Author of</p>
                  <ul role="list">
                    <li>Bajo la Influencia del Kremlin</li>
                  </ul>
                </div>
                <p className="rw-spread__bio">
                  Virginia Perez Perez draws on experience in Venezuelan public administration and the Ministry of
                  Foreign Affairs. Her writing considers bilateral agreements and international relations in their
                  strategic and historical context.
                </p>
                <div className="rw-spread__about">
                  <p className="rw-label">A geopolitical analysis by Virginia Perez Perez</p>
                  <p>
                    Virginia Perez Perez examines agreements between Venezuela and Russia across energy, finance and
                    defence, considering their implications for sovereignty and international relations.
                  </p>
                </div>
                <p className="rw-spread__avail">Available on Amazon</p>
              </div>
              <div className="rw-spread__books">
                <a
                  className="rw-book rw-spread__lead"
                  href="#virginia-perez-perez"
                  aria-label="Bajo la Influencia del Kremlin by Virginia Perez Perez, view in Our Work"
                  data-rw-book="25"
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-25.webp"
                      width="600"
                      height="1024"
                      alt="Bajo la Influencia del Kremlin: La Penetración Rusa en Venezuela by Virginia Perez Perez, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">Bajo la Influencia del Kremlin</span>
                    <span className="rw-cap__s">La Penetración Rusa en Venezuela</span>
                    <span className="rw-cap__a">Virginia Perez Perez</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </article>
            <article className="rw-spread rw-rv" id="rajinder-singh" aria-labelledby="au-rajinder-singh">
              <div className="rw-spread__num" aria-hidden="true">
                <span>07</span>
                Featured author
              </div>
              <figure className="rw-spread__photo">
                <img
                  src="/assets/images/authors/author-rajinder-singh.webp"
                  width="480"
                  height="600"
                  alt="Portrait of Dr. Rajinder Singh SJD"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="rw-spread__head">
                <p className="rw-label">Author spotlight</p>
                <h3 className="rw-spread__name" id="au-rajinder-singh">
                  Dr. Rajinder Singh SJD
                </h3>
                <p className="rw-spread__genre">Political Biography · Leadership · Global Affairs</p>
              </div>
              <div className="rw-spread__body">
                <div className="rw-spread__of">
                  <p className="rw-label">Author of</p>
                  <ul role="list">
                    <li>Giorgia Meloni</li>
                    <li>Donald J. Trump</li>
                  </ul>
                </div>
                <p className="rw-spread__bio">
                  Dr. Rajinder Singh SJD is a researcher and author whose background spans science, intellectual
                  property law and international legal studies. He writes about public affairs, political figures and
                  social questions.
                </p>
                <div className="rw-spread__about">
                  <p className="rw-label">Political profiles by Dr. Rajinder Singh SJD</p>
                  <p>
                    These political studies consider Giorgia Meloni and Donald J. Trump through biographical context,
                    public careers and commentary on their influence.
                  </p>
                </div>
                <p className="rw-spread__avail">Available on Amazon</p>
              </div>
              <div className="rw-spread__books">
                <a
                  className="rw-book rw-spread__lead"
                  href="#rajinder-singh"
                  aria-label="Giorgia Meloni by Dr. Rajinder Singh SJD, view in Our Work"
                  data-rw-book="07"
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-07.webp"
                      width="600"
                      height="1024"
                      alt="Giorgia Meloni by Dr. Rajinder Singh SJD, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">Giorgia Meloni</span>
                    <span className="rw-cap__a">Dr. Rajinder Singh SJD</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </a>
                <a
                  className="rw-book rw-spread__minor"
                  href="#rajinder-singh"
                  aria-label="Donald J. Trump by Dr. Rajinder Singh SJD, view in Our Work"
                  data-rw-book="08"
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-08-s.webp"
                      width="360"
                      height="614"
                      alt="Donald J. Trump by Dr. Rajinder Singh SJD, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">Donald J. Trump</span>
                    <span className="rw-cap__a">Dr. Rajinder Singh SJD</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </article>
            <article
              className="rw-spread is-rev rw-rv"
              id="charles-c-solomon-jr"
              aria-labelledby="au-charles-c-solomon-jr"
            >
              <div className="rw-spread__num" aria-hidden="true">
                <span>08</span>
                Featured author
              </div>
              <figure className="rw-spread__photo">
                <img
                  src="/assets/images/authors/author-charles-c-solomon-jr.webp"
                  width="480"
                  height="600"
                  alt="Portrait of Elder Charles C. Solomon Jr."
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="rw-spread__head">
                <p className="rw-label">Author spotlight</p>
                <h3 className="rw-spread__name" id="au-charles-c-solomon-jr">
                  Elder Charles C. Solomon Jr.
                </h3>
                <p className="rw-spread__genre">Biblical Studies · Bible Prophecy · Christian Theology</p>
              </div>
              <div className="rw-spread__body">
                <div className="rw-spread__of">
                  <p className="rw-label">Author of</p>
                  <ul role="list">
                    <li>The Two Beasts of Revelation 13</li>
                    <li>The Sabbath, The Law, and The Cross</li>
                    <li>The Three Angels’ Message / Mystery Babylon / And to the End of Revelation</li>
                  </ul>
                </div>
                <p className="rw-spread__bio">
                  Elder Charles C. Solomon Jr. studies and teaches Scripture, with a focus on biblical prophecy and
                  spiritual preparation. His writing draws on the King James Bible to examine Daniel, Revelation,
                  worship and obedience.
                </p>
                <div className="rw-spread__about">
                  <p className="rw-label">Prophetic studies by Elder Charles C. Solomon Jr.</p>
                  <p>
                    These biblical studies explore prophecy, worship, commandments and spiritual preparation through
                    readings of Daniel, Revelation and other Scripture.
                  </p>
                </div>
                <p className="rw-spread__avail">Available on Amazon</p>
              </div>
              <div className="rw-spread__books rw-spread__books--type">
                <p className="rw-label">Titles</p>
                <ol role="list">
                  <li>
                    <span>01</span>
                    The Two Beasts of Revelation 13
                  </li>
                  <li>
                    <span>02</span>
                    The Sabbath, The Law, and The Cross
                  </li>
                  <li>
                    <span>03</span>
                    The Three Angels’ Message / Mystery Babylon / And to the End of Revelation
                  </li>
                </ol>
              </div>
            </article>
            <article className="rw-spread rw-rv" id="linda-mazzia" aria-labelledby="au-linda-mazzia">
              <div className="rw-spread__num" aria-hidden="true">
                <span>09</span>
                Featured author
              </div>
              <figure className="rw-spread__photo">
                <img
                  src="/assets/images/authors/author-linda-mazzia.webp"
                  width="480"
                  height="600"
                  alt="Portrait of Linda Mazzia"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="rw-spread__head">
                <p className="rw-label">Author spotlight</p>
                <h3 className="rw-spread__name" id="au-linda-mazzia">
                  Linda Mazzia
                </h3>
                <p className="rw-spread__genre">{'Children’s Fiction · Fantasy & Adventure'}</p>
              </div>
              <div className="rw-spread__body">
                <div className="rw-spread__of">
                  <p className="rw-label">Author of</p>
                  <ul role="list">
                    <li>The Bunny in the Superhero Cape</li>
                    <li>The Dragon Who Finds His Roar</li>
                  </ul>
                </div>
                <p className="rw-spread__bio">
                  Linda Mazzia turns everyday moments into children’s adventures. Her stories follow curious characters
                  through unexpected encounters, with friendship and imagination at their centre.
                </p>
                <div className="rw-spread__about">
                  <p className="rw-label">Children’s stories by Linda Mazzia</p>
                  <p>
                    Joshua’s adventures begin with an escaped bunny and a seaside discovery, leading to stories of
                    curiosity, friendship and a dragon called Spike.
                  </p>
                </div>
                <p className="rw-spread__avail">Available on Amazon</p>
              </div>
              <div className="rw-spread__books">
                <a
                  className="rw-book rw-spread__lead"
                  href="#linda-mazzia"
                  aria-label="The Dragon Who Finds His Roar by Linda Mazzia, view in Our Work"
                  data-rw-book="28"
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-28.webp"
                      width="600"
                      height="1024"
                      alt="The Dragon Who Finds His Roar by Linda Mazzia, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">The Dragon Who Finds His Roar</span>
                    <span className="rw-cap__a">Linda Mazzia</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </a>
                <a
                  className="rw-book rw-spread__minor"
                  href="#linda-mazzia"
                  aria-label="The Bunny in the Superhero Cape by Linda Mazzia, view in Our Work"
                  data-rw-book="29"
                >
                  <span className="rw-book__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-29-s.webp"
                      width="360"
                      height="614"
                      alt="The Bunny in the Superhero Cape by Linda Mazzia, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <span className="rw-cap" aria-hidden="true">
                    <span className="rw-cap__t">The Bunny in the Superhero Cape</span>
                    <span className="rw-cap__a">Linda Mazzia</span>
                    <span className="rw-cap__go">
                      {'View book '}
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </article>
            <aside className="ow-also rw-rv" aria-labelledby="also-title">
              <p className="rw-label">Also in the spotlight</p>
              <h3 className="ow-also__t" id="also-title">
                The Quiet Between Stars
              </h3>
              <p className="ow-also__by">
                {'A novel by Evelyn Hart '}
                <i>·</i>
                {' Inspirational Fiction'}
              </p>
              <p className="ow-also__txt">
                Following a painful loss, a woman returns home and works through memories that may help her begin again.
              </p>
            </aside>
          </div>
        </section>
        <section className="ow-cat" id="catalogue" aria-labelledby="cat-title">
          <div className="container">
            <div className="rw-cat__head">
              <div>
                <p className="rw-eyebrow rw-rv">
                  <span />
                  The catalogue
                </p>
                <h2 className="rw-h2 rw-rv" id="cat-title">
                  {'Browse the '}
                  <em>complete selection.</em>
                </h2>
              </div>
              <p className="rw-lead rw-rv">
                All 29 titles appear below. Featured author names link to their profiles above.
              </p>
            </div>
            <ol className="ow-shelf" role="list">
              <li className="ow-shelf__item rw-rv" id="book-01">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-01-s.webp"
                      width="360"
                      height="614"
                      alt="It Hurts Worse When It Is Family, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 01</span>
                    <span className="rw-cap__t">It Hurts Worse When It Is Family</span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-02">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-02-s.webp"
                      width="360"
                      height="614"
                      alt="The Adventures of Bryson: Bryson the Alien, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 02</span>
                    <span className="rw-cap__t">The Adventures of Bryson</span>
                    <span className="rw-cap__s">Bryson the Alien</span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-03">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-03-s.webp"
                      width="360"
                      height="614"
                      alt="The Story Book Chronicles: A Dreamy Adventure of Isla and Ava by Corey T. Alston Sr., shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 03</span>
                    <span className="rw-cap__t">The Story Book Chronicles: A Dreamy Adventure of Isla and Ava</span>
                    <span className="rw-cap__a">
                      <a href="#corey-t-alston-sr">Corey T. Alston Sr.</a>
                    </span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-04">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-04-s.webp"
                      width="360"
                      height="614"
                      alt="The Cosmic Mind: Consciousness, Creation and the Search for Meaning by Maneseh, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 04</span>
                    <span className="rw-cap__t">The Cosmic Mind</span>
                    <span className="rw-cap__s">Consciousness, Creation and the Search for Meaning</span>
                    <span className="rw-cap__a">Maneseh</span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-05">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-05-s.webp"
                      width="360"
                      height="614"
                      alt="The Naked Truth of AI 2.0: Divine Intervention by Douglas Hawes, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 05</span>
                    <span className="rw-cap__t">The Naked Truth of AI 2.0</span>
                    <span className="rw-cap__s">Divine Intervention</span>
                    <span className="rw-cap__a">
                      <a href="#douglas-hawes">Douglas Hawes</a>
                    </span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-06">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-06-s.webp"
                      width="360"
                      height="614"
                      alt="The Goodness of God: Reflection at 80 by Dr. Lee Roy Jefferson, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 06</span>
                    <span className="rw-cap__t">The Goodness of God</span>
                    <span className="rw-cap__s">Reflection at 80</span>
                    <span className="rw-cap__a">
                      <a href="#lee-roy-jefferson">Dr. Lee Roy Jefferson</a>
                    </span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-07">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-07-s.webp"
                      width="360"
                      height="614"
                      alt="Giorgia Meloni by Dr. Rajinder Singh SJD, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 07</span>
                    <span className="rw-cap__t">Giorgia Meloni</span>
                    <span className="rw-cap__a">
                      <a href="#rajinder-singh">Dr. Rajinder Singh SJD</a>
                    </span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-08">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-08-s.webp"
                      width="360"
                      height="614"
                      alt="Donald J. Trump by Dr. Rajinder Singh SJD, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 08</span>
                    <span className="rw-cap__t">Donald J. Trump</span>
                    <span className="rw-cap__a">
                      <a href="#rajinder-singh">Dr. Rajinder Singh SJD</a>
                    </span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-09">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
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
                  <figcaption>
                    <span className="ow-shelf__n">No. 09</span>
                    <span className="rw-cap__t">Eternal Coherence</span>
                    <span className="rw-cap__s">Jesus Christ and the Architecture of Reality</span>
                    <span className="rw-cap__a">
                      <a href="#emilio-degher">Emilio Degher</a>
                    </span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-10">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-10-s.webp"
                      width="360"
                      height="614"
                      alt="The Awakening of Thought by Emilio Degher, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 10</span>
                    <span className="rw-cap__t">The Awakening of Thought</span>
                    <span className="rw-cap__a">
                      <a href="#emilio-degher">Emilio Degher</a>
                    </span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-11">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-11-s.webp"
                      width="360"
                      height="614"
                      alt="A Life Led from the Heart by Emilio Degher, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 11</span>
                    <span className="rw-cap__t">A Life Led from the Heart</span>
                    <span className="rw-cap__a">
                      <a href="#emilio-degher">Emilio Degher</a>
                    </span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-12">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-12-s.webp"
                      width="360"
                      height="614"
                      alt="The Path of Truth: Beyond Belief, Beyond Illusion by Emilio Degher, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 12</span>
                    <span className="rw-cap__t">The Path of Truth</span>
                    <span className="rw-cap__s">Beyond Belief, Beyond Illusion</span>
                    <span className="rw-cap__a">
                      <a href="#emilio-degher">Emilio Degher</a>
                    </span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-13">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-13-s.webp"
                      width="360"
                      height="614"
                      alt="The Exodus Code: Truth Beyond Time by Emilio Degher, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 13</span>
                    <span className="rw-cap__t">The Exodus Code</span>
                    <span className="rw-cap__s">Truth Beyond Time</span>
                    <span className="rw-cap__a">
                      <a href="#emilio-degher">Emilio Degher</a>
                    </span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-14">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-14-s.webp"
                      width="360"
                      height="614"
                      alt="The Awakening of Memory by Emilio Degher, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 14</span>
                    <span className="rw-cap__t">The Awakening of Memory</span>
                    <span className="rw-cap__a">
                      <a href="#emilio-degher">Emilio Degher</a>
                    </span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-15">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
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
                  <figcaption>
                    <span className="ow-shelf__n">No. 15</span>
                    <span className="rw-cap__t">The Sole</span>
                    <span className="rw-cap__s">
                      On the Soul, the Heavens, and the Silence Between the Creator and the Listener
                    </span>
                    <span className="rw-cap__a">
                      <a href="#emilio-degher">Emilio Degher</a>
                    </span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-16">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-16-s.webp"
                      width="360"
                      height="614"
                      alt="I Am Good in the Bad by Emilio Dagher, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 16</span>
                    <span className="rw-cap__t">I Am Good in the Bad</span>
                    <span className="rw-cap__a">Emilio Dagher</span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-17">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
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
                  <figcaption>
                    <span className="ow-shelf__n">No. 17</span>
                    <span className="rw-cap__t">Business Administration Mastery</span>
                    <span className="rw-cap__s">The Complete Guide for Aspiring Leaders</span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-18">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-18-s.webp"
                      width="360"
                      height="614"
                      alt="The Legal Tender Question: Volume One by Joseph R. K. Eshun, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 18</span>
                    <span className="rw-cap__t">The Legal Tender Question</span>
                    <span className="rw-cap__s">Volume One</span>
                    <span className="rw-cap__a">Joseph R. K. Eshun</span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-19">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
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
                  <figcaption>
                    <span className="ow-shelf__n">No. 19</span>
                    <span className="rw-cap__t">The Legal Tender Question</span>
                    <span className="rw-cap__s">Volume Two</span>
                    <span className="rw-cap__a">Joseph R. K. Eshun</span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-20">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-20-s.webp"
                      width="360"
                      height="614"
                      alt="Bloom Through the Pain: A 90 Day Affirmation and Reflection Journal by Kadeisha Corbin, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 20</span>
                    <span className="rw-cap__t">Bloom Through the Pain</span>
                    <span className="rw-cap__s">A 90 Day Affirmation and Reflection Journal</span>
                    <span className="rw-cap__a">
                      <a href="#kadeisha-corbin">Kadeisha Corbin</a>
                    </span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-21">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-21-s.webp"
                      width="360"
                      height="614"
                      alt="Thank You Trump: The 51st State by Khalid Rauf Qureshi, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 21</span>
                    <span className="rw-cap__t">Thank You Trump</span>
                    <span className="rw-cap__s">The 51st State</span>
                    <span className="rw-cap__a">Khalid Rauf Qureshi</span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-22">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-22-s.webp"
                      width="360"
                      height="614"
                      alt="Rise Up Under the Blood, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 22</span>
                    <span className="rw-cap__t">Rise Up Under the Blood</span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-23">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-23-s.webp"
                      width="360"
                      height="614"
                      alt="Poems of Life: Reflections on Life, Love, and the Human Journey by O’Dell James Ford Sr., shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 23</span>
                    <span className="rw-cap__t">Poems of Life</span>
                    <span className="rw-cap__s">Reflections on Life, Love, and the Human Journey</span>
                    <span className="rw-cap__a">O’Dell James Ford Sr.</span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-24">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-24-s.webp"
                      width="360"
                      height="614"
                      alt="Whispers of Time: Poetry · French / Haitian Creole by Aggee Andrew Vetiaque, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 24</span>
                    <span className="rw-cap__t">Whispers of Time</span>
                    <span className="rw-cap__s">Poetry · French / Haitian Creole</span>
                    <span className="rw-cap__a">Aggee Andrew Vetiaque</span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-25">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-25-s.webp"
                      width="360"
                      height="614"
                      alt="Bajo la Influencia del Kremlin: La Penetración Rusa en Venezuela by Virginia Perez Perez, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 25</span>
                    <span className="rw-cap__t">Bajo la Influencia del Kremlin</span>
                    <span className="rw-cap__s">La Penetración Rusa en Venezuela</span>
                    <span className="rw-cap__a">
                      <a href="#virginia-perez-perez">Virginia Perez Perez</a>
                    </span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-26">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-26-s.webp"
                      width="360"
                      height="614"
                      alt="You vs You: How to Overcome Doubt, Build Discipline, and Create a Life with Purpose by Waheed Shaffiek, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 26</span>
                    <span className="rw-cap__t">You vs You</span>
                    <span className="rw-cap__s">
                      How to Overcome Doubt, Build Discipline, and Create a Life with Purpose
                    </span>
                    <span className="rw-cap__a">Waheed Shaffiek</span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-27">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-27-s.webp"
                      width="360"
                      height="614"
                      alt="Change to Stay Unchanged: Authoritarian Reform in Kazakhstan Under the Tokayev Regime by Yerzhan Dosmukhamedov, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 27</span>
                    <span className="rw-cap__t">Change to Stay Unchanged</span>
                    <span className="rw-cap__s">Authoritarian Reform in Kazakhstan Under the Tokayev Regime</span>
                    <span className="rw-cap__a">Yerzhan Dosmukhamedov</span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-28">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-28-s.webp"
                      width="360"
                      height="614"
                      alt="The Dragon Who Finds His Roar by Linda Mazzia, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 28</span>
                    <span className="rw-cap__t">The Dragon Who Finds His Roar</span>
                    <span className="rw-cap__a">
                      <a href="#linda-mazzia">Linda Mazzia</a>
                    </span>
                  </figcaption>
                </figure>
              </li>
              <li className="ow-shelf__item rw-rv" id="book-29">
                <figure>
                  <span className="rw-book__obj ow-shelf__obj">
                    <img
                      className="rw-book__img"
                      src="/assets/images/books/book-29-s.webp"
                      width="360"
                      height="614"
                      alt="The Bunny in the Superhero Cape by Linda Mazzia, shown as a hardcover book"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="rw-book__floor" aria-hidden="true" />
                  </span>
                  <figcaption>
                    <span className="ow-shelf__n">No. 29</span>
                    <span className="rw-cap__t">The Bunny in the Superhero Cape</span>
                    <span className="rw-cap__a">
                      <a href="#linda-mazzia">Linda Mazzia</a>
                    </span>
                  </figcaption>
                </figure>
              </li>
            </ol>
          </div>
        </section>
        <section className="cta on-dark ow-cta" id="contact" aria-labelledby="cta-title">
          <div className="cta__media" aria-hidden="true">
            <img
              src="/assets/images/photos/1663735498345-39c452a6d5d8-1600.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.08"
            />
          </div>
          <div className="container cta__grid">
            <div className="cta__copy">
              <p className="eyebrow" data-reveal="">
                Your book, next
              </p>
              <h2 className="display cta__title" id="cta-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Let’s make room '}
                <em>for your book.</em>
              </h2>
              <p className="lead" data-reveal="" style={{ '--d': '.16s' }}>
                Tell us what you want to write and where you would like help getting started.
              </p>
              <div className="ow-cta__btns" data-reveal="" style={{ '--d': '.2s' }}>
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Start Your Book '}
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
