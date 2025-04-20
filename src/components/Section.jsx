import {useEffect} from 'react'
import AOS from 'aos'

function Section({children, id, className}) {


  useEffect(()=>{
    AOS.init({
      duration: 1000,
      once: true,
    });
    return () => {
      AOS.refresh(); // Cleanup on component unmount
    };
  },[])

  return (
    <section id={id} className={className || '' + ' min-h-[100vh] scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24' } data-aos="fade-up" >
    {
      children
    }
    </section>
  )
}

export default Section