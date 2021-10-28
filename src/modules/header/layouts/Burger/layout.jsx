import { useState } from 'react';

import style from './style.module.scss'

export const Burger = () => {
    const [state, setState] = useState(undefined);
    return (
        <div className={
            (state === undefined) ? style.burger
                : (state === false) ? style.burgerNoShow
                    : (state === true) ? style.burgerShow
                        : ''} onClick={() => setState(!state)}>
            <div className={style.column}>
                <span></span>
            </div>
            <div className={style.column}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={style.column}>
                <span></span>
            </div>
        </div>
    )
}