import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import LeadForm from '@/components/forms/LeadForm';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Audiobook Narration and Production',
  description:
    'Create an audiobook with narration, recording, editing and audio mastering planned around your manuscript and the way you want it to sound.',
  path: '/audio-book',
});

const styles = [
  '/assets/css/site2f72.css?v=20261109-eagle-logo',
  '/assets/css/audio2f72.css?v=20261003',
  '/assets/css/forms.css?v=20261105-production',
  '/assets/css/widgets.css?v=20261105',
];

const preloads = [
  {
    type: 'image/webp',
    href: '/assets/images/photos/1478737270239-2f02b77fc618-2400.webp',
    media: '(min-width: 761px)',
    fetchPriority: 'high',
  },
  {
    type: 'image/webp',
    href: '/assets/images/photos/1478737270239-2f02b77fc618-1200.webp',
    media: '(max-width: 760px)',
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
    href: '#audio-services',
    section: 'audio-services',
    label: 'Services',
    icon: '#i-audio',
    text: 'Services',
  },
  {
    href: '#narration',
    section: 'narration',
    label: 'Narration',
    icon: '#i-quote',
    text: 'Voice',
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

const scripts = ['/assets/js/audio-book2f72.js?v=20261003', '/assets/js/main2f72.js?v=20261105-production'];

export default function AudioBookPage() {
  return (
    <>
      <PageStyles styles={styles} preloads={preloads} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="au-hero on-dark" id="top" aria-labelledby="au-title">
          <div className="au-hero__media" aria-hidden="true">
            <div className="au-hero__img" data-parallax="0.08" />
            <div className="au-hero__light" />
          </div>
          <div className="container au-hero__inner">
            <nav className="au-crumbs" aria-label="Breadcrumb">
              <ol role="list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/#services">Services</a>
                </li>
                <li aria-current="page">Audio Book</li>
              </ol>
            </nav>
            <div className="au-hero__copy">
              <p className="eyebrow" data-reveal="">
                Audio book production
              </p>
              <h1 className="au-hero__title" id="au-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Let readers '}
                <em>listen to your book.</em>
              </h1>
              <p className="au-hero__lead" data-reveal="" style={{ '--d': '.16s' }}>
                We help turn a finished manuscript into an audiobook, with narration, editing and audio preparation
                planned around the way your story should sound.
              </p>
              <div className="au-hero__ctas" data-reveal="" style={{ '--d': '.22s' }}>
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Start Your Audiobook '}
                  <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="au-take" data-reveal="" style={{ '--d': '.3s' }} aria-hidden="true">
              <span className="au-take__rec">
                <i />
                Rec
              </span>{' '}
              <span className="au-take__meta">
                <b>Chapter One</b>
                <span>Narration · Take 01</span>
              </span>{' '}
              <span className="au-wave" data-wave="" /> <span className="au-take__time">00:00:42</span>
            </div>
          </div>{' '}
          <a className="au-hero__scroll" href="#overview">
            <span className="sr-only">Scroll to introduction</span>
            <i aria-hidden="true" />
          </a>
        </section>
        <section className="section section--ivory au-intro" id="overview" aria-labelledby="intro-title">
          <div className="container au-intro__grid">
            <figure className="au-intro__figure" data-reveal="scale">
              <img
                src="/assets/images/photos/1687839491147-c4d698f808c5-1100.webp"
                width="1100"
                height="1375"
                alt="A studio condenser microphone beside an open notebook of handwritten pages on a wooden desk"
                loading="lazy"
                decoding="async"
              />{' '}
              <figcaption>
                <span className="label">Page to voice</span>
              </figcaption>
            </figure>
            <div className="au-intro__copy">
              <span className="ghost-num" aria-hidden="true">
                01
              </span>
              <p className="eyebrow" data-reveal="">
                Bring your story to life
              </p>
              <h2 className="au-h2" id="intro-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'The writing, '}
                <em>heard in a new way.</em>
              </h2>
              <p className="au-intro__lede" data-reveal="" style={{ '--d': '.14s' }}>
                Listening brings another pace to a book. Voice, pauses and emphasis affect how a scene or explanation
                lands.
              </p>
              <p data-reveal="" style={{ '--d': '.18s' }}>
                We work through narrator choice, recording and audio review to create a listening edition that respects
                the words on the page.
              </p>
              <ul className="au-intro__facets" role="list" data-reveal="" style={{ '--d': '.24s' }}>
                <li>
                  <span>Personality</span>
                  the voice of your writing
                </li>
                <li>
                  <span>Pacing</span>
                  the rhythm of every scene
                </li>
                <li>
                  <span>Emotion</span>
                  what the listener feels
                </li>
                <li>
                  <span>Atmosphere</span>
                  the world around the words
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section section--ivory au-tracks" id="audio-services" aria-labelledby="tracks-title">
          <div className="container au-tracks__grid">
            <div className="au-tracks__head">
              <span className="ghost-num" aria-hidden="true">
                02
              </span>
              <p className="eyebrow" data-reveal="">
                Audiobook services
              </p>
              <h2 className="au-h2" id="tracks-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'The work behind '}
                <em>the listening edition.</em>
              </h2>
              <figure className="au-tracks__still" data-reveal="scale" style={{ '--d': '.12s' }}>
                <img
                  src="/assets/images/photos/1566612453429-50faafea3e5f-900.webp"
                  width="900"
                  height="600"
                  alt="Close view of a warm lit analogue mixing console with rows of faders and meters"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <ol className="au-tracklist" role="list">
              <li className="au-phase" data-reveal="">
                <span className="label">Pre production</span>
              </li>
              <li className="au-track" data-reveal="">
                <span className="au-track__n">01</span>{' '}
                <div className="au-track__body">
                  <h3>Professional Narration</h3>
                  <p>Narration that suits the language, characters and mood of your book.</p>
                </div>{' '}
                <span className="au-track__bar" aria-hidden="true">
                  <i style={{ '--w': '.86' }} />
                </span>
              </li>
              <li className="au-track" data-reveal="">
                <span className="au-track__n">02</span>{' '}
                <div className="au-track__body">
                  <h3>Voice Direction</h3>
                  <p>A shared plan for pronunciation, pacing and the tone of the reading.</p>
                </div>{' '}
                <span className="au-track__bar" aria-hidden="true">
                  <i style={{ '--w': '.62' }} />
                </span>
              </li>
              <li className="au-phase" data-reveal="">
                <span className="label">Production</span>
              </li>
              <li className="au-track" data-reveal="">
                <span className="au-track__n">03</span>{' '}
                <div className="au-track__body">
                  <h3>Audio Recording</h3>
                  <p>Clear recordings of the manuscript, organised for review and editing.</p>
                </div>{' '}
                <span className="au-track__bar" aria-hidden="true">
                  <i style={{ '--w': '.94' }} />
                </span>
              </li>
              <li className="au-phase" data-reveal="">
                <span className="label">Post production</span>
              </li>
              <li className="au-track" data-reveal="">
                <span className="au-track__n">04</span>{' '}
                <div className="au-track__body">
                  <h3>{'Editing & Cleanup'}</h3>
                  <p>A careful pass for unwanted noise, repeated lines and recording errors.</p>
                </div>{' '}
                <span className="au-track__bar" aria-hidden="true">
                  <i style={{ '--w': '.7' }} />
                </span>
              </li>
              <li className="au-track" data-reveal="">
                <span className="au-track__n">05</span>{' '}
                <div className="au-track__body">
                  <h3>{'Mastering & Sound'}</h3>
                  <p>Consistent levels and sound, with any additional audio elements agreed in the brief.</p>
                </div>{' '}
                <span className="au-track__bar" aria-hidden="true">
                  <i style={{ '--w': '.54' }} />
                </span>
              </li>
              <li className="au-track" data-reveal="">
                <span className="au-track__n">06</span>{' '}
                <div className="au-track__body">
                  <h3>Final Audiobook Production</h3>
                  <p>Chapter files prepared around the delivery requirements of your chosen channels.</p>
                </div>{' '}
                <span className="au-track__bar" aria-hidden="true">
                  <i style={{ '--w': '.78' }} />
                </span>
              </li>
            </ol>
          </div>
        </section>
        <section className="au-studio on-dark" id="studio" aria-labelledby="studio-title">
          <div className="au-studio__media" aria-hidden="true">
            <img
              src="/assets/images/photos/1613870948964-7125fa3e1aab-2000.webp"
              width="2000"
              height="1333"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.06"
            />
          </div>
          <div className="container au-studio__inner">
            <div className="au-studio__copy">
              <span className="ghost-num" aria-hidden="true">
                03
              </span>
              <p className="eyebrow" data-reveal="">
                In the studio
              </p>
              <h2 className="au-h2" id="studio-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'The page becomes '}
                <em>a performance.</em>
              </h2>
              <p data-reveal="" style={{ '--d': '.14s' }}>
                Each production stage helps the recording feel consistent and comfortable to listen to.
              </p>
            </div>
            <ol className="au-chain" role="list" data-reveal="" style={{ '--d': '.18s' }}>
              <li>
                <span className="au-chain__dot" />
                <b>Manuscript</b>
                <span>Your book, prepared</span>
              </li>
              <li>
                <span className="au-chain__dot" />
                <b>Voice</b>
                <span>The narrator is chosen</span>
              </li>
              <li>
                <span className="au-chain__dot" />
                <b>Recording</b>
                <span>Captured in studio</span>
              </li>
              <li>
                <span className="au-chain__dot" />
                <b>Editing</b>
                <span>Noise and errors removed</span>
              </li>
              <li>
                <span className="au-chain__dot" />
                <b>Mastering</b>
                <span>Levels and sound polished</span>
              </li>
              <li>
                <span className="au-chain__dot" />
                <b>Final audiobook</b>
                <span>Ready for listeners</span>
              </li>
            </ol>
          </div>
        </section>
        <section className="section section--paper au-voice" id="narration" aria-labelledby="voice-title">
          <div className="container au-voice__grid">
            <figure className="au-voice__portrait" data-reveal="scale">
              <img
                src="/assets/images/photos/1492879291357-620e858bd26a-1000x1300.webp"
                width="1000"
                height="1300"
                alt="A gold condenser microphone lit softly against a dark background"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="au-voice__copy">
              <span className="ghost-num" aria-hidden="true">
                04
              </span>
              <p className="eyebrow" data-reveal="">
                Narration
              </p>
              <h2 className="au-h2" id="voice-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Choose a voice '}
                <em>that suits the writing.</em>
              </h2>
              <p className="au-voice__lede" data-reveal="" style={{ '--d': '.14s' }}>
                A reflective memoir asks for a different reading from an energetic adventure. We discuss the delivery
                and listen for a voice that feels at home in your book.
              </p>
              <p data-reveal="" style={{ '--d': '.18s' }}>
                Narrator options and sample material help you make that choice before the full recording begins.
              </p>
              <div className="au-score" data-reveal="" style={{ '--d': '.22s' }} aria-hidden="true">
                <div className="au-score__wave" />
                <ol className="au-score__marks">
                  <li style={{ '--x': '12%' }}>
                    <b>Tone</b>
                  </li>
                  <li style={{ '--x': '46%' }}>
                    <b>Pause</b>
                  </li>
                  <li style={{ '--x': '78%' }}>
                    <b>Emphasis</b>
                  </li>
                </ol>
              </div>
              <dl className="au-voice__terms" data-reveal="" style={{ '--d': '.26s' }}>
                <div>
                  <dt>Tone</dt>
                  <dd>Matched to your genre: warm, measured, tense or light.</dd>
                </div>
                <div>
                  <dt>Pacing</dt>
                  <dd>Planned with you before recording begins.</dd>
                </div>
                <div>
                  <dt>Delivery</dt>
                  <dd>Expressive storytelling that brings characters to life.</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
        <section className="section section--ivory au-process" id="process" aria-labelledby="proc-title">
          <div className="container">
            <div className="au-process__head">
              <div>
                <span className="ghost-num" aria-hidden="true">
                  05
                </span>
                <p className="eyebrow" data-reveal="">
                  Audio production process
                </p>
                <h2 className="au-h2" id="proc-title" data-reveal="" style={{ '--d': '.08s' }}>
                  {'A plan for '}
                  <em>each stage of production.</em>
                </h2>
              </div>
              <p data-reveal="" style={{ '--d': '.14s' }}>
                We agree on the narration and production approach, then work through recording, review, editing and
                delivery.
              </p>
            </div>
            <div className="au-timeline" data-reveal="">
              <div className="au-ruler" aria-hidden="true" />
              <ol className="au-clips" role="list">
                <li className="au-clip" style={{ '--g': '0.9' }}>
                  <span className="au-clip__bar" aria-hidden="true">
                    <i />
                  </span>
                  <span className="au-clip__n">01</span>
                  <h3>Manuscript review</h3>
                  <p>We review the text and note its tone, structure and pronunciation needs.</p>
                </li>
                <li className="au-clip" style={{ '--g': '1' }}>
                  <span className="au-clip__bar" aria-hidden="true">
                    <i />
                  </span>
                  <span className="au-clip__n">02</span>
                  <h3>{'Voice & direction'}</h3>
                  <p>We discuss voice options and agree on the style of delivery.</p>
                </li>
                <li className="au-clip" style={{ '--g': '1.6' }}>
                  <span className="au-clip__bar" aria-hidden="true">
                    <i />
                  </span>
                  <span className="au-clip__n">03</span>
                  <h3>Recording</h3>
                  <p>The manuscript is recorded with attention to clarity and pacing.</p>
                </li>
                <li className="au-clip" style={{ '--g': '1.2' }}>
                  <span className="au-clip__bar" aria-hidden="true">
                    <i />
                  </span>
                  <span className="au-clip__n">04</span>
                  <h3>Editing</h3>
                  <p>Recording mistakes and distracting sounds are addressed during the edit.</p>
                </li>
                <li className="au-clip" style={{ '--g': '0.9' }}>
                  <span className="au-clip__bar" aria-hidden="true">
                    <i />
                  </span>
                  <span className="au-clip__n">05</span>
                  <h3>Mastering</h3>
                  <p>Audio levels and consistency are checked across the chapter files.</p>
                </li>
                <li className="au-clip" style={{ '--g': '0.7' }}>
                  <span className="au-clip__bar" aria-hidden="true">
                    <i />
                  </span>
                  <span className="au-clip__n">06</span>
                  <h3>Final delivery</h3>
                  <p>The agreed audio files are organised and prepared for handover.</p>
                </li>
              </ol>{' '}
              <span className="au-playhead" aria-hidden="true" />
            </div>
          </div>
        </section>
        <section className="section section--ivory au-files" id="receive" aria-labelledby="files-title">
          <div className="container au-files__grid">
            <div className="au-files__head">
              <span className="ghost-num" aria-hidden="true">
                06
              </span>
              <p className="eyebrow" data-reveal="">
                What you receive
              </p>
              <h2 className="au-h2" id="files-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'Your completed '}
                <em>audio edition.</em>
              </h2>
              <p data-reveal="" style={{ '--d': '.14s' }}>
                The final delivery brings the edited chapters together in the formats agreed for your project.
              </p>
            </div>
            <div className="au-files__panel on-dark" data-reveal="scale" style={{ '--d': '.1s' }}>
              <div className="au-files__bar">
                <span className="label">Audiobook master</span>
                <span className="au-files__dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <ul className="au-files__list" role="list">
                <li>
                  <span className="au-files__n">A</span>
                  <div>
                    <h3>Final audio files</h3>
                    <p>The recorded chapters after editing and audio mastering.</p>
                  </div>
                  <span className="au-files__meta">Edited · Mastered</span>
                </li>
                <li>
                  <span className="au-files__n">B</span>
                  <div>
                    <h3>Chapter organization</h3>
                    <p>Files clearly labelled and arranged in reading order.</p>
                  </div>
                  <span className="au-files__meta">By chapter</span>
                </li>
                <li>
                  <span className="au-files__n">C</span>
                  <div>
                    <h3>Polished sound</h3>
                    <p>A review for consistent sound and comfortable listening levels.</p>
                  </div>
                  <span className="au-files__meta">Levels · Clarity</span>
                </li>
                <li>
                  <span className="au-files__n">D</span>
                  <div>
                    <h3>Prepared audio files</h3>
                    <p>Audio prepared for the publishing route in your project scope.</p>
                  </div>
                  <span className="au-files__meta">Ready to publish</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="au-still on-dark" aria-label="Every chapter deserves to be heard">
          <div className="au-still__media" aria-hidden="true">
            <img
              src="/assets/images/photos/1565828049078-006f77b61170-2200.webp"
              width="2200"
              height="1467"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.05"
            />
          </div>
          <div className="container au-still__inner">
            <p className="au-still__line" data-reveal="">
              Another way for readers to spend time with your words.
            </p>{' '}
            <span
              className="au-still__credit label"
              data-reveal=""
              style={{ '--d': '.1s' }}
            >{`${site.name} · Audio Book`}</span>
          </div>
        </section>
        <section className="section section--ivory faq" id="faq" aria-labelledby="faq-title">
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
                <em>making an audiobook.</em>
              </h2>
            </div>
            <div className="faq__list" data-faq="">
              <details className="qa" data-reveal="" open>
                <summary>
                  <span>What services do you offer for audiobook creation?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    We can help with narrator selection, recording, editing, mastering and preparation of the final
                    chapter files. Distribution support can be discussed as part of the scope.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.04s' }}>
                <summary>
                  <span>Can I choose the narrator for my audiobook?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>Yes. We discuss narrator options and the delivery you prefer before recording the full book.</p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.08s' }}>
                <summary>
                  <span>How long does it take to create an audiobook?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Book length, narrator availability, pronunciation needs and review rounds affect the schedule. We
                    discuss timing after reviewing the manuscript.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.12s' }}>
                <summary>
                  <span>Do you add background music and sound effects?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    We can discuss those elements when planning the production. Many books work best with clear
                    narration alone, so the choice should suit the text.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.16s' }}>
                <summary>
                  <span>What platforms will my audiobook be available on?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    We prepare files for the channels agreed in your project. Each platform has its own submission and
                    acceptance requirements.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.20s' }}>
                <summary>
                  <span>Can I make changes after the audiobook is recorded?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    You can flag recording issues during the agreed review stage. Substantial changes to the manuscript
                    may need additional recording time.
                  </p>
                </div>
              </details>
              <details className="qa" data-reveal="" style={{ '--d': '.24s' }}>
                <summary>
                  <span>How do I get started with your audiobook services?</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="qa__a">
                  <p>
                    Share the manuscript, approximate word count and the kind of voice you imagine. We will discuss the
                    production options with you.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="cta on-dark au-cta" id="contact" aria-labelledby="cta-title">
          <div className="cta__media" aria-hidden="true">
            <img
              src="/assets/images/photos/1655831068474-00da7930d340-1600.webp"
              alt=""
              loading="lazy"
              decoding="async"
              data-parallax="0.12"
            />
          </div>
          <div className="container cta__grid">
            <div className="cta__copy">
              <p className="eyebrow" data-reveal="">
                Start your audiobook
              </p>
              <h2 className="display cta__title" id="cta-title" data-reveal="" style={{ '--d': '.08s' }}>
                {'How would you like '}
                <em>your book to sound?</em>
              </h2>
              <p className="lead" data-reveal="" style={{ '--d': '.16s' }}>
                Tell us about the manuscript and your plans for a listening edition.
              </p>
              <div className="au-cta__btns" data-reveal="" style={{ '--d': '.2s' }}>
                <button className="btn btn--light" type="button" data-open-lead="">
                  {'Start Your Audiobook '}
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
              title="Start your audiobook"
              messageLabel="Tell us about the book and the voice you have in mind"
            />
          </div>
        </section>
      </main>
      <PageScripts scripts={scripts} />
    </>
  );
}
