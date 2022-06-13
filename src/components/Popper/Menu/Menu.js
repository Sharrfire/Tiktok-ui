import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultfn = () => {};
function Menu({ children, items = [], hideOnClick = false, onChange = defaultfn }) {
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
            if (isParent) setHistory((prev) => [...prev, item.children]);
            else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  //reset to first page
  const handleResetMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
  };
  const handleOnBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };
  const renderResult = (attrs) => (
    <div className={cx('menu-list')} tabIndex='-1' {...attrs}>
      <PopperWrapper className={cx('menu-popper')}>
        {history.length > 1 && <Header title={current.title} onBack={handleOnBack} />}
        <div className={cx('menu-body')}>{renderItems()}</div>
      </PopperWrapper>
    </div>
  );
  return (
    // Using <div> of <>  tag around the reference element solves Tippy warning

    <Tippy
      interactive
      delay={[, 700]}
      offset={[12, 8]}
      hideOnClick={hideOnClick}
      placement='bottom-end'
      render={renderResult}
      onHide={handleResetMenu}
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
