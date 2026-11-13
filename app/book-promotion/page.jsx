import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Book Promotion and Author Marketing',
  description:
    'Introduce your book to its likely readers with a practical promotion plan, launch materials, author content and coordinated campaign support.',
  path: '/book-promotion',
});

export const viewport = { themeColor: '#0D0D0F' };

const styles = [
  '/assets/css/site2f72.css?v=20261109-eagle-logo',
  '/assets/css/promotion2f72.css?v=20261003',
  '/assets/css/forms.css?v=20261105-production',
  '/assets/css/widgets.css?v=20261105',
];

const preloads = [
  {
    type: 'image/webp',
    href: '/assets/images/photos/1766145549011-2eccae0bf7ca-2400.webp',
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
    href: '#campaign',
    section: 'campaign',
    label: 'Campaign',
    icon: '#i-steps',
    text: 'Campaign',
  },
  {
    href: '#wall',
    section: 'wall',
    label: 'Creative',
    icon: '#i-brush',
    text: 'Creative',
  },
  {
    href: '#launch',
    section: 'launch',
    label: 'Launch',
    icon: '#i-star',
    text: 'Launch',
  },
  {
    href: '#contact',
    section: 'contact',
    label: 'Contact',
    icon: '#i-chat',
    text: 'Contact',
  },
];

const scripts = [
  '/assets/js/book-promotion2f72.js?v=20261003',
  '/assets/js/real-work2f72.js?v=20261003',
  '/assets/js/main2f72.js?v=20261105-production',
];

export default function BookPromotionPage() {
  return (
    <>
      <PageStyles styles={styles} preloads={preloads} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="pm-hero on-dark" id="top" aria-labelledby="pm-title">
          <div className="pm-hero__media" aria-hidden="true">
            <div className="pm-hero__img" data-parallax="0.05" />
          </div>
          <div className="container pm-hero__inner">
            <nav className="pm-crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/#services">Services</a>
                </li>
                <li aria-current="page">Book Promotion</li>
              </ol>
            </nav>
            <div className="pm-hero__copy">
              <p className="pm-eyebrow">
                <span />
                Book promotion
              </p>
              <h1 className="pm-hero__title" id="pm-title">
                {'Help the right readers '}
                <em>find your book.</em>
              </h1>
              <p className="pm-hero__lead">
                We plan book promotion around your genre, your audience and what you want to achieve, with useful launch
                materials and a consistent author presence.
              </p>
              <div className="pm-hero__ctas">
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Start Your Campaign '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>{' '}
                <a className="btn btn--glass" href="#campaign">
                  Explore Our Approach
                </a>
              </div>
            </div>
            <figure className="pm-stage" aria-label="The Cosmic Mind by Maneseh, presented with its campaign materials">
              <span className="pm-stage__light" aria-hidden="true" />{' '}
              <div className="pm-stage__poster" aria-hidden="true">
                <span className="pm-stage__poster-k">A new title</span>{' '}
                <span className="pm-stage__poster-t">The Cosmic Mind</span>{' '}
                <span className="pm-stage__poster-a">Maneseh</span> <span className="pm-stage__poster-rule" />{' '}
                <span className="pm-stage__poster-o">Out now</span>
              </div>
              <div className="pm-stage__proof" aria-hidden="true">
                <b>Chapter One</b>
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="book3d pm-stage__book">
                <div className="book3d__body">
                  <div className="book3d__back" />
                  <img
                    className="book3d__cover"
                    src="/assets/images/books/cover-04.webp"
                    width="440"
                    height="660"
                    alt={`Cover of The Cosmic Mind by Maneseh, published with ${site.name}`}
                    decoding="async"
                  />
                </div>
                <div className="book3d__shadow" />
              </div>
              <figcaption className="pm-stage__cap">
                <span>Campaign study</span>
                {`The Cosmic Mind, published with ${site.name}`}
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="pm-beyond" id="beyond" aria-labelledby="beyond-title">
          <div className="container pm-beyond__grid">
            <div className="pm-beyond__copy">
              <p className="pm-eb">
                <span>01</span>
                Beyond the book
              </p>
              <h2 className="pm-h2 pm-rv" id="beyond-title">
                {'Published is a start. '}
                <em>Now introduce it.</em>
              </h2>
              <p className="pm-standfirst pm-rv">Readers need a reason to notice a book they have not heard of yet.</p>
              <p className="pm-body pm-rv">
                We help you explain what your book offers and put that message in places its likely readers spend time.
                The plan can begin before publication and continue as you learn what draws interest.
              </p>
            </div>
            <div className="pm-beyond__art">
              <figure className="pm-beyond__main pm-zoom">
                <img
                  className=""
                  src="/assets/images/photos/1781813785076-906e1666f68e-1100x1400.webp"
                  alt="Late sunlight falling across an open book and a standing hardback"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <figure className="pm-beyond__inset pm-zoom">
                <img
                  className=""
                  src="/assets/images/photos/1591951425600-d09958978584-700x560.webp"
                  alt="The pages of a book fanned open against a cream background"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <p className="pm-beyond__note" aria-hidden="true">
                The starting point: a book waiting to meet its readers.
              </p>
            </div>
          </div>
        </section>
        <section className="pm-statement on-dark" aria-label="Publication and promotion">
          <div className="pm-statement__media pm-zoom" aria-hidden="true">
            <img
              className=""
              src="/assets/images/photos/1763824970116-8c57fa391d19-2400x1300.webp"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="container pm-statement__inner">
            <p className="pm-statement__a pm-rv">You have a book to share.</p>
            <p className="pm-statement__b pm-rv">Let’s give readers a way to find it.</p>
          </div>
        </section>
        <section className="pm-arc" id="campaign" aria-labelledby="arc-title">
          <div className="container">
            <div className="pm-arc__head">
              <p className="pm-eb">
                <span>02</span>
                The campaign
              </p>
              <h2 className="pm-h2 pm-arc__title pm-rv" id="arc-title">
                {'A plan built '}
                <em>around your book.</em>
              </h2>
              <p className="pm-body pm-rv">
                We look at the subject, reader and launch plans before choosing the message, materials and channels.
              </p>
            </div>
          </div>
          <div className="pm-arc__track">
            <ol className="pm-arc__list" role="list" data-pm-stages="">
              <li className="pm-arc__stage is-active" data-pm-stage="" tabIndex="0">
                <div className="pm-arc__img" aria-hidden="true">
                  <img
                    className=""
                    src="/assets/images/photos/1744807867611-6e39f5229af6-1000x1200.webp"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>{' '}
                <span className="pm-arc__n">01</span>{' '}
                <div className="pm-arc__body">
                  <h3>Position</h3>
                  <p>Identify who the book is for and what gives those readers a reason to pick it up.</p>
                </div>
              </li>
              <li className="pm-arc__stage" data-pm-stage="" tabIndex="0">
                <div className="pm-arc__img" aria-hidden="true">
                  <img
                    className=""
                    src="/assets/images/photos/1504198322253-cfa87a0ff25f-1000x1200.webp"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>{' '}
                <span className="pm-arc__n">02</span>{' '}
                <div className="pm-arc__body">
                  <h3>Present</h3>
                  <p>Prepare campaign copy and visuals that clearly introduce the book and its author.</p>
                </div>
              </li>
              <li className="pm-arc__stage" data-pm-stage="" tabIndex="0">
                <div className="pm-arc__img" aria-hidden="true">
                  <img
                    className=""
                    src="/assets/images/photos/1772196774962-1db8db77a3b0-1000x1200.webp"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>{' '}
                <span className="pm-arc__n">03</span>{' '}
                <div className="pm-arc__body">
                  <h3>Promote</h3>
                  <p>Share the campaign through channels chosen for your audience and budget.</p>
                </div>
              </li>
              <li className="pm-arc__stage" data-pm-stage="" tabIndex="0">
                <div className="pm-arc__img" aria-hidden="true">
                  <img
                    className=""
                    src="/assets/images/photos/1790431026188-567c8c80b5ee-1000x1200.webp"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>{' '}
                <span className="pm-arc__n">04</span>{' '}
                <div className="pm-arc__body">
                  <h3>Amplify</h3>
                  <p>Review the response and use what we learn to guide the next round of promotion.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section className="pm-wall" id="wall" aria-labelledby="wall-title">
          <div className="container">
            <div className="pm-wall__head">
              <p className="pm-eb">
                <span>03</span>
                The creative
              </p>
              <h2 className="pm-h2 pm-rv" id="wall-title">
                {'Give readers '}
                <em>something to explore.</em>
              </h2>
              <p className="pm-body pm-rv">
                A cover announcement, an excerpt and an author introduction each serve a different purpose. We plan them
                together so the campaign feels connected.
              </p>
            </div>
            <div className="pm-wall__board">
              <figure className="pm-w pm-w--announce">
                <div className="pm-announce">
                  <div className="pm-announce__cover">
                    <img
                      className=""
                      src="/assets/images/books/cover-06.webp"
                      width="440"
                      height="660"
                      alt={`Cover of The Goodness of God by Dr. Lee Roy Jefferson, published with ${site.name}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="pm-announce__copy">
                    <span className="pm-announce__k">Announcing</span>{' '}
                    <span className="pm-announce__t">The Goodness of God</span>{' '}
                    <span className="pm-announce__a">A book by Dr. Lee Roy Jefferson</span>{' '}
                    <span className="pm-announce__o">Available on Amazon</span>
                  </div>
                </div>
                <figcaption>
                  <b>A</b>
                  Book announcement
                </figcaption>
              </figure>
              <figure className="pm-w pm-w--social">
                <div className="pm-phone" aria-hidden="true">
                  <div className="pm-phone__screen">
                    <div className="pm-phone__status">
                      <span>9:41</span>
                      <span className="pm-phone__island" />
                      <span className="pm-phone__sig">
                        <i />
                        <i />
                        <i />
                      </span>
                    </div>
                    <div className="pm-post__top">
                      <span className="pm-post__av">A</span>
                      <span className="pm-post__who">
                        americasbookservice
                        <small>Campaign · Bloom Through the Pain</small>
                      </span>
                      <span className="pm-post__more">···</span>
                    </div>
                    <div className="pm-post__img">
                      <span className="pm-post__k">Out now</span>{' '}
                      <img
                        className="pm-post__cover"
                        src="/assets/images/books/cover-20.webp"
                        width="440"
                        height="660"
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />{' '}
                      <span className="pm-post__t">Bloom Through the Pain</span>
                    </div>
                    <div className="pm-post__acts">
                      <svg viewBox="0 0 24 24">
                        <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
                      </svg>
                      <svg viewBox="0 0 24 24">
                        <path d="M20 12a8 8 0 1 1-3.2-6.4L20 5l-.6 3.4A8 8 0 0 1 20 12z" />
                      </svg>
                      <svg viewBox="0 0 24 24">
                        <path d="M4 12l16-7-6 16-2.5-6.5z" />
                      </svg>
                      <svg className="pm-post__save" viewBox="0 0 24 24">
                        <path d="M6 4h12v16l-6-4-6 4z" />
                      </svg>
                    </div>
                    <p className="pm-post__cap">
                      Bloom Through the Pain by Kadeisha Corbin. Explore the book and its daily reflections on Amazon.
                    </p>
                    <div className="pm-post__next">
                      <div className="pm-post__top">
                        <span className="pm-post__av">A</span>
                        <span className="pm-post__who">
                          americasbookservice
                          <small>Campaign · Bloom Through the Pain</small>
                        </span>
                        <span className="pm-post__more">···</span>
                      </div>
                      <div className="pm-post__peek">
                        <span>“</span>
                        Some stories stay with you.
                      </div>
                    </div>
                  </div>
                </div>
                <figcaption>
                  <b>B</b>
                  Social media content
                </figcaption>
              </figure>
              <figure className="pm-w pm-w--quote">
                <blockquote className="pm-quote">
                  <span className="pm-quote__mark" aria-hidden="true">
                    “
                  </span>
                  {'Some stories stay with you '}
                  <em>long after the last page.</em>
                </blockquote>
                <figcaption>
                  <b>C</b>
                  Quote graphic: campaign line
                </figcaption>
              </figure>
              <figure className="pm-w pm-w--author">
                <article className="pm-mag" aria-label="Example author feature layout">
                  <header className="pm-mag__top">
                    <span>The Author</span>
                    <span>Feature</span>
                  </header>
                  <h3 className="pm-mag__h">
                    {'The story behind '}
                    <em>The Naked Truth of AI 2.0</em>
                  </h3>
                  <p className="pm-mag__dek">
                    An author feature gives readers some background on the book and the person who wrote it.
                  </p>
                  <div className="pm-mag__cols">
                    <p>
                      We make room for the author’s own account of the writing, the subject and the people they hope to
                      reach.
                    </p>
                    <p>The result is a piece you can share across your website, campaign and social profiles.</p>
                  </div>
                  <footer className="pm-mag__by">Featuring Douglas Hawes</footer>
                </article>
                <figcaption>
                  <b>D</b>
                  Author feature
                </figcaption>
              </figure>
              <figure className="pm-w pm-w--excerpt">
                <div className="pm-spread" aria-hidden="true">
                  <div className="pm-spread__page pm-spread__page--l">
                    <span className="pm-spread__run">Poems of Life</span> <span className="pm-spread__ch">Chapter</span>{' '}
                    <span className="pm-spread__num">One</span> <span className="pm-spread__orn">✦</span>
                  </div>
                  <div className="pm-spread__page pm-spread__page--r">
                    <span className="pm-spread__run">O’Dell James Ford Sr.</span>{' '}
                    <div className="pm-spread__text">
                      <span className="pm-spread__drop">T</span>
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>{' '}
                    <span className="pm-spread__folio">1</span>
                  </div>
                </div>
                <figcaption>
                  <b>E</b>
                  Book excerpt: typeset spread
                </figcaption>
              </figure>
              <figure className="pm-w pm-w--launch">
                <div className="pm-lw">
                  <div className="pm-lw__bg" aria-hidden="true">
                    <img
                      className=""
                      src="/assets/images/books/cover-28.webp"
                      width="440"
                      height="660"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="pm-lw__copy">
                    <span className="pm-lw__k">Launch week</span>{' '}
                    <span className="pm-lw__t">
                      {'The countdown '}
                      <em>ends.</em>
                    </span>{' '}
                    <span className="pm-lw__s">The Dragon Who Finds His Roar · Linda Mazzia</span>
                  </div>
                  <div className="pm-lw__book" aria-hidden="true">
                    <img
                      className=""
                      src="/assets/images/books/cover-28.webp"
                      width="440"
                      height="660"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <figcaption>
                  <b>F</b>
                  Launch week
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="pm-launch on-dark" id="launch" aria-labelledby="launch-title">
          <div className="pm-launch__bg" aria-hidden="true">
            <img
              className=""
              src="/assets/images/photos/1663735498345-39c452a6d5d8-2200x1400.webp"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="container pm-launch__grid">
            <div className="pm-launch__head">
              <p className="pm-eb pm-eb--light">
                <span>04</span>
                The launch
              </p>
              <h2 className="pm-launch__title pm-rv" id="launch-title">
                {'Make release day '}
                <em>feel connected.</em>
              </h2>
              <p className="pm-body pm-body--light pm-rv">
                We bring the announcement, book links, artwork and author content together so readers can understand the
                book and know where to find it.
              </p>
            </div>
            <figure
              className="pm-reveal"
              aria-label="Bajo la Influencia del Kremlin presented at launch with its campaign artwork"
            >
              <span className="pm-reveal__beam" aria-hidden="true" />{' '}
              <div className="pm-reveal__art" aria-hidden="true">
                <img
                  className=""
                  src="/assets/images/books/cover-25.webp"
                  width="440"
                  height="660"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="pm-reveal__sheet" aria-hidden="true">
                <span>Bajo la Influencia del Kremlin</span>
                <span>Virginia Perez Perez</span>
                <span>Out now</span>
              </div>
              <div className="book3d pm-reveal__book">
                <div className="book3d__body">
                  <div className="book3d__back" />
                  <img
                    className="book3d__cover"
                    src="/assets/images/books/cover-25.webp"
                    width="440"
                    height="660"
                    alt={`Cover of Bajo la Influencia del Kremlin by Virginia Perez Perez, published with ${site.name}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="book3d__shadow" />
              </div>
              <div className="pm-reveal__card">
                <span className="pm-reveal__k">Launch week</span> <span className="pm-reveal__t">Day one.</span>{' '}
                <span className="pm-reveal__s">The story is out.</span>
              </div>
            </figure>
          </div>
        </section>
        <section className="pm-readers" id="readers" aria-labelledby="readers-title">
          <div className="container pm-readers__grid">
            <div className="pm-readers__art">
              <figure className="pm-readers__a pm-zoom">
                <img
                  className=""
                  src="/assets/images/photos/1671459327299-51baffbc35e6-900x1150.webp"
                  alt="A passer by looking through the window of a bookshop"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <figure className="pm-readers__b pm-zoom">
                <img
                  className=""
                  src="/assets/images/photos/1491309055486-24ae511c15c7-700x560.webp"
                  alt="Hands resting on the pages of an open book"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <figure className="pm-readers__c pm-zoom">
                <img
                  className=""
                  src="/assets/images/photos/1513475382585-d06e58bcb0e0-600x720.webp"
                  alt="A reader taking a book down from a shelf"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <div className="pm-readers__copy">
              <p className="pm-eb">
                <span>05</span>
                The audience
              </p>
              <h2 className="pm-h2 pm-rv" id="readers-title">
                {'Start with '}
                <em>the likely reader.</em>
              </h2>
              <p className="pm-body pm-rv">
                A useful campaign begins with a specific audience. We consider the books they read, the topics they
                follow and the channels where they welcome recommendations.
              </p>
              <ol className="pm-ch" role="list">
                <li className="pm-rv">
                  <span className="pm-ch__n">01</span>
                  <h3>Social</h3>
                  <p>Posts and graphics suited to the channels your readers use.</p>
                </li>
                <li className="pm-rv">
                  <span className="pm-ch__n">02</span>
                  <h3>Author features</h3>
                  <p>An introduction to your background and the reasons you wrote the book.</p>
                </li>
                <li className="pm-rv">
                  <span className="pm-ch__n">03</span>
                  <h3>Book excerpts</h3>
                  <p>A short sample that lets readers experience the writing for themselves.</p>
                </li>
                <li className="pm-rv">
                  <span className="pm-ch__n">04</span>
                  <h3>Digital promotion</h3>
                  <p>Paid or planned placements selected around your readership and budget.</p>
                </li>
                <li className="pm-rv">
                  <span className="pm-ch__n">05</span>
                  <h3>Launch content</h3>
                  <p>Coordinated cover reveals, announcements and release reminders.</p>
                </li>
                <li className="pm-rv">
                  <span className="pm-ch__n">06</span>
                  <h3>Reader engagement</h3>
                  <p>Questions, replies and conversations that help readers get to know your work.</p>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className="pm-screens" id="screens" aria-labelledby="screens-title">
          <div className="container pm-screens__head">
            <p className="pm-eb">
              <span>06</span>
              Across platforms
            </p>
            <h2 className="pm-h2 pm-rv" id="screens-title">
              {'A familiar voice '}
              <em>across your channels.</em>
            </h2>
            <p className="pm-body pm-rv">
              We adapt the copy and artwork for each format while keeping the book’s look and message consistent.
            </p>
          </div>
          <div className="pm-screens__scroll">
            <div
              className="pm-screens__stage"
              role="img"
              aria-label="Example social formats with titles from the American Authors catalogue: a quote card, a story, a feed post and an author card"
            >
              <div className="pm-fmt pm-fmt--quote" aria-hidden="true">
                <div className="pm-sq pm-sq--quote">
                  <span className="pm-sq__mark">“</span> <span className="pm-sq__q">Some stories stay with you.</span>{' '}
                  <span className="pm-sq__src">The Bunny in the Superhero Cape · Linda Mazzia</span>
                </div>{' '}
                <span className="pm-screens__label">Quote card · 1:1</span>
              </div>
              <div className="pm-fmt pm-fmt--story" aria-hidden="true">
                <div className="pm-phone pm-phone--story">
                  <div className="pm-phone__screen pm-story">
                    <div className="pm-story__bg">
                      <img
                        className=""
                        src="/assets/images/books/cover-03.webp"
                        width="440"
                        height="660"
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="pm-story__bars">
                      <i className="is-done" />
                      <i className="is-on" />
                      <i />
                    </div>
                    <div className="pm-story__who">
                      <span className="pm-post__av">A</span>
                      americasbookservice
                    </div>
                    <div className="pm-story__body">
                      <span className="pm-story__k">Launch week</span>{' '}
                      <img
                        className="pm-story__cover"
                        src="/assets/images/books/cover-03.webp"
                        width="440"
                        height="660"
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />{' '}
                      <span className="pm-story__t">Day one.</span>{' '}
                      <span className="pm-story__pill">Read the first pages</span>
                    </div>
                  </div>
                </div>{' '}
                <span className="pm-screens__label">Story · 9:16</span>
              </div>
              <div className="pm-fmt pm-fmt--feed" aria-hidden="true">
                <div className="pm-phone pm-phone--feed">
                  <div className="pm-phone__screen">
                    <div className="pm-phone__status">
                      <span>9:41</span>
                      <span className="pm-phone__island" />
                      <span className="pm-phone__sig">
                        <i />
                        <i />
                        <i />
                      </span>
                    </div>
                    <div className="pm-post__top">
                      <span className="pm-post__av">A</span>
                      <span className="pm-post__who">
                        americasbookservice
                        <small>Campaign · Whispers of Time</small>
                      </span>
                      <span className="pm-post__more">···</span>
                    </div>
                    <div className="pm-post__img pm-post__img--warm">
                      <span className="pm-post__k">Now available</span>{' '}
                      <img
                        className="pm-post__cover"
                        src="/assets/images/books/cover-24.webp"
                        width="440"
                        height="660"
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />{' '}
                      <span className="pm-post__t">Whispers of Time</span>
                    </div>
                    <div className="pm-post__acts">
                      <svg viewBox="0 0 24 24">
                        <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
                      </svg>
                      <svg viewBox="0 0 24 24">
                        <path d="M20 12a8 8 0 1 1-3.2-6.4L20 5l-.6 3.4A8 8 0 0 1 20 12z" />
                      </svg>
                      <svg viewBox="0 0 24 24">
                        <path d="M4 12l16-7-6 16-2.5-6.5z" />
                      </svg>
                      <svg className="pm-post__save" viewBox="0 0 24 24">
                        <path d="M6 4h12v16l-6-4-6 4z" />
                      </svg>
                    </div>
                    <p className="pm-post__cap">{`Explore Whispers of Time by Aggee Andrew Vetiaque, from the ${site.name} catalogue.`}</p>
                    <div className="pm-post__next">
                      <div className="pm-post__top">
                        <span className="pm-post__av">A</span>
                        <span className="pm-post__who">
                          americasbookservice
                          <small>Campaign · Whispers of Time</small>
                        </span>
                        <span className="pm-post__more">···</span>
                      </div>
                      <div className="pm-post__peek">
                        <span>“</span>
                        Some stories stay with you.
                      </div>
                    </div>
                  </div>
                </div>{' '}
                <span className="pm-screens__label">Feed post</span>
              </div>
              <div className="pm-fmt pm-fmt--author" aria-hidden="true">
                <div className="pm-sq pm-sq--author">
                  <span className="pm-sq__k">Meet the author</span> <span className="pm-sq__name">Waheed Shaffiek</span>{' '}
                  <span className="pm-sq__line">
                    {'on writing '}
                    <em>You vs You</em>
                  </span>{' '}
                  <span className="pm-sq__rule" />
                </div>{' '}
                <span className="pm-screens__label">Author card · 1:1</span>
              </div>
            </div>
          </div>
        </section>
        <section className="rw-posts" id="spotlights" aria-labelledby="spot-title">
          <div className="container">
            <div className="rw-posts__head">
              <div>
                <p className="rw-eyebrow rw-rv">
                  <span />
                  Real author spotlights
                </p>
                <h2 className="rw-h2 rw-rv" id="spot-title">
                  {'Meet some of '}
                  <em>our featured authors.</em>
                </h2>
              </div>
              <div className="rw-rv">
                <p className="rw-lead">
                  These spotlights introduce the author, explain the book and point interested readers towards it.
                </p>
                <p style={{ marginTop: '22px' }}>
                  <a className="rw-link" href="/our-work#authors">
                    {'Meet the authors '}
                    <svg aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
            <ul className="rw-posts__list" role="list">
              <li className="rw-rv">
                <figure>
                  <img
                    src="/assets/images/spotlights/spotlight-7.webp"
                    width="540"
                    height="675"
                    alt={`Featured Author graphic for Emilio Degher by ${site.name}, listing his books, genres and a short biography`}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>
                    <b>Featured Author</b>
                    <span>Emilio Degher</span>
                  </figcaption>
                </figure>
              </li>
              <li className="rw-rv">
                <figure>
                  <img
                    src="/assets/images/spotlights/spotlight-21.webp"
                    width="540"
                    height="675"
                    alt="Book Spotlight graphic for Bloom Through the Pain by Kadeisha Corbin, with the book shown on a pedestal and an Available on Amazon badge"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>
                    <b>Book Spotlight</b>
                    <span>Bloom Through the Pain by Kadeisha Corbin</span>
                  </figcaption>
                </figure>
              </li>
              <li className="rw-rv">
                <figure>
                  <img
                    src="/assets/images/spotlights/spotlight-31.webp"
                    width="540"
                    height="675"
                    alt="Book Spotlight graphic for The Naked Truth of AI 2.0 by Douglas Hawes, with the book shown on a pedestal and an Available on Amazon badge"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>
                    <b>Book Spotlight</b>
                    <span>The Naked Truth of AI 2.0 by Douglas Hawes</span>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </div>
        </section>
        <section className="pm-mo" id="momentum" aria-labelledby="mo-title">
          <div className="container">
            <div className="pm-mo__head">
              <p className="pm-eb">
                <span>07</span>
                Momentum
              </p>
              <h2 className="pm-h2 pm-rv" id="mo-title">
                {'Give the campaign '}
                <em>room to develop.</em>
              </h2>
              <p className="pm-body pm-rv">
                Readers rarely discover a book through a single post. We plan a sequence of useful introductions,
                samples and updates that builds familiarity over time.
              </p>
            </div>
            <div className="pm-mo__wrap">
              <span className="pm-mo__line" aria-hidden="true">
                <span className="pm-mo__draw" />
              </span>{' '}
              <ol className="pm-mo__list" role="list">
                <li>
                  <span className="pm-mo__dot" aria-hidden="true" />
                  <span className="pm-mo__n">01</span>
                  <h3>Announce</h3>
                  <p>Share the cover and introduce the book’s subject.</p>
                </li>
                <li>
                  <span className="pm-mo__dot" aria-hidden="true" />
                  <span className="pm-mo__n">02</span>
                  <h3>Introduce</h3>
                  <p>Tell readers who you are and why you wrote it.</p>
                </li>
                <li>
                  <span className="pm-mo__dot" aria-hidden="true" />
                  <span className="pm-mo__n">03</span>
                  <h3>Engage</h3>
                  <p>Offer excerpts and questions that invite a response.</p>
                </li>
                <li>
                  <span className="pm-mo__dot" aria-hidden="true" />
                  <span className="pm-mo__n">04</span>
                  <h3>Launch</h3>
                  <p>Share the release details and clear links to the book.</p>
                </li>
                <li>
                  <span className="pm-mo__dot" aria-hidden="true" />
                  <span className="pm-mo__n">05</span>
                  <h3>Sustain</h3>
                  <p>Continue sharing relevant material after the launch.</p>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className="section section--ivory faq pm-faq" id="faq" aria-labelledby="faq-title">
          <div className="container faq__grid">
            <div className="faq__head">
              <p className="pm-eb">
                <span>08</span>
                Questions
              </p>
              <h2 className="h2" id="faq-title">
                {'Questions about '}
                <em>promoting your book.</em>
              </h2>
            </div>
            <div className="faq__list" data-faq="">
              <details className="qa" open>
                <summary>
                  <span>Why is book promotion important for authors?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Promotion helps readers learn that your book exists and decide whether it interests them. It
                    supports discovery, but sales depend on several factors beyond the campaign.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>What are the best book promotion strategies?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    The right mix depends on the book. We may recommend stronger listing copy, author content, email
                    updates, outreach or paid advertising after reviewing your goals and budget.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>{`How can professional book promotion from ${site.name} help?`}</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    We help organise the work, prepare the materials and keep the message consistent. You have a plan to
                    review rather than a collection of unrelated promotional tasks.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>How long does it take to see results from book promotion?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Some activity brings a quick response, while author awareness develops over time. We agree on a
                    campaign period and review the available results before recommending what comes next.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>Do you offer Amazon book promotion services?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    We can help with listing copy, relevant search terms and advertising plans. Rankings, reader reviews
                    and sales cannot be promised.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  <span>How can I get started with your book promotion services?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Send us the title, genre, publication status and your main goal. We will discuss a practical scope
                    and the materials needed to begin.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="cta on-dark pm-cta" id="contact" aria-labelledby="cta-title">
          <div className="cta__media" aria-hidden="true">
            <img
              src="/assets/images/photos/1515118058350-d72d92dd5140-2000.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.06"
            />
          </div>
          <div className="container pm-close">
            <div className="pm-close__copy">
              <p className="eyebrow">Ready to be discovered?</p>
              <h2 className="pm-close__title" id="cta-title">
                {'Let’s plan '}
                <em>your book’s introduction.</em>
              </h2>
              <p className="pm-close__lead">
                Tell us who you wrote the book for. We will help you work out how to reach them.
              </p>
              <div className="pm-cta__btns">
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Start Your Campaign '}
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
            <figure className="pm-close__book">
              <span className="pm-close__glow" aria-hidden="true" />{' '}
              <div className="book3d pm-close__3d">
                <div className="book3d__body">
                  <div className="book3d__back" />
                  <img
                    className="book3d__cover"
                    src="/assets/images/books/cover-18.webp"
                    width="440"
                    height="660"
                    alt={`Cover of The Legal Tender Question by Joseph R. K. Eshun, published with ${site.name}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="book3d__shadow" />
              </div>
              <figcaption>
                The Legal Tender Question · Joseph R. K. Eshun
                <span>{`Published with ${site.name}`}</span>
              </figcaption>
            </figure>
          </div>
          <div className="container cta__grid pm-close__form">
            <div className="cta__copy">
              <p className="pm-close__h3">Share your promotion plans.</p>
              <p className="lead">Let us know the title, release date and kind of support you need.</p>
            </div>
            <LeadForm title="Promote your book" messageLabel="What are you writing, and where do you need help?" />
          </div>
        </section>
      </main>
      <PageScripts scripts={scripts} />
    </>
  );
}
