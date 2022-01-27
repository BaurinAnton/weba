import style from './style.module.scss'
import { CIRCLE_CONST } from './constants'

export const Desktop = () => {
    return (
        <div className={style.circle}>
            <span>{CIRCLE_CONST.button}</span>
        </div>
    )
}