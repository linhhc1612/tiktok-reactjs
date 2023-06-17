import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('sidebar')}>
            <p>Side Bar</p>
        </div>
    );
}

export default SideBar;
