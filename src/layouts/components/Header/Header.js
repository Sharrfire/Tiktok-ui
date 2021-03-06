import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faCircleQuestion,
  faKeyboard,
  faGears,
  faSignOut,
  faA,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import config from '~/config/';
import Button from '~/components/Button';
import image from '~/assets/images';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons/';
import Image from '../../../components/Image';
import Search from '../Search';
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
        <Link to={config.routes.home} className={cx('logo-link')}>
          <img src={image.logo} alt='Tiktok' />
        </Link>

        {/* Search */}
        <Search />
        <div className={cx('actions')}>
          {currentUser ? (
            // Using <div> of <>  tag around the reference element solves Tippy warning
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
                  <span className={cx('badge')}>12</span>
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
                src='https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/273152529_4821373474626367_7620855437813114053_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZBzFo1VGxncAX-xwCw_&_nc_ht=scontent.fsgn15-1.fna&oh=00_AT_bB9Lei579ZzGq-L9a8282A90zcomNXrwKgS2XQqN_tQ&oe=62AB6386'
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
