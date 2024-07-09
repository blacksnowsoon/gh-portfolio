/* eslint-disable no-unused-vars */
import React, {} from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS as cards, COMMING_SOON } from '../../Data.cjs'
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
  // card relative max-w-md max-h-96 mx-auto rounded overflow-hidden shadow glass cursor-pointer h-full
  // absolute bottom-0 p-2 rounded-b-lg  h-full flex flex-col justify-between
  return (
    <div
      className={'card rounded-lg bg-gray-700 image-full h-full shadow-xl shadow-black cursor-pointer'} >
      <figure>
      <img 
          loading='lazy'
          src={`/${imgName}`} 
          alt={card.name} 
          className='w-full h-full ' />
      </figure>
      <div className='card-body'>
        <h5 className='mb-2 text-2xl font-semibold tracking-tight '>{card.name}</h5>
        <p className='mb-2 font-normal ' >{card.shorts}</p>
        { !check ? <p className='mb-2 font-normal text-gray-200 dark:text-gray-200 hover:text-orange-400 ' ></p> :  
          <p className='font-bold rotate-12 text-orange-400 text-2xl translate-x-4' >Coming Soon...</p>}
          <div className={'card-actions justify-end'}>
            <Link to={`project/${card.id}`} 
              className='inline-flex items-center place-self-center px-3 py-2 text-sm font-medium text-center rounded-md align-end glass btn '>
              Read more
              <img loading='lazy' title="read More" src={'/arrowforward.svg'} alt="arrow" className='w-4 h-4 ml-2'/>
            </Link>
          </div>
      </div>
    </div>
  )
}

const CommingSoon = () => {

  return (
    <div className='mt-4 p-4 glass'>
      <div className={"divider"}>
        <h3 className=' font-extrabold text-2xl md:text-2xl '>Coming Soon</h3>
      </div>
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