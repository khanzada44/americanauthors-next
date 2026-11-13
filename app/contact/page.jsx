import { pageMetadata } from '@/lib/seo';
import PageStyles from '@/components/layout/PageStyles';
import PageScripts from '@/components/layout/PageScripts';
import SectionRail from '@/components/navigation/SectionRail';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Talk to Us About Your Book',
  description:
    'Tell us about your idea, manuscript or published book. Ask about writing, editing, design, publishing and promotion support for your next step.',
  path: '/contact',
});

const styles = [
  '/assets/css/site2f72.css?v=20261109-eagle-logo',
  '/assets/css/contact2f72.css?v=20261003',
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
    href: '#ct-form',
    section: 'ct-form',
    label: 'Enquiry form',
    icon: '#i-pen',
    text: 'Form',
  },
];

const scripts = [
  '/assets/js/contact2f72.js?v=20261104-forms',
  '/assets/js/real-work2f72.js?v=20261003',
  '/assets/js/main2f72.js?v=20261105-production',
];

export default function ContactPage() {
  return (
    <>
      <PageStyles styles={styles} />
      <SectionRail links={railLinks} />
      <main id="main">
        <section className="ct" id="contact" aria-labelledby="ct-title">
          <div className="ct-open" id="top">
            <div className="container">
              <div className="ct-rule ct-rv" aria-hidden="true">
                <span>
                  {'American Authors '}
                  <i>/</i>
                  {' Contact'}
                </span>
                <span>The next chapter</span>
                <span>Let’s talk</span>
              </div>
              <div className="ct-open__grid">
                <div>
                  <p className="ct-eyebrow ct-rv">Tell us what you are working on</p>
                  <h1 className="ct-title ct-rv" id="ct-title">
                    {'Let’s talk '}
                    <em>about your book.</em>
                  </h1>
                </div>
                <div className="ct-open__side ct-rv">
                  <p className="ct-lead">
                    An idea, a rough draft or a published title is enough to start. Share your progress and what kind of
                    help would make a difference.
                  </p>
                  <ol className="ct-path" role="list" aria-label="From idea to publication, then the next step">
                    <li>Idea</li>
                    <li>Manuscript</li>
                    <li>Editing</li>
                    <li>Production</li>
                    <li>Publication</li>
                    <li className="is-now">Conversation</li>
                  </ol>{' '}
                  <a className="ct-link" href="#ct-form">
                    {'Share your book plans '}
                    <svg aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <figure className="ct-plate">
            <div className="container">
              <div className="ct-plate__img ct-rv">
                <img
                  src="/assets/images/photos/1710360798685-c7a46e12a36e-2200x1100.webp"
                  alt="Hands working over manuscript pages on a desk"
                  loading="lazy"
                  decoding="async"
                  data-parallax="0.06"
                />
              </div>
              <figcaption className="ct-plate__cap">
                <span>Plate</span>
                Every project begins on the page.
              </figcaption>
            </div>
          </figure>
          <div className="ct-main">
            <div className="container ct-main__grid">
              <aside className="ct-info" aria-labelledby="ct-info-title">
                <p className="ct-label ct-rv" id="ct-info-title">
                  Get in touch
                </p>
                <dl className="ct-list ct-rv">
                  <div>
                    <dt>Email</dt>
                    <dd>
                      <a href={`mailto:${site.email}`}>{site.email}</a>
                    </dd>
                  </div>
                  <div>
                    <dt>Phone</dt>
                    <dd>
                      <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
                    </dd>
                  </div>
                  <div>
                    <dt>WhatsApp</dt>
                    <dd>
                      <a href="https://wa.me/17139120056" target="_blank" rel="noopener">
                        +1 713-912-0056
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt>Location</dt>
                    <dd>{site.address}</dd>
                  </div>
                  <div>
                    <dt>Support</dt>
                    <dd>
                      Project Support
                      <small>Contact our team with questions about your book and the work in progress.</small>
                    </dd>
                  </div>
                  <div>
                    <dt>Follow</dt>
                    <dd className="ct-social" />
                  </div>
                </dl>
                <figure className="ct-info__fig ct-rv">
                  <img
                    src="/assets/images/photos/1521316973612-36489899f29b-900x1100.webp"
                    alt="An author reading at a wooden table beside a cup of coffee"
                    loading="lazy"
                    decoding="async"
                  />{' '}
                  <figcaption>A little time with the manuscript is a useful place to begin.</figcaption>
                </figure>
              </aside>
              <form
                method="post"
                action="/api/contact.php"
                encType="multipart/form-data"
                data-site-form=""
                className="ct-form ct-rv"
                id="ct-form"
                data-lead-form=""
                data-ct-form=""
                aria-labelledby="ct-form-title"
              >
                <input type="hidden" name="csrf_token" defaultValue="" />{' '}
                <input type="hidden" name="form_kind" defaultValue="contact" />{' '}
                <div className="form-honeypot" aria-hidden="true">
                  <label>
                    Leave this field empty
                    <input type="text" name="website" tabIndex="-1" autoComplete="off" />
                  </label>
                </div>
                <header className="ct-form__head">
                  <p className="ct-label">Your project enquiry</p>
                  <h3 className="ct-form__title" id="ct-form-title">
                    {'Share a little '}
                    <em>about the project.</em>
                  </h3>
                  <p className="ct-form__sub">
                    Tell us what you are writing, how far you have got and what you would like help with.
                  </p>
                </header>
                <fieldset className="ct-set">
                  <legend>
                    <span className="ct-set__n">01</span>
                    Which services interest you?
                  </legend>
                  <div className="ct-opts">
                    <label className="ct-opt">
                      <input type="checkbox" value="Ghostwriting" name="services[]" data-ct-service="" />
                      <span>Ghostwriting</span>
                    </label>{' '}
                    <label className="ct-opt">
                      <input type="checkbox" value="Book Editing" name="services[]" data-ct-service="" />
                      <span>Book Editing</span>
                    </label>{' '}
                    <label className="ct-opt">
                      <input type="checkbox" value="Book Publishing" name="services[]" data-ct-service="" />
                      <span>Book Publishing</span>
                    </label>{' '}
                    <label className="ct-opt">
                      <input type="checkbox" value="Book Promotion" name="services[]" data-ct-service="" />
                      <span>Book Promotion</span>
                    </label>{' '}
                    <label className="ct-opt">
                      <input type="checkbox" value="Book Cover Design" name="services[]" data-ct-service="" />
                      <span>Book Cover Design</span>
                    </label>{' '}
                    <label className="ct-opt">
                      <input type="checkbox" value="Illustration" name="services[]" data-ct-service="" />
                      <span>Illustration</span>
                    </label>{' '}
                    <label className="ct-opt">
                      <input type="checkbox" value="Audio Book" name="services[]" data-ct-service="" />
                      <span>Audio Book</span>
                    </label>{' '}
                    <label className="ct-opt">
                      <input type="checkbox" value="Author Website" name="services[]" data-ct-service="" />
                      <span>Author Website</span>
                    </label>{' '}
                    <label className="ct-opt">
                      <input type="checkbox" value="Book Video" name="services[]" data-ct-service="" />
                      <span>Book Video</span>
                    </label>{' '}
                    <label className="ct-opt">
                      <input type="checkbox" value="Other" name="services[]" data-ct-service="" />
                      <span>Other</span>
                    </label>
                  </div>
                </fieldset>
                <fieldset className="ct-set">
                  <legend>
                    <span className="ct-set__n">02</span>
                    How far has your book progressed?
                  </legend>
                  <div className="ct-stages">
                    <label className="ct-stage">
                      <input type="radio" name="stage" value="Idea" data-ct-stage="" />
                      <span className="ct-stage__n">01</span>
                      <span className="ct-stage__t">Idea</span>
                    </label>{' '}
                    <label className="ct-stage">
                      <input type="radio" name="stage" value="Manuscript" data-ct-stage="" />
                      <span className="ct-stage__n">02</span>
                      <span className="ct-stage__t">Manuscript</span>
                    </label>{' '}
                    <label className="ct-stage">
                      <input type="radio" name="stage" value="Editing" data-ct-stage="" />
                      <span className="ct-stage__n">03</span>
                      <span className="ct-stage__t">Editing</span>
                    </label>{' '}
                    <label className="ct-stage">
                      <input type="radio" name="stage" value="Production" data-ct-stage="" />
                      <span className="ct-stage__n">04</span>
                      <span className="ct-stage__t">Production</span>
                    </label>{' '}
                    <label className="ct-stage">
                      <input type="radio" name="stage" value="Ready to publish" data-ct-stage="" />
                      <span className="ct-stage__n">05</span>
                      <span className="ct-stage__t">Ready to publish</span>
                    </label>
                  </div>
                </fieldset>
                <fieldset className="ct-set">
                  <legend>
                    <span className="ct-set__n">03</span>
                    Your details
                  </legend>
                  <div className="ct-fields">
                    <div className="ct-field">
                      <label htmlFor="ct-name">
                        {'Full name '}
                        <abbr title="required">*</abbr>
                      </label>
                      <input
                        id="ct-name"
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        minLength="2"
                        maxLength="100"
                      />
                    </div>
                    <div className="ct-field">
                      <label htmlFor="ct-email">
                        {'Email address '}
                        <abbr title="required">*</abbr>
                      </label>
                      <input id="ct-email" type="email" name="email" autoComplete="email" required maxLength="254" />
                    </div>
                    <div className="ct-field ct-field--full">
                      <label htmlFor="ct-phone">
                        {'Phone number '}
                        <abbr title="required">*</abbr>
                      </label>
                      <input id="ct-phone" type="tel" name="phone" autoComplete="tel" required maxLength="40" />
                    </div>
                    <div className="ct-field ct-field--full">
                      <label htmlFor="ct-note">
                        {'What would you like help with? '}
                        <abbr title="required">*</abbr>
                      </label>
                      <textarea
                        required
                        minLength="10"
                        maxLength="5000"
                        name="message"
                        id="ct-note"
                        rows="5"
                        data-ct-note=""
                        placeholder="Tell us the subject, your progress and the support you are looking for."
                      />
                    </div>
                    <div className="ct-field ct-field--full ct-file" data-ct-file="" data-max-mb="10">
                      <label htmlFor="ct-file">
                        {'Share a manuscript or sample '}
                        <span className="ct-file__opt">Optional</span>
                      </label>{' '}
                      <div className="ct-file__box">
                        <input
                          id="ct-file"
                          className="ct-file__input"
                          type="file"
                          name="manuscript"
                          accept=".pdf,.png,.jpg,.jpeg,application/pdf,image/png,image/jpeg"
                          aria-describedby="ct-file-hint ct-file-err"
                        />{' '}
                        <svg className="ct-file__icon" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            d="M12 15V4M7.5 8.5 12 4l4.5 4.5M5 14v4.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V14"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>{' '}
                        <span className="ct-file__text">
                          <span className="ct-file__name" data-ct-file-name="">
                            Choose a manuscript or sample to share
                          </span>
                          <span className="ct-file__hint" id="ct-file-hint">
                            Accepted formats: PDF, PNG, JPG, JPEG · up to 10 MB
                          </span>
                        </span>{' '}
                        <span className="ct-file__btn" aria-hidden="true" data-ct-file-btn="">
                          Choose a File
                        </span>
                      </div>{' '}
                      <button
                        className="ct-file__remove"
                        type="button"
                        data-ct-file-remove=""
                        aria-label="Remove the selected file"
                        hidden
                      >
                        Remove attachment
                      </button>{' '}
                      <p className="ct-file__err" id="ct-file-err" role="alert" data-ct-file-err="" />
                    </div>
                  </div>
                  <p className="ct-summary" data-ct-summary="" aria-live="polite">
                    We will receive these selections along with your message.
                  </p>
                </fieldset>{' '}
                <label className="check ct-consent">
                  <input type="checkbox" name="marketing_consent" value="1" />{' '}
                  <span>
                    {`I agree to receive marketing text messages about book services from ${site.name} at the number I provide, including automated messages. This choice is optional and is not required to purchase a service. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe or HELP for assistance. `}
                    <a href="/privacy-policy">Privacy Policy</a>
                    {' & '}
                    <a href="/terms-and-conditions">{'Terms & Conditions'}</a>.
                  </span>
                </label>{' '}
                <div className="ct-form__foot">
                  <button className="btn btn--primary ct-submit" type="submit">
                    {'Send Your Enquiry '}
                    <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </button>{' '}
                  <p className="form-status ct-status" role="status" data-form-status="" />
                </div>
              </form>
            </div>
          </div>
          <div className="ct-steps">
            <div className="container">
              <p className="ct-label ct-rv">After you send your enquiry</p>
              <ol className="ct-steps__list ct-rv" role="list">
                <li>
                  <span>01</span>
                  Describe your book
                </li>
                <li>
                  <span>02</span>
                  Share your progress
                </li>
                <li>
                  <span>03</span>
                  We consider your enquiry
                </li>
                <li>
                  <span>04</span>
                  We discuss a suitable next step
                </li>
              </ol>
            </div>
          </div>
          <div className="rw-print ct-proof">
            <div className="container rw-print__grid">
              <div className="rw-print__copy">
                <p className="rw-eyebrow rw-rv">The book you have in mind</p>
                <h3 className="rw-h2 rw-rv">
                  {'From your first enquiry '}
                  <em>to a plan for the book.</em>
                </h3>
                <p className="rw-lead rw-rv">{`Explore titles from ${site.name} while you think about the next step for your own manuscript.`}</p>
                <p className="rw-now" data-rw-now="" aria-live="polite">
                  <span className="rw-now__n">In print</span>
                  <span className="rw-now__main">
                    <span className="rw-cap__t">Change to Stay Unchanged</span>
                    <span className="rw-cap__s">Authoritarian Reform in Kazakhstan Under the Tokayev Regime</span>
                    <span className="rw-cap__a">Yerzhan Dosmukhamedov</span>
                  </span>
                  <span className="rw-now__hint">Explore a cover for book details</span>
                </p>
              </div>
              <div className="rw-rv">
                <div className="rw-table" data-rw-table="">
                  <div className="rw-table__row">
                    <a
                      className="rw-book rw-table__book"
                      href="/our-work#book-26"
                      aria-label="You vs You by Waheed Shaffiek, view in Our Work"
                      data-rw-book="26"
                      style={{ '--s': '0.74', '--z': '9' }}
                    >
                      <span className="rw-book__obj">
                        <img
                          className="rw-book__img"
                          src="/assets/images/books/book-26.webp"
                          width="600"
                          height="1024"
                          alt="You vs You: How to Overcome Doubt, Build Discipline, and Create a Life with Purpose by Waheed Shaffiek, shown as a hardcover book"
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="rw-book__floor" aria-hidden="true" />
                      </span>
                      <span className="rw-cap" aria-hidden="true">
                        <span className="rw-cap__t">You vs You</span>
                        <span className="rw-cap__s">
                          How to Overcome Doubt, Build Discipline, and Create a Life with Purpose
                        </span>
                        <span className="rw-cap__a">Waheed Shaffiek</span>
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
                      href="/our-work#book-27"
                      aria-label="Change to Stay Unchanged by Yerzhan Dosmukhamedov, view in Our Work"
                      data-rw-book="27"
                      style={{ '--s': '1', '--z': '20' }}
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
                  </div>
                  <div className="rw-table__surface" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PageScripts scripts={scripts} />
    </>
  );
}
