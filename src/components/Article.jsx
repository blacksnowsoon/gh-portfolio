/* eslint-disable no-unused-vars */
import React from 'react'

function Article({children, title, style, id}) {

  
  const secStyle = (style && typeof(style) !== 'string') ? ['container mx-auto pb-4 ', ...style].join(' ') : ['container  mx-auto pb-4 ', style ? style: ''  ].join(' ')
  return (
    <article style={{paddingTop: 'inherit'}} id={id} className={secStyle}>
      <h2 className='text-white  font-extrabold text-4xl md:text-4xl text-center pb-4'>
        {
          title
        }
      </h2>
        {
        children  
        }
    </article>
  )
}

export default Article