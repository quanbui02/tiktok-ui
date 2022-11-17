import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import config from '~/config';
import Tippy from '@tippyjs/react';
import styles from './Header.module.scss';
import 'tippy.js/dist/tippy.css';
import images from '~/assets/images';
import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/icon/icon';
import Image from '~/components/images/images';
import Search from '../Search';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng việt',
        },
      ],
    },
  },
  { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
  { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'keyboard shotcut' },
];
function Header() {
  const handleMenuChange = (MenuItem) => {
    switch (MenuItem.type) {
      case 'language':
        //handleMenuChange
        break;

      default:
        break;
    }
  };
  const currentUser = false;
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@tttt',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coins',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/Setting',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(true);
  };
  console.log(isLogin);
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo-link')}>
          <img src={images.logo} alt="tiktok" />
        </Link>

        <Search />
        <div className={cx('action')}>
          {currentUser ? (
            <>
              <Tippy content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary onClick={handleLogin}>
                Login
              </Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-1/185241785_1123296198165124_1309471503317228030_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Wo4olOFt0loAX94GDTR&_nc_ht=scontent-hkt1-1.xx&oh=00_AT9ObFd51k55ALthAEEVGhb1fLjFVYW5dFJBKC69p5fj6w&oe=637FE86B"
                className={cx('user-avatar')}
                alt="Nguyen Van A"
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
