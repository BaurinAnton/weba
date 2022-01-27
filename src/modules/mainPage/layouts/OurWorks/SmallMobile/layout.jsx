import style from './style.module.scss'

import { OUR_WORKS } from './constants'

import arrow from 'img/mainPage/OurWorks/arrowSmallMobile.svg'
import elipse from 'img/mainPage/OurWorks/elipseMobile.svg'
import workOne from 'img/mainPage/OurWorks/workOne.jpg'
import workTo from 'img/mainPage/OurWorks/workTo.jpg'
import workThree from 'img/mainPage/OurWorks/workThree.jpg'
import workFour from 'img/mainPage/OurWorks/workFour.jpg'
import workFive from 'img/mainPage/OurWorks/workFive.jpg'

export const SmallMobile = () => {
    return (
        <section className={style.container}>
            <div className={style.wrapper}>
                <div className={style.row}>
                    <div className={style.column}>
                        <span>{OUR_WORKS.sectionOrder[0].content}</span>
                    </div>
                    <div className={style.column}></div>
                    <div className={style.column}>
                        <span>/</span>
                        <span>{OUR_WORKS.sectionOrder[1].content}</span>
                        <span>/</span>
                    </div>
                </div>
                <div className={style.row}>
                    <span>
                        {OUR_WORKS.h2[0].content}
                    </span>
                </div>
            </div>
            <div className={style.wrapper}>
                <div className={style.row}>
                    <div className={style.column}>
                        <div className={style.items}>
                            <a href="https://avtogruz62.ru">
                                <img src={workOne} alt="" />
                            </a>
                            <span>
                                {OUR_WORKS.work[0].order}
                            </span>
                            <span>
                                {OUR_WORKS.work[0].name}
                            </span>
                            <span>
                                {OUR_WORKS.work[0].year}
                            </span>
                        </div>
                    </div>
                    <div className={style.column}>
                        <div className={style.items}>
                            <a href="http://good-par.ru">
                                <img src={workTo} alt="" />
                            </a>
                            <span>
                                {OUR_WORKS.work[1].order}
                            </span>
                            <span>
                                {OUR_WORKS.work[1].name}
                            </span>
                            <span>
                                {OUR_WORKS.work[1].year}
                            </span>
                        </div>
                    </div>
                    <div className={style.column}>
                        <div className={style.items}>
                            <a href="https://autohelp50.ru">
                                <img src={workThree} alt="" />
                            </a>
                            <span>
                                {OUR_WORKS.work[2].order}
                            </span>
                            <span>
                                {OUR_WORKS.work[2].name}
                            </span>
                            <span>
                                {OUR_WORKS.work[2].year}
                            </span>
                        </div>
                    </div>
                    <div className={style.column}>
                        <div className={style.items}>
                            <a href="https://шерифф.рф">
                                <img src={workFour} alt="" />
                            </a>
                            <span>
                                {OUR_WORKS.work[3].order}
                            </span>
                            <span>
                                {OUR_WORKS.work[3].name}
                            </span>
                            <span>
                                {OUR_WORKS.work[3].year}
                            </span>
                        </div>
                    </div>
                    <div className={style.column}>
                        <div className={style.items}>
                            <a href="https://baurinanton.github.io/typro/">
                                <img src={workFive} alt="" />
                            </a>
                            <span>
                                {OUR_WORKS.work[4].order}
                            </span>
                            <span>
                                {OUR_WORKS.work[4].name}
                            </span>
                            <span>
                                {OUR_WORKS.work[4].year}
                            </span></div>
                    </div>
                </div>
                <div className={style.row}>
                    <img src={elipse} className={style.elipse} alt="элипсы" />
                    <img src={arrow} className={style.arrow} alt="стрелка" />
                    <div className={style.circle}>
                        <span>{OUR_WORKS.circleText}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}