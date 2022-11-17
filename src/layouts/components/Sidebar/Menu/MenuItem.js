import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);
function MenuItem({ title, to, icon, activeIcon }) {
  return (
    <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })} end>
      <span className={cx('icon')}>{icon}</span>
      <span className={cx('activeIcon')}>{activeIcon}</span>
      <span className={cx('title')}>{title}</span>
    </NavLink>
  );
}

MenuItem.propsTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};
export default MenuItem;
