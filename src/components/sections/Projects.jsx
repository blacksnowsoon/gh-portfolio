/* eslint-disable no-unused-vars */
import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS, COMMING_SOON } from '../../Data.cjs'
import Section from '../Section'
import Article from '../Article'


function Projects() {
  const content = useMemo(() => (
    PROJECTS.map((card, index) =>{
      return (
        <li key={card.name.slice(3)+index}>
          <PorjectCard card={card} />
        </li>
          
      )
    })
  ),[])
  
  return (
    <Section id={'projects'}>
      <Article title={'Projects'} style={''}>
        <ul  className={`grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 mt-2`}>
          {
            content
          }
        </ul>
      </Article>
    </Section>
  )
}

export default Projects


const PorjectCard = (props) =>{
  const { card } = props
  const imgName = card?.image
  const check = /^0[0-9].*$/.test(card.id)
  
  return (
      <div 
        className={'group/item card rounded-lg bg-gray-700 image-full h-full shadow-xl shadow-black cursor-pointer transition-all'} >
        <figure>
        <img 
            loading='lazy'
            src={`/${imgName}`} 
            alt={card.name} 
            className='w-full h-full ' />
        </figure>
        <div className='card-body'>
          <h5 className='mb-2 text-2xl font-semibold tracking-tight '>{card.name}</h5>
          <p className='mb-2 text-lg ' >{card.shorts}</p>
          { !check ? <p className='mb-2 font-normal text-gray-200 dark:text-gray-200 hover:text-orange-400 ' ></p> :  
            <p className='font-bold rotate-12 text-orange-400 text-2xl translate-x-4' >Coming Soon...</p>}
            <div className={'card-actions justify-end'}>
              <Link to={`project/${card.id}`} 
                className='opacity-0 group-hover/item:opacity-100 inline-flex items-center place-self-center px-3 py-2 text-sm font-medium text-center rounded-md align-end glass btn transition-opacity '>
                Read more
                <img loading='lazy' title="read More" src={'/arrowforward.svg'} alt="arrow" className='w-4 h-4 ml-2 group-hover/item:animate-in-out'/>
              </Link>
            </div>
        </div>
      </div>
  )
}
