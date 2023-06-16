import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ResultLine.module.scss';
import classNames from 'classnames/bind';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ResultLine() {
    return (
        <div className={cx('popper')}>
            <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
            <span className={cx('info')}>VTV</span>
        </div>
    );
}

export default ResultLine;
