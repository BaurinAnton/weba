import style from './style.module.scss'
import { MAIN_SECTION_CONST } from './constants'

import smile from 'img/mainPage/MainSection/smile.png'
import star from 'img/mainPage/MainSection/star.svg'
import elipseTablet from 'img/mainPage/MainSection/elipseTablet.svg'
import lineLetterTabletOne from 'img/mainPage/MainSection/lineLetterTabletOne.svg'
import lineLetterTabletTo from 'img/mainPage/MainSection/lineLetterTabletTo.svg'
import arrowTablet from 'img/mainPage/MainSection/arrowTablet.svg'

export const Mobile = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.row}>
                    <span>{'/ 1 /'}</span>
                    <span className={style.line}></span>
                    <img src={smile} alt="smile" />
                </div>
                <h1 className={style.row}>
                    <div className={style.column}>
                        <span>{MAIN_SECTION_CONST.h1[0].content}</span>
                        <span>{MAIN_SECTION_CONST.h1[1].content}</span>
                    </div>
                    <div className={style.column}>
                        <span>{MAIN_SECTION_CONST.h1[2].content}</span>
                        <img src={star} alt="звезда" />
                    </div>
                    <div className={style.column}>
                        <span>{MAIN_SECTION_CONST.h1[3].content}</span>
                        <span>{MAIN_SECTION_CONST.h1[4].content}</span>
                    </div>
                </h1>
                <div className={style.row}>
                    <div className={style.column}>
                        <img src={elipseTablet} alt="эллипс" />
                        <img src={lineLetterTabletOne} alt="современные технологии" />
                        <img src={arrowTablet} alt="стрелка" />
                    </div>
                    <div className={style.column}>
                        <span className={style.design}>{MAIN_SECTION_CONST.text}</span>
                        <div className={style.circle}>
                            <span>{MAIN_SECTION_CONST.button}</span>
                        </div>
                    </div>
                    <div className={style.column}>
                        <img src={lineLetterTabletTo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}