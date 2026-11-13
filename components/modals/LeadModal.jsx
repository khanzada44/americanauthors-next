import { site } from '@/lib/site';

export default function LeadModal() {
  return (
    <dialog className="modal" id="lead-modal" data-lead-modal="" aria-labelledby="modal-title">
      <div className="modal__panel glass on-dark">
        <button className="modal__close icon-btn" type="button" aria-label="Close" data-close-modal="">
          <svg aria-hidden="true">
            <use href="#i-close" />
          </svg>
        </button>{' '}
        <p className="eyebrow">Discuss your book project</p>
        <h2 className="h3" id="modal-title">
          Where are you with your book?
        </h2>
        <form
          method="post"
          action="/api/contact.php"
          encType="multipart/form-data"
          data-site-form=""
          className="lead-form lead-form--modal"
          data-lead-form=""
        >
          <input type="hidden" name="csrf_token" defaultValue="" />{' '}
          <input type="hidden" name="form_kind" defaultValue="enquiry" />{' '}
          <div className="form-honeypot" aria-hidden="true">
            <label>
              Leave this field empty
              <input type="text" name="website" tabIndex="-1" autoComplete="off" />
            </label>
          </div>
          <div className="lead-form__grid">
            <label className="field">
              <input
                type="text"
                name="name"
                placeholder=" "
                autoComplete="name"
                required
                minLength="2"
                maxLength="100"
              />
              <span>Full name *</span>
            </label>{' '}
            <label className="field">
              <input type="email" name="email" placeholder=" " autoComplete="email" required maxLength="254" />
              <span>Email address *</span>
            </label>{' '}
            <label className="field field--full">
              <input type="tel" name="phone" placeholder=" " autoComplete="tel" required maxLength="40" />
              <span>Phone number *</span>
            </label>{' '}
            <label className="field field--full">
              <textarea required minLength="10" maxLength="5000" name="message" placeholder=" " rows="3" />
              <span>What would you like help with? *</span>
            </label>
          </div>{' '}
          <label className="check">
            <input type="checkbox" name="marketing_consent" value="1" />{' '}
            <span>
              {`I agree to receive marketing text messages about book services from ${site.name} at the number I provide, including automated messages. This choice is optional and is not required to purchase a service. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe or HELP for assistance. `}
              <a href="/privacy-policy">Privacy Policy</a>
              {' & '}
              <a href="/terms-and-conditions">{'Terms & Conditions'}</a>.
            </span>
          </label>{' '}
          <div className="lead-form__foot">
            <button className="btn btn--primary" type="submit">
              {'Send Your Enquiry '}
              <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </button>{' '}
            <p className="form-status" role="status" data-form-status="" />
          </div>
        </form>
      </div>
    </dialog>
  );
}
