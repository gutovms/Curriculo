import React from 'react'
import '../styles/components/InformationContainer.css'
import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

const InformationContainer = () => {
  return (
   <section id='information'>
        <div className="info-card">
            <AiFillPhone id='phone-icon' className='icon'/>
            <div>
                <h3>Telefone</h3>
                <p>+55 (48) 99836-66126</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id='email-icon' className='icon'/>
            <div>
                <h3>E-mail</h3>
                <p>gustavo.venturamiranda493@gmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id='pin-icon' className='icon' />
            <div>
                <h3>Localização</h3>
                <p>São José / SC</p>
            </div>
        </div>
   </section>
  )
}

export default InformationContainer