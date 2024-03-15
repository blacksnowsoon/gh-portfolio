/* eslint-disable no-unused-vars */
import React, {} from 'react'
import Article from './Article'
import { Link } from 'react-router-dom'
import { PROJECTS as cards } from '../Data'


function Projects() {
  return (
    <Article title={'Projects'} id={'projects'} style={''}>
      <ul className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-2'>
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
      className={'col-span-1 flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'} 
      to={`project/${card.id}`}>
      <img 
          src={`/${imgName}`} 
          alt={card.name} 
          className='w-full aspect-square object-cover object-left-top rounded-t-lg' />
          
      <div className='p-5 rounded-b-lg  h-full flex flex-col justify-between'>
        <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>{card.name}</h5>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400' >{card.shorts}</p>
        <Link to={`project/${card.id}`} className='inline-flex items-center place-self-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Read more
          <img src={'/arrowforward.svg'} className='w-4 h-4 ml-2'/>
        </Link>
      </div>
    </div>
  )
}