import style from './style.module.scss'
import { MAIN_SECTION_CONST } from './constants'
import { Wave } from 'react-animated-text';

import smile from 'img/mainPage/MainSection/smile.png'
import star from 'img/mainPage/MainSection/star.svg'
import elipse from 'img/mainPage/MainSection/elipse.svg'
import lineLetter from 'img/mainPage/MainSection/lineLetter.svg'
import arrow from 'img/mainPage/MainSection/arrow.svg'

export const Desktop = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.column}>
                        <span>{'/ 1 /'}</span>
                        <span className={style.line}></span>
                        <img src={smile} alt="" />
                    </div>
                    <h1 className={style.column}>
                        <p>{MAIN_SECTION_CONST.h1[0].content}</p>
                        <div className={style.items}>
                            <img src={star} alt="" />
                            <p>{MAIN_SECTION_CONST.h1[1].content}</p>
                            <p className={style.smileColor}>{MAIN_SECTION_CONST.h1[2].content}</p>
                        </div>
                        <div className={style.items}>
                            <p>{MAIN_SECTION_CONST.h1[3].content}</p>
                            <p>
                                <span>{MAIN_SECTION_CONST.h1[4].content}</span>
                                <span className={style.point}>{MAIN_SECTION_CONST.h1[5].content}</span>
                            </p>
                        </div>
                    </h1>
                    <img className={style.elipse} src={elipse} alt="" />
                    <img className={style.arrow} src={arrow} alt="" />
                    <div className={style.circle}>
                        <span>{MAIN_SECTION_CONST.button}</span>
                    </div>
                    <Wave text="современные технологии. долгосрочная поддержка. удобный дизайн" effect="fadeOut" speed={16}/>
                </div>
            </div>
        </>
    )
}