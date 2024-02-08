/* eslint-disable no-unused-vars */
import React, {} from 'react'
import Section from './Section'
import { Link } from 'react-router-dom'


const cards = [
  {
    name: 'casher bill',
    image: 'bill.jpg',
    shorts: 'Design and create a small app for a business ciycle of the casher procedures for an orgnaization ',
    link: 'https://casher-bill.vercel.app/'
  },
  {
    name: 'static website',
    image: 'isfp.png',
    shorts: 'Using Vitejs with Reactjs to redesign the ISFP website with no prebuilt components just react and react-router-dom package.',
    link: 'https://isfp-redesign.vercel.app/'
  },
  {
    name: 'A workshop full website',
    image: 'work-shop.png',
    shorts: 'An API for resizing Images based on params width & height',
  },
  {
    name: 'Reasize Image API',
    image: 'resize.png',
    shorts: 'An API for resizing Images based on params width & height',
  },
  {
    name: 'Landing Page',
    image: 'landingPage.png',
    shorts: 'build a dynamic navigation bar based on how many section in the page',
    link: 'https://landing-page-udacity-fwd.vercel.app/'
  }
]
function Projects() {
  return (
    <Section title={'Projects'} id={'projects'} style={''}>
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
    </Section>
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
      to={card.link}
      target='_blank'
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