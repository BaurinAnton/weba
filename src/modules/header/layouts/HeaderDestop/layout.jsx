import style from './style.module.scss'
import { HEADER_DESKTOP } from './constants'
import logo from 'img/header/logo.svg'

export const HeaderDesktop = () => {
    const HeaderConstants = HEADER_DESKTOP.list.map((list) => (
        <li key={list.id}>
            <a href="/" className={style.navLink}>{list.content}</a>
        </li>
    ))
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.logo}>
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <nav className={style.nav}>
                    <ul>
                        {HeaderConstants}
                    </ul>
                </nav>
            </div>
        </header>
    )
}