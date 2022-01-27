import style from './style.module.scss'
import { ABOUT_US_CONST } from './constants'

import questionMark from 'img/mainPage/AboutUs/questionMark.svg'
import arrow from 'img/mainPage/AboutUs/arrow.svg'
import eye from 'img/mainPage/AboutUs/eye.svg'
import ellipse from 'img/mainPage/AboutUs/ellipse.svg'

export const Mobile = () => {
    return (
        <section className={style.container}>
            <div className={style.wrapper}>
                <div className={style.row}>
                    <div className={style.column}>
                        <span>{ABOUT_US_CONST.sectionOrder[0].content}</span>
                    </div>
                    <div className={style.column}></div>
                    <div className={style.column}>
                        <span>/</span>
                        <span>{ABOUT_US_CONST.sectionOrder[1].content}</span>
                        <span>/</span>
                    </div>
                </div>
                <div className={style.row}>
                    <span>{ABOUT_US_CONST.h2[0].content}</span>
                    <img src={questionMark} alt="" />
                </div>
                <div className={style.row}>
                    <img src={ellipse} alt="Эллипс" className={style.ellipse} />
                    <img src={arrow} alt="стрелка" className={style.arrow} />
                    <span>{ABOUT_US_CONST.text[0].content}</span>
                    <img src={eye} alt="глаз" className={style.eye} />
                    <span>{ABOUT_US_CONST.text[1].content}</span>
                    <span className={style.borderContent}>{ABOUT_US_CONST.text[2].content}</span>
                    <span>{ABOUT_US_CONST.text[3].content}</span>
                    <span className={style.backgroundRadius}>{ABOUT_US_CONST.text[4].content}</span>
                    <span>{ABOUT_US_CONST.text[5].content}</span>
                </div>
            </div>
        </section>
    )
}