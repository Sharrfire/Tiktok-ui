import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import image from '~/assets/images';
import styles from './Image.module.scss';
const Image = forwardRef(({ src, atl, className, fallback: customFallback = image.noImage, ...props }, ref) => {
  const [fallback, setFallback] = useState('');
  const handleError = () => {
    setFallback(customFallback);
  };
  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallback || src}
      alt={atl}
      {...props}
      onError={handleError}
    />
  );
});

Image.propTypes = {
  src: PropTypes.string,
  atl: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
