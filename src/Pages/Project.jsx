import React, {} from 'react'
import { useParams } from 'react-router-dom'
import Article from '../components/Article'
import { PROJECTS as cards } from '../Data'
import Ul from '../general/Ul'
import PageContent from '../components/Section'

function Project() {
  const params = useParams()

  const pageContent = React.useMemo(()=>{
    const id = params.id
    const card = cards.filter(card => card.id == id)[0]
    
    return (
      <Article 
        id={id} 
        title={card.name} 
        style={''}>
          <div className='flex flex-wrap -mx-4 '>
            <div className="w-full lg:w-1/2 px-4 mb-8 sm:w-96 sm:mx-auto">
              <img src={`/${card.image}`} alt={card.name} 
                className=" rounded shadow-lg"/>
            </div>
            <div className='flex flex-col justify-between w-full lg:w-1/2 px-4 mb-8  text-white p-2 '>
              <div>
                <p className="">
                  {card.shorts}
                </p>
                <p>
                  {card.description}
                </p>
              </div>
              <div className='flex sm:mt-2'>
                <Ul data={card.usedLibs} title={'Platforms & Libs'} />
                <Ul data={card.functions} title={"Features"} />
              </div>
              <a className='outline outline-1 text-center p-2  bg-orange-500 hover:bg-orange-700 rounded-lg focus:ring-4 focus:outline-none sm:mt-2' href={card.link} rel='noreferrer' target={card.link.includes('http') ? '_blank' : '_self'}>
                Check it Out
              </a>
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