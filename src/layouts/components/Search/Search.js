import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';

import * as searchServices from '~/services/searchServices';
import styles from './Search.module.scss';
import AccountItem from '~/components/AccountItem/';
import { SearchIcon } from '~/components/Icons/';
import useDebounce from '~/hooks/useDebounce';

import React from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  // 1:''
  const deBounced = useDebounce(searchValue, 500);
  const inputRef = useRef();

  useEffect(() => {
    if (!deBounced.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);
      const result = await searchServices.search(deBounced);
      setSearchResult(result);
      setLoading(false);
    };
    fetchApi();
  }, [deBounced]);

  const handlespace = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <div>
      <HeadlessTippy
        visible={showResult && searchResult.length > 0}
        interactive
        render={(attrs) => (
          <div className={cx('search-results')} tabIndex='-1' {...attrs}>
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
            placeholder='Search accounts and videos'
            spellCheck={false}
            onChange={handlespace}
            onFocus={() => {
              setShowResult(true);
            }}
          />
          {!!searchValue && !loading && (
            <button className={cx('clear')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

          <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;