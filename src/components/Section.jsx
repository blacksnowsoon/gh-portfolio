/* eslint-disable no-unused-vars */
import React from 'react'

function Section({children, title, style, id}) {

  
  const secStyle = (style && typeof(style) !== 'string') ? ['mx-auto mt-10 pt-12 container', ...style].join(' ') : ['mx-auto mt-10 pt-12 container']
  return (
    <section id={id} className={secStyle}>
      <h2 className='text-white font-extrabold text-4xl md:text-4xl text-center p-4'>
        {
          title
        }
      </h2>
      
        {
        children  
        }
    </section>
  )
}

export default Section