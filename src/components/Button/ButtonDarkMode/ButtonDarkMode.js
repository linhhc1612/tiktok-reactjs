import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './ButtonDarkMode.module.scss';

const cx = classNames.bind(styles);

function ButtonDarkMode() {
    const [checkSwitchBtn, setCheckSwitchBtn] = useState(false);

    const checked = () => {
        if (checkSwitchBtn === true) {
            return 'checked';
        } else {
            return '';
        }
    };
    return (
        <div
            className={cx('wrapper-switch')}
            onClick={() => {
                console.log(checkSwitchBtn);
                return setCheckSwitchBtn(!checkSwitchBtn);
            }}
        >
            <div className={cx('div-switch', checked())}>
                <span className={cx('span-switch', checked())}></span>
            </div>
        </div>
    );
}

export default ButtonDarkMode;
