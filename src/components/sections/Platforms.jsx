import { useMemo } from 'react'
import Section from '../Section'
import InnerSec from '../InnerSec'

const logos = [
'html', 
'css-3', 
'javascript', 
'typescript',
'jquery',
'bootstrap',
'tailwindcss', 
'sass',
'nodejs', 
'express',
'jwtio',
'firebase',
'mongodb',
'mysql',
'postgresql',
'sqlite',
'amazon-s3',
'react',
'vitejs',
'react-native', 
'redux',
'frappe', 
]
  function Platforms() {
    const logosList = useMemo(()=>{
      return (
        <ul className='p-4 flex flex-wrap justify-center gap-4 items-center '>
        {
          logos.map((logo, index)=> {
          return (
            <li key={index} title={`${logo}`} className="p-2  rounded-lg shadow-xl shadow-black transition-all" data-aos="fade-down-right" data-aos-delay={index * 100} data-aos-duration="1000" data-aos-easing="ease-in-out">
              <img loading='lazy' src={`/libsLogos/${logo}.svg`} alt={logo} className="w-14 h-14 " />
            </li>
            )
        })
        }
        </ul>
      )
    },[])
    return (
      <Section id={'platforms'} className={' custom-bg '}>
        <InnerSec>
          {
            logosList
          }
        </InnerSec>
      </Section>
    )
  }

export default Platforms