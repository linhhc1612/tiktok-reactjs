import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('popper')}>
            <img
                className={cx('image')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/4f31e1843fec1197bc9a7199407c66fe~c5_300x300.webp?x-expires=1686909600&x-signature=fGV26o0cK%2BKkuEwa%2BFndzhNXUpU%3D"
                alt="Account"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    vtv24news <FontAwesomeIcon className={cx('icon')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>VTV24</span>
            </div>
        </div>
    );
}

export default AccountItem;
