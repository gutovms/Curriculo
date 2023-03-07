import React from 'react'
import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa";
import '../styles/components/SocialNetWorks.css'

const socialNetworks = 
[
    { name: 'linkedin', icon: <FaLinkedinIn />,  link: 'https://www.linkedin.com/in/gustavoventuradasilva/'},
    { name: 'github', icon: <FaGithub />, link: 'https://github.com/gutovms'},
    { name: 'instagram', icon: <FaInstagram /> ,link: 'https://www.instagram.com/gutovms/?hl=pt-br' },
];

const SocialNetWorks = () => {
  return (
    <section id='social-networks'>
        {socialNetworks.map((network) => 
        (<a href={network.link} className='social-btn' id={network.name} key={network.name}> {network.icon} </a>))}
    </section>)
}

export default SocialNetWorks