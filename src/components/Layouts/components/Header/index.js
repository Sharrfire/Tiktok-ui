import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faEllipsisVertical,
  faCircleQuestion,
  faKeyboard,
  faGears,
  faSignOut,
  faA,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import image from '~/assets/images';
import styles from './Header.module.scss';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { InboxIcon, MessageIcon, SearchIcon, UploadIcon } from '~/components/Icons';
import Image from '../Image';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faA} />,
    title: 'English',
    children: {
      title: 'language',
      data: [
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
      ],
    },
  },
  { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
  { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
];
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 1000);
  });
  // handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case ' language':
        //Handle change language
        console.log('change language');
        break;
      default:
    }
  };
  const currentUser = true;
  const userMenu = [
    { icon: <FontAwesomeIcon icon={faUser} />, title: 'View Profile', to: '/@tran' },
    { icon: <FontAwesomeIcon icon={faTiktok} />, title: 'Get coins', to: '/coin' },
    { icon: <FontAwesomeIcon icon={faGears} />, title: 'Setting ', to: '/setting ' },
    ...MENU_ITEMS,
    { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Log out ', to: '/logout ', separate: true },
  ];

  return (
    <header className={cx('warper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={image.logo} alt='Tiktok' />
        </div>
        <HeadlessTippy
          visible={searchResult.length > 0}
          interactive
          render={(attrs) => (
            <div className={cx('search-results')} tabIndex='-1' {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder='Search accounts and videos' spellCheck='false' />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')}>
              <SearchIcon />
            </button>
          </div>
        </HeadlessTippy>

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content='Upload video' placement='bottom'>
                <button className={cx('action-btn')} type='button'>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content='Message' placement='bottom'>
                <button className={cx('action-btn')} type='button'>
                  <MessageIcon />
                </button>
              </Tippy>{' '}
              <Tippy delay={[0, 50]} content='Inbox' placement='bottom'>
                <button className={cx('action-btn')} type='button'>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Login</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                alt='Dinh Ngoc Thai'
                src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/273152529_4821373474626367_7620855437813114053_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NRTdewH8rmQAX-yoNIQ&tn=OZz1knuF3aOr8wgk&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT905X2FdOSWD8C_B5SLjmMdE5MJMUlZE8Y3LgzWzflFJw&oe=6293A886'
                fallback='https://icon-library.com/images/icon-user/icon-user-15.jpg'
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
