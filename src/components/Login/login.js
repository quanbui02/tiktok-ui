import styles from './login.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Login() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('overlay')}>
        <div className={cx('login-modal')}>
          <div className={cx('login-container')}></div>
          <div className={cx('sign-up')}>sign-up</div>
        </div>
        <div className={cx('icon')}>
          <faX />
        </div>
      </div>
    </div>
  );
}

export default Login;
