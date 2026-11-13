import { site } from '@/lib/site';
import { formRules } from '@/lib/forms';
import FormSecurity from './FormSecurity';

/** The "Share your book plans" enquiry form (was components/forms/lead-form.php). */
export default function LeadForm({
  id,
  title = 'Share your book plans',
  rows = 4,
  messageLabel = 'What would you like help with?',
}) {
  return (
    <form
      method="post"
      action="/api/contact.php"
      encType="multipart/form-data"
      data-site-form=""
      className="lead-form glass"
      id={id}
      data-lead-form=""
      data-reveal="scale"
      style={{ '--d': '.1s' }}
      aria-labelledby="form-title"
    >
      <FormSecurity />
      <h3 className="lead-form__title" id="form-title">
        {title}
      </h3>
      <p className="lead-form__sub">
        Describe your book, draft or publishing plans. We will review your message and get in touch.
      </p>
      <div className="lead-form__grid">
        <label className="field">
          <input
            type="text"
            name="name"
            placeholder=" "
            autoComplete="name"
            required
            minLength={formRules.name_min}
            maxLength={formRules.name_max}
          />
          <span>Full name *</span>
        </label>{' '}
        <label className="field">
          <input
            type="email"
            name="email"
            placeholder=" "
            autoComplete="email"
            required
            maxLength={formRules.email_max}
          />
          <span>Email address *</span>
        </label>{' '}
        <label className="field field--full">
          <input type="tel" name="phone" placeholder=" " autoComplete="tel" required maxLength="40" />
          <span>Phone number *</span>
        </label>{' '}
        <label className="field field--full">
          <textarea
            required
            minLength={formRules.message_min}
            maxLength={formRules.message_max}
            name="message"
            placeholder=" "
            rows={rows}
          />
          <span>{messageLabel} *</span>
        </label>
      </div>{' '}
      <label className="check">
        <input type="checkbox" name="marketing_consent" value="1" />{' '}
        <span>
          {`I agree to receive marketing text messages about book services from ${site.name} at the number I provide, including automated messages. This choice is optional and is not required to purchase a service. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe or HELP for assistance. `}
          <a href="/privacy-policy">Privacy Policy</a>
          {' & '}
          <a href="/terms-and-conditions">Terms &amp; Conditions</a>.
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
  );
}
