import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import styles from './Search.module.scss';
import 'tippy.js/dist/tippy.css';

import { SearchIcon } from '~/components/icon/icon';
import * as searchServices from '~/services/searchServices';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem/AccountItem';
import { useEffect, useState, useRef } from 'react';
import { useDebounce } from '~/hooks';
const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };
  const inputRef = useRef();
  const deBounce = useDebounce(searchValue, 500);
  useEffect(() => {
    if (!deBounce.trim()) {
      setSearchResult([]);
      return;
    }
    const fetchApi = async () => {
      setLoading(true);
      const result = await searchServices.search(deBounce);
      setSearchResult(result);
      setLoading(false);
    };
    fetchApi();
  }, [deBounce]);
  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    // fix tippy warning 'div' or 'span'
    <div>
      <HeadlessTippy
        interactive={true}
        appendTo={() => document.body}
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Search accounts and videos"
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => {
              setShowResult(true);
            }}
          />
          {!!searchValue && !loading && (
            <button
              className={cx('clear')}
              onClick={() => {
                setSearchValue('');
                setSearchResult([]);
                inputRef.current.focus();
              }}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
          <button
            className={cx('search-btn')}
            onMouseDown={(e) => {
              e.preventDefault();
            }}
          >
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
