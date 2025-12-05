import React from 'react'

function Article({ children, title, style }) {
  const secStyle = ['h-full min-h-full container mx-auto ', style ? style : ''].join(' ')

  return (
    <article className={secStyle}>
      <h2 className='font-extrabold text-4xl md:text-4xl text-center py-4' data-aos="fade-down" data-aos-delay="100">
        {title}
      </h2>
      {children}
    </article>
  )
}

export default Article