import { Wave } from 'react-animated-text';

import style from './style.module.scss'
import { MAIN_SECTION_CONST } from './constants'

import smile from 'img/mainPage/MainSection/smile.png'
import star from 'img/mainPage/MainSection/star.svg'
import elipseMobile from 'img/mainPage/MainSection/elipseMobile.svg'
import lineLetterTabletOne from 'img/mainPage/MainSection/lineLetterTabletOne.svg'
import lineLetterTabletTo from 'img/mainPage/MainSection/lineLetterTabletTo.svg'
import arrowMobile from 'img/mainPage/MainSection/arrowMobile.svg'

export const SmallMobile = () => {
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
                        <img src={elipseMobile} alt="эллипс" />
                    </div>
                    <div className={style.column}>
                        <span>{MAIN_SECTION_CONST.h1[3].content}</span>
                        <span>{MAIN_SECTION_CONST.h1[4].content}</span>
                    </div>
                </h1>
                <div className={style.row}>
                    <div className={style.circle}>
                        <span>{MAIN_SECTION_CONST.button}</span>
                    </div>
                    <img src={arrowMobile} alt="" />
                </div>
                <div className={style.row}>
                    <Wave text={'современные технологии. долгосрочная поддержка. удобный дизайн'} effect="fadeOut" speed={16} />
                </div>
            </div>
        </div>
    )
}