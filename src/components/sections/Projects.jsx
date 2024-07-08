/* eslint-disable no-unused-vars */
import React, {} from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS as cards, COMMING_SOON } from '../../Data'
import Section from '../Section'
import Article from '../Article'
import { useNavigate } from 'react-router-dom';


function Projects() {
  
  return (
    <Section id={'projects'}>
      <Article title={'Projects'} style={''}>
        <ul className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 mt-2'>
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
      <CommingSoon />
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
      className={'relative max-w-md max-h-96 mx-auto rounded overflow-hidden shadow shadow-orange-500 cursor-pointer h-full'} >
      <img 
          src={`/${imgName}`} 
          alt={card.name} 
          className='w-full h-full opacity-15' />
          
      <div className='absolute bottom-0 p-2 rounded-b-lg  h-full flex flex-col justify-between'>
        <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>{card.name}</h5>
        <p className='mb-2 font-normal text-gray-200 dark:text-gray-200 hover:text-orange-400 ' >{card.shorts}</p>
        { !check ? <p className='mb-2 font-normal text-gray-200 dark:text-gray-200 hover:text-orange-400 ' ></p> :  
          <p className='font-bold text-orange-500 -rotate-45 text-3xl -translate-x-5' >Comming Soon...</p>}
        <Link to={`project/${card.id}`} className='inline-flex items-center place-self-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 hover:bg-orange-700 rounded-lg focus:ring-4 focus:outline-none '>
          Read more
          <img title="read More" src={'/arrowforward.svg'} alt="arrow" className='w-4 h-4 ml-2'/>
        </Link>
      </div>
    </div>
  )
}

const CommingSoon = () => {

  return (
    <div>
      <h3 className='text-white font-extrabold text-2xl md:text-2xl mt-4 '>Coming Soon</h3>
      <ul className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 mt-3'>
        {
          COMMING_SOON.map((card, index) =>{
            return (
              <li key={card.name.slice(3)+index}>
                <PorjectCard card={card} check={false} />
              </li>
            )
          })
        }
      </ul>
    </div>
)
}