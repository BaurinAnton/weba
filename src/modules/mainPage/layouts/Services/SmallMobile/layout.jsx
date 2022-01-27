import { CircleDiscussProject } from 'modules/mainPage'
import { SERVICES } from './constants'
import style from './style.module.scss'

import eye from 'img/mainPage/Services/eye.svg'
import ellipse from 'img/mainPage/Services/ellipse.svg'
import arrow from 'img/mainPage/Services/arrowSmallMobile.svg'
import bttns from 'img/mainPage/Services/bttnsSmallMobile.svg'

export const SmallMobile = () => {
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
                </div>
                <div className={style.row}>
                    <div className={style.column}>
                        <div className={style.ellipseText}>
                            <img src={ellipse} alt="ellipse" className={style.ellipse} />
                            <p>{SERVICES.otherText}</p>
                        </div>
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
                <div className={style.row}>
                    <img src={arrow} alt="arrow" className={style.arrow} />
                    <div className={style.column}>
                        <CircleDiscussProject />
                        <div className={style.wrapper}>
                            <img src={bttns} alt="buttons" className={style.bttns} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}