import React from 'react';
import Avatar from '../img/perfil.jpg';
import '../styles/components/SideBar.css';
import InformationContainer from './InformationContainer';
import SocialNetWorks from './SocialNetWorks';

const Sidebar = () => {
  return <aside id='sidebar'>
    <img src={Avatar} alt="" />
    <p className='title'>Web developer</p>
    <SocialNetWorks />
    <InformationContainer />
    <a href="" className='btn'>Dowload curriculo</a>
  </aside>
}

export default Sidebar  