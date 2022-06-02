import { useState, forwardRef } from 'react';
import image from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';
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

export default Image;
