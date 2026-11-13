import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Meet Our Featured Authors',
  description:
    'Explore the writers behind books in our catalogue, read about their subjects and discover the work they have shared with readers.',
  path: '/featured-authors',
});

const styles = [
  '/assets/css/site2f72.css?v=20261109-eagle-logo',
  '/assets/css/featured-authors2f72.css?v=20261003',
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
    href: '#authors',
    section: 'authors',
    label: 'The authors',
    icon: '#i-pen',
    text: 'Authors',
  },
  {
    href: '#author-index',
    section: 'author-index',
    label: 'Author index',
    icon: '#i-book',
    text: 'Index',
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

export default function FeaturedAuthorsPage() {
  return (
    <>
      <PageStyles styles={styles} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="fa-mast" id="top" aria-labelledby="fa-page-title">
          <div className="container">
            <nav className="fa-crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li aria-current="page">Featured Authors</li>
              </ol>
            </nav>
            <div className="fa-rule rw-rv" aria-hidden="true">
              <span>
                {'American Authors '}
                <i>/</i>
                {' Authors'}
              </span>
              <span>{site.name}</span>
              <span>Selected authors</span>
            </div>
            <div className="fa-mast__grid">
              <div className="fa-mast__copy">
                <p className="rw-eyebrow rw-rv">
                  <span />
                  Featured authors
                </p>
                <h1 className="fa-title rw-rv" id="fa-page-title">
                  {'Meet the people '}
                  <em>behind the books.</em>
                </h1>
                <p className="rw-lead rw-rv">
                  Get to know authors from our catalogue, the subjects they explore and the stories they have chosen to
                  share.
                </p>
                <nav className="fa-jump rw-rv" aria-label="On this page">
                  <a href="#authors">The authors</a>
                  <a href="#author-index">Author index</a>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="rw-authors fa-authors" id="authors" aria-label="Featured authors">
          <div className="container">
            <article className="rw-spread is-compact rw-rv" id="emilio-degher" aria-labelledby="au-emilio-degher-c">
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
                <h3 className="rw-spread__name" id="au-emilio-degher-c">
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
                </p>{' '}
                <a className="rw-link" href="/our-work#emilio-degher">
                  {'Read the author’s story '}
                  <svg aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </a>
              </div>
              <div className="rw-spread__books">
                <a
                  className="rw-book rw-spread__lead"
                  href="/our-work#emilio-degher"
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
                  href="/our-work#emilio-degher"
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
              </div>
            </article>
            <article
              className="rw-spread is-rev is-compact rw-rv"
              id="kadeisha-corbin"
              aria-labelledby="au-kadeisha-corbin-c"
            >
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
                <h3 className="rw-spread__name" id="au-kadeisha-corbin-c">
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
                </p>{' '}
                <a className="rw-link" href="/our-work#kadeisha-corbin">
                  {'Read the author’s story '}
                  <svg aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </a>
              </div>
              <div className="rw-spread__books">
                <a
                  className="rw-book rw-spread__lead"
                  href="/our-work#kadeisha-corbin"
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
            <article className="rw-spread is-compact rw-rv" id="douglas-hawes" aria-labelledby="au-douglas-hawes-c">
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
                <h3 className="rw-spread__name" id="au-douglas-hawes-c">
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
                </p>{' '}
                <a className="rw-link" href="/our-work#douglas-hawes">
                  {'Read the author’s story '}
                  <svg aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </a>
              </div>
              <div className="rw-spread__books">
                <a
                  className="rw-book rw-spread__lead"
                  href="/our-work#douglas-hawes"
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
            <article
              className="rw-spread is-rev is-compact rw-rv"
              id="lee-roy-jefferson"
              aria-labelledby="au-lee-roy-jefferson-c"
            >
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
                <h3 className="rw-spread__name" id="au-lee-roy-jefferson-c">
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
                </p>{' '}
                <a className="rw-link" href="/our-work#lee-roy-jefferson">
                  {'Read the author’s story '}
                  <svg aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </a>
              </div>
              <div className="rw-spread__books">
                <a
                  className="rw-book rw-spread__lead"
                  href="/our-work#lee-roy-jefferson"
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
            <article
              className="rw-spread is-compact rw-rv"
              id="corey-t-alston-sr"
              aria-labelledby="au-corey-t-alston-sr-c"
            >
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
                <h3 className="rw-spread__name" id="au-corey-t-alston-sr-c">
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
                </p>{' '}
                <a className="rw-link" href="/our-work#corey-t-alston-sr">
                  {'Read the author’s story '}
                  <svg aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </a>
              </div>
              <div className="rw-spread__books">
                <a
                  className="rw-book rw-spread__lead"
                  href="/our-work#corey-t-alston-sr"
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
              className="rw-spread is-rev is-compact rw-rv"
              id="virginia-perez-perez"
              aria-labelledby="au-virginia-perez-perez-c"
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
                <h3 className="rw-spread__name" id="au-virginia-perez-perez-c">
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
                </p>{' '}
                <a className="rw-link" href="/our-work#virginia-perez-perez">
                  {'Read the author’s story '}
                  <svg aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </a>
              </div>
              <div className="rw-spread__books">
                <a
                  className="rw-book rw-spread__lead"
                  href="/our-work#virginia-perez-perez"
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
            <article className="rw-spread is-compact rw-rv" id="rajinder-singh" aria-labelledby="au-rajinder-singh-c">
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
                <h3 className="rw-spread__name" id="au-rajinder-singh-c">
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
                </p>{' '}
                <a className="rw-link" href="/our-work#rajinder-singh">
                  {'Read the author’s story '}
                  <svg aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </a>
              </div>
              <div className="rw-spread__books">
                <a
                  className="rw-book rw-spread__lead"
                  href="/our-work#rajinder-singh"
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
                  href="/our-work#rajinder-singh"
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
              className="rw-spread is-rev is-compact rw-rv"
              id="charles-c-solomon-jr"
              aria-labelledby="au-charles-c-solomon-jr-c"
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
                <h3 className="rw-spread__name" id="au-charles-c-solomon-jr-c">
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
                </p>{' '}
                <a className="rw-link" href="/our-work#charles-c-solomon-jr">
                  {'Read the author’s story '}
                  <svg aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </a>
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
            <article className="rw-spread is-compact rw-rv" id="linda-mazzia" aria-labelledby="au-linda-mazzia-c">
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
                <h3 className="rw-spread__name" id="au-linda-mazzia-c">
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
                </p>{' '}
                <a className="rw-link" href="/our-work#linda-mazzia">
                  {'Read the author’s story '}
                  <svg aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </a>
              </div>
              <div className="rw-spread__books">
                <a
                  className="rw-book rw-spread__lead"
                  href="/our-work#linda-mazzia"
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
                  href="/our-work#linda-mazzia"
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
          </div>
        </section>
        <section className="fa-index" id="author-index" aria-labelledby="index-title">
          <div className="container fa-index__grid">
            <div className="fa-index__head">
              <p className="rw-eyebrow rw-rv">
                <span />
                Author index
              </p>
              <h2 className="rw-h2 rw-rv" id="index-title">
                {'Find an author '}
                <em>in the collection.</em>
              </h2>
            </div>
            <div>
              <ol className="fa-index__list rw-rv" role="list">
                <li>
                  <a className="fa-index__row" href="#emilio-degher">
                    <span className="fa-index__n">01</span>
                    <span className="fa-index__name">Emilio Degher</span>
                    <span className="fa-index__books">
                      Eternal Coherence · The Awakening of Thought · A Life Led from the Heart · The Path of Truth · The
                      Exodus Code · The Awakening of Memory · The Sole · Atoms of Fate
                    </span>
                    <span className="fa-index__go" aria-hidden="true">
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="fa-index__row" href="#kadeisha-corbin">
                    <span className="fa-index__n">02</span>
                    <span className="fa-index__name">Kadeisha Corbin</span>
                    <span className="fa-index__books">Bloom Through the Pain</span>
                    <span className="fa-index__go" aria-hidden="true">
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="fa-index__row" href="#douglas-hawes">
                    <span className="fa-index__n">03</span>
                    <span className="fa-index__name">Douglas Hawes</span>
                    <span className="fa-index__books">The Naked Truth of AI 2.0: Divine Intervention</span>
                    <span className="fa-index__go" aria-hidden="true">
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="fa-index__row" href="#lee-roy-jefferson">
                    <span className="fa-index__n">04</span>
                    <span className="fa-index__name">Dr. Lee Roy Jefferson</span>
                    <span className="fa-index__books">The Goodness of God</span>
                    <span className="fa-index__go" aria-hidden="true">
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="fa-index__row" href="#corey-t-alston-sr">
                    <span className="fa-index__n">05</span>
                    <span className="fa-index__name">Corey T. Alston Sr.</span>
                    <span className="fa-index__books">
                      The Story Book Chronicles: A Dreamy Adventure of Isla and Ava
                    </span>
                    <span className="fa-index__go" aria-hidden="true">
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="fa-index__row" href="#virginia-perez-perez">
                    <span className="fa-index__n">06</span>
                    <span className="fa-index__name">Virginia Perez Perez</span>
                    <span className="fa-index__books">Bajo la Influencia del Kremlin</span>
                    <span className="fa-index__go" aria-hidden="true">
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="fa-index__row" href="#rajinder-singh">
                    <span className="fa-index__n">07</span>
                    <span className="fa-index__name">Dr. Rajinder Singh SJD</span>
                    <span className="fa-index__books">Giorgia Meloni · Donald J. Trump</span>
                    <span className="fa-index__go" aria-hidden="true">
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="fa-index__row" href="#charles-c-solomon-jr">
                    <span className="fa-index__n">08</span>
                    <span className="fa-index__name">Elder Charles C. Solomon Jr.</span>
                    <span className="fa-index__books">
                      The Two Beasts of Revelation 13 · The Sabbath, The Law, and The Cross · The Three Angels’ Message
                      / Mystery Babylon / And to the End of Revelation
                    </span>
                    <span className="fa-index__go" aria-hidden="true">
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a className="fa-index__row" href="#linda-mazzia">
                    <span className="fa-index__n">09</span>
                    <span className="fa-index__name">Linda Mazzia</span>
                    <span className="fa-index__books">
                      The Bunny in the Superhero Cape · The Dragon Who Finds His Roar
                    </span>
                    <span className="fa-index__go" aria-hidden="true">
                      <svg aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                  </a>
                </li>
              </ol>
              <div className="fa-also rw-rv">
                <p className="rw-label">Also in the spotlight</p>
                <p className="fa-also__t">
                  <cite>The Quiet Between Stars</cite>
                  {', a novel by Evelyn Hart '}
                  <i>·</i>
                  {' Inspirational Fiction'}
                </p>
                <p className="fa-also__txt">
                  After a devastating loss, a woman returns home to face her past and find a way to begin again.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="cta on-dark fa-cta" id="contact" aria-labelledby="cta-title">
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
                The next author
              </p>
              <h2 className="display cta__title" id="cta-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'What would you '}
                <em>like to write?</em>
              </h2>
              <p className="lead" data-reveal="" style={{ '--d': '.16s' }}>
                Tell us about the idea you want to develop and the readers you hope it will reach.
              </p>
              <div className="fa-cta__btns" data-reveal="" style={{ '--d': '.2s' }}>
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Discuss Your Book '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>{' '}
                <a className="btn btn--glass" href="/contact">
                  {'Speak With Us '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
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
