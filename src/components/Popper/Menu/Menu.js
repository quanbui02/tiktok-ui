import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import { useState } from 'react';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
const onChangeFnc = () => {};
function Menu({ children, items = [], hideOnClick = false, onChange = onChangeFnc }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  const handleResetFirstPage = () => {
    return setHistory((prev) => prev.slice(0, 1));
  };
  const renderResults = (attrs) => (
    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
      <PopperWrapper className={cx('menu-popper')}>
        {history.length > 1 && (
          <Header
            title={current.title}
            onBack={() => {
              setHistory((prev) => prev.slice(0, prev.length - 1));
            }}
          />
        )}
        <div className={cx('menu-body')}>{renderItems()}</div>
      </PopperWrapper>
    </div>
  );
  return (
    <Tippy
      hideOnClick={hideOnClick}
      interactive
      delay={[0, 700]}
      placement="bottom-end"
      render={renderResults}
      onHide={handleResetFirstPage}
    >
      {children}
    </Tippy>
  );
}
Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
