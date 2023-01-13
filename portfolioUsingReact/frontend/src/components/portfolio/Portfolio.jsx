import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'crypto dashborad and financial Visualization',
    github:'https://github.com/rafisgithub',
    demo: 'https://dribbble.com/search/crypto-dashborad-and-financial-visualization'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts templates and infographics in figma',
    github:'https://github.com/rafisgithub',
    demo: 'https://dribbble.com/search/crypto-dashborad-and-financial-visualization'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web app',
    github:'https://github.com/rafisgithub',
    demo: 'https://dribbble.com/search/figma-dashboard-ui-kit-for-data-design-web-app',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github:'https://github.com/rafisgithub',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Charts templates & infographics in Figma',
    github:'https://github.com/rafisgithub',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Data center - infographic header',
    github:'https://github.com/rafisgithub',
    demo: 'https://dribbble.com/shots/5362895-Data-center-infographic-header'
  },
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio___container">
        {
          data.map(({id,image, title, github, demo})=>{
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
             <div className="portfolio__item-cta">
             <a href={github} className='btn' target={'_blank'}>GitHub</a>
              <a href={demo} className='btn outline-primary' target='_blank'>Live Demo</a>
             </div>
            </article>
    
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio