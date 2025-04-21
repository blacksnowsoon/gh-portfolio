import React, {} from 'react'
import { useParams } from 'react-router-dom'
import Article from '../components/Article'
import { PROJECTS as cards, COMMING_SOON } from '../Data.cjs'

import PageContent from '../components/Section'

function Project() {
  const params = useParams()

  const pageContent = React.useMemo(()=>{
    const id = params.id
    const check = /^0[0-9].*$/.test(id)
    const card = !check ? cards.filter(card => card.id == id)[0] : COMMING_SOON.filter(card => card.id == id)[0]
    
    return (
      <Article 
        id={id} 
        title={card.name} 
        style={''}>
        <div className='flex flex-wrap -mx-4'>
          <div 
            className="relative w-full lg:w-[90%] border  sm:w-96 sm:mx-auto overflow-hidden"
            data-aos="fade-up" 
          >
            {card.screenshots?.map((img, index) => (
              <img
                loading='lazy'
                key={index}
                src={img}
                alt={card.name + index}
                className={` 
                  object-contain transition-all duration-500
                  ${index === 0 ? '' : 'absolute'} 
                  ${index === 1 ? 'top-[100%] left-[15%] scale-[2.5]  shadow-md shadow-black  h-full' : ''} 
                  ${index === 2? 'top-[40%] left-[40%]  shadow-md shadow-black  h-full   ' : ''} 
                  ${index === 3 ? 'top-[150%] left-[75%]  scale-[3] shadow-md shadow-black  h-full '  : ''} 
                  z-${index} 
                `}
                // data-aos={"fade-up"} 
                data-aos-delay={index * 500} 
              />
            ))}
          </div>
        </div>
      </Article>
    )
  },[params])

  return (
    <PageContent >
    {
      pageContent ?
      pageContent
      :
      null
    }
    </PageContent>
  )
}

export default Project