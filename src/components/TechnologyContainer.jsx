import React from 'react'
import { DiHtml5, DiCss3, DiJavascript, DiNodejsSmall,DiMongodb,DiPhotoshop, DiReact} from "react-icons/di";
import '../styles/components/TechnologyContainer.css'

const technology = 
[
    { name: 'HTML5', icon: <DiHtml5 />, text: 'Possuo conhecimento avançado da linguage.'},
    { name: 'CSS3', icon: <DiCss3 />, text: 'Possuo conhecimento avançado da linguage.'  },
    { name: 'Javascript', icon: <DiJavascript />, text: 'Possuo conhecimento avançado da linguage.' },
    { name: 'NodeJs', icon: <DiNodejsSmall />, text: 'Possuo conhecimento intermediário da linguage.' },
    { name: 'MongoDB', icon: <DiMongodb />, text: 'Possuo conhecimento intermediário da linguage.' },
    { name: 'React', icon: <DiReact />, text: 'Possuo conhecimento intermediário da linguage.' },
];

const TechnologyContainer = () => {
  return (
    <section className='technology-container'>
      <h2>Tecnologias</h2>
      <div className='technology-grid'>
        {technology.map((tech) => (
          <div className='technology-card' id={tech.name} key={tech.name}>
            {tech.icon}
            <div className='technology-info'>
              <h3>{tech.name}</h3>
              <p>{tech.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


export default TechnologyContainer