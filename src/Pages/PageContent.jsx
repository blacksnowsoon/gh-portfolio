import React from 'react'

function PageContent({children}) {
  const [mTop, setMtop] = React.useState(30)
  
  React.useLayoutEffect(()=>{
    const height = document.querySelector('nav').clientHeight
    setMtop(height)
  },[])

  return (
    <section style={{paddingTop: `${mTop}px`}} className=''>
    {
      children
    }
    </section>
  )
}

export default PageContent