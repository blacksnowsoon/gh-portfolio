/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react'
import { InView } from 'react-intersection-observer'
function Article({ children, title, style}) {
  
  const articleRef = React.useRef(null)
  
  const secStyle = (style && typeof(style) !== 'string') ? ['container mx-auto pb-4', ...style].join(' ') : ['container  mx-auto pb-4 p-top h-full', style ? style: ''  ].join(' ')
  
  React.useEffect(()=>{
    if(articleRef) {
      const header = document.getElementById('nav-bar')
      const clientHeight = header.clientHeight + 10
      articleRef.current.style.setProperty('--nav-offsetY', clientHeight + 'px')
    }
  })
  return (
    <article ref={articleRef} className={secStyle}>
      <h2 className=' font-extrabold text-4xl md:text-4xl text-center pb-2 '>
        {
          title
        }
      </h2>
      {children}
    </article>
  )
}

export default Article