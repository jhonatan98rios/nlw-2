import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/46539744?s=460&u=bb7d0a46d7901b01b0e2eb8ac567b353e5dbb1c1&v=4" alt="Jhonatan Teixeira Rios"/>
                <div>
                    <strong> Jhonatan Teixeira Rios </strong>
                    <span> Programação </span>
                </div>
            </header>

            <p>
            Mussum Ipsum, cacilds vidis litro abertis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Atirei o pau no gatis, per gatis num morreus. Mé faiz elementum girarzis, nisi eros vermeio. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
            </p>

            <footer>
                <p> 
                    Preço/hora
                    <strong> R$80,00 </strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>

        </article>
    )
}

export default TeacherItem