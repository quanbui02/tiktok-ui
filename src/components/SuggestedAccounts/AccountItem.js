import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);
function AccountItem({ label, id, nickname, full_name, img, follower, like, tick }) {
  const renderPreview = ({ props }) => {
    if (label === 'Suggested accounts') {
      return (
        <div tabIndex="-1" {...props}>
          <PopperWrapper>
            <AccountPreview
              nickname={nickname}
              full_name={full_name}
              img={img}
              follower={follower}
              like={like}
              tick={tick}
            />
          </PopperWrapper>
        </div>
      );
    } else {
      return;
    }
  };
  return (
    <div key={id}>
      <Tippy
        offset={[-20, 0]}
        interactive
        delay={[800, 0]}
        placement="bottom"
        render={() => renderPreview(label, id, nickname, full_name, img, follower, like, tick)}
      >
        <div className={cx('account-item')}>
          <img className={cx('avatar')} alt="" src={img} />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>{nickname}</strong>
              {tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
            </p>
            <p className={cx('name')}>{full_name}</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propsTypes = {};
export default AccountItem;
