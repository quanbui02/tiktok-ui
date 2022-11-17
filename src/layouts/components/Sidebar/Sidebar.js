import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
  HomeIcon,
  HomeActiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon,
  LiveIcon,
  LiveActiveIcon,
} from '~/components/icon/icon';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';
import DiscoverFooter from '~/components/Discover/DiscoverFooter';
import Footer from '~/components/Footer/Footer';
const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>
      <SuggestedAccounts label="Suggested accounts" />
      <SuggestedAccounts label="Following accounts" />
      <DiscoverFooter label="Discover" />
      <Footer />
    </aside>
  );
}

export default Sidebar;
