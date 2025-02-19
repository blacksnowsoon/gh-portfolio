/* eslint-disable no-unused-vars */
import React, { useMemo } from 'react'
import Article from '../Article'
import Section from '../Section'

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
        <ul className='flex gap-4 flex-wrap justify-center  '>
        {
          logos.map((logo, index)=> {
          return (
            <li key={index} title={`${logo}`} className="p-2 bg-slate-300  rounded-lg shadow-xl shadow-black transition-all">
              <img loading='lazy' src={`/libsLogos/${logo}.svg`} alt={logo} className="w-14 h-14" />
            </li>
            )
        })
        }
        </ul>
      )
    },[])
    return (
      <Section id={'platforms'}>
        <Article title={'Platforms & Libs'} >
          {
            logosList
          }
        </Article>
      </Section>
    )
  }

export default Platforms