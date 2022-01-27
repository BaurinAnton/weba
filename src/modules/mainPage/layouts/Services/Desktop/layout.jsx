import { useScroll } from 'hook/useScroll'
import { useWindowSize } from 'hook'

import { CircleDiscussProject } from 'modules/mainPage'
import style from './style.module.scss'
import { SERVICES } from './constants'

import eye from 'img/mainPage/Services/eye.svg'
import ellipse from 'img/mainPage/Services/ellipse.svg'
import arrow from 'img/mainPage/Services/arrow.svg'
import bttns from 'img/mainPage/Services/bttns.svg'

export const Desktop = () => {
    const positionScroll = useScroll()
    const windowSize = useWindowSize()
    return (
        <section className={style.services}>
            <div className={style.wrapper}>
                <div className={style.row}>
                    <div className={style.column}>
                        <span>{SERVICES.sectionOrder[0].content}</span>
                    </div>
                    <div className={style.column}></div>
                    <div className={style.column}>
                        <span>/</span>
                        <span>{SERVICES.sectionOrder[1].content}</span>
                        <span>/</span>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.column}>
                        <h2>{SERVICES.h2}</h2>
                    </div>
                    <div className={style.column}>
                        <img src={eye} alt="eye" />
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.column}>
                        <h3>{SERVICES.services[0].title}</h3>
                        <p>{SERVICES.services[0].description}</p>
                    </div>
                    <div className={style.column}>
                        <h3>{SERVICES.services[1].title}</h3>
                        <p>{SERVICES.services[1].description}</p>
                    </div>
                    <div className={style.column}>
                        <h3>{SERVICES.services[2].title}</h3>
                        <p>{SERVICES.services[2].description}</p>
                    </div>
                    <div className={style.column}>
                        <h3>{SERVICES.services[3].title}</h3>
                        <p>{SERVICES.services[3].description}</p>
                    </div>
                    <div className={style.column}>
                        <h3>{SERVICES.services[4].title}</h3>
                        <p>{SERVICES.services[4].description}</p>
                    </div>
                    <div className={style.column}>
                        <h3>{SERVICES.services[5].title}</h3>
                        <p>{SERVICES.services[5].description}</p>
                    </div>
                </div>
                {
                    (windowSize.width > 1280) ?
                        (positionScroll.height <= 2600) ?
                            <div className={style.rowTop}>
                                <div className={style.ellipseText}>
                                    <img src={ellipse} alt="ellipse" className={style.ellipse} />
                                    <p>{SERVICES.otherText}</p>
                                </div>
                            </div>
                            : (positionScroll.height > 2600) && (positionScroll.height < 3880) ?
                                <div className={style.rowFixed}>
                                    <div className={style.ellipseText}>
                                        <img src={ellipse} alt="ellipse" className={style.ellipse} />
                                        <p>{SERVICES.otherText}</p>
                                    </div>
                                </div>
                                : (positionScroll.height >= 3880) ?
                                    <div className={style.rowBottom}>
                                        <div className={style.ellipseText}>
                                            <img src={ellipse} alt="ellipse" className={style.ellipse} />
                                            <p>{SERVICES.otherText}</p>
                                        </div>
                                    </div>
                                    : ''
                        : (windowSize.width <= 1280) ?
                            (positionScroll.height <= 2055) ?
                                <div className={style.rowTop}>
                                    <div className={style.ellipseText}>
                                        <img src={ellipse} alt="ellipse" className={style.ellipse} />
                                        <p>{SERVICES.otherText}</p>
                                    </div>
                                </div>
                                : (positionScroll.height > 2055) && (positionScroll.height < 3075) ?
                                    <div className={style.rowFixed}>
                                        <div className={style.ellipseText}>
                                            <img src={ellipse} alt="ellipse" className={style.ellipse} />
                                            <p>{SERVICES.otherText}</p>
                                        </div>
                                    </div>
                                    : (positionScroll.height >= 3075) ?
                                        <div className={style.rowBottom}>
                                            <div className={style.ellipseText}>
                                                <img src={ellipse} alt="ellipse" className={style.ellipse} />
                                                <p>{SERVICES.otherText}</p>
                                            </div>
                                        </div>
                                        : ''
                            : ''
                }

                <div className={style.row}>
                    <img src={arrow} alt="arrow" className={style.arrow} />
                    <div className={style.column}>
                        <CircleDiscussProject />
                        <img src={bttns} alt="buttons" className={style.bttns} />
                    </div>
                </div>
            </div>
        </section>
    )
}