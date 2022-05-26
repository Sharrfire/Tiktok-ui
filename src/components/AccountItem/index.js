import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/273152529_4821373474626367_7620855437813114053_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NRTdewH8rmQAX-yoNIQ&tn=OZz1knuF3aOr8wgk&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT905X2FdOSWD8C_B5SLjmMdE5MJMUlZE8Y3LgzWzflFJw&oe=6293A886'
        alt='account'
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>BaoTran13</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('user-name')}>Vũ Ngọc Bảo Trân</span>
      </div>
    </div>
  );
}

export default AccountItem;
