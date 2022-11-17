import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button/Button';
const cx = classNames.bind(styles);
function AccountPreview({ nickname, full_name, img, follower, like, tick }) {
  // console.log(result);
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        {<img className={cx('avatar')} src={img} alt="" />}
        <div>
          <Button primary className={cx('btn-follower')}>
            Follow
          </Button>
        </div>
      </header>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>{nickname}</strong>
          {tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </p>
        <p className={cx('name')}>{full_name}</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>{follower} </strong>
          <span className={cx('label')}>Folowers</span>
          <strong className={cx('value')}>{like} </strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
