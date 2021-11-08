import React from 'react'
import style from './Header.module.css'
import {Link} from 'react-router-dom'


const Header = () => {
    return (
    <div className={style.parent}>
        <header className={style.cabecalho}>
            <nav className={style.menu}>
            <Link className={style.item}>+ Cadastrar</Link>
            <Link className={style.item}>Clientes</Link>
            </nav>
        </header>
    </div>
    )
}

export default Header