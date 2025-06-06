/* eslint-disable no-unused-vars */
import React, { useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS, COMMING_SOON } from '../../Data.cjs'
import Section from '../Section'
import Article from '../Article'
import { FaArrowRight } from "react-icons/fa";
import GLightbox from 'glightbox';

function Projects() {
  const content = useMemo(() => (
    PROJECTS.map((card, index) =>{
      return (
        <li key={card.name.slice(3)+index}>
          <ProjectCard card={card} />
        </li>
          
      )
    })
  ),[])
  useEffect(() => {
    const lightbox = GLightbox({ 
      selector: '.glightbox', // Match your image class
      touchNavigation: true,
      closeOnOutsideClick : true,
      openEffect: 'fade',
      closeEffect: 'fade',
      loop: true,
      zoomable: true,
      descPosition: 'bottom',
      preload: false,
      
      open:(el) => {
        console.log('Lightbox opened', el);
      }
    });
    return () => lightbox.destroy(); // Cleanup
  }, []);
  return (
    <Section id={'projects'}>
      <Article title={'Projects'} style={''}>
        <ul  className={`flex flex-wrap justify-center gap-4 p-4`}>
          {
            content
          }
        </ul>
      </Article>
    </Section>
  )
}

export default Projects


// const PorjectCard = (props) =>{
//   const { card } = props
//   const imgName = card?.image
//   const check = /^0[0-9].*$/.test(card.id)
  
//   return (
//       <div 
//         className={'group/item card rounded-lg bg-gray-700 image-full h-full shadow-xl shadow-black cursor-pointer transition-all'} >
//         <figure>
//         <img 
//             loading='lazy'
//             src={`/${imgName}`} 
//             alt={card.name} 
//             className='w-full h-full ' />
//         </figure>
//         <div className='card-body'>
//           <h5 className='mb-2 text-2xl font-semibold tracking-tight '>{card.name}</h5>
//           <p className='mb-2 text-lg ' >{card.shorts}</p>
//           { !check ? <p className='mb-2 font-normal text-gray-200 dark:text-gray-200 hover:text-orange-400 ' ></p> :  
//             <p className='font-bold rotate-12 text-orange-400 text-2xl translate-x-4' >Coming Soon...</p>}
//             <div className={'card-actions justify-end'}>
//               <Link to={`project/${card.id}`} 
//                 className='opacity-0 group-hover/item:opacity-100 inline-flex items-center place-self-center px-3 py-2 text-sm font-medium text-center rounded-md align-end glass btn transition-opacity '>
//                 Read more
//                 <img loading='lazy' title="read More" src={'/arrowforward.svg'} alt="arrow" className='w-4 h-4 ml-2 group-hover/item:animate-in-out'/>
//               </Link>
//             </div>
//         </div>
//       </div>
//   )
// }



const ProjectCard = ({ card }) => {
  const isComingSoon = /^0[0-9].*$/.test(card.id);
  
  return (
    <div className="card card-compact bg-base-100 w-80 h-full shadow-xl transition-all 
                  hover:bg-base-200 group duration-300 ease-in-out
                  hover:shadow-2xl hover:-translate-y-1 cursor-pointer">
      {/* Project Image */}
      <figure>
        <a
          role="button" className='glightbox' href={`${card.image}`} 
          data-title={card.name} data-description={card.shorts + card.description}
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()}}
        >
        <img 
          loading="lazy"
          src={`${card.image}`} 
          alt={card.name} 
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()}}
          
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        /></a>
        
      </figure>
      
      {/* Card Content */}
      <div className="card-body relative ">
        <h3 className="card-title m-0 p-0 ">
          {card.name}
        </h3>
        
        
      </div>
    </div>
  );
};


