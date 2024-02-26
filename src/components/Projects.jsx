/* eslint-disable no-unused-vars */
import React, {} from 'react'
import Article from './Article'
import { Link } from 'react-router-dom'
import { data as cards } from '../Data'


function Projects() {
  return (
    <Article title={'Projects'} id={'projects'} style={''}>
      <ul className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
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
    <Link
      className={`
      shadow-2xl
      shadow-white
      drop-shadow
      outline outline-1
      outline-slate-300  
      cursor-pointer 
      hover:scale-105 transition-all
      `} 
      to={`project/${card.id}`}
      card={card}
      >
      <div className='text-slate-100 relative h-60 overflow-clip'>
        <img 
          src={`/${imgName}`} 
          alt={card.name} 
          className=' 
          rounded-md absolute inset-0 w-full h-full 
          -z-10 opacity-40 hover:opacity-70' />
        <h2 className=' text-xl text-center text-yellow-600 font-semibold'>{card.name}</h2>
        <p className='text-justify hover:bg-slate-900 p-2 h-full' >{card.shorts}</p>
      </div>
    </Link>
  )
}