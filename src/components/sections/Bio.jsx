import React from 'react'
import {Link} from 'react-router-dom'
import Section from '../Section'
import Article from '../Article'
const Bio = () => {
  return (
    <Section>
      <Article style={' border rounded glass  mt-4'}>
        <h3 className=' font-semibold text-2xl md:text-xl mt-2 '>
        “Hi, I’m Codey! I’m a web developer with in-depth experience in UI/UX design. In a nutshell, I create websites that help organizations address business challenges and meet their needs. I manage everything from website navigation and layout to a company’s web hosting and security architecture. My expertise lies within front-end web apps, and the main languages in my tech stack are JavaScript, React, and of course HTML/CSS. I’m a lifelong learner (currently taking a course on building Desktop apps with electron) love to read, run, and find new bubble cofe shops around.” 🚀🌐
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