/* eslint-disable no-unused-vars */
import React, {} from 'react'
import Article from './Article'
import { Link } from 'react-router-dom'
import { PROJECTS as cards } from '../Data'


function Projects() {
  return (
    <Article title={'Projects'} id={'projects'} style={''}>
      <ul className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1  gap-2'>
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
  )
}

export default Projects


const PorjectCard = (props) =>{
  const { card } = props
const imgName = card?.image
  return (
    <div
      className={'relative max-w-sm max-h-96 mx-auto rounded overflow-hidden shadow shadow-orange-500 '} 
      to={`project/${card.id}`}>
      <img 
          src={`/${imgName}`} 
          alt={card.name} 
          className='w-full opacity-15' />
          
      <div className='absolute bottom-0 p-5 rounded-b-lg  h-full flex flex-col justify-between'>
        <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>{card.name}</h5>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 hover:text-gray-100' >{card.shorts}</p>
        <Link to={`project/${card.id}`} className='inline-flex items-center place-self-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 hover:bg-orange-700 rounded-lg focus:ring-4 focus:outline-none '>
          Read more
          <img src={'/arrowforward.svg'} className='w-4 h-4 ml-2'/>
        </Link>
      </div>
    </div>
  )
}