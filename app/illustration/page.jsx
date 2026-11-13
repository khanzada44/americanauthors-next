import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';

export const metadata = pageMetadata({
  title: 'Custom Book Illustrations and Character Artwork',
  description:
    'Plan illustrations for your book, from characters and individual scenes to complete illustrated editions, with artwork prepared for your chosen format.',
  path: '/illustration',
});

export const viewport = { themeColor: '#F7F2E8' };

const styles = [
  '/assets/css/site2f72.css?v=20261109-eagle-logo',
  '/assets/css/illustration2f72.css?v=20261003',
  '/assets/css/forms.css?v=20261105-production',
  '/assets/css/widgets.css?v=20261105',
];

const preloads = [
  {
    type: 'image/webp',
    href: '/assets/images/photos/1785423613154-a3f078420790-2400.webp',
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
    href: '#work',
    section: 'work',
    label: 'Collection',
    icon: '#i-brush',
    text: 'Work',
  },
  {
    href: '#stages',
    section: 'stages',
    label: 'Sketch to finish',
    icon: '#i-pen',
    text: 'Stages',
  },
  {
    href: '#process',
    section: 'process',
    label: 'Process',
    icon: '#i-steps',
    text: 'Process',
  },
  {
    href: '#contact',
    section: 'contact',
    label: 'Contact',
    icon: '#i-chat',
    text: 'Contact',
  },
];

const scripts = ['/assets/js/illustration2f72.js?v=20261003', '/assets/js/main2f72.js?v=20261105-production'];

export default function IllustrationPage() {
  return (
    <>
      <PageStyles styles={styles} preloads={preloads} />
      <SectionRail links={railLinks} />
      <main id="main">
        <svg className="il-defs" width="0" height="0" aria-hidden="true" focusable="false">
          <defs>
            <filter id="il-sketch" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
              <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="0.3 0.59 0.11 0 0  0.3 0.59 0.11 0 0  0.3 0.59 0.11 0 0  0 0 0 0 1"
                result="g"
              />
              <feGaussianBlur in="g" stdDeviation="1.1" result="a" />
              <feGaussianBlur in="g" stdDeviation="3.2" result="b" />
              <feComposite in="a" in2="b" operator="arithmetic" k1="0" k2="4.5" k3="-4.5" k4="1" result="e" />
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="4" result="n" />
              <feDisplacementMap in="e" in2="n" scale="2.5" xChannelSelector="R" yChannelSelector="G" result="e2" />
              <feColorMatrix
                in="e2"
                type="matrix"
                values="0.50 0 0 0 0.46  0.50 0 0 0 0.44  0.49 0 0 0 0.42  0 0 0 0 1"
              />
            </filter>
            <filter id="il-line" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
              <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="0.3 0.59 0.11 0 0  0.3 0.59 0.11 0 0  0.3 0.59 0.11 0 0  0 0 0 0 1"
                result="g"
              />
              <feGaussianBlur in="g" stdDeviation="0.6" result="a" />
              <feGaussianBlur in="g" stdDeviation="2" result="b" />
              <feComposite in="a" in2="b" operator="arithmetic" k1="0" k2="7" k3="-7" k4="1" result="e" />
              <feColorMatrix
                in="e"
                type="matrix"
                values="0.83 0 0 0 0.14  0.82 0 0 0 0.13  0.79 0 0 0 0.12  0 0 0 0 1"
              />
            </filter>
            <filter id="il-line-m" x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
              <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="0.3 0.59 0.11 0 0  0.3 0.59 0.11 0 0  0.3 0.59 0.11 0 0  0 0 0 0 1"
                result="g"
              />
              <feGaussianBlur in="g" stdDeviation="0.6" result="a" />
              <feGaussianBlur in="g" stdDeviation="2" result="b" />
              <feComposite in="a" in2="b" operator="arithmetic" k1="0" k2="6" k3="-6" k4="1" result="e" />
              <feColorMatrix
                in="e"
                type="matrix"
                values="0.76 0 0 0 0.24  0.78 0 0 0 0.22  0.80 0 0 0 0.2  0 0 0 0 1"
              />
            </filter>
          </defs>
        </svg>{' '}
        <section className="il-hero" id="top" aria-labelledby="il-title">
          <div className="il-hero__media" aria-hidden="true">
            <div className="il-hero__img" data-parallax="0.05" />
          </div>
          <div className="container il-hero__inner">
            <nav className="il-crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/#services">Services</a>
                </li>
                <li aria-current="page">Illustration</li>
              </ol>
            </nav>
            <div className="il-hero__copy">
              <p className="il-eyebrow" data-reveal="">
                Illustration
              </p>
              <h1 className="il-hero__title" id="il-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Put the world of your book '}
                <em>on the page.</em>
              </h1>
              <p className="il-hero__lead" data-reveal="" style={{ '--d': '.16s' }}>
                We create book illustrations around your characters, setting and readership, from small chapter details
                to a complete sequence of scenes.
              </p>
              <div className="il-hero__ctas" data-reveal="" style={{ '--d': '.22s' }}>
                <button className="btn btn--primary" type="button" data-open-lead="">
                  {'Start an Illustration Project '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>{' '}
                <a className="btn btn--outline-dark" href="#approach">
                  Explore Our Approach
                </a>
              </div>
            </div>
            <figure className="il-sheet" data-reveal="fade" style={{ '--d': '.15s' }}>
              <div className="il-sheet__under" data-sheet-under="" aria-hidden="true">
                <span className="il-art">
                  <img
                    src="/assets/images/photos/1762119594563-fc90dabb6161-900x700.webp"
                    alt=""
                    className="il-f-sketch"
                    decoding="async"
                  />
                </span>
              </div>
              <div className="il-sheet__paper" data-sheet="">
                <i className="il-tape il-tape--l" aria-hidden="true" />
                <i className="il-tape il-tape--r" aria-hidden="true" />{' '}
                <div className="il-sheet__img">
                  <img
                    src="/assets/images/photos/1762119594563-fc90dabb6161-1100x860.webp"
                    alt="Watercolour illustration of a country house behind climbing roses"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>
                <div className="il-sheet__foot">
                  <p>
                    <b>Plate III</b>: The house on Hollin Lane
                  </p>
                  <p className="il-sheet__for">
                    {'for '}
                    <i>The House at the Edge of Winter</i>, a novel by Clara Whitmore
                  </p>
                </div>{' '}
                <span className="il-note il-note--a" aria-hidden="true">
                  soften the roses: more paper showing
                </span>{' '}
                <span className="il-note il-note--b" aria-hidden="true">
                  ✓ approved 12/3
                </span>{' '}
                <span className="il-dabs" aria-hidden="true">
                  <i style={{ '--c': '#b8765a' }} />
                  <i style={{ '--c': '#7d8a6a' }} />
                  <i style={{ '--c': '#c9b48f' }} />
                  <i style={{ '--c': '#8d98a0' }} />
                </span>
              </div>
              <figcaption>
                Example plate · fictional book · artwork: public domain watercolour, The Walters Art Museum
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="il-sec il-story" id="approach" aria-labelledby="story-title">
          <div className="container il-story__grid">
            <div className="il-story__copy">
              <p className="il-kicker" data-reveal="">
                <b>I.</b>
                The art of storytelling
              </p>
              <h2 className="il-h2 il-h2--xl" id="story-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Pictures can tell '}
                <em>part of the story.</em>
              </h2>
              <p className="il-body" data-reveal="" style={{ '--d': '.16s' }}>
                A glance, a room or a landscape can say something the text leaves open. We use illustration to support
                those moments and give readers another way into the book.
              </p>
              <p className="il-marg" data-reveal="" style={{ '--d': '.22s' }}>
                <span>Expression</span>
                <span>Architecture</span>
                <span>Memory</span>
                <span>Atmosphere</span>
              </p>
            </div>
            <figure className="il-story__fig" data-reveal="fade">
              <div className="il-reveal">
                <img
                  src="/assets/images/photos/1613483812100-a473b639b423-1200x1400.webp"
                  alt="An illustrator drawing at a desk covered in pencils, paper and books"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption>
                <span>In the studio</span>
                Work begins with a pencil, a manuscript and a lot of paper.
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="il-sec il-gallery" id="work" aria-labelledby="work-title">
          <div className="container">
            <div className="il-gallery__head">
              <p className="il-kicker" data-reveal="">
                <b>II.</b>A curated collection
              </p>
              <h2 className="il-h2" id="work-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Explore the possibilities '}
                <em>for your pages.</em>
              </h2>
              <p className="il-body il-body--sm" data-reveal="" style={{ '--d': '.14s' }}>
                These works from public domain museum and library collections show different approaches to book imagery.
                They are reference examples rather than client commissions.
              </p>
            </div>
            <div className="il-works">
              <div className="il-works__l">
                <figure className="il-work il-work--a" data-reveal="" style={{ '--d': '0.00s' }}>
                  <div className="il-work__img">
                    <img
                      src="/assets/images/photos/1748200099986-5ed2ca9ae4a6-900x1150.webp"
                      alt="Portrait study, charcoal on paper"
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: '50% 30%' }}
                    />
                  </div>
                  <figcaption>
                    <b>I. Character</b>
                    <span>Portrait study</span>
                    <em>Charcoal on paper · Europeana</em>
                  </figcaption>
                </figure>
                <figure className="il-work il-work--e" data-reveal="" style={{ '--d': '0.07s' }}>
                  <div className="il-work__img">
                    <img
                      src="/assets/images/photos/1582202142946-b19b9dc9f811-800x800.webp"
                      alt="Sleeping figure, detail, chalk and wash"
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: '40% 45%' }}
                    />
                  </div>
                  <figcaption>
                    <b>V. Detail</b>
                    <span>Sleeping figure, detail</span>
                    <em>Chalk and wash · Birmingham Museums Trust</em>
                  </figcaption>
                </figure>
              </div>
              <div className="il-works__r">
                <figure className="il-work il-work--b" data-reveal="" style={{ '--d': '0.07s' }}>
                  <div className="il-work__img">
                    <img
                      src="/assets/images/photos/1751574979152-33f41b09a474-1300x800.webp"
                      alt="The road over the hill, gouache"
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: '50% 55%' }}
                    />
                  </div>
                  <figcaption>
                    <b>II. World</b>
                    <span>The road over the hill</span>
                    <em>Gouache · Europeana</em>
                  </figcaption>
                </figure>
                <div className="il-works__pair">
                  <figure className="il-work il-work--c" data-reveal="" style={{ '--d': '0.14s' }}>
                    <div className="il-work__img">
                      <img
                        src="/assets/images/photos/1752316226380-355171deb6d0-900x700.webp"
                        alt="The barn in late light, watercolour and pencil"
                        loading="lazy"
                        decoding="async"
                        style={{ objectPosition: '50% 50%' }}
                      />
                    </div>
                    <figcaption>
                      <b>III. Scene</b>
                      <span>The barn in late light</span>
                      <em>Watercolour and pencil · Europeana</em>
                    </figcaption>
                  </figure>
                  <figure className="il-work il-work--d" data-reveal="" style={{ '--d': '0.00s' }}>
                    <div className="il-work__img">
                      <img
                        src="/assets/images/photos/1748712073465-e99fd1be0fde-700x1000.webp"
                        alt="Branch with leaves, botanical watercolour"
                        loading="lazy"
                        decoding="async"
                        style={{ objectPosition: '50% 50%' }}
                      />
                    </div>
                    <figcaption>
                      <b>IV. Object</b>
                      <span>Branch with leaves</span>
                      <em>Botanical watercolour · Biodiversity Heritage Library</em>
                    </figcaption>
                  </figure>
                </div>
                <figure className="il-work il-work--f" data-reveal="" style={{ '--d': '0.14s' }}>
                  <div className="il-work__img">
                    <img
                      src="/assets/images/photos/1582201957428-5ff47ff7605c-1000x760.webp"
                      alt="Three birds, ink and wash on toned paper"
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: '50% 50%' }}
                    />
                  </div>
                  <figcaption>
                    <b>VI. Editorial</b>
                    <span>Three birds</span>
                    <em>Ink and wash on toned paper · Birmingham Museums Trust</em>
                  </figcaption>
                </figure>
              </div>
              <figure className="il-work il-work--g" data-reveal="" style={{ '--d': '0.00s' }}>
                <div className="il-work__img">
                  <img
                    src="/assets/images/photos/1751732347316-ed2cc8b6cefb-1800x760.webp"
                    alt="Hills after rain, watercolour"
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: '50% 50%' }}
                  />
                </div>
                <figcaption>
                  <b>VII. Environment</b>
                  <span>Hills after rain</span>
                  <em>Watercolour · Europeana</em>
                </figcaption>
              </figure>
            </div>
            <div className="il-proj" id="childrens-book-illustration" role="group" aria-labelledby="proj-title">
              <div className="il-proj__head">
                <h3 className="il-proj__label" id="proj-title" data-reveal="">
                  <b>01</b>
                  <i aria-hidden="true">/</i>
                  Children’s Book Illustration
                </h3>
                <p className="il-proj__meta" data-reveal="" style={{ '--d': '.06s' }}>
                  Four scenes · One story
                </p>
                <p className="il-proj__lead" data-reveal="" style={{ '--d': '.1s' }}>
                  Characters and settings carried through a connected series of scenes.
                </p>
              </div>
              <div className="il-plates">
                <figure className="il-plate il-plate--1" data-reveal="" style={{ '--d': '0.00s' }}>
                  <button
                    type="button"
                    className="il-plate__btn"
                    data-il-zoom=""
                    aria-label="View illustration 1 of 4 at a larger size"
                  >
                    <span className="il-plate__art">
                      <img
                        src="/assets/images/illustrations/childrens-book-illustration-01.webp"
                        srcSet="/assets/images/illustrations/childrens-book-illustration-01-800.webp 800w, /assets/images/illustrations/childrens-book-illustration-01.webp 1600w"
                        sizes="(max-width: 860px) 92vw, 46vw"
                        data-full="/assets/images/illustrations/childrens-book-illustration-01.webp"
                        width="1600"
                        height="2087"
                        alt="Children’s book illustration: a surprised young boy in a playroom full of toys, looking at a rabbit sitting on a toy steam train"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>{' '}
                    <span className="il-plate__view" aria-hidden="true">
                      View larger
                    </span>
                  </button>{' '}
                  <figcaption>
                    <b>Plate 01</b>
                    <span>01 / 04</span>
                  </figcaption>
                </figure>
                <figure className="il-plate il-plate--2" data-reveal="" style={{ '--d': '0.08s' }}>
                  <button
                    type="button"
                    className="il-plate__btn"
                    data-il-zoom=""
                    aria-label="View illustration 2 of 4 at a larger size"
                  >
                    <span className="il-plate__art">
                      <img
                        src="/assets/images/illustrations/childrens-book-illustration-02.webp"
                        srcSet="/assets/images/illustrations/childrens-book-illustration-02-800.webp 800w, /assets/images/illustrations/childrens-book-illustration-02.webp 1600w"
                        sizes="(max-width: 860px) 92vw, 46vw"
                        data-full="/assets/images/illustrations/childrens-book-illustration-02.webp"
                        width="1600"
                        height="2087"
                        alt="Children’s book illustration: a boy reaches towards a rabbit riding a toy train across a rug, while a man walks in carrying a box labelled Live Animal"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>{' '}
                    <span className="il-plate__view" aria-hidden="true">
                      View larger
                    </span>
                  </button>{' '}
                  <figcaption>
                    <b>Plate 02</b>
                    <span>02 / 04</span>
                  </figcaption>
                </figure>
                <figure className="il-plate il-plate--3" data-reveal="" style={{ '--d': '0.00s' }}>
                  <button
                    type="button"
                    className="il-plate__btn"
                    data-il-zoom=""
                    aria-label="View illustration 3 of 4 at a larger size"
                  >
                    <span className="il-plate__art">
                      <img
                        src="/assets/images/illustrations/childrens-book-illustration-03.webp"
                        srcSet="/assets/images/illustrations/childrens-book-illustration-03-800.webp 800w, /assets/images/illustrations/childrens-book-illustration-03.webp 1600w"
                        sizes="(max-width: 860px) 92vw, 46vw"
                        data-full="/assets/images/illustrations/childrens-book-illustration-03.webp"
                        width="1600"
                        height="2087"
                        alt="Children’s book illustration: a boy chases a running rabbit across a living room rug, past a wooden box of toys"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>{' '}
                    <span className="il-plate__view" aria-hidden="true">
                      View larger
                    </span>
                  </button>{' '}
                  <figcaption>
                    <b>Plate 03</b>
                    <span>03 / 04</span>
                  </figcaption>
                </figure>
                <figure className="il-plate il-plate--4" data-reveal="" style={{ '--d': '0.08s' }}>
                  <button
                    type="button"
                    className="il-plate__btn"
                    data-il-zoom=""
                    aria-label="View illustration 4 of 4 at a larger size"
                  >
                    <span className="il-plate__art">
                      <img
                        src="/assets/images/illustrations/childrens-book-illustration-04.webp"
                        srcSet="/assets/images/illustrations/childrens-book-illustration-04-800.webp 800w, /assets/images/illustrations/childrens-book-illustration-04.webp 1600w"
                        sizes="(max-width: 860px) 92vw, 46vw"
                        data-full="/assets/images/illustrations/childrens-book-illustration-04.webp"
                        width="1600"
                        height="2087"
                        alt="Children’s book illustration: a boy with one hand on his chest looks down at a rabbit sitting up on a living room rug"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>{' '}
                    <span className="il-plate__view" aria-hidden="true">
                      View larger
                    </span>
                  </button>{' '}
                  <figcaption>
                    <b>Plate 04</b>
                    <span>04 / 04</span>
                  </figcaption>
                </figure>
              </div>
              <dialog className="il-lb" data-il-lb="" aria-label="Children’s book illustration, larger view">
                <div className="il-lb__bar">
                  <p className="il-lb__count">
                    <b>Children’s Book Illustration</b>
                    <span data-il-lb-count="">01 / 04</span>
                  </p>
                  <button type="button" className="il-lb__close" data-il-lb-close="" aria-label="Close the larger view">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </button>
                </div>
                <div className="il-lb__stage" data-il-lb-stage="">
                  <img className="il-lb__img" data-il-lb-img="" alt="" width="1600" height="2087" />
                </div>
                <div className="il-lb__nav">
                  <button type="button" className="il-lb__step" data-il-lb-prev="" aria-label="Previous illustration">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M14 6l-6 6 6 6" />
                    </svg>
                    Previous
                  </button>
                  <button type="button" className="il-lb__step" data-il-lb-next="" aria-label="Next illustration">
                    Next
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M10 6l6 6-6 6" />
                    </svg>
                  </button>
                </div>
              </dialog>
            </div>
          </div>
        </section>
        <section className="il-sec il-svc" id="services" aria-labelledby="svc-title">
          <div
            className="il-bg"
            data-il-bg=""
            data-photo="1577941796491-999f99ba658f-2000"
            style={{ '--o': '.3', '--b': '4px', '--pos': '60% 50%' }}
            aria-hidden="true"
          />
          <div className="container">
            <div className="il-svc__head">
              <p className="il-kicker il-kicker--light" data-reveal="">
                <b>III.</b>
                What we create
              </p>
              <h2 className="il-h2 il-h2--light" id="svc-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Artwork with '}
                <em>a place in the story.</em>
              </h2>
            </div>
            <div className="il-svc__body">
              <ol className="il-svc__list" role="list">
                <li data-reveal="" style={{ '--d': '0.00s' }}>
                  <span className="il-svc__n">01</span>
                  <h3>Character Illustration</h3>
                  <p>Characters shaped by their role, personality and expression.</p>
                </li>
                <li data-reveal="" style={{ '--d': '0.08s' }}>
                  <span className="il-svc__n">02</span>
                  <h3>Children’s Book Illustration</h3>
                  <p>Illustrations planned around the story, page turns and age of your readers.</p>
                </li>
                <li data-reveal="" style={{ '--d': '0.00s' }}>
                  <span className="il-svc__n">03</span>
                  <h3>Editorial Illustration</h3>
                  <p>Images that give a visual interpretation of an article, essay or idea.</p>
                </li>
                <li data-reveal="" style={{ '--d': '0.08s' }}>
                  <span className="il-svc__n">04</span>
                  <h3>{'Story & Scene Illustration'}</h3>
                  <p>Scenes that show key settings and moments in the narrative.</p>
                </li>
                <li data-reveal="" style={{ '--d': '0.00s' }}>
                  <span className="il-svc__n">05</span>
                  <h3>Imagined Worlds</h3>
                  <p>Places, buildings and environments that make a fictional world feel consistent.</p>
                </li>
                <li data-reveal="" style={{ '--d': '0.08s' }}>
                  <span className="il-svc__n">06</span>
                  <h3>Custom Book Illustration</h3>
                  <p>Artwork planned for the specific tone and requirements of your book.</p>
                </li>
                <li data-reveal="" style={{ '--d': '0.00s' }}>
                  <span className="il-svc__n">07</span>
                  <h3>{'Spot & Interior Illustrations'}</h3>
                  <p>Chapter ornaments, small drawings and visual details for the interior.</p>
                </li>
                <li data-reveal="" style={{ '--d': '0.08s' }}>
                  <span className="il-svc__n">08</span>
                  <h3>Full Illustrated Books</h3>
                  <p>A connected set of illustrations that works across the whole publication.</p>
                </li>
              </ol>
              <aside className="il-svc__margin" aria-hidden="true">
                <figure data-reveal="fade">
                  <img
                    src="/assets/images/photos/1699569269091-c80d2954ab52-600x760.webp"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>Spot study · relief print</figcaption>
                </figure>
                <figure data-reveal="fade" style={{ '--d': '.1s' }}>
                  <img
                    src="/assets/images/photos/1755197712932-f5c55913b4ac-700x480.webp"
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>Vignette · pen and ink</figcaption>
                </figure>
              </aside>
            </div>
          </div>
        </section>
        <section className="il-sec il-process" id="process" aria-labelledby="process-title">
          <div
            className="il-bg"
            data-il-bg=""
            data-photo="1617850332221-2c039479d407-2000"
            style={{
              '--o': '.22',
              '--b': '4px',
              '--pos': '50% 50%',
              '--veil':
                'linear-gradient(180deg, rgba(246,241,231,.72), rgba(246,241,231,.5) 40%, rgba(246,241,231,.86))',
            }}
            aria-hidden="true"
          />
          <div className="container">
            <div className="il-process__head">
              <p className="il-kicker" data-reveal="">
                <b>IV.</b>
                Our process
              </p>
              <h2 className="il-h2" id="process-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'A clear process '}
                <em>from sketch to artwork.</em>
              </h2>
            </div>
            <div className="il-steps" data-draw="">
              <svg className="il-steps__line" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 34 C 120 10, 210 52, 330 30 S 540 12, 640 32 S 860 50, 960 26 S 1140 18, 1198 30" />
              </svg>{' '}
              <ol className="il-steps__list" role="list">
                <li className="il-step" data-reveal="" style={{ '--d': '0.00s' }}>
                  <svg className="il-step__mark" viewBox="0 0 48 40" aria-hidden="true">
                    <path d="M6 30 C14 10 30 8 42 22" />
                  </svg>
                  <span className="il-step__n">01</span>
                  <h3>Discover</h3>
                  <p>We discuss the manuscript, readership and styles you have in mind.</p>
                </li>
                <li className="il-step" data-reveal="" style={{ '--d': '0.08s' }}>
                  <svg className="il-step__mark" viewBox="0 0 48 40" aria-hidden="true">
                    <path d="M6 30 C14 10 30 8 42 22" />
                    <path d="M10 34 C20 20 32 18 44 28" />
                  </svg>
                  <span className="il-step__n">02</span>
                  <h3>Interpret</h3>
                  <p>Together we choose the characters, settings and moments to illustrate.</p>
                </li>
                <li className="il-step" data-reveal="" style={{ '--d': '0.16s' }}>
                  <svg className="il-step__mark" viewBox="0 0 48 40" aria-hidden="true">
                    <path d="M6 32 L22 12 L40 32" />
                    <path d="M4 33 H44" />
                    <path d="M10 34 C20 20 32 18 44 28" opacity=".4" />
                  </svg>
                  <span className="il-step__n">03</span>
                  <h3>Sketch</h3>
                  <p>Rough sketches help us agree on composition before developing the details.</p>
                </li>
                <li className="il-step" data-reveal="" style={{ '--d': '0.24s' }}>
                  <svg className="il-step__mark" viewBox="0 0 48 40" aria-hidden="true">
                    <path d="M6 32 L22 12 L40 32 Z" />
                    <path d="M16 32 V22 H28 V32" />
                  </svg>
                  <span className="il-step__n">04</span>
                  <h3>Develop</h3>
                  <p>We build the selected sketches with colour, texture and clearer forms.</p>
                </li>
                <li className="il-step" data-reveal="" style={{ '--d': '0.32s' }}>
                  <svg className="il-step__mark" viewBox="0 0 48 40" aria-hidden="true">
                    <path d="M6 32 L22 12 L40 32 Z" />
                    <path d="M16 32 V22 H28 V32" />
                    <circle cx="36" cy="12" r="4" />
                  </svg>
                  <span className="il-step__n">05</span>
                  <h3>Refine</h3>
                  <p>We review the artwork with you and work through the agreed changes.</p>
                </li>
                <li className="il-step" data-reveal="" style={{ '--d': '0.40s' }}>
                  <svg className="il-step__mark" viewBox="0 0 48 40" aria-hidden="true">
                    <rect x="4" y="6" width="40" height="30" rx="1" />
                    <path d="M10 30 L22 16 L34 30 Z" />
                    <circle cx="36" cy="13" r="3" />
                  </svg>
                  <span className="il-step__n">06</span>
                  <h3>Deliver</h3>
                  <p>We prepare the illustrations for the print or digital formats in your brief.</p>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className="il-sec il-shape" id="stages" aria-labelledby="shape-title">
          <div className="container">
            <div className="il-shape__head">
              <p className="il-kicker" data-reveal="">
                <b>V.</b>
                Sketch to finish
              </p>
              <h2 className="il-h2" id="shape-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Watch an image '}
                <em>take shape.</em>
              </h2>
            </div>
            <div className="il-shape__stage" data-stages="" data-reveal="fade">
              <div className="il-board">
                <i className="il-tape il-tape--l" aria-hidden="true" />
                <i className="il-tape il-tape--r" aria-hidden="true" />{' '}
                <div
                  className="il-board__views"
                  role="img"
                  aria-label="One watercolour shown at four stages: rough sketch, line work, colour and final artwork"
                >
                  <div className="il-view is-on" data-view="0">
                    <span className="il-art ">
                      <img
                        src="/assets/images/photos/1579169233120-8acbdeef5de8-1400x920.webp"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="il-f-sketch"
                      />
                      <svg className="il-guides" viewBox="0 0 300 200" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M0 88 L300 84" />
                        <path d="M40 200 L150 86 L262 200" />
                        <path d="M18 60 Q90 52 150 58 T296 50" />
                        <path d="M70 150 l50 -2 M200 146 l60 3" />
                      </svg>
                    </span>
                  </div>
                  <div className="il-view" data-view="1">
                    <span className="il-art ">
                      <img
                        src="/assets/images/photos/1579169233120-8acbdeef5de8-1400x920.webp"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="il-f-line"
                      />
                    </span>
                  </div>
                  <div className="il-view" data-view="2">
                    <span className="il-art ">
                      <img
                        src="/assets/images/photos/1579169233120-8acbdeef5de8-1400x920.webp"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="il-f-wash"
                      />
                      <img
                        src="/assets/images/photos/1579169233120-8acbdeef5de8-1400x920.webp"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="il-f-linem"
                      />
                    </span>
                  </div>
                  <div className="il-view" data-view="3">
                    <span className="il-art ">
                      <img
                        src="/assets/images/photos/1579169233120-8acbdeef5de8-1400x920.webp"
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                  </div>
                </div>
                <p className="il-board__cap">Plate VII: The village at Hollin Moor</p>
              </div>
              <div className="il-shape__notes" aria-live="polite">
                <div className="il-stagenote is-on" data-note="0">
                  <p className="il-stagenote__n">Stage 01</p>
                  <p className="il-stagenote__t">Rough sketch</p>
                  <p className="il-stagenote__d">
                    The first shapes establish the skyline and the position of the buildings.
                  </p>
                  <p className="il-hand">Leave room above the rooftops</p>
                </div>
                <div className="il-stagenote" data-note="1">
                  <p className="il-stagenote__n">Stage 02</p>
                  <p className="il-stagenote__t">Line work</p>
                  <p className="il-stagenote__d">
                    Line work brings the buildings, doorway and smaller figures into focus.
                  </p>
                  <p className="il-hand">Soften the distant edges</p>
                </div>
                <div className="il-stagenote" data-note="2">
                  <p className="il-stagenote__n">Stage 03</p>
                  <p className="il-stagenote__t">Colour</p>
                  <p className="il-stagenote__d">Early colour gives the roofs warmth and the sky a cooler tone.</p>
                  <p className="il-hand">Keep the light areas clear</p>
                </div>
                <div className="il-stagenote" data-note="3">
                  <p className="il-stagenote__n">Stage 04</p>
                  <p className="il-stagenote__t">Final artwork</p>
                  <p className="il-stagenote__d">
                    Colour and texture are balanced with the detail needed for the printed page.
                  </p>
                </div>
              </div>
            </div>
            <ol className="il-tabs" role="list">
              <li>
                <button type="button" className="il-tab is-on" data-stage="0" aria-pressed="true">
                  <span className="il-art il-art--thumb">
                    <img
                      src="/assets/images/photos/1579169233120-8acbdeef5de8-500x330.webp"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="il-f-sketch"
                    />
                    <svg className="il-guides" viewBox="0 0 300 200" preserveAspectRatio="none" aria-hidden="true">
                      <path d="M0 88 L300 84" />
                      <path d="M40 200 L150 86 L262 200" />
                      <path d="M18 60 Q90 52 150 58 T296 50" />
                      <path d="M70 150 l50 -2 M200 146 l60 3" />
                    </svg>
                  </span>{' '}
                  <span className="il-tab__lbl">
                    <b>01</b>
                    Rough sketch
                  </span>
                </button>
              </li>
              <li>
                <button type="button" className="il-tab" data-stage="1" aria-pressed="false">
                  <span className="il-art il-art--thumb">
                    <img
                      src="/assets/images/photos/1579169233120-8acbdeef5de8-500x330.webp"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="il-f-line"
                    />
                  </span>{' '}
                  <span className="il-tab__lbl">
                    <b>02</b>
                    Line work
                  </span>
                </button>
              </li>
              <li>
                <button type="button" className="il-tab" data-stage="2" aria-pressed="false">
                  <span className="il-art il-art--thumb">
                    <img
                      src="/assets/images/photos/1579169233120-8acbdeef5de8-500x330.webp"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="il-f-wash"
                    />
                    <img
                      src="/assets/images/photos/1579169233120-8acbdeef5de8-500x330.webp"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="il-f-linem"
                    />
                  </span>{' '}
                  <span className="il-tab__lbl">
                    <b>03</b>
                    Colour
                  </span>
                </button>
              </li>
              <li>
                <button type="button" className="il-tab" data-stage="3" aria-pressed="false">
                  <span className="il-art il-art--thumb">
                    <img
                      src="/assets/images/photos/1579169233120-8acbdeef5de8-500x330.webp"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </span>{' '}
                  <span className="il-tab__lbl">
                    <b>04</b>
                    Final artwork
                  </span>
                </button>
              </li>
            </ol>
            <p className="il-shape__credit">
              Process demonstration using a public domain watercolour from Europeana to illustrate possible stages.
            </p>
          </div>
        </section>
        <section className="il-sec il-mat" id="details" aria-labelledby="mat-title">
          <div className="container il-mat__grid">
            <figure className="il-mat__hero" data-reveal="fade">
              <div className="il-reveal">
                <img
                  src="/assets/images/photos/1654693506657-9f3f15ea565d-1500x1100.webp"
                  alt="Macro photograph of worn paintbrush bristles"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </figure>
            <div className="il-mat__copy">
              <p className="il-kicker" data-reveal="">
                <b>VI.</b>
                The details matter
              </p>
              <h2 className="il-mat__title" id="mat-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'The character of '}
                <em>line and colour.</em>
              </h2>
              <p className="il-body" data-reveal="" style={{ '--d': '.16s' }}>
                Texture, line weight and the way colour sits on the page all affect the feeling of an illustration. We
                consider them alongside the subject.
              </p>
            </div>
            <ul className="il-mat__row" role="list">
              <li data-reveal="">
                <div className="il-mat__img">
                  <img
                    src="/assets/images/photos/1568017441772-d674624518b5-800x600.webp"
                    alt="Deckled edge of handmade paper"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p>
                  <b>Paper</b>
                  The surface decides how everything else behaves.
                </p>
              </li>
              <li data-reveal="" style={{ '--d': '.08s' }}>
                <div className="il-mat__img">
                  <img
                    src="/assets/images/photos/1751346914991-0e42cd7547f3-800x600.webp"
                    alt="Close up of a pen nib"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p>
                  <b>Line</b>
                  Weight, pressure and hesitation, all visible.
                </p>
              </li>
              <li data-reveal="" style={{ '--d': '.16s' }}>
                <div className="il-mat__img">
                  <img
                    src="/assets/images/photos/1596199631310-782ed7346a26-800x600.webp"
                    alt="Paintbrushes with pigment in the bristles"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p>
                  <b>Color</b>
                  Mixed, layered and allowed to breathe.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="il-sec il-styles" id="styles" aria-labelledby="styles-title">
          <div className="container">
            <div className="il-styles__head">
              <p className="il-kicker" data-reveal="">
                <b>VII.</b>
                Artistic approach
              </p>
              <h2 className="il-h2" id="styles-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Find the approach '}
                <em>that suits your story.</em>
              </h2>
              <p className="il-body il-body--sm" data-reveal="" style={{ '--d': '.14s' }}>
                Ink, watercolour, realistic drawing and graphic styles each tell a story differently. The public domain
                examples here offer a starting point for that discussion.
              </p>
            </div>
            <div className="il-styles__grid">
              <figure className="il-style il-style--a" data-reveal="" style={{ '--d': '0.00s' }}>
                <div className="il-style__img">
                  <img
                    src="/assets/images/photos/1762113396453-e50415c5e243-800x900.webp"
                    alt="Editorial style example"
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: '50% 40%' }}
                  />
                </div>
                <figcaption>
                  <b>Editorial</b>
                  <em>Elegant, conceptual and restrained.</em>
                </figcaption>
              </figure>
              <figure className="il-style il-style--b" data-reveal="" style={{ '--d': '0.06s' }}>
                <div className="il-style__img">
                  <img
                    src="/assets/images/photos/1784540065208-2d0670f64210-1000x700.webp"
                    alt="Hand drawn style example"
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: '50% 50%' }}
                  />
                </div>
                <figcaption>
                  <b>Hand drawn</b>
                  <em>Organic, expressive and human.</em>
                </figcaption>
              </figure>
              <figure className="il-style il-style--c" data-reveal="" style={{ '--d': '0.12s' }}>
                <div className="il-style__img">
                  <img
                    src="/assets/images/photos/1703591923692-c47412430e27-800x1000.webp"
                    alt="Painterly style example"
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: '50% 50%' }}
                  />
                </div>
                <figcaption>
                  <b>Painterly</b>
                  <em>Layered, atmospheric and tactile.</em>
                </figcaption>
              </figure>
              <figure className="il-style il-style--d" data-reveal="" style={{ '--d': '0.18s' }}>
                <div className="il-style__img">
                  <img
                    src="/assets/images/photos/1784029477006-432a1f2d467d-800x800.webp"
                    alt="Graphic style example"
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: '50% 50%' }}
                  />
                </div>
                <figcaption>
                  <b>Graphic</b>
                  <em>Bold, composed and contemporary.</em>
                </figcaption>
              </figure>
              <figure className="il-style il-style--e" data-reveal="" style={{ '--d': '0.24s' }}>
                <div className="il-style__img">
                  <img
                    src="/assets/images/photos/1762113396324-794e0acce922-1000x720.webp"
                    alt="Whimsical style example"
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: '50% 50%' }}
                  />
                </div>
                <figcaption>
                  <b>Whimsical</b>
                  <em>Playful without becoming childish.</em>
                </figcaption>
              </figure>
              <figure className="il-style il-style--f" data-reveal="" style={{ '--d': '0.30s' }}>
                <div className="il-style__img">
                  <img
                    src="/assets/images/photos/1582201943155-606a5f4e7941-800x1000.webp"
                    alt="Realistic style example"
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: '50% 25%' }}
                  />
                </div>
                <figcaption>
                  <b>Realistic</b>
                  <em>Detailed, immersive and emotionally grounded.</em>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="il-book" id="book" aria-labelledby="book-title">
          <figure className="il-book__photo" data-reveal="fade">
            <img
              src="/assets/images/photos/1760035113665-e494ec40ae2a-1800x1300.webp"
              alt="An open antique book with a hand coloured rose illustration on its page"
              loading="lazy"
              decoding="async"
              data-parallax="0.04"
            />
          </figure>
          <div className="il-book__copy">
            <p className="il-kicker" data-reveal="">
              <b>VIII.</b>
              {'Illustration & publishing'}
            </p>
            <h2 className="il-h2" id="book-title" data-reveal="" style={{ '--d': '.08s' }}>
              {'Plan the picture '}
              <em>with the page in mind.</em>
            </h2>
            <p className="il-body" data-reveal="" style={{ '--d': '.14s' }}>
              We consider page size, margins, nearby text and printing requirements while developing the artwork, so it
              has a natural place in the finished book.
            </p>
            <dl className="il-book__spec" data-reveal="" style={{ '--d': '.2s' }}>
              <div>
                <dt>{'Trim & bleed'}</dt>
                <dd>Artwork composed to the final page size, with room for the edge.</dd>
              </div>
              <div>
                <dt>The gutter</dt>
                <dd>Faces and key details kept clear of the fold on spreads.</dd>
              </div>
              <div>
                <dt>{'Text & image'}</dt>
                <dd>Quiet areas left where type will sit.</dd>
              </div>
              <div>
                <dt>{'Print & screen'}</dt>
                <dd>Colour prepared for the printed book and for ebooks.</dd>
              </div>
            </dl>
            <figure className="il-book__inset" data-reveal="" style={{ '--d': '.26s' }}>
              <img
                src="/assets/images/photos/1764089859668-95415e66e451-700x520.webp"
                alt="A reader holding an illustrated book open"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Proofing an illustrated spread</figcaption>
            </figure>
          </div>
        </section>
        <section className="il-sec il-uses" id="uses" aria-labelledby="uses-title">
          <div className="container il-uses__grid">
            <div>
              <p className="il-kicker" data-reveal="">
                <b>IX.</b>
                Where the art lives
              </p>
              <h2 className="il-h2" id="uses-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Prepared for '}
                <em>your chosen edition.</em>
              </h2>
              <div className="il-uses__shelf" data-reveal="" style={{ '--d': '.16s' }}>
                <p>From the American Authors catalogue</p>
                <ul role="list">
                  <li>
                    <img
                      src="/assets/images/books/cover-20.webp"
                      width="440"
                      height="660"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </li>
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
                      src="/assets/images/books/cover-24.webp"
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
                </ul>
              </div>
            </div>
            <ol className="il-uses__list" role="list">
              <li data-reveal="" style={{ '--d': '0.00s' }}>
                <span>i</span>
                Children’s Books
              </li>
              <li data-reveal="" style={{ '--d': '0.05s' }}>
                <span>ii</span>
                Novels
              </li>
              <li data-reveal="" style={{ '--d': '0.10s' }}>
                <span>iii</span>
                Memoirs
              </li>
              <li data-reveal="" style={{ '--d': '0.00s' }}>
                <span>iv</span>
                Poetry
              </li>
              <li data-reveal="" style={{ '--d': '0.05s' }}>
                <span>v</span>
                Editorial Projects
              </li>
              <li data-reveal="" style={{ '--d': '0.10s' }}>
                <span>vi</span>
                Educational Books
              </li>
              <li data-reveal="" style={{ '--d': '0.00s' }}>
                <span>vii</span>
                Coffee Table Books
              </li>
              <li data-reveal="" style={{ '--d': '0.05s' }}>
                <span>viii</span>
                Special Editions
              </li>
              <li data-reveal="" style={{ '--d': '0.10s' }}>
                <span>ix</span>
                Author Branding
              </li>
            </ol>
          </div>
        </section>
        <section className="il-statement" aria-label="Statement">
          <div className="il-statement__media" aria-hidden="true">
            <div
              className="il-statement__img"
              data-il-bg=""
              data-photo="1783711788448-7205acbb2034-2400"
              data-parallax="0.05"
            />
          </div>
          <div className="container il-statement__inner">
            <p className="il-statement__l1" data-reveal="">
              You have imagined the story.
            </p>
            <p className="il-statement__l2" data-reveal="" style={{ '--d': '.2s' }}>
              Let’s work out how it should look.
            </p>
          </div>
        </section>
        <section className="il-sec il-deliver" id="deliverables" aria-labelledby="deliver-title">
          <div className="container il-deliver__grid">
            <div>
              <p className="il-kicker" data-reveal="">
                <b>X.</b>
                Final artwork
              </p>
              <h2 className="il-h2" id="deliver-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'The artwork, '}
                <em>prepared for publication.</em>
              </h2>
            </div>
            <ol className="il-deliver__list" role="list">
              <li data-reveal="" style={{ '--d': '0.00s' }}>
                <span>Pl. 01</span>
                Final illustration files
              </li>
              <li data-reveal="" style={{ '--d': '0.05s' }}>
                <span>Pl. 02</span>
                High resolution artwork
              </li>
              <li data-reveal="" style={{ '--d': '0.10s' }}>
                <span>Pl. 03</span>
                Print ready files
              </li>
              <li data-reveal="" style={{ '--d': '0.00s' }}>
                <span>Pl. 04</span>
                Digital ready files
              </li>
              <li data-reveal="" style={{ '--d': '0.05s' }}>
                <span>Pl. 05</span>
                Transparent PNG assets where appropriate
              </li>
              <li data-reveal="" style={{ '--d': '0.10s' }}>
                <span>Pl. 06</span>
                Source artwork where included in the project scope
              </li>
              <li data-reveal="" style={{ '--d': '0.00s' }}>
                <span>Pl. 07</span>
                Character / scene artwork
              </li>
              <li data-reveal="" style={{ '--d': '0.05s' }}>
                <span>Pl. 08</span>
                Interior illustration assets
              </li>
              <li data-reveal="" style={{ '--d': '0.10s' }}>
                <span>Pl. 09</span>
                Consistent visual direction across the project
              </li>
            </ol>
          </div>
        </section>
        <section className="section section--ivory faq il-faq" id="faq" aria-labelledby="faq-title">
          <div className="container faq__grid">
            <div className="faq__head">
              <p className="il-kicker" data-reveal="">
                <b>XI.</b>
                FAQ
              </p>
              <h2 className="h2" id="faq-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Questions about '}
                <em>book illustration.</em>
              </h2>
            </div>
            <div className="faq__list" data-faq="">
              <details className="qa" data-reveal="" open>
                <summary>
                  <span>Why do I need professional book illustrations?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Illustrations can clarify an idea, build a setting or help young readers follow the story. We can
                    discuss where they would add something useful to your book.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="">
                <summary>
                  <span>What types of book illustrations do you offer?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Projects can include children’s books, character studies, cover artwork, interior drawings and
                    complete scenes.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="">
                <summary>
                  <span>Can I choose the illustration style for my book?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>Yes. We discuss references and sample approaches with you before settling on a direction.</p>
                </div>
              </details>
              <details className="qa" data-reveal="">
                <summary>
                  <span>How long does the illustration process take?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    The schedule depends on the number of images, their detail and the review rounds. We agree on timing
                    after reviewing the brief.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="">
                <summary>
                  <span>Will I own the rights to my book illustrations?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Usage rights are set out in your project agreement. We discuss publishing and promotional use before
                    starting the artwork.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="">
                <summary>
                  <span>Do you provide illustrations for both print and digital books?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>Yes. We prepare the agreed image files for the dimensions and formats your book requires.</p>
                </div>
              </details>
              <details className="qa" data-reveal="">
                <summary>
                  <span>How do I get started with my book illustrations?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Send us a synopsis, the intended age group and an idea of how many illustrations you need. Samples
                    of styles you like are helpful too.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="cta on-dark il-cta" id="contact" aria-labelledby="cta-title">
          <div className="cta__media" aria-hidden="true">
            <img
              src="/assets/images/photos/1755520795091-adf1f3f307e0-1800.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.06"
            />
          </div>
          <div className="container cta__grid">
            <div className="cta__copy">
              <p className="eyebrow" data-reveal="">
                Start an illustration project
              </p>
              <h2 className="display cta__title il-cta__title" id="cta-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Let’s picture '}
                <em>your story together.</em>
              </h2>
              <p className="lead" data-reveal="" style={{ '--d': '.16s' }}>
                Share the characters, places and moments you want readers to see.
              </p>
              <div className="il-cta__btns" data-reveal="" style={{ '--d': '.2s' }}>
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Start an Illustration Project '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>{' '}
                <a className="btn btn--glass" href="/contact">
                  <svg className="btn__icon" aria-hidden="true">
                    <use href="#i-phone" />
                  </svg>
                  Talk to Our Creative Team
                </a>
              </div>
            </div>
            <LeadForm
              title="Start your illustration project"
              messageLabel="What are you writing, and where do you need help?"
            />
          </div>
        </section>
      </main>
      <PageScripts scripts={scripts} />
    </>
  );
}
