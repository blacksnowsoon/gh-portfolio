/* eslint-disable no-unused-vars */
import React from 'react'

function Article({ children, title, style }) {
  const article= React.useRef(null)
  
  const secStyle = (style && typeof(style) !== 'string') ? ['container mx-auto pb-4', ...style].join(' ') : ['container  mx-auto pb-4 p-top', style ? style: ''  ].join(' ')
  React.useEffect(()=>{
    if(article) {
      const header = document.getElementById('nav-bar')
      const clientHeight = header.clientHeight + 10
      article.current.style.setProperty('--nav-offsetY', clientHeight + 'px')
    }
  },[])
  return (
    <article ref={article} className={secStyle}>
      <h2 className='text-white font-extrabold text-4xl md:text-4xl text-center pb-2 '>
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