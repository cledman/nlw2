import React from 'react'
import TeacherForm from '../../pages/TeacherForm'
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/33430075?s=460&u=3cee3c87ad46b3e23c9f118a21afb29acd82af5d&v=4" alt="Me"/>
            <div>
                <strong>Cledson Lopes</strong>
                <span>Informática</span>
            </div>
        </header>

        <p>
          is simply dummy text of the printing and typesetting industry.
          <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          <br /> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged 
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$80,00</strong>
            </p>
            <button type="button">
                <img src={whatsAppIcon} alt="WhatsApp"/>
                Entrar em contato
            </button>
        </footer>
    </article>  
    )
}

export default TeacherItem