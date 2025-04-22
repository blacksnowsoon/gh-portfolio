/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react'
import { InView } from 'react-intersection-observer'
function Article({ children, title, style}) {
  
  const articleRef = React.useRef(null)
  // p-top
  const secStyle = ['h-full min-h-full container mx-auto ', style ? style: ''  ].join(' ')
  
  React.useEffect(()=>{
  
  })
  return (
    <article ref={articleRef} className={secStyle}   >
      <h2  className=' font-extrabold text-4xl md:text-4xl text-center py-4 ' data-aos="fade-down" data-aos-delay="100">
        {
          title
        }
      </h2>
      {children}
    </article>
  )
}

export default Article