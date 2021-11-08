import React from 'react';
import { Formik, Field, Form } from 'formik';
import style from './PrimeiroForm.module.css'
let val = '';

const PrimeiroForm = () => {
    return (
<>
    <div className={style.all}>
        <h1>Cadastre-se</h1>
        <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        }}
        onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            val = JSON.stringify(values, null, 2);
        }}
        >
        <Form>
            <label htmlFor="firstName">Nome</label>
            <Field className={style.item} id="firstName" name="firstName" placeholder="Jane" />

            <label htmlFor="lastName">Sobrenome</label>
            <Field className={style.item} id="lastName" name="lastName" placeholder="Doe" />

            <label htmlFor="email">Email</label>
            <Field
            className={style.item}
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            />

            <label htmlFor="phone">Número de Telefone</label>
            <Field 
            className={style.item} 
            id="phone" 
            name="phone" 
            placeholder="(11)0000-0000" 
            type="text" 
            />
            <h5 className={style.obs}>Formatos suportados:<br/>
            9114-2626<br/>
            6799123-1234<br/>
            (02111)3421.4212<br/>
            (19) 3241-3322<br/>
            89 2123-1231<br/>
            0xx11.2123-2123<br/>
            (0XX11) 9 3232-3232<br/>
            XX21991231234<br/>
            0XX1131231234<br/>
            </h5>

            <button type="submit">Próximo</button>
        </Form>
        </Formik>
  </div>
</>
    )
}

export default PrimeiroForm
console.log(val)
