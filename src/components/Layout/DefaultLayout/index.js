import Header from '~/components/Layout/components/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import SideBar from './SideBar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('container-app')}>
            <Header />
            <div className={cx('content-app')}>
                <SideBar />
                <div className={cx('main-content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
