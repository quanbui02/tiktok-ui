import Button from '~/components/Button/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
  const classes = cx('menu-item', { separate: data.separate });
  return (
    <Button to={data.to} className={classes} onClick={onClick}>
      <span className={cx('iconMenu')}> {data.icon}</span>
      {data.title}
    </Button>
  );
}
MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};
export default MenuItem;
