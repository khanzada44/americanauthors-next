/**
 * Hidden fields every enquiry form needs (was components/forms/security.php).
 * The CSRF token is filled in by assets/js/forms.js from /api/csrf.php just
 * before the form is sent, because a static page cannot print a session token.
 */
export default function FormSecurity({ kind = 'enquiry' }) {
  return (
    <>
      <input type="hidden" name="csrf_token" defaultValue="" />{' '}
      <input type="hidden" name="form_kind" defaultValue={kind} />{' '}
      <div className="form-honeypot" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" name="website" tabIndex="-1" autoComplete="off" />
        </label>
      </div>
    </>
  );
}
