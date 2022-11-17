import styles from './DiscoverFooter.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function DiscoverFooter({ label }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      <div className={cx('item')}>
        <a>
          <button className={cx('list-item')}>
            <span>#</span>
            <p>suthatla</p>
          </button>
        </a>
        <a>
          <button className={cx('list-item')}>
            <span>#</span>
            <p>makedoi</p>
          </button>
        </a>
        <a>
          <button className={cx('list-item')}>
            <span>#</span>
            <p>sansangthaydoi</p>
          </button>
        </a>
        <a>
          <button className={cx('list-item')}>
            <FontAwesomeIcon icon={faMusic} className={cx('icon')} />
            <p>Yêu đơn phương là gì</p>
          </button>
        </a>
        <a>
          <button className={cx('list-item')}>
            <span>#</span>
            <p>suthatla</p>
          </button>
        </a>
        <a>
          <button className={cx('list-item')}>
            <span>#</span>
            <p>suthatla</p>
          </button>
        </a>
        <a>
          <button className={cx('list-item')}>
            <FontAwesomeIcon icon={faMusic} className={cx('icon')} />
            <p>Yêu đơn phương là gì là gì là gì là gì</p>
          </button>
        </a>
      </div>
    </div>
  );
}

export default DiscoverFooter;
