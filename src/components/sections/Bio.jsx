import React from 'react'
import {Link} from 'react-router-dom'
import Section from '../Section'
import Article from '../Article'
const Bio = () => {
  return (
    <Section>
      <Article style={' border rounded glass  mt-4'}>
        <h3 className=' font-semibold text-2xl md:text-xl mt-2 '>
        Systems analysis and web development both play vital roles in the development and improvement of web-based systems, With a comprehensive understanding of system architecture and software development life cycles, I excel in analyzing existing systems to identify areas for improvement. Through research and analysis, I propose effective strategies to mitigate risks and challenges. Collaboration is key in my role, as I work closely with stakeholders to gather requirements and define project scopes. By bridging the gap between technical and non-technical stakeholders, I ensure a successful implementation and adoption of system enhancements. With excellent problem-solving and communication skills, I am dedicated to driving efficiency and innovation within organizations 🚀🌐
        </h3>
      </Article>
      <Performance />
    </Section>
  )
}

export default Bio
const Performance = ()=> {
  const [performance, setPerformance] = React.useState(40)
  const [accessibility, setAccessibility] = React.useState(40)
  const [bestPractices, setBestPractices] = React.useState(40)
  const [seo, setSeo] = React.useState(40)

  React.useEffect(()=> {
    
      let per = performance 
      let acc = accessibility
      let bp = bestPractices
      let se = seo
      setInterval(()=> {
        if (per < 100) {
          per += 1
          setPerformance(per)
        }
        if ( acc < 96) {
          acc += 1
          setAccessibility(acc)
        }
        if (bp < 96) {
          bp+=1
          setBestPractices(bp)
        }
        if (se < 91) {
          se +=1
          setSeo(se)
        }
      }, 100)
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <Article style={' border rounded glass  mt-4 overflow-clip'} >
          <h3 className="animate-pass text-center text-green-400 block text-xl font-bold  text-nowrap -translate-x-full mb-2 ">
            Priorities:👉 Performance🚀  Accuracy🔬  Responsiveness🎭 
          </h3>
          <div className="stats py-4 stats-vertical md:stats-horizontal shadow-xl mx-auto  w-full ">
            <div className="stat w-full place-items-center">
            <p style={{'--increase': `${performance}%`, '--decrease': `${-performance + 130}%`,}}
                  className={` text-transparent bg-clip-text drop-shadow-[0_1px_1px_rgba(255,255,255,0.75)] full-up from-base-100 to-green-400 stat-value text-6xl w-28 h-28  p-4 flex items-center justify-center`}>{performance}</p>
              <p className="stat-title  text-center">Performance</p>
            </div>
            <div className="stat  w-full place-items-center">
            <p style={{'--increase': `${accessibility}%`, '--decrease': `${-accessibility + 135}%`,}}
                  className={` text-transparent bg-clip-text drop-shadow-[0_1px_1px_rgba(255,255,255,0.75)] full-up from-base-100 to-green-400 stat-value text-6xl w-28 h-28  p-4 flex items-center justify-center`}>{accessibility}</p>
              <p className="stat-title  text-center">Accessibility</p>
            </div>
            <div className="stat  w-full place-items-center">
            <p style={{'--increase': `${bestPractices}%`, '--decrease': `${-bestPractices + 135}%`,}}
                  className={` text-transparent bg-clip-text drop-shadow-[0_1px_1px_rgba(255,255,255,0.75)] full-up from-base-100 to-green-400 stat-value text-6xl w-28 h-28  p-4 flex items-center justify-center`}>{bestPractices}</p>
              <p className="stat-title  text-center">Best Practices</p>
            </div>
            <div className="stat  w-full place-items-center ">
                <p style={{'--increase': `${seo}%`, '--decrease': `${-seo + 135}%`,}}
                  className={` text-transparent bg-clip-text drop-shadow-[0_1px_1px_rgba(255,255,255,0.75)] full-up from-base-100 to-green-400 stat-value text-6xl w-28 h-28  p-4 flex items-center justify-center`} >{seo}</p>
                <p className="stat-title  text-center">SEO</p>
            </div>
          </div>
          <div className="divider">
            <Link target='_blank' to={'https://pagespeed.web.dev/analysis/https-gh-portfolio-liard-vercel-app/o7te4fun0g?form_factor=desktop'} 
            className='text-center btn  rounded  mt-3 glass self-center'>Live Test Preview</Link>
          </div>
    </Article>
  )
}