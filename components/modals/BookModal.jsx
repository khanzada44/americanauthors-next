import { site } from '@/lib/site';

export default function BookModal() {
  return (
    <dialog className="modal modal--book" id="book-modal" data-book-modal="" aria-labelledby="bm-title">
      <div className="modal__panel modal__panel--book glass on-dark">
        <button className="modal__close icon-btn" type="button" aria-label="Close" data-close-modal="">
          <svg aria-hidden="true">
            <use href="#i-close" />
          </svg>
        </button>{' '}
        <div className="bm__stage">
          <div className="book3d is-mockup bm__book" data-tilt="">
            <div className="book3d__body">
              <div className="book3d__back" />{' '}
              <img className="book3d__cover" data-bm-cover="" width="699" height="1024" alt="" />
            </div>
            <div className="book3d__shadow" />
          </div>
        </div>
        <div className="bm__info">
          <span className="chip chip--gold">{`Published with ${site.name}`}</span>{' '}
          <h2 className="bm__title" id="bm-title" data-bm-title="" />
          <p className="bm__sub" data-bm-sub="" />
          <p className="bm__author">
            {'by '}
            <span data-bm-author="" />
          </p>
          <p className="bm__note">
            Working on a book of your own? Ask us about writing, editing, cover design and the steps towards
            publication.
          </p>
          <div className="bm__ctas">
            <button className="btn btn--primary" type="button" data-open-lead="">
              {'Discuss Your Book '}
              <svg className="btn__icon btn__icon--arrow" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </button>{' '}
            <a className="btn btn--glass" href="/book-publishing">
              Book Publishing
            </a>
          </div>
        </div>
      </div>
    </dialog>
  );
}
