import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header-wrapper', 'row-app')}>
            <p>Logo</p>
        </div>
    );
}

export default Header;
