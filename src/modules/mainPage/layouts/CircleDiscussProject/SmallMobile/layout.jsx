import style from './style.module.scss'
import { CIRCLE_CONST } from './constants'

export const SmallMobile = () => {
    return (
        <div className={style.circle}>
            <span>{CIRCLE_CONST.button}</span>
        </div>
    )
}