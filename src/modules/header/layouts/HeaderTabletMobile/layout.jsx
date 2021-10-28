import { Burger } from '../Burger'
import style from './style.module.scss'
import logo from 'img/header/logo.svg'

export const HeaderTabletMobile = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.logo}>
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <Burger/>
            </div>
        </header>
    )
}