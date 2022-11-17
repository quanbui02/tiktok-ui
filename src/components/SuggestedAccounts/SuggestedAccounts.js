import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import config from '~/config';
const cx = classNames.bind(styles);
function SuggestedAccounts({ label }) {
  const [accountItem, setAccountItem] = useState([]);
  const [activeItems, setActiveItems] = useState(true);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await axios.get('https://tiktok.fullstack.edu.vn/api/users/search?q=hoa&type=less');
        setAccountItem(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchApi();
  }, []);
  const handleSeeAll = () => {
    if (!activeItems) {
      return;
    } else {
      const fetchApiservice = async () => {
        try {
          const response = await axios.get('https://tiktok.fullstack.edu.vn/api/users/search?q=hoa&type=more');
          setAccountItem(response.data.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchApiservice();
      setActiveItems(!activeItems);
    }
  };
  const handleSeeless = () => {
    const fetchApiseeless = async () => {
      try {
        const response = await axios.get('https://tiktok.fullstack.edu.vn/api/users/search?q=hoa&type=less');
        setAccountItem(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchApiseeless();
    setActiveItems(!activeItems);
  };
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      {accountItem.length > 0 &&
        accountItem.map((value) => {
          return (
            <Link to={config.routes.profile}>
              <AccountItem
                label={label}
                key={value.id}
                id={value.id}
                nickname={value.nickname}
                full_name={value.full_name}
                img={value.avatar}
                follower={value.followers_count}
                like={value.likes_count}
                tick={value.tick}
              />
            </Link>
          );
        })}

      {activeItems ? (
        <p className={cx('more-btn')} onClick={handleSeeAll}>
          See more
        </p>
      ) : (
        <p className={cx('more-btn')} onClick={handleSeeless}>
          See less
        </p>
      )}
    </div>
  );
}
SuggestedAccounts.propsTypes = {
  label: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
