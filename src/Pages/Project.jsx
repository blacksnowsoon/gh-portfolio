import React, {} from 'react'
import { useParams } from 'react-router-dom'
import Article from '../components/Article'
import { PROJECTS as cards } from '../Data'
import Ul from '../general/Ul'
import PageContent from './PageContent'

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
          <div className='flex flex-1 flex-row gap-2'>
            <div className="flex-1 ">
              <img src={`/${card.image}`} alt={card.name} 
                className="w-full h-full aspect-square"/>
            </div>
            <div className='flex-1 justify-between text-white p-2 flex flex-col'>
              <div>
                <p className=" ">
                  {card.shorts}
                </p>
                <p>
                  {card.description}
                </p>
              </div>
              <div className='flex'>
                <Ul data={card.usedLibs} title={'PlatForms And Libs'} />
                <Ul data={card.functions} title={"Functions"} />
              </div>
              <a className='outline outline-1 text-center p-2 hover:bg-slate-50 hover:text-slate-900' href={card.link} rel='noreferrer' target='_blank'>
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