import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import * as searchService from '~/services/searchService';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { AccountItem } from '~/components/AccountItem';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounceSearch = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounceSearch.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debounceSearch);

            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debounceSearch]);

    const handleClearResult = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        //
        <div className={cx('wrap-tippy')}>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('popper')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <span className={cx('title')}>Accounts</span>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                            <div className={cx('more')}>View all results for "{searchValue}"</div>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search"
                        spellCheck={false}
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                        onFocus={() => {
                            setShowResult(true);
                        }}
                    />
                    {/* Button clear result */}
                    {searchValue && !loading && (
                        <button className={cx('btn-clear')} onClick={handleClearResult}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {/* Button loading result */}
                    {loading && (
                        <button className={cx('btn-loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                    )}

                    {/* Button search result */}
                    <button className={cx('btn-search')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
