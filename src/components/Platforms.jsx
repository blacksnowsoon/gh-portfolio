/* eslint-disable no-unused-vars */
import React from 'react'
import Section from './Section'


const logos = [
'bootstrap',
'css-3', 
'express',
'firebase',
'html', 
'javascript', 
'jquery',
'mongodb',
'mysql',
'nodejs', 
'postgresql',
'react-native', 
'redux', 
'sass',
'sqlite',
'tailwindcss', 
'typescript',
'vitejs',
'react',
'amazon-s3',
'jwtio'
]
function Platforms() {

  const logosList = ()=>{
    return (
      <ul className='flex gap-4 flex-wrap justify-center '>
      {
        logos.map((logo, index)=> {
        return (
          <li key={index} title={`${logo}`} className="p-2 bg-slate-200 rounded-lg">
            <img src={`/libsLogos/${logo}.svg`} alt={logo} className="w-14 h-14" loading='lazy'/>
          </li>
          )
      })
      }
    </ul>
    )
  }
  return (
    <Section title={'Platforms & Libs'} id={'platforms'}>
      {
        logosList()
      }
    </Section>
  )
}

export default Platforms