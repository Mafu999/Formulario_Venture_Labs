import React from "react"
import style from "./Homepage.module.css"

const HomePage = () => {
    return (
        <>
        <div className={style.content}>
            <section className={style.info}>
                    <h1>Seja Bem vindo ao nosso sistema de cadastro de clientes</h1>
                    <p>Para fazer seu cadastro clique no botão "+ Cadastrar" ao lado.</p>
            </section>
            <span className={style.img}>
                <img loading={"lazy"} width={800} height={600} src={"https://venturelabs.group/wp-content/uploads/2021/08/VL_Element.gif"}></img>
            </span>
        </div>
        </>
    )
}

export default HomePage