import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './FormComment.module.css';

const FormComment = ({
  onSubmit,
  setComment,
  setAuthor,
  author,
  commentValue,
  error,
  isDisabled,
  isSubmitting,
}) => (
  <div className={styles['form-wrapper']}>
    <h3 className={styles['form-wrapper__title']}>Leave your comment</h3>
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles['form__input-wrapper']}>
        <label className={styles.form__label} htmlFor="author-comment">
          Author
        </label>
        <input
          className={styles['form__input-text']}
          id="author-comment"
          type="text"
          placeholder="Type your name..."
          value={author}
          onChange={setAuthor}
        />
      </div>
      <div className={styles['form__input-wrapper']}>
        <label className={styles.form__label} htmlFor="comment-value">
          Comment
        </label>
        <textarea
          className={classNames(
            styles['form__input-text'],
            styles['form__text-area'],
          )}
          id="comment-value"
          placeholder="Type your comment..."
          value={commentValue}
          onChange={setComment}
        />
      </div>
      <button
        className={classNames(styles.form__button, {
          [styles['form__button--disabled']]: isDisabled,
        })}
        type="submit"
        disabled={isDisabled}
      >
        {isSubmitting ? 'Adding comment...' : 'Add comment'}
      </button>
    </form>
    {error && (
      <span id="comment-error" className={styles.form__error}>
        {error}!
      </span>
    )}
  </div>
);

FormComment.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setComment: PropTypes.func.isRequired,
  setAuthor: PropTypes.func.isRequired,
  commentValue: PropTypes.string,
  author: PropTypes.string,
  error: PropTypes.string,
  isDisabled: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

FormComment.defaultProps = {
  commentValue: '',
  author: '',
  error: '',
};

export default FormComment;
