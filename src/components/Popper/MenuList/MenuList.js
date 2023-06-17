import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFunc = () => {};

function MenuList({ children, listItem = [], onChange = defaultFunc }) {
    const [history, setHistory] = useState([{ data: listItem }]);

    const currentArr = history[history.length - 1];

    const renderItems = () => {
        return currentArr.data.map((item, index) => {
            const isArrParent = !!item.subMenu;
            return (
                <MenuItem
                    item={item}
                    key={index}
                    onClick={() => {
                        if (isArrParent) {
                            setHistory((prevState) => [...prevState, item.subMenu]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            delay={[0, 800]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('wrapper')}>
                        {history.length > 1 && (
                            <Header
                                title={currentArr.title}
                                onBack={() => {
                                    setHistory((prevState) => prevState.slice(0, prevState.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

MenuList.propTypes = {
    children: PropTypes.node,
    listItem: PropTypes.array,
    onChange: PropTypes.func,
};

export default MenuList;
