import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import image from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx('warper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={image.logo} alt='Tiktok' />
        </div>
        <div className={cx('search')}>
          <input placeholder='Search accounts and videos' spellCheck='false' />
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx('actions ')}>Action</div>
      </div>
    </header>
  );
}

export default Header;
