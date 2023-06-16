import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <div className={cx('header')}>
            <button className={cx('btn-back')} onClick={onBack}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <span className={cx('header-title')}>{title}</span>
        </div>
    );
}

export default Header;
