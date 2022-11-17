import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Footer() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('footer')}>
        <div className={cx('item-footer')}>
          <div>About</div>
          <div>Newsroom</div>
          <div>Contact</div>
          <div>Careers</div>
          <div>ByteDance</div>
        </div>
        <div className={cx('item-footer')}>
          <div>TikTok for Good</div>
          <div>Advertise</div>
          <div>Developers</div>
          <div>Transparency</div>
          <div>TikTok Rewards</div>
          <div>TikTok Browse</div>
          <div>TikTok Embeds</div>
        </div>
        <div className={cx('item-footer')}>
          <div>About</div>
          <div>Newsroom</div>
          <div>Contact</div>
          <div>Careers</div>
          <div>ByteDance</div>
        </div>
      </div>
      <p className={cx('history')}>© 2022 TikTok</p>
    </div>
  );
}

export default Footer;
