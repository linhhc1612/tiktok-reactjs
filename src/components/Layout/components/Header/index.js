import { Link } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faSpinner,
    faCircleXmark,
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faMoon,
    faPaperPlane,
    faMessage,
    faUser,
    faBookmark,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper, MenuList } from '~/components/Popper';
import { ResultLine } from '~/components/ResultLine';
import { AccountItem } from '~/components/AccountItem';
import Button from '~/components/Button';
import ButtonDarkMode from '~/components/Button/ButtonDarkMode';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const LIST_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        subMenu: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    key: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    key: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    key: 'jp',
                    title: 'Japan',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard Shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
        input: <ButtonDarkMode />,
    },
];

function Header() {
    const [visible, setVisible] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setVisible([]);
        }, 0);
    }, []);

    const handleChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log(menuItem);
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Favorites',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
        },
        ...LIST_ITEM,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            separate: true,
        },
    ];

    return (
        <div className={cx('wrapper', 'row-app')}>
            {/* Logo Header */}
            <div className={cx('logo')}>
                <Link to="/">
                    <img src={images.logo} alt="" />
                </Link>
            </div>

            {/* Group search */}
            <HeadlessTippy
                interactive
                visible={visible.length > 0}
                render={(attrs) => (
                    <div className={cx('popper')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <ResultLine />
                            <ResultLine />
                            <ResultLine />
                            <ResultLine />
                            <ResultLine />
                            <span className={cx('title')}>Accounts</span>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <div className={cx('more')}>View all results for "vtv"</div>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder="Search" />
                    <button className={cx('btn-clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <button className={cx('btn-loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                    <button className={cx('btn-search')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>

            {/* Group action */}
            <div className={cx('action')}>
                <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                    Update
                </Button>
                {currentUser ? (
                    <Fragment>
                        <Tippy content="Message" placement="bottom">
                            <button className={cx('btn-icon')}>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </Tippy>
                        <Tippy content="Inbox" placement="bottom">
                            <button className={cx('btn-icon')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                        </Tippy>
                    </Fragment>
                ) : (
                    <Fragment>
                        <Button primary>Login</Button>
                    </Fragment>
                )}
                <MenuList listItem={currentUser ? userMenu : LIST_ITEM} onChange={handleChange}>
                    {currentUser ? (
                        <button className={cx('avt-user')}>
                            <Image
                                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/4f31e1843fec1197bc9a7199407c66fe~c5_300x300.webp?x-expires=1686909600&x-signature=fGV26o0cK%2BKkuEwa%2BFndzhNXUpU%3D"
                                alt="avt"
                            />
                        </button>
                    ) : (
                        <button className={cx('btn-menu')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}
                </MenuList>
            </div>
        </div>
    );
}

export default Header;
