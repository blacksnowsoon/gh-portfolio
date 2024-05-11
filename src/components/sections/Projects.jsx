/* eslint-disable no-unused-vars */
import React, {} from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS as cards } from '../../Data'
import Section from '../Section'
import Article from '../Article'
import { useNavigate } from 'react-router-dom';


function Projects() {
  
  return (
    <Section id={'projects'}>
      <Article title={'Projects'} style={''}>
        <ul className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2'>
          {
            cards.map((card, index) =>{
              return (
                <li key={card.name.slice(3)+index}>
                  <PorjectCard card={card} />
                </li>
              )
            })
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
  
  return (
    <div
      className={'relative max-w-md max-h-96 mx-auto rounded overflow-hidden shadow shadow-orange-500 cursor-pointer'} 
>
      <img 
          src={`/${imgName}`} 
          alt={card.name} 
          className='w-full opacity-15' />
          
      <div className='absolute bottom-0 p-2 rounded-b-lg  h-full flex flex-col justify-between'>
        <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>{card.name}</h5>
        <p className='mb-2 font-normal text-gray-700 dark:text-gray-300 hover:text-gray-100 xs:text-gray-100' >{card.shorts}</p>
        <Link to={`project/${card.id}`} className='inline-flex items-center place-self-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 hover:bg-orange-700 rounded-lg focus:ring-4 focus:outline-none '>
          Read more
          <img src={'/arrowforward.svg'} className='w-4 h-4 ml-2'/>
        </Link>
      </div>
    </div>
  )
}